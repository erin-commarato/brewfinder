// initializes the app */
function init() {
  //get user's location
  let location = getLocationAndShowMap();
}

/** pull nearby breweries */
function show_nearby_breweries(location) {
  var params = {
    lat: location.coords.latitude,
    lng: location.coords.longitude
  };

  brewfinder.geo(params, (err, res) => {
    console.log(res);
  });
}

/** initializes google maps and API */
function initMap(location) {
  let user_location = {lat: location.coords.latitude, lng: location.coords.longitude};
  let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: user_location
        });
        //show nearby breweries
        show_nearby_breweries(location);
}

/** requests user's permission to grab their location */
function getLocationAndShowMap() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(initMap);
   } else {
       print_message('Sorry, your browser does not appear to support geolocation');
   }
}

/** handles errors that may be thrown by getCurrentPosition */
function handle_geo_errors(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      print_message('Please enter your zip code');
      break;
    case error.POSITION_UNAVAILABLE:
      print_message('Your location information is not currently available, please enter your zip code');
      break;
    case error.TIMEOUT:
      print_message('A timeout occurred, please try again later or enter your zip code');
      break;
    case error.UNKNOWN_ERROR:
      print_message('An unknown error occurred, please try again later or enter your zip code');
      break;
  }

  //get their zip code as a backup
  get_zip_code();
}

/** allows user to type in their zip code */
function get_zip_code() {
  console.log('Get zip code');
  //stubbing in a hard-coded location for now, and send it to the map object
  let location = {lat: 39.993596, lng: -105.089706};
  initMap(location);
}

/** prints a message in the messages area of the app */
function print_message(message) {
  $('#messages').html(message);
}
