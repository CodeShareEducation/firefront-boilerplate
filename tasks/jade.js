'use strict';

var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    jade    = require('gulp-jade');

gulp.task('jade', function() {
  gulp
    .src('./src/jade/*.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('./app/'));
});
