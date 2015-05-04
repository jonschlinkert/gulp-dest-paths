  var orig = file.options.originalPath;

  file.data.src = file.data.src || {};
  file.data.src.path = orig;

  // look for native `path.parse` method first
  var parsed = typeof path.parse === 'function'
    ? path.parse(orig)
    : parse(orig);

  file.data.src.dirname = parsed.dir;
  file.data.src.relative = file.relative;
  file.data.src.filename = parsed.name;
  file.data.src.basename = parsed.base;
  file.data.src.extname = parsed.ext;
  file.data.src.ext = parsed.ext;

  file.data.process = {};
  file.data.process.cwd = function () {
    return process.cwd();
  };

  file.data.resolve = path.resolve;