'use strict';

var gulp  = require('gulp'),
    clean = require('gulp-clean');

gulp.task('cleandist', function() {
  return gulp.src('./dist/', { read : false })
  .pipe(clean({ force : true }));
});
