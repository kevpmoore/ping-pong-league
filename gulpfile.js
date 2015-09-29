var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths;

gulp.task('styles', function() {
  return gulp.src('./app/assets/sass/*.scss')
    .pipe(sass({
      includePaths: ['styles'].concat(neat)
    }))
    .pipe(gulp.dest('./app/assets/css'));
});

gulp.task('watch', function() {
  gulp.watch('./app/assets/sass/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch'],  function() {
});
