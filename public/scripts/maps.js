var map;

$( document ).ready(function() {
    var origin1 = new google.maps.LatLng(55.930385, -3.118425);
    var origin2 = new google.maps.LatLng(52.930385, -3.118425);

    initialize()
});
function initMap() {
    console.log("init");
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

function calculate(a, b){
    var distance = google.maps.geometry.spherical.computeDistanceBetween (a, b);

}

function calcDistance(p1, p2) {

    var d = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    document.getElementById('calc').innerHTML=d;
    console.log(d);
}

var map;
var marker = null;
var marker1 = null;
var click = 0;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var chicago = new google.maps.LatLng(-40.321, 175.54);
    var myOptions = {
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: chicago
    }
    map = new google.maps.Map(document.getElementById("map"), myOptions);
    directionsDisplay.setMap(map);
    calcRoute();
}

function calcRoute() {

    var waypts = [];


    stop = new google.maps.LatLng(-39.419, 175.57)
    waypts.push({
        location:stop,
        stopover:true});


    start  = new google.maps.LatLng(-40.321, 175.54);
    end = new google.maps.LatLng(-38.942, 175.76);
    var request = {
        origin: start,
        destination: end,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.DirectionsTravelMode.WALKING
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            var route = response.routes[0];

        }
    });
}
