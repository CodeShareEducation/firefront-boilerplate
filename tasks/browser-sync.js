'use strict';

var gulp    		= require('gulp'),
		browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './app'
		}
	});
});
