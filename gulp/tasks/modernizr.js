var gulp = require('gulp'),
  mdzr = require('gulp-modernizr');

function modernizr() {
  return gulp.src(['./src/assets/styles/**/*.css',
      './src/assets/scripts/**/*.js'
    ])
    .pipe(mdzr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./src/temp/scripts/'));
}

// export tasks
exports.modernizr = modernizr;
exports.default = modernizr;
