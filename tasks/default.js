'use strict';

var gulp = require('gulp');
var tasks = [
  'js',
  'stylus',
  'jade',
  'imagemin',
  'browser-sync',
  'lint',
  'watch',
];

gulp.task('default', tasks);
