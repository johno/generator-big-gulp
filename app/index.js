'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var BigGulpGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  installGulpAndGulpPlugins: function() {
    var done = this.async();
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
    ], { 'saveDev': true }, done);
  }

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
    }];

    this.prompt(prompts, function (props) {
      this.runNpmInstall = props.runNpmInstall;

      if (this.runNpmInstall) {
        this.installGulpAndGulpPlugins();
      }

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('dist');
      this.dest.mkdir('scss');
      this.dest.mkdir('js');
      this.dest.mkdir('dist/css');
      this.dest.mkdir('dist/js');

      this.src.copy('_package.json', 'package.json');
      this.src.copy('_bower.json', 'bower.json');
    },

    projectfiles: function () {
      this.src.copy('gulpfile.js', 'gulpfile.js');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = BigGulpGenerator;
