jade graph
---------

[![Build Status](https://travis-ci.org/samccone/jade-graph.png?branch=master)](https://travis-ci.org/samccone/jade-graph)

### a jade asset graph generator


#### current status

* detects single includes and nested includes

#### how to use

```js
  jadeGraph = require('jade-graph');
  paths     = jadeGraph.getDependencies(<file path>);

  console.log(paths);
```