'use strict';

import "./scss/main.scss";

(function() {
  const brewfinder = require('./brewfinder.js');

  var brewfinderApp = {
    init: function() {
      //get user's location
      let location = this.getLocationAndShowMap();
    },

    getLocationAndShowMap: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.initMap);
      } else {
        print_message('Sorry, your browser does not appear to support geolocation');
      }
    },

    initMap: function(position) {
      let userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(userLocation);
      $('#root').append('<div id="map"></div>');
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: userLocation
      });

      console.log(this.showBreweries);
      //show nearby breweries
      this.showBreweries(userLocation);
    },

    showBreweries: function(loc) {
      var params = {
        lat: location.coords.latitude,
        lng: location.coords.longitude
      };

      brewfinder.geo(params, (err, res) => {
        console.log(res);
      });
    }
  };

  brewfinderApp.init();
}());

/*
$('#root').append('<input id="zip">', {
  type: 'text'
});
$('#zip').attr('placeholder', 'Your zip code');
 */
