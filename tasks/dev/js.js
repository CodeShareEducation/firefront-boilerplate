'use strict';

var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    concat  = require('gulp-concat');

gulp.task('js', ['clean'], function() {
  return gulp
    .src('./src/js/**/*.js')
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./app/assets/js/'));
});
