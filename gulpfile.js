var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
 
gulp.task('template-cache', function () {
  return gulp.src('templates/**/*.html')
    .pipe(templateCache())
    .pipe(gulp.dest('public'));
});