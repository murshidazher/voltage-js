var gulp = require('gulp'), // imports gulp file
  watch = require('gulp-watch'), // imports gulp-watch package
  browserSync = require('browser-sync').create(),
  scripts = require('./scripts').scripts,
  styles = require('./styles').styles;


function watchFiles() {
  browserSync.init({
      notify: false,
      server: {
        baseDir: "src"
      }
  });

  // we need to pass two arguments in watch function
  // watch(path_of_the_file_to_watch, what function to do when a change is detected)
  watch('./src/index.html', function() {
    browserSync.reload();
  });

	watch('./src/assets/styles/**/*.css', function() {
    gulp.series(cssInject); // start a task
  });

  watch('./src/assets/scripts/**/*.js', function() {
    gulp.series(scriptsRefresh);
  });
}

function css() {
  return gulp.src('./src/temp/styles/voltage.css')
    .pipe(browserSync.stream());
    //stream() method will pipe whatever the content that was piped into
    // available on the browser.
}

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

const scriptsRefresh = gulp.parallel(scripts, browserSyncReload)
const cssInject = gulp.series(styles, css)

// export tasks
exports.watchFiles = watchFiles;
exports.css = css;
exports.scriptsRefresh = scriptsRefresh;
exports.cssInject = cssInject;
exports.default = watchFiles;
