var request = require('../request');
var endpoint = 'breweries';

var all = function(params, callback) {
  //name and/or established are required
  if (params.name === undefined || params.established === undefined) {
    callback('Name and/or Established are required');
  }

  request(endpoint, params, callback);
};

var byId = function(breweryId, callback) {
  var byIdEndpoint = 'brewery/' + breweryId;

  request(byIdEndpoint, {/*params*/}, callback);
};

module.exports = {
  all, byId
}
