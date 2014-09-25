
var through = require('through2');
var basswork = require('basswork');

module.exports = function(options) {

  var options = options || {};

  return through.obj(function(file, encoding, callback) {

    if (!file.isBuffer()) callback();

    var src = file.contents.toString();

    var css = basswork(src, { src: file.path });

    file.contents = new Buffer(css);
    this.push(file);
    callback();

  });

};

