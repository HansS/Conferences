Bower is dependency manager for client side scripts and frameworks. It's used to get rid of dependencies sitting in your projects, insteat a json file is describing all your dependencies. 

use `bower init` to create an initial configuration file.

use `bower search jquery` to search the bower directory for all packages named with jquery

use `bower install jquery#*` to install jQuery as a dependency

use `bower install bootstrap --save` to install bootstrap and automatically add it as a dependency

use `bower install grunt-junit --save-dev` to install grunt-junit and automatically add it as a development dependency

sharing the bower configuration file means that other devs just have to execute `bower install` and their environment is up and running