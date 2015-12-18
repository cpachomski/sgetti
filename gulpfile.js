var gulp = require('gulp');
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
