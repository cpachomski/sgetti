var gulp = require('gulp');
<<<<<<< HEAD
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var bourbon = require('node-bourbon');
var minifycss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');




gulp.task('watch', function(){
  gulp.watch('css/scss/**/*.scss', ['styles'])
});


gulp.task('styles', function(){
  gulp.src('css/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
        outputStyle: 'expanded',
        includePaths: require('node-bourbon').includePaths
    }))
    .pipe(concat('style.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
    .pipe(livereload({start:true}));
});


//ugilfy output script to come later
=======
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var reactify = require('reactify');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');




var paths = {
	scripts: ['js/src/**/*.js', 'js/src/**/*.jsx'],
	styles: ['css/scss/**/*.scss'],
	stylesDEST: './css',
	scriptsDEST: './js/dist'
}

gulp.task('watch', function(){
	gulp.watch(['js/src/**/*.js', 'js/src/**/*.jsx', 'css/scss/**/*.scss'], ['styles', 'scripts'])
});


gulp.task('scripts', function(){
	gulp.src(paths.scripts)
		.pipe(plumber())
		.pipe(browserify({
			transform: [reactify]
		}))
		.pipe(gulp.dest(paths.scriptsDEST))
});

gulp.task('styles', function(){
	gulp.src(paths.styles)
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'expanded',
			includePaths: require('node-bourbon').includePaths
		}))
		.pipe(concat('styles.css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest(paths.stylesDEST))
		.pipe(livereload({start: true}));
});
>>>>>>> 8e120e950615ecfcbcdc38df5bc364498a372e03
