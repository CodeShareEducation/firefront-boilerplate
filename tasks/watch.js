'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('watch', function() {
  gulp.watch('./src/styl/**/*.styl', ['stylus']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/jade/**/*.jade', ['jade', browserSync.reload]);
  gulp.watch('./app/**/*.html', [browserSync.reload]);
  gulp.watch('./src/img/**/*.{jpg,png,gif}', ['imagemin']);
});
