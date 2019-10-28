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
var latLong = []; 


// var latLong = [{"latitude":"40.7132514","longitude":"-74.002398"},{"latitude":"40.7132514","longitude":"-74.002398"},{"latitude":"40.7147965","longitude":"-73.9990363"},{"latitude":"40.7080393","longitude":"-74.0042361"},{"latitude":"40.7091732","longitude":"-74.0080677"},{"latitude":"40.7080393","longitude":"-74.0042361"},{"latitude":"40.7132514","longitude":"-74.002398"},{"latitude":"40.7125016","longitude":"-74.0094639"},{"latitude":"40.7132514","longitude":"-74.002398"},{"latitude":"40.7125016","longitude":"-74.0094639"},{"latitude":"40.6344072","longitude":"-74.1170382"},{"latitude":"40.7143477","longitude":"-74.0130151"},{"latitude":"40.7080393","longitude":"-74.0042361"},{"latitude":"40.7080393","longitude":"-74.0042361"},{"latitude":"40.7132514","longitude":"-74.002398"},{"latitude":"40.7144166","longitude":"-73.9843646"},{"latitude":"40.7080393","longitude":"-74.0042361"},{"latitude":"40.7125016","longitude":"-74.0094639"},{"latitude":"40.7132514","longitude":"-74.002398"},{"latitude":"40.7144166","longitude":"-73.9843646"},{"latitude":"40.6344072","longitude":"-74.1170382"},{"latitude":"40.6344072","longitude":"-74.1170382"}];
// for (var i = 0; i < afterAddresses.length; i++) {
//         afterAddresses[i]["geocode"]=latLong[i];
// }

// console.log (afterAddresses);

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
            // var ll = {};
            // latLong.address = tamuGeo['InputAddress']['StreetAddress'];
            // latLong.lat = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Latitude'];
            // latLong.lng = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Longitude'];
            var lat = tamuGeo["OutputGeocodes"][0]["OutputGeocode"]["Latitude"];
            var lon = tamuGeo["OutputGeocodes"][0]["OutputGeocode"]["Longitude"];
            var ll = {
                    latitude: lat,
                    longitude: lon     
            };
            latLong.push(ll);
        }
    });
    setTimeout(callback, 2000);
}, function() {
                for (var i = 0; i < afterAddresses.length; i++) {
                afterAddresses[i]["geocode"]=latLong[i];
            }
    fs.writeFileSync('data/withGeo/AA01Geo.json', JSON.stringify(afterAddresses));
    console.log('*** *** *** *** ***');
    console.log('Number of meetings in this zone: ');
    console.log(AAaddresses.length);
});