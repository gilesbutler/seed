var browserify = require('browserify');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var notify = require("gulp-notify");
var source = require('vinyl-source-stream');

module.exports = function() {
	return browserify({
			entries: ['./src/components/app/js/app.js']
		})
		.bundle({debug: true})
		.on('error', notify.onError({
			message: "<%= error.message %>",
			title: "JavaScript Error"
		}))
		.pipe(source('app.js'))
		.pipe(gulp.dest('./build/'))
		.pipe(livereload());
};