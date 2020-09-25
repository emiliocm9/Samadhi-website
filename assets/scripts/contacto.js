function initMap() {
  var myLatLng = {lat: 20.634115, lng: -100.483088};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: true,
    zoom: 16
  });

  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng
  });
}