#!/usr/bin/env node

require('../')(process.argv[2])
.done(function(bundle) {
  console.log(bundle.getSource({inlineSourceMap: false, minify: true}));
}, function(err) {
  throw(err);
});
