'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    tasks = [
      'lint',
      'js',
      'stylus',
      'jade',
      'imagecopy'
    ];

gulp.task('serve', tasks, function() {
  browserSync({server: './app'});

  gulp.watch('./src/styl/**/*.styl', ['stylus']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/jade/**/*.jade', ['jade-watch']);
  gulp.watch('./src/img/**/*.{jpg,png,gif}', ['imagecopy']);
});
