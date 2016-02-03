'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    tasks = [
      'js',
      'stylus',
      'jade',
      'imagemin',
      'lint',
    ];

gulp.task('serve', tasks, function() {
  browserSync({server: './app'});

  gulp.watch('./src/styl/**/*.styl', ['stylus']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/img/**/*.{jpg,png,gif}', ['imagemin']);
  gulp.watch('./src/jade/**/*.jade', ['jade-watch']);
});
