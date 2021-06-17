var gulp = require('gulp'),
  webpack = require('webpack'),
  modernizr = require('./modernizr').modernizr;

//callback is used so that gulp knows when the task successfully competed
function task(callback) {
  webpack(require('../../webpack.config.js'), function (err, stats) {

    if (err)
      console.log(err.toString());

    console.log(stats.toString());
    callback();
  }); // require the config file webpack.config.js
}

const scripts = gulp.series(modernizr, task)

// export tasks
exports.scripts = scripts;
exports.default = scripts;
