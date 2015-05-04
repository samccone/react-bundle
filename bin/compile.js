#!/usr/bin/env node

require('../')(process.argv[2])
.done(console.log.bind(console), function(err) {
  throw(err);
});
