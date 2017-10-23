var request = require('../request');
var endpoint = 'search';

var search = function(params, callback) {
  request(endpoint, params, callback);
};

search.beer = function(params, callback) {
  params.type = 'beer';
  request(endpoint, params, callback);
};

search.brewery = function(params, callback) {
  params.type = 'brewery';
  request(endpoint, params, callback);
};

search.event = function(params, callback) {
  params.type = 'event';
  request(endpoint, params, callback);
};

search.guild = function(params, callback) {
  params.type = 'guild';
  request(endpoint, params, callback);
};

module.exports = search;
