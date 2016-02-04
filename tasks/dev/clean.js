'use strict';

var gulp  = require('gulp'),
    clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src('./app/', { read : false })
  .pipe(clean({ force : true }));
});
