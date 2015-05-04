'use strict';

var path = require('path');
var through = require('through2');
var PluginError = require('plugin-error');

/**
 * Extend the `file.data` object with `dest` properties
 * that can be used in templates or by other downstream plugins.
 */

module.exports = function destPlugin(options) {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }
    if (file.isStream()) {
      this.emit('error', new PluginError('template-dest', 'Streaming is not supported.'));
      return cb();
    }

    try {
      file.data = file.data || {};
      var dest = file.data.dest || {};

      if (typeof options === 'function') {
        dest.dirname = options(file);
      } else if (typeof options === 'string') {
        dest.dirname = path.resolve(options);
      } else {
        dest.dirname = path.dirname(file.path);
      }

      dest.cwd = file.cwd;
      dest.base = file.base;
      dest.relative = file.relative;
      dest.extname = path.extname(file.relative);
      dest.basename = path.basename(file.relative);
      dest.filename = path.basename(dest.basename, dest.extname);
      dest.path = path.resolve(dest.dirname, dest.basename);

      // these are useful in template
      dest.__filename = dest.path;
      dest.__dirname = path.resolve(dest.dirname);

      file.data.dest = dest;
      this.push(file);
      return cb();
    } catch (err) {
      console.log(err);
      this.emit('error', new PluginError('template-dest', err));
      return cb();
    }
  });
};
