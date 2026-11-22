# ═══════════════════════════════════════════════════════
# setup-screenshots.ps1
# Copies all screenshots from Desktop folder to portfolio
# Run once after downloading the project
# ═══════════════════════════════════════════════════════

$source = "C:\Users\acer\Desktop\Nexora-Portfolio-Screenshots"
$dest   = "C:\Users\acer\nexora-portfolio\assets\screenshots"

Write-Host "Copying screenshots from:" -ForegroundColor Cyan
Write-Host "  $source" -ForegroundColor Gray
Write-Host "To:" -ForegroundColor Cyan
Write-Host "  $dest" -ForegroundColor Gray
Write-Host ""

if (-not (Test-Path $source)) {
    Write-Host "ERROR: Source folder not found: $source" -ForegroundColor Red
    exit 1
}

New-Item -ItemType Directory -Force -Path $dest | Out-Null

$files = Get-ChildItem -Path $source -File
$count = 0

foreach ($file in $files) {
    $destFile = Join-Path $dest $file.Name
    Copy-Item -Path $file.FullName -Destination $destFile -Force
    Write-Host "  Copied: $($file.Name)" -ForegroundColor Green
    $count++
}

Write-Host ""
Write-Host "Done! Copied $count files." -ForegroundColor Green
Write-Host ""
Write-Host "Now rename screenshot #30 if needed:" -ForegroundColor Yellow
Write-Host "  30-azure-rbac-kql-audit.png" -ForegroundColor Yellow
