Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$latexRoot = Resolve-Path (Join-Path $scriptDir "..")
$repoRoot = Resolve-Path (Join-Path $latexRoot "..\..")

$figures = @(
  @{ Name = "framework-architecture"; Group = "architecture" },
  @{ Name = "page-object-model-concept"; Group = "architecture" },
  @{ Name = "fixture-dependency-injection-flow"; Group = "architecture" },
  @{ Name = "api-service-abstraction-pipeline"; Group = "architecture" },
  @{ Name = "test-data-dto-cleanup-strategy"; Group = "architecture" },
  @{ Name = "automation-framework-concept-map"; Group = "architecture" },
  @{ Name = "page-object-model-application-workflow"; Group = "workflows" },
  @{ Name = "ui-test-execution-flow"; Group = "workflows" },
  @{ Name = "api-test-execution-flow"; Group = "workflows" },
  @{ Name = "copilot-agentic-automation-workflow"; Group = "workflows" },
  @{ Name = "playwright-reporting-pipeline"; Group = "workflows" },
  @{ Name = "copilot-script-generation-workflow"; Group = "workflows" },
  @{ Name = "copilot-code-review-workflow"; Group = "workflows" }
)

foreach ($figure in $figures) {
  $source = Join-Path $repoRoot "docs\thesis-workspace\assets\diagrams\src\$($figure.Name).mmd"
  $targetDir = Join-Path $latexRoot "figures\$($figure.Group)"
  $target = Join-Path $targetDir "$($figure.Name).pdf"

  if (!(Test-Path -LiteralPath $source)) {
    throw "Missing Mermaid source: $source"
  }

  New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
  Write-Host "Rendering $($figure.Name) -> $target"
  & npx -y @mermaid-js/mermaid-cli -i $source -o $target --pdfFit

  if ($LASTEXITCODE -ne 0) {
    throw "Mermaid PDF render failed for $($figure.Name)"
  }
}

Write-Host "T-097 Mermaid PDF vector conversion complete. Screenshots remain PNG."
