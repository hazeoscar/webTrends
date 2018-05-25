"use strict";
var map;
var addresses;
// need to initialize it to an empty array to be then recognized. 
var mapMarkers = [];
// class for map markers
var MapMaker = /** @class */ (function () {
    //    making constructors
    function MapMaker(address) {
        this.Address = address;
    }
    ;
    return MapMaker;
}());
var Toronto = { lat: 43, lng: -79.38 };
$.ajax({
    url: './locations.json',
    dataType: 'json',
    success: function (data) {
        // console.log(data);
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var i = data_1[_i];
        }
        addresses = data;
        for (var _a = 0, addresses_1 = addresses; _a < addresses_1.length; _a++) {
            var i = addresses_1[_a];
            // console.log(i.addresses);
            // add map markers to array of map markers
            var newMapMarker = new MapMaker(i.address);
            mapMarkers.push(newMapMarker);
        }
        // console.log(mapMarkers);
    }
});
var geocoder;
function initMap() {
    // get the geocoder object
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById('map'), {
        center: Toronto,
        zoom: 8
    });
}
// add markers
var mapMakersIndex = 0;
setTimeout(addMarker, 500);
function addMarker() {
    mapMarkers[mapMakersIndex].Latlng = getLatLng(mapMarkers[mapMakersIndex].Address + " Toronto, Canada");
}
//   beging of latlng functon
function getLatLng(address) {
    //  returns lat and long of an address using google maps
    var resultLatLng = { lat: 0, lng: 0 };
    // geocoder is a metho and the parantheses takes 2 arguments. 
    // in js object start and end in curly braces
    geocoder.geocode({
        'address': address
    }, 
    // begining of 2nd parameter, anonymous function.
    function (results, status) {
        if (status == 'OK') {
            resultLatLng.lat = results[0].geometry.location.lat();
            resultLatLng.lng = results[0].geometry.location.lng();
        }
        return resultLatLng;
    });
}
