'use strict';

var gulp  = require('gulp'),
    tasks = [
      'lint',
      'jsdist',
      'stylusdist',
      'jadedist',
      'imagemin',
    ];

gulp.task('build', tasks);
