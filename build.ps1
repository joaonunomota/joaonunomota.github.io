Set-StrictMode -Version latest
$ErrorActionPreference = "Stop"

# npm install
npm run build

Set-Location dist

Write-Output 'joaonunomota.com' > CNAME

git init
git add -A
git commit -m 'Deploy'

git push -f git@github.com:joaonunomota/joaonunomota.github.io.git master

Set-Location ..