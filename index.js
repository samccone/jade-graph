var jade  = require('jade');
var fs    = require('fs');
var _     = require('underscore')

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

  return _.uniq(includes);
}

function getNestedIncludeFiles(node) {
  var files = [];

  if (node.parser && node.parser.extending) {
    files = [node.parser.extending.filename];
  }
  else if (node.filename) {
    files = [node.filename];
  }

  node.nodes.forEach(function(n) {
    if (n.nodes) {
      files = files.concat(getNestedIncludeFiles(n));
    }
  });

  return files;
}