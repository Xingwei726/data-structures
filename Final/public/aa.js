// map setup
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

var meeting=[];
mapboxgl.accessToken = "pk.eyJ1IjoiaHVhbng0MjkiLCJhIjoiY2szMzRzNHpqMGpiZDNib3EzbGgweHR0eSJ9.FbzMgwMQ7oL8uqZBSJqF2A";
var map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/huanx429/ck335276635b81cmv622fh78g',
    style: 'mapbox://styles/huanx429/ck3lupgw3304x1cltlu35yhmp',
    center: [-74.00208589965371,40.723624676777405], // starting position [lng,lat]
    zoom: 13 // starting zoom
});



// Add geolocate control to the map.
map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
    })
);


map.addControl(new mapboxgl.FullscreenControl());




$(function(){
    $('select').change(function(){
        getResults()
    });
});




function getResults(){

    var parameters = { day: $('select[ name="day"]').val(), type: $('select[ name="type"]').val()}
    $.get('/aa', parameters, function(data){
        $('#meetings').html(data[0])
        
        console.log(data[1])

        for (var i=0; i<data[1].length; i++){
            meeting.push(data[1][i]['meeting'][0]['location']);

            var popup = new mapboxgl.Popup()
                        .setHTML (
                        "<h3>"+ data[1][i]['meeting'][0]['location']+"</h3>"+
                        "<h4>"+ data[1][i]['meeting'][0]['meeting']+"</h4>"+
                        "<h5>"+ data[1][i]['meeting'][0]['address']+"</h5>"+
                        "<h5>"+ data[1][i]['meeting'][0]['city']+ " , " + data[1][i]['meeting'][0]['state']+ "  " +data[1][i]['meeting'][0]['zipcode']+"</h5>"+
                        // "<h4>"+ data[1][i]['meeting'][0]['day']+"</h4>"+
                        "<h4>Meeting Time:</h4>"+
                        "<h5>"+ data[1][i]['meeting'][0]['shour']+" ~ "+data[1][i]['meeting'][0]['ehour']+"</h5>"+
                        "<h4>Wheelchair Access:</h4>"+
                        "<h5>"+ data[1][i]['meeting'][0]['wheelchair']+"</h5>"
                        )
                        
            var el = document.createElement('div');
                el.className =  'markerCss';
            var markerCss = new mapboxgl.Marker(el)

            markerCss
            .setLngLat([data[1][i].longitude,data[1][i].latitude])
            .setPopup(popup)
            .addTo(map)

            // map.on('click', function() {
            //     map.flyTo({ center: [data[1][i].longitude, data[1][i].latitude ]});
            // });

            
            
            
        }
        
    console.log("meeting:", meeting)
  
    });
    
    $( ".markerCss" ).remove()
    
    
    
} 



getResults()
