'use strict';

var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    plumber = require('gulp-plumber'),
    jshint  = require('gulp-jshint'),
    stylish = require('jshint-stylish');

gulp.task('lint', function() {
  gulp
    .src(['./src/js/*.js', './tasks/*.js'])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(function() {
      gutil.beep();
    }))
    .pipe(jshint.reporter(stylish));
});
