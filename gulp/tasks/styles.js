var gulp = require('gulp'), // imports gulp file
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');


function styles(cb) {
  gulp.src('./src/assets/styles/voltage.css')
      .pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer]))
			.on('error', function(errorInfo) {
				console.log(errorInfo.toString());
				this.emit('end'); // gracefully saying that the task has come to an end.
			})
    .pipe(gulp.dest('./src/temp/styles'));

  cb();
}

// export tasks
exports.styles = styles;
exports.default = styles;
