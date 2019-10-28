// dependencies
var request = require('request'); // npm install request
var async = require('async'); // npm install async
const fs = require('fs');
const dotenv = require('dotenv'); // npm install dotenv

// TAMU api key
dotenv.config();
const apiKey = process.env.TAMU_KEY;

// geocode addresses
var rawAddresses = fs.readFileSync('data/AA01.json');
var afterAddresses = JSON.parse(rawAddresses);
var AAaddresses = [];

var i;
for (i in afterAddresses){
    AAaddresses.push(afterAddresses[i]['streetInfo']);
}

console.log (AAaddresses);


// var first = false;


// eachSeries in the async module iterates over an array and operates on each item in the array in series
async.eachSeries(AAaddresses, function(value, callback) {
    var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';
    apiRequest += 'streetAddress=' + value.split(',').join('%20');
    apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey;
    apiRequest += '&format=json&version=4.01';
    
//      if (first===false){
//      console.log(apiRequest);
//      first=true;
//  }

    request(apiRequest, function(err, resp, body) {
        if (err) {throw err;}
        else {
            var tamuGeo = JSON.parse(body);
            // var latLong = {}; 
            // latLong.address = tamuGeo['InputAddress']['StreetAddress'];
            // latLong.lat = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Latitude'];
            // latLong.lng = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Longitude'];
            var lat = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Latitude'];
            var lon = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Longitude'];
            var latLong = {
                    latitude: lat,
                    longitude: lon     
            };
        }
        // afterAddresses['geocode'] = latLong;
        afterAddresses.push(latLong);

    });
    setTimeout(callback, 2000);
}, function() {
    fs.writeFileSync('data/AA01Geo.json', JSON.stringify(afterAddresses));
    console.log('*** *** *** *** ***');
    console.log('Number of meetings in this zone: ');
    console.log(AAaddresses.length);
});