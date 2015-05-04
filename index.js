var packager = require('./node_modules/react-native/packager/react-packager');
var blacklist = require('./node_modules/react-native/packager/blacklist');
var transformerPath = require.resolve('./node_modules/react-native/packager/transformer');
var path = require('path');

var options = {
  transformModulePath: transformerPath,
  cacheVersion: '2',
  blacklistRE: blacklist('ios')
};

module.exports = function(base) {
  base = path.resolve(base);
  var root = path.dirname(base);
  var url = '/' + path.basename(base);

  options.assetRoots = [root];
  options.projectRoots = [root];

  return packager.buildPackageFromUrl(options, url);
};

