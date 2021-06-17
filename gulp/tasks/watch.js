var gulp = require('gulp'), // imports gulp file
  watch = require('gulp-watch'), // imports gulp-watch package
  browserSync = require('browser-sync').create(),
  scripts = require('./scripts').default,
  styles = require('./styles').default;


function inspectFileChanges() {
  browserSync.init({
      notify: false,
      server: {
        baseDir: "src"
      }
  });

  gulp.watch('./src/index.html', browserSync.reload());

	gulp.watch('./src/assets/styles/**/*.css', cssInject); // start a task

  gulp.watch('./src/assets/scripts/**/*.js', scriptsRefresh);
}

function css() {
  return gulp.src('./src/temp/styles/voltage.css')
    .pipe(browserSync.stream());
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

const scriptsRefresh = gulp.series(scripts, browserSyncReload);
const cssInject = gulp.series(styles, css);
const initialFileRefresh = gulp.parallel(scriptsRefresh, styles);
const startWatch = gulp.series(initialFileRefresh, inspectFileChanges)

// export tasks
exports.default = startWatch;
