var mocha             = require('mocha');
var assert            = require('assert');
var jadeAssetGraph    = require('../index');

describe("find imports", function() {
  it("should handle the case when there are no files", function() {
    d = jadeAssetGraph.getDependencies(__dirname + '/sample-files/layout.jade');
    assert.equal(0, d.length);
  });

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

  it("should find 1 dependency", function() {
    d = jadeAssetGraph.getDependencies(__dirname + '/sample-files/extend-test.jade');
    assert.equal(1, d.length);
  });

  it("should find 2 dependencies", function() {
    d = jadeAssetGraph.getDependencies(__dirname + '/sample-files/extends-with-includes.jade');
    assert.equal(2, d.length);
  });

  it("should find 3 dependencies", function() {
    d = jadeAssetGraph.getDependencies(__dirname + '/sample-files/complex.jade');
    assert.equal(3, d.length);
  });
});