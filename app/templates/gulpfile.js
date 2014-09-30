var gulp    = require('gulp');
var sass    = require('gulp-sass');
var rename  = require('gulp-rename');
var cssmin  = require('gulp-minify-css');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var jshint  = require('gulp-jshint');
var csslint = require('gulp-csslint');
var prefix  = require('gulp-autoprefixer');
var size    = require('gulp-size');

gulp.task('scss', function() {
  return gulp.src('scss/all.scss')
    .pipe(sass())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(prefix())
    .pipe(rename('c.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(cssmin())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('csslint', function() {
  gulp.src('css/c.css')
    .pipe(csslint({
      'compatible-vendor-prefixes': false,
      'box-sizing': false,
      'important': false,
      'known-properties': false
    }))
    .pipe(csslint.reporter());
});

gulp.task('js', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(concat('j.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('jshint', function() {
  gulp.src('dist/js/j.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['scss', 'csslint']);
  gulp.watch('js/*.js', ['jshint', 'js']);
});

gulp.task('default', ['scss', 'csslint', 'js', 'jshint', 'watch']);
