var gulp = require('gulp'),
  webpack = require('webpack'),
  modernizr = require('./modernizr').default;

//callback is used so that gulp knows when the task successfully competed
function compileScript(callback) {
  webpack(require('../../webpack.config.js'), function (err, stats) {

    if (err)
      console.log(err.toString());

    console.log(stats.toString());
    callback();
  }); // require the config file webpack.config.js
}

const scripts = gulp.series(modernizr, compileScript)

// export tasks
exports.default = scripts;
