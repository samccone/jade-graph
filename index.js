var jade  = require('jade');
var fs    = require('fs');

exports.getDependencies = function(path) {
  var contents  = fs.readFileSync(path, "utf8");
  var options   = {};
  var includes  = [];

  var nodes     = (new jade.Parser(contents, path, options)).parse().nodes

  nodes.forEach(function(n) {
    if (n.nodes) {
      includes = includes.concat(getNestedIncludeFiles(n));
    } else if (n.filename) {
      includes.push(n.filename)
    }
  });

  return includes;
}

function getNestedIncludeFiles(node) {
  files = [node.filename];

  node.nodes.forEach(function(n) {
    if (n.nodes) {
      files = files.concat(getNestedIncludeFiles(n));
    }
  });

  return files;
}