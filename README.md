# Virgin Sport

## Theming
This project have a custom theme called virginsport.
```
   cd /docroot/sites/all/themes/custom/virginsport
   npm install
```
### Sync with Frontend Reference
To synchronize frontend repo run: 
```
   npm sync
```
### Build
To build css, javascript and asset files run:
```
   npm build
```
### Development Mode
For dev environment run: 
```
   npm watch
```
This command will watch for every changes you made to css, javascript and asset files.

## Update Drupal Core and Contrib Modules
This Drupal installation follows Acquia Lightning distribution, Drupal core and and some contributed modules are handled by the Lightning distribution. All other contrib modules and themes are handled via the virgin.make.yml file.

### Adding and Removing Contrib Modules
Every time a contrib module or theme is added to Drupal, the *virgin.make.yml* file needs to be updated in order to reflect that change.

### Running updates
In order to update Drupal core and contrib modules, besides changing *virgin.make.yml* contrib modules and themes versions, the following command needs to be run:

```
./update-drupal.sh
```

Afterwards, all new files and updated files need to be committed.
