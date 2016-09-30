
$(document).ready(function() {

  showTourInfo();
  showStops();

  // Event Listeners for Buttons on Page
  $('#add-new-stop').on('click', addNewStopHandler);
  $('#save-stop').on('click', createNewStop);
  $('#delete-tour-button').on('click', deleteTour);

  //Init Google Maps API 
  initMap();

});

var currentGooglePlacesId = "";

function addNewStopHandler(){
  if(!currentGooglePlacesId.length){
    $('#pac-input').focus();
  }
  else{
    $('#stop-modal').modal();
  }
}


//Refactor TODO: change this to jQuery
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7749, lng: -122.4194},
    zoom: 12
  });

  service = new google.maps.places.PlacesService(map);

  var input = document.getElementById('pac-input');

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  document.getElementById('add-stop').appendChild(input);

  infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map
  });

  var request = {
    placeId: 'ChIJnbFn3z5-j4ARoqlFeSBuvFA'
  };

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    // Set the position of the marker using the place ID and location.
    marker.setPlace({
      placeId: place.place_id,
      location: place.geometry.location
    });
    marker.setVisible(true);
    console.log(place);

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>');
    currentGooglePlacesId = place.place_id;
    infowindow.open(map, marker);
  });
}
