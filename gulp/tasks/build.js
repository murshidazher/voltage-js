var gulp = require('gulp'),
  del = require('del'),
  usemin = require('gulp-usemin'),
  rev = require('gulp-rev'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  babel = require('gulp-babel'),
  browserSync = require('browser-sync').create(),
  sourcemaps = require('gulp-sourcemaps'),
  scripts = require('./scripts').default,
  styles = require('./styles').default,
  rename = require('gulp-rename');

function previewDist() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "example"
    }
  });
}

function browserSyncReload() {
  browserSync.reload();
}

function deleteFolders() {
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

// export voltage.js and voltage.min.js
function distScript(cb) {
  gulp.src('./src/temp/scripts/voltage.min.js')
    .pipe(gulp.dest('dist/js/'))
    .on('error', function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end'); // gracefully saying that the task has come to an end.
    });

  cb();
}

// export unminified script
function js(cb) {
    gulp.src("./src/assets/scripts/*js")
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat("voltage.js"))
        .pipe(gulp.dest("dist/js/"));
    cb();
}

// export voltage.css and voltage.min.css
function distStyles(cb) {
  gulp.src('./src/temp/styles/voltage.css')
    .pipe(usemin({
      css: [function () {
        return rev()
      }, function () {
        return cssnano()
      }]
    }))
    .pipe(rename('./voltage.min.css'))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('maps/'))
    .pipe(gulp.dest('dist/css/'));

  cb();
}

function distStylesMaps(cb) {
  gulp.src('./src/temp/styles/voltage.css')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('maps/'))
    .pipe(gulp.dest('dist/css/'));

  cb();
}

function cleanUp() {
  return del(['./src/temp']);
}

const exportExamples = gulp.parallel(exportExampleFiles);
const exportDist = gulp.parallel(distScript, js, distStyles, distStylesMaps);
const exportTemp = gulp.parallel(styles, scripts);
const startBuild = gulp.series(exportTemp, exportExamples, exportDist, cleanUp);
const build = gulp.series(deleteFolders, startBuild);

// export tasks
exports.default = build;
