'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

gulp.task('jade-watch', ['jade'], reload);
