// Require Express
var express = require('express');
var app = express();
var moment = require('moment-timezone');



// TAMU service
var request = require('request');
const apiKey = process.env.TAMU_KEY;

//Process blog noSQL credentials    
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";
var dynamodb = new AWS.DynamoDB();

// app.use(require("cors")()) // allow Cross-domain requests 
// app.use(require('body-parser').json()) 


//Sensor and aa data SQL credentials
const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: '/home/ec2-user/environment/week12/.env'});

// AWS RDS credentials
const db_credentials = new Object({
  user: "huanx429",
  password: process.env.AWSRDS_PW,
  host: process.env.AWSRDS_EP,
  database: "aa",
  port: 5432,
});


//template setup
var fs = require('fs');
var handlebars = require('handlebars');

var hx = `<!doctype html>
<html lang="en">
        <head>
            <meta charset='utf-8' />
            <title>Display a map with a custom style</title>
            <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
            <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'></script>
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css' rel='stylesheet' />
            <link rel='stylesheet' type='text/css' href='aaStyle.css' />
            
            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"/>
            <link rel='stylesheet' type='text/css' href='aaStyle.css'/>
        </head>
        
        <body>
            
            <div id='map'></div>
            
               <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
               <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
               <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

               <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
               <script src="handlebars-v4.5.3.js"></script>
              // <script src="aa.js"></script>
               
        <script>
        var data =
`;

var jx = `;
    mapboxgl.accessToken = "pk.eyJ1IjoiaHVhbng0MjkiLCJhIjoiY2szMzRzNHpqMGpiZDNib3EzbGgweHR0eSJ9.FbzMgwMQ7oL8uqZBSJqF2A";
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/huanx429/ck3lupgw3304x1cltlu35yhmp',
        center: [-74.00208589965371,40.723624676777405], // starting position [lng,lat]
        zoom: 13 // starting zoom
    });
    
    
    for (var i=0; i<data.length; i++) {
        var el = document.createElement('div');
        el.id = 'markerCss';
        var popup = new mapboxgl.Popup()
                        .setHTML ('<b>Popup 1:</b> TS09-121<br> <b>Type:</b> Car')
                        // .setHTML(JSON.stringify(data[i].details))
        var markerCss = new mapboxgl.Marker(el)
                                .setLngLat([data[i].latitude, data[i].longitude])
                                .setPopup(popup)
                                .addTo(map);
    }

</script>
</body>
</html>`;

app.get('/aa', function(req,res) {
  
    var now = moment.tz(Date.now(), "America/New_York"); 
    var dayy = now.day().toString(); 
    var hourr = now.hour().toString(); 
  
    const client = new Client(db_credentials);
    client.connect();
    
    var thisQuery = `SELECT latitude, longitude, details, json_agg(json_build_object('location', locationTitle, 'address', streetInfo,'meeting', meetingName, 'day', meetingDay, 'types', meetingType,'shour', TimeStart)) as meeting
    FROM aameetings
    WHERE meetingDay = ` + dayy + 'and shour >= ' + hourr +
    `GROUP BY latitude, longitude
    ;`;
    
    client.query(thisQuery, (qerr, qres) => {
      if (qerr) { throw qerr }
      
      else {
        var resp = hx + JSON.stringify(qres.rows) + jx;
        qres.send(resp);
        client.end();
        console.log('AA) responded to request for aa meeting data');
      }
    });
});







app.use(express.static('public'));

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.listen(8080, function () {
  console.log('Server listening...');
});



