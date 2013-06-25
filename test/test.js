var mocha             = require('mocha');
var assert            = require('assert');

var jadeAssetGraph    = require('../index');

describe("find imports", function() {
  it("should find 0 imports", function() {
    d = jadeAssetGraph.getDependencies(__dirname + '/sample-files/no-imports.jade');
    assert.equal(0, d.length);
  });

  it("should find 1 import", function() {
    d = jadeAssetGraph.getDependencies(__dirname + '/sample-files/one-import.jade');
    assert.equal(1, d.length);
  });

  it("should find 4 imports", function() {
    d = jadeAssetGraph.getDependencies(__dirname + '/sample-files/nested-imports.jade');
    assert.equal(4, d.length);
  });

});