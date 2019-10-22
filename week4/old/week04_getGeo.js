// dependencies
var request = require('request'); // npm install request
var async = require('async'); // npm install async
const fs = require('fs');
const dotenv = require('dotenv'); // npm install dotenv

// TAMU api key
dotenv.config();
const apiKey = process.env.TAMU_KEY;

// Load addresses information
var rawAddresses = fs.readFileSync('../week4/AAAll.json');
var afterAddresses = JSON.parse(rawAddresses);

var addresses = [];

var i;
for (i in afterAddresses){
    addresses.push(afterAddresses[i]['streetAddress']);
}


async.eachSeries(addresses, function(value, callback) {
    var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';
    apiRequest += 'streetAddress=' + value.split(' ').join('%20');
    apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey;
    apiRequest += '&format=json&version=4.01';

        request(apiRequest, function (err, resp, body) {
            if (err) { throw err; }
            else {
                var tamuGeo = JSON.parse(body);
                //Extract the latitude and longitude
                var lat = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Latitude'];
                var lon = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Longitude'];

                //Save geocode to the meetings object
                meetings[name]['address']['coords'] = {
                    latitude: lat,
                    longitude: lon
                };
            }
        });
        setTimeout(callback, 2000);
    }, function() {
        fs.writeFileSync('data/AAAll.json', JSON.stringify(meetings));
});