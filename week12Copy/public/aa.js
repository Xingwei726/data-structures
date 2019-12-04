// map setup
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

            var popup = new mapboxgl.Popup()
                        .setHTML ("<p>"+ data[1][i].longitude+"</P>"+"</br>"+"<p>"+ data[1][i].latitude+"</P>")
            var el = document.createElement('div');
                el.className =  'markerCss';
            var markerCss = new mapboxgl.Marker(el)
           
            markerCss
            .setLngLat([data[1][i].longitude,data[1][i].latitude])
            .setPopup(popup)
            .addTo(map);
            
        }
    });
    $( ".markerCss" ).remove()
} 


getResults()
