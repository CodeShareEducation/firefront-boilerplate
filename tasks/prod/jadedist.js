'use strict';

var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    jade    = require('gulp-jade');

gulp.task('jadedist', ['cleandist'], function() {
  gulp
    .src('./src/jade/*.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('./dist/'));
});
