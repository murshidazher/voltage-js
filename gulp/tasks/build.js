var gulp = require('gulp'),
  del = require('del'),
  usemin = require('gulp-usemin'),
  rev = require('gulp-rev'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  browserSync = require('browser-sync').create(),
  scripts = require('./scripts').scripts,
  styles = require('./styles').styles;

function previewDist(done) {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "example"
    }
  });
  done();
}

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

function deleteDistFolder() {
  return del(['./example', './dist']);
}

function exportExampleFiles() {
  return gulp.src('./src/index.html')
    .pipe(usemin({
      css: [function () {
        return rev()
      }, function () {
        return cssnano()
      }],
      js: [function () {
        return rev()
      }, function () {
        return uglify()
      }],
    }))
    .pipe(gulp.dest('./example'));
}

function exportDistFiles() {
  return gulp.src('./src/index.html')
    .pipe(usemin({
      css: [function () {
        return rev()
      }, function () {
        return cssnano()
      }]
    }))
    .pipe(gulp.dest('./dist'));
}

const deleteFolders = gulp.parallel(exportDistFiles, exportExampleFiles);
const useminTask = gulp.series(styles, scripts, deleteFolders);
const startUsemin = gulp.series(useminTask);
const build = gulp.parallel(deleteFolders, startUsemin);


// export tasks
exports.deleteDistFolder = deleteDistFolder;
exports.exportExampleFiles = exportExampleFiles;
exports.startUsemin = startUsemin;
exports.usemin = useminTask;
exports.build = build;
exports.default = build;
