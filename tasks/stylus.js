'use strict';

var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    stylus      = require('gulp-stylus'),
    jeet        = require('jeet'),
	  rupture     = require('rupture'),
	  koutoSwiss  = require('kouto-swiss'),
	  prefixer    = require('autoprefixer-stylus');

gulp.task('stylus', function() {
  gulp
    .src('./src/styl/main.styl')
    .pipe(plumber())
    .pipe(stylus({
      use : [koutoSwiss(), prefixer(), jeet(), rupture()],
      compress : true
    }))
    .pipe(gulp.dest('./app/assets/css/'))
    .pipe(browserSync.reload({stream:true}));
});
