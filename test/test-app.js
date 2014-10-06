/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('big-gulp:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        runNpmInstall: true,
        createFolders: true
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      'gulpfile.js',
      'scss/.gitkeep',
      'js/.gitkeep',
      'dist/css/.gitkeep',
      'dist/js/.gitkeep'
    ]);
  });
});

describe('big-gulp:app --no-files', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        runNpmInstall: true,
        createFolders: false
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      'gulpfile.js'
    ]);
  });
});
