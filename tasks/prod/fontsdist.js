'use strict';

var gulp = require('gulp');

gulp.task('fontsdist', ['cleandist'], function() {
  gulp.src('./src/fonts/**/*.ttf')
  .pipe(gulp.dest('./dist/assets/fonts'));
});