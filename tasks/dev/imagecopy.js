'use strict';

var gulp = require('gulp');

gulp.task('imagecopy', ['clean'], function() {
  gulp.src('./src/img/**/*.{jpg,png,gif}')
  .pipe(gulp.dest('./app/assets/img'));
});
