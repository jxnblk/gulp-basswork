
var through = require('through2');
var basswork = require('basswork');

module.exports = function(options) {

  var options = options || {};

  return through.obj(function(file, encoding, callback) {

    if (!file.isBuffer()) callback();

    var src = file.contents.toString();

    options.source = file.path;

    var css = basswork(src, options);

    file.contents = new Buffer(css);
    this.push(file);
    callback();

  });

};

