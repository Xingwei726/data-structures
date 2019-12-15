// // map setup
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// var accessToken = "pk.eyJ1IjoiaHVhbng0MjkiLCJhIjoiY2szMzRzNHpqMGpiZDNib3EzbGgweHR0eSJ9.FbzMgwMQ7oL8uqZBSJqF2A"


// mapboxgl.accessToken = "pk.eyJ1IjoiaHVhbng0MjkiLCJhIjoiY2szMzRzNHpqMGpiZDNib3EzbGgweHR0eSJ9.FbzMgwMQ7oL8uqZBSJqF2A";
// var map = new mapboxgl.Map({
//     container: 'map',
//     // style: 'mapbox://styles/huanx429/ck335276635b81cmv622fh78g',
//     style: 'mapbox://styles/huanx429/ck3lupgw3304x1cltlu35yhmp',
//     center: [-74.00208589965371,40.723624676777405], // starting position [lng,lat]
//     zoom: 13 // starting zoom
// });




// var popup = new mapboxgl.Popup()
//                         .setHTML ('<b>Popup 1:</b> TS09-121<br> <b>Type:</b> Car')
                        
// var el = document.createElement('div');
//     el.id =  'markerCss';

// var markerCss = new mapboxgl.Marker(el)
//     .setLngLat([-74.00208589965371,40.823624676777405])
//     .setPopup(popup)
//     .addTo(map);
    
// markerCss.setPopup(popup); 



// var popup2 = new mapboxgl.Popup()
//                          .setHTML('<b>Popup 2:</b> TS09-121<br> <b>Type:</b> Car');

// var el = document.createElement('div');
//     el.id = 'markerCss';
// // finally, create the marker
// var markerCss2 = new mapboxgl.Marker(el)
//     .setLngLat([-74.00208589965371,40.723624676777405])
//     .addTo(map);
// markerCss2.setPopup(popup2); 



// $(function(){
//     $('select').change(function(){
//         getResults()
//     });
// });

// function getResults(){
//     var parameters = { day: $('select[ name="day"]').val()}
//     $.get('/aa',parameters, function(data){
        
//         $('#meetings').html(data[0])
        
//         console.log(data[1])
        
//         markerCss.clearLayers();
        
//         for (var i=0; i<data[1].length; i++){
//             // var popup = new mapboxgl.Popup()
//             //     .setHTML(`<h1>${data[1][i].details}>/h1>`);
//             var el = document.createElement('div');
//                 el.id = 'markerCss';
//             var markerCss = new mapboxgl.Marker(el)
//                                         .setLngLat([data[1][i].latitude, data[1][i].longitude])
//                                         // .setPopup(popup)
//                                         .addTo(map);
//         }
//     });
// }       
        
        
// map.on('click', function(ev){
// var latlng = map.mouseEventToLatLng(ev.originalEvent);
// sortResults(latlng)

// });

// function init(){
//     getResults()
// }

// init()


        
        
