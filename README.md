# Big Gulp

[![Build Status](https://travis-ci.org/johnotander/generator-big-gulp.svg?branch=master)](https://travis-ci.org/johnotander/generator-big-gulp)

An awesome [Yeoman](http://yeoman.io) generator for a simple gulpfile for Sass, CSS, and js. It can be incorporated
with existing apps, or be used on a fresh project to get up and running with [gulp](http://gulpjs.com).

This generator will create a gulpfile.js in your current directory and optionally add npm dependencies for Gulp
plugins. There's also an option to generate the following project structure:

```
dist/
  -- js/
  -- css/
js/
scss/
```

## Installation

```bash
npm install -g generator-big-gulp
```

##### If you don't have `npm` and `yo` installed

  1. Install [npm](https://npmjs.org).
  * Install yo with `$ npm install -g yo`

##### Initiate the generator:

```bash
yo big-gulp
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
