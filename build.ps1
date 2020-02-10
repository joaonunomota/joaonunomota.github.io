#! /usr/bin/pwsh

# abort on errors
Set-Variable -e

# build
npm run build

# navigate into the build output directory
Set-Location dist

Write-Output 'www.example.com' > CNAME

git init
git add -A
git commit -m 'Deploy'

git push -f git@github.com:joaonunomota/joaonunomota.github.io.git master

Set-Location -