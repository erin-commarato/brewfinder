var request = require('../request');
var endpoint = 'search/geo/point';

var geo = function(params, callback) {
  request(endpoint, params, callback);
};

module.exports = geo;
