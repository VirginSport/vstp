#!/usr/bin/env bash

BRANCH_NAME=fri/build-$(date +'%Y-%m-%d_%H%M')

git checkout develop
git pull
git checkout -b $BRANCH_NAME
cd ../../docroot/sites/all/themes/custom/virginsport
npm i
npm run build
git add -A
git commit -m "FRI Build"
git push --set-upstream origin $BRANCH_NAME


