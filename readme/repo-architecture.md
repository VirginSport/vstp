# Repository architecture

“How is the code organized, and why?”

The repository architecture is driven by a set of core principles:

* The code that is deployed to production should be fully validated, tested, 
  sanitized, and free of non-production tools
* Common project tasks should be fully automated and repeatable, independent of 
  environment

Consequently, there are a few aspects of this project’s architecture and 
workflow that may be unfamiliar to you.

## Directory structure

The following is an overview of the purpose of each top level directory in the
project template:

    root
      ├── box         - Contains vagrant/drupal-vm (if used)
      ├── build       - Contains build config files for CI solutions. e.g., Phing configuration.
      ├── docroot     - The Drupal docroot.
      ├── hooks       - Contains Acquia Cloud hooks.
      ├── patches     - Contains private patches to be used by make.yml.
      ├── profiles    - Contains custom profiles; symlinked to docroot/profiles.
      ├── readme      - Contains high level project documentation.
      ├── reports     - Contains output of automated tests; is .gitignored.
      ├── scripts     - Contains a variety of utility scripts and those part of the build process.
      ├── sites       - Subdirectories within sites are symlinked to /docroot/sites.
      ├── tests       - Contains all test files and configuration.
      ├── vendor      - Contains built composer dependencies.
      build-{projectitle}.make.yml  - Used by Drush make.
      drupal-org-core.make.yml      - Drupal core makefile
      drupal-org.make.yml           - Contrib module makefile

## Dependency Management

All dependencies are managed via [Drush Make](http://www.drush.org/en/master/make/).

