// // map setup
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// var accessToken = "pk.eyJ1IjoiaHVhbng0MjkiLCJhIjoiY2szMzRzNHpqMGpiZDNib3EzbGgweHR0eSJ9.FbzMgwMQ7oL8uqZBSJqF2A"


mapboxgl.accessToken = "pk.eyJ1IjoiaHVhbng0MjkiLCJhIjoiY2szMzRzNHpqMGpiZDNib3EzbGgweHR0eSJ9.FbzMgwMQ7oL8uqZBSJqF2A";
var map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/huanx429/ck335276635b81cmv622fh78g',
    style: 'mapbox://styles/huanx429/ck3lupgw3304x1cltlu35yhmp',
    center: [-74.00208589965371,40.723624676777405], // starting position [lng,lat]
    zoom: 13 // starting zoom
});


var popup = new mapboxgl.Popup()
                        .setHTML ('<b>Popup 1:</b> TS09-121<br> <b>Type:</b> Car')
                        
var el = document.createElement('div');
    el.id =  'markerWithExternalCss';
// finally, create the marker
var markerWithExternalCss = new mapboxgl.Marker(el)
    .setLngLat([-74.00208589965371,40.823624676777405])
    .setPopup(popup)
    .addTo(map);



var popup2 = new mapboxgl.Popup()
                         .setHTML('<b>Popup 2:</b> TS09-121<br> <b>Type:</b> Car');

var el = document.createElement('div');
    el.id = 'markerWithExternalCss';
// finally, create the marker
var markerWithExternalCss2 = new mapboxgl.Marker(el)
    .setLngLat([-74.00208589965371,40.723624676777405])
    .addTo(map);


markerWithExternalCss.setPopup(popup); 
markerWithExternalCss2.setPopup(popup2); 