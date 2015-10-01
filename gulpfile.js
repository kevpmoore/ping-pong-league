var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat    = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    rename    = require('gulp-rename'),
    neat = require('node-neat').includePaths;

gulp.task('styles', function() {
  return gulp.src('./app/assets/sass/*.scss')
    .pipe(sass({
      includePaths: ['styles'].concat(neat)
    }))
    .pipe(gulp.dest('./app/assets/css'))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./app/assets/css'))
    .pipe(minifyCSS())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('./app/assets/css'));
});

gulp.task('watch', function() {
  gulp.watch('./app/assets/sass/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch'],  function() {
});
