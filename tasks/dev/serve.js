'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    defaultTasks = [
      'lint',
      'js',
      'stylus',
      'jade',
      'imagecopy',
      'fonts'
    ],
    jadeWatchTasks = [
      'jade-watch',
      'lint',
      'js',
      'stylus',
      'imagecopy',
      'fonts'
    ];

gulp.task('serve', defaultTasks, function() {
  browserSync({server: './app'});

  gulp.watch('./src/styl/**/*.styl', ['stylus']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/jade/**/*.jade', jadeWatchTasks);
  gulp.watch('./src/img/**/*.{jpg,png,gif}', ['imagecopy']);
});
