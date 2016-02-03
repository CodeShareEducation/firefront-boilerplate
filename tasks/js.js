'use strict';

var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify');

gulp.task('js', function() {
  return gulp
    .src('./src/js/**/*.js')
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./app/assets/js/'));
});
