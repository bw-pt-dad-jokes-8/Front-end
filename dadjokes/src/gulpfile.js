const gulp = require('gulp');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const nib = require('nib');
const rupture = require('rupture');
const csswring = require('csswring');

gulp.task('app', () => {

	const processors = [
		csswring
	];

	return gulp.src('./stylus/App.styl')
		.pipe(stylus({
			use: [nib(), rupture()]
		}))
		// .pipe(postcss(processors))
		.pipe(gulp.dest('./css'));
});

gulp.task('default', () => {
	gulp.watch('**/*.styl',  gulp.series('app'));
});