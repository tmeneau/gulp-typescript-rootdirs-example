var gulp = require('gulp'),
    del = require('del'),
    gulpTypescript = require('gulp-typescript'),
    typescript = require('typescript');

gulp.task('clean', function() {
  return del(['build']);
});

var tsProject = gulpTypescript.createProject('./tsconfig.json', {
  typescript: typescript
});

gulp.task('tsc', ['clean'], function() {
  var result = tsProject.src()
                        .pipe(gulpTypescript(tsProject));

  return result.js.pipe(gulp.dest('build'));
});