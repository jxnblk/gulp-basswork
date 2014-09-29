# Gulp Basswork

Gulp wrapper for Basswork

http://basscss.com

## Usage

```js
var gulp = require('gulp');
var basswork = require('gulp-basswork');

gulp.task('css', function() {
  gulp.src('./src/base.css')
    .pipe(basswork())
    .pipe(gulp.dest('./css'));
});
```
