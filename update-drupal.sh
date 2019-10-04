#!/bin/bash

cd docroot;
sudo chmod a+x sites/default;
drush make ../virgin.make.yml -y;
# Remove the .gitignore that comes bundled with the lightning distribution.
rm profiles/lightning/.gitignore;
cd ..;
