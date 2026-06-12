Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

# latexmk is a Perl script; MiKTeX does not bundle Perl. Ensure a Perl
# interpreter is on PATH for this session only (no global PATH change).
# Search order: existing PATH -> Strawberry Perl -> Git for Windows Perl.
function Ensure-PerlOnPath {
  if (Get-Command perl -ErrorAction SilentlyContinue) { return }

  $candidates = @(
    "C:\Strawberry\perl\bin",
    "$env:ProgramFiles\Git\usr\bin",
    "${env:ProgramFiles(x86)}\Git\usr\bin",
    "D:\Git\Git\usr\bin"
  )
  foreach ($dir in $candidates) {
    if ($dir -and (Test-Path (Join-Path $dir "perl.exe"))) {
      $env:PATH = "$dir;$env:PATH"
      Write-Host "build.ps1: using Perl from $dir"
      return
    }
  }
  Write-Warning "No Perl interpreter found. Install Strawberry Perl (https://strawberryperl.com) or ensure Git for Windows Perl is available, then re-run."
}

Ensure-PerlOnPath

Push-Location (Join-Path $PSScriptRoot "..")
try {
  latexmk -xelatex -file-line-error -interaction=nonstopmode -halt-on-error main.tex
}
catch {
  Write-Warning "latexmk failed. If MiKTeX still reports a missing Perl engine, install Strawberry Perl or use the fallback: xelatex -file-line-error -interaction=nonstopmode -halt-on-error main.tex"
  throw
}
finally {
  Pop-Location
}
