'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var BigGulpGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the outstanding BigGulp generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'runNpmInstall',
      message: 'Would you like to include the default gulp plugins from npm?',
      default: true
    }, {
      type: 'confirm',
      name: 'createFolders',
      message: 'Would you like big-gulp to generate a directory structure?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.runNpmInstall = props.runNpmInstall;
      this.createFolders = props.createFolders;

      if (this.runNpmInstall) {
        var installDone = this.async();
        this.npmInstall([
          'gulp',
          'gulp-autoprefixer',
          'gulp-concat',
          'gulp-csslint',
          'gulp-jshint',
          'gulp-minify-css',
          'gulp-rename',
          'gulp-sass',
          'gulp-uglify',
          'gulp-size'
        ], { 'saveDev': true }, installDone);
      }

      if (this.createFolders) {
        this.mkdir('scss');
        this.mkdir('js');
        this.mkdir('dist');
        this.mkdir('dist/css');
        this.mkdir('dist/js');
      }

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.copy('_package.json', 'package.json');
      this.copy('_bower.json', 'bower.json');
    },

    projectfiles: function () {
      this.copy('gulpfile.js', 'gulpfile.js');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = BigGulpGenerator;
