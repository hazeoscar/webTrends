"use strict";
let map;
let addresses;
// need to initialize it to an empty array to be then recognized. 
let mapMarkers = [];
// class for map markers
class MapMaker {
    //    making constructors
    constructor(address) {
        this.Address = address;
    }
    ;
}
let Toronto = { lat: 43, lng: -79.38 };
$.ajax({
    url: './locations.json',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        for (let i of data) {
            // console.log(i.address);
        }
        addresses = data;
        for (let i of addresses) {
            // console.log(i.addresses);
            // add map markers to array of map markers
            let newMapMarker = new MapMaker(i.address);
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
let mapMakersIndex = 0;
setTimeout(addMarker, 1000);
function addMarker() {
    mapMarkers[mapMakersIndex].Latlng = getLatLng(mapMarkers[mapMakersIndex].Address + " Toronto, Canada");
}
//   beging of latlng functon
function getLatLng(address) {
    //  returns lat and long of an address using google maps
    let resultLatLng = { lat: 0, lng: 0 };
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
