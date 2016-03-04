'use strict';

var gulp = require('gulp');

gulp.task('fonts', ['clean'], function() {
  gulp.src('./src/fonts/**/*.ttf')
  .pipe(gulp.dest('./app/assets/fonts'));
});