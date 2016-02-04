'use strict';

var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    jade    = require('gulp-jade');

gulp.task('jade', ['clean'], function() {
  gulp
    .src('./src/jade/*.jade')
    .pipe(plumber())
    .pipe(jade({ pretty : true }))
    .pipe(gulp.dest('./app/'));
});
