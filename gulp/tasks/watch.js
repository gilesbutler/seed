var gulp       = require('gulp');
var livereload = require('gulp-livereload');

module.exports = function(){
	gulp.watch('src/components/**/js/**/*', ['browserify']);
	gulp.watch('src/components/**/sass/**', ['compass']);
	gulp.watch('src/components/**/images/**', ['images']);
	livereload();
};
