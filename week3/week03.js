// dependencies
var request = require('request'); // npm install request
var async = require('async'); // npm install async
const fs = require('fs');
const dotenv = require('dotenv'); // npm install dotenv

// TAMU api key
dotenv.config();
const apiKey = process.env.TAMU_KEY;

// Load addresses information
var rawAddresses = fs.readFileSync('../week3/m09AAInfo.json');
var afterAddresses = JSON.parse(rawAddresses);

var geoCodes = [];
var addresses = [];

var i;
for (i in afterAddresses){
    // console.log(afterAddresses[i]['streetAddress']);
    addresses.push(afterAddresses[i]['streetAddress']);
}


async.eachSeries(addresses, function(value, callback) {
    var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';
    apiRequest += 'streetAddress=' + value.split(' ').join('%20');
    apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey;
    apiRequest += '&format=json&version=4.01';

    request(apiRequest, function(err, resp, body) {
        if (err) {throw err;}
        else {
            var tamuGeo = JSON.parse(body);
            for (var i=0; i<addresses.length; i++) {
                var d = {};
                var d2 = {};
                d2['lat'] =  tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Latitude'];
                d2['lng'] =  tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Longitude'];
                d['address'] = afterAddresses[i]['streetAddress'];
                d['latLong'] = d2;
                geoCodes.push(d);
            }
            // meetingsData.push(d);
        }
    });
    setTimeout(callback, 2000);
}, function() {
    fs.writeFileSync('first.json', JSON.stringify(geoCodes));
    console.log('*** *** *** *** ***');
    console.log('Number of meetings in this zone: ');
    console.log(addresses.length);
});
