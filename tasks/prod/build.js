'use strict';

var gulp  = require('gulp'),
    tasks = [
      'lint',
      'jsdist',
      'stylusdist',
      'jadedist',
      'imagemin',
      'fontsdist'
    ];

gulp.task('build', tasks);
