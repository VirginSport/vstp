#!/bin/bash

cd docroot;
drush make ../virgin.make.yml -y;
# Remove the .gitignore that comes bundled with the lightning distribution.
rm profiles/lightning/.gitignore;
cd ..;
