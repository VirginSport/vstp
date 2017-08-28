#!/usr/bin/env bash

git checkout -b fri/build-$(date +'%Y-%m-%d_%H%M')
cd ../../docroot/sites/all/themes/custom/virginsport
npm i
npm run build
git add -A
git commit -m "FRI Build"
git push origin


