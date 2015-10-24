var gulp 			= require('gulp'),
	sass 			= require('gulp-ruby-sass'),
	concat 			= require('gulp-concat'),
	minifycss 		= require('gulp-minify-css'),
	autoprefixer 	= require('gulp-autoprefixer'),
	uglify 			= require('gulp-uglify');

gulp.task('default', ['styles', 'scripts', 'watch']);

gulp.task('watch', function(){
	gulp.watch('dev/sass/**/*.scss', ['styles']),
	gulp.watch('dev/js/**/*.js', ['scripts'])
});


gulp.task('styles', function () {
    return sass('dev/sass/*.scss')
        .pipe(concat('style.min.css.liquid'))
        .pipe(minifycss())
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('kyguys-50785220/assets'));
});

gulp.task('scripts', function(){
	return gulp.src('dev/js/**/*.js')
		.pipe(concat('script.min.js.liquid'))
		.pipe(uglify())
		.pipe(gulp.dest('kyguys-50785220/assets'));
});
