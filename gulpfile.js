var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    eslint = require('gulp-eslint'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano');

var plumberErrorHandler = {
  errorHandler: notify.onError({
    title: 'Gulp',
    message: 'Error: <%= error.message %>'
  })
};

// gulp.task('sass', function() {
//     gulp.src('./sass/style.scss')
//         .pipe(plumber(plumberErrorHandler))
//         .pipe(sass())
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions']
//     }))
//     .pipe(gulp.dest('./build/css'))
//     .pipe(cssnano())
//     .pipe(rename('style.min.css'))
//     .pipe(gulp.dest('./build/css'));
// });


// gulp.task('lint', function () {
//     return gulp.src(['js/*.js'])
//         .pipe(plumber(plumberErrorHandler))
//         .pipe(eslint())
//         .pipe(eslint.format())
//         .pipe(eslint.failAfterError());
// });
    
// gulp.task('scripts', ['lint'], function(){
//     gulp.src('js/*.js')
//         .pipe(uglify()) 
//         .pipe(rename({ extname: '.min.js' })) 
//         .pipe(gulp.dest('./build/js'));
// });


// gulp.task('watch', function() {
//     gulp.watch('js/*.js', ['scripts']);
//     gulp.watch('css/*.css', ['css']);
// });

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(['css/*.css', 'js/*.js', 'index.html']).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);