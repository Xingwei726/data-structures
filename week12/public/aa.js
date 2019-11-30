// // map setup
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// var accessToken = "pk.eyJ1IjoiaHVhbng0MjkiLCJhIjoiY2szMzRzNHpqMGpiZDNib3EzbGgweHR0eSJ9.FbzMgwMQ7oL8uqZBSJqF2A"


mapboxgl.accessToken = "pk.eyJ1IjoiaHVhbng0MjkiLCJhIjoiY2szMzRzNHpqMGpiZDNib3EzbGgweHR0eSJ9.FbzMgwMQ7oL8uqZBSJqF2A";
var myMap = new mapboxgl.Map({
container: 'map',
// style: 'mapbox://styles/huanx429/ck335276635b81cmv622fh78g',
style: 'mapbox://styles/huanx429/ck3lupgw3304x1cltlu35yhmp',
center: [-74.00208589965371,40.723624676777405], // starting position [lng,lat]
zoom: 13 // starting zoom
});




