'use strict';

const config = require('./config');
const axios = require('axios');
const qs = require('querystring');

function request(endpoint, params, callback) {
  var url = config.BREWDB_API_URL + endpoint + '?key=' + config.BREWDB_API_KEY + '&' + qs.stringify(params);

  axios.get(url)
    .then(response => {
      callback(null, response.data);
    })
    .catch(error => {
      callback(error);
    });
}

module.exports = request;
