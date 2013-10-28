var jade      = require('jade');
var fs        = require('fs');
var _         = require('underscore')
var includes  = [];

var readFileSyncReal = fs.readFileSync;

fs.readFileSync = function() {
  includes.push(arguments[0]);
  return readFileSyncReal.apply(this, arguments);
}

exports.getDependencies = function(path) {
  var contents  = fs.readFileSync(path, "utf8");
  var options   = {};
  (new jade.Parser(contents, path, options)).parse().nodes

  var included = includes.slice(0);
  includes = [];

  return _.reject(_.uniq(included), function(v){return v == path});
}