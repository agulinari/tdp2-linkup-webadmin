# tdp2-linkup-webadmin

## Installation
####1. Clone this project or Download that ZIP file

```sh
$ git clone https://github.com/agulinari/tdp2-linkup-webadmin.git
```

####2.  Make sure you have [bower](http://bower.io/), [mongodb](https://www.mongodb.com/), [grunt-cli](https://www.npmjs.com/package/grunt-cli) and  [npm](https://www.npmjs.org/) installed globally
 
On source folder run this commands:

```sh
$ sudo apt-get install npm
$ sudo npm install -g grunt-cli
$ sudo npm install -g bower
$ sudo bower install
$ sudo chown -R [username] ~/.cache/bower/
$ sudo npm install express mongoose body-parser lodash --save
$ sudo npm install grunt-contrib-watch grunt-express-server grunt-open --save-dev
```
####3. On the command prompt run the following commands

```sh
$ cd `project-directory`
```
- bower install is ran from the postinstall
```sh
$ npm install 
```
- a shortcut for `grunt serve`
```sh
$ npm start
```
- a shortcut for `grunt serve:dist` to minify the files for deployment
```sh
$ npm run dist 
```


**Note:**
If you get this following error, 
```text
Error: EACCES, permission denied '.config/configstore/insight-bower.yml'
You don't have access to this file.
```
changing ownner .config

```sh
sudo chown -R [user name] ~/.config
```


## Roadmap

- Add sample AJAX calls and make the directives more modular

### Automation tools

- [Grunt](http://gruntjs.com/)
