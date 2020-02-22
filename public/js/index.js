$(document).ready(function() {
  let lat = null;
  let lng = null;
  let map = null;

  function showLocation(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    initMap(lat, lng);
    getNearbyBreweries();
  }

  function initMap(lat, lng) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat, lng },
      zoom: 8
    });
  }

  function errorHandler(err) {
    if (err.code == 1) {
      alert('Error: Access is denied!');
    } else if (err.code == 2) {
      alert('Error: Position is unavailable!');
    }
  }

  function getLocation() {
    if (navigator.geolocation) {
      // timeout at 60000 milliseconds (60 seconds)
      var options = { timeout: 60000 };
      navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
    } else {
      alert('Sorry, browser does not support geolocation!');
    }
  }

  function getNearbyBreweries() {
    console.log(lat);
    console.log(lng);
    fetch(`/api/breweries/${lat}/${lng}`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        response.forEach(element => {
          var myLatlng = new google.maps.LatLng(element.latitude, element.longitude);
          var marker = new google.maps.Marker({
            position: myLatlng,
            title: element.name
          });
          marker.setMap(map);
        });
      });
  }

  getLocation();
});
