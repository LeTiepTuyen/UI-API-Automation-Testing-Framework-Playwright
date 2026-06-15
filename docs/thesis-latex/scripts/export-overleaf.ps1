Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

<#
.SYNOPSIS
  T-099 Overleaf export. Copies ONLY the LaTeX source tree of docs/thesis-latex/
  into a dedicated Overleaf Git clone, excluding build artifacts, PowerShell
  scripts, and internal notes. Never sync the full automation framework repo.

.PARAMETER Target
  Path to the local Overleaf project clone (the folder you got from
  `git clone https://git.overleaf.com/<project-id>`).

.EXAMPLE
  ./scripts/export-overleaf.ps1 -Target "D:\DevTools\Projects\overleaf-thesis"
#>
param(
  [Parameter(Mandatory = $true)]
  [string]$Target
)

$Source = Split-Path -Parent $PSScriptRoot   # docs/thesis-latex
if (-not (Test-Path $Target)) {
  throw "Target Overleaf clone folder does not exist: $Target. Clone the Overleaf repo there first."
}

Write-Host "Exporting LaTeX source from:`n  $Source`nto Overleaf clone:`n  $Target`n"

# Folders and files that make up the compilable thesis (copy these).
$includeDirs  = @("config", "frontmatter", "chapters", "appendices", "bibliography", "figures")
$includeFiles = @("main.tex")

# 1) Copy source directories.
foreach ($d in $includeDirs) {
  $src = Join-Path $Source $d
  if (Test-Path $src) {
    $dst = Join-Path $Target $d
    if (Test-Path $dst) { Remove-Item $dst -Recurse -Force }
    Copy-Item $src $dst -Recurse -Force
    Write-Host "  copied dir  $d"
  }
}

# 2) Copy top-level source files.
foreach ($f in $includeFiles) {
  $src = Join-Path $Source $f
  if (Test-Path $src) {
    Copy-Item $src (Join-Path $Target $f) -Force
    Write-Host "  copied file $f"
  }
}

# 3) Strip any stray build artifacts that may have been copied inside figures, etc.
$artifactPatterns = @("*.aux","*.log","*.bbl","*.bcf","*.blg","*.fls","*.fdb_latexmk","*.out","*.toc","*.lof","*.lot","*.run.xml","*.synctex.gz")
foreach ($p in $artifactPatterns) {
  Get-ChildItem $Target -Recurse -Filter $p -File -ErrorAction SilentlyContinue | Remove-Item -Force
}

# 4) Write an Overleaf-friendly latexmkrc (XeLaTeX + Biber, NO out_dir so Overleaf
#    finds the PDF). Overleaf's menu compiler should also be set to XeLaTeX.
$latexmkrc = @"
# Overleaf compile settings for this thesis (XeLaTeX + Biber, APA via biblatex).
`$pdf_mode = 5;        # 5 = xelatex
`$bibtex_use = 2;      # run biber for biblatex
`$xelatex = 'xelatex -file-line-error -interaction=nonstopmode -halt-on-error %O %S';
`$biber   = 'biber %O %B';
"@
Set-Content -Path (Join-Path $Target "latexmkrc") -Value $latexmkrc -Encoding utf8
Write-Host "  wrote       latexmkrc (Overleaf XeLaTeX + Biber, no out_dir)"

# 5) Write a .gitignore inside the Overleaf clone so artifacts never get pushed.
$gitignore = @"
*.aux
*.bbl
*.bcf
*.blg
*.fdb_latexmk
*.fls
*.lof
*.log
*.lot
*.out
*.run.xml
*.toc
*.synctex.gz
"@
Set-Content -Path (Join-Path $Target ".gitignore") -Value $gitignore -Encoding utf8
Write-Host "  wrote       .gitignore"

Write-Host "`nExport complete. Next steps (run inside the Overleaf clone):"
Write-Host "  cd `"$Target`""
Write-Host "  git add -A"
Write-Host "  git commit -m `"Sync thesis LaTeX project from docs/thesis-latex`""
Write-Host "  git push"
Write-Host "`nThen open the project on Overleaf, set Menu > Compiler = XeLaTeX, Main document = main.tex, and Recompile."
