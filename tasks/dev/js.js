'use strict';

var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    uglify  = require('gulp-uglify');

gulp.task('js', ['clean'], function() {
  return gulp
    .src('./src/js/**/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('./app/assets/js/'));
});
