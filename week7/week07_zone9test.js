// INSTALL DEPENDENCIES
var request = require('request');
var fs = require('fs');
const dotenv = require('dotenv');
var cheerio = require('cheerio');

// TAMU API KEY
dotenv.config();
const apiKey = process.env.TAMU_KEY;

var meetings = {};

// LOAD FILE TO CHEERIO
fs.readFile('/home/ec2-user/environment/week1/m09.txt', 'utf8', (error, data) => {
    if (error) throw error;
    const $ = cheerio.load(data);

    $('tr tr tr').each(function (i, elem) {
        if (i !== 0) {

            // LOCATION DETAILS
            var location = $(elem).find('td').eq(0).text().split(/\n|,|\(|\)|-/).map(item => item.trim()).filter(Boolean);

            // LOCATION NAMES
            var locationName = location[0];

            // if($(elem).find('h4').attr("style")==="margin:0;padding:0;"){
            //   var locationName=$(elem).text().split('\n').map(item => item.trim()).filter(Boolean);
            // }

            // MEETING NAMES
            var meetingName = $(elem).find('td').eq(0).find('b').text().split(' - ')[0].toUpperCase();

            // // ZIPCODE
            var zipcode = $(elem).html().split('<br>')[3].trim().slice(-5);

            // // WHEELCHAIR ACCESS INFORMATION
            var wheelchair;
            if ($(elem).html().includes('Wheelchair access')) {
                wheelchair = true;
            } else {
                wheelchair = false;
            }

            // // REMOVE REDUNDANT
            $(elem).find('div').eq(0).remove();
            $(elem).find('b').eq(0).remove();
            $(elem).find('span').eq(0).remove();


            if (!(meetings.hasOwnProperty(locationName))) {
                meetings[locationName] = {
                    locationTitle: locationName,
                    streetInfo: location[3],
                    city: "New York",
                    state: "NY",
                    zip: zipcode,
                    details: location[3] + ' ' + location[4] + ' ' + location[5],
                    wheelchair: wheelchair,
                    'meetings': {}
                };
            }


            // EXTRACT MEETING TIMES
            var meetingTimes = $(elem).find('td').eq(1).text().split('\n').map(item => item.trim()).filter(Boolean);

            for (let t = 0; t < meetingTimes.length; t++) {
                console.log(meetingTimes[t]);
                var times = meetingTimes[t].split(' ');
                var timesObj = {
                    day: times[0],
                    start: times[3] + ' ' + times[4],
                    end: times[6] + ' ' + times[7],
                    type: times[10]
                };

                if (meetings[locationName]['meetings'].hasOwnProperty(meetingName)) {
                    meetings[locationName]['meetings'][meetingName].push(timesObj);
                } else {
                    meetings[locationName]['meetings'][meetingName] = [timesObj];
                }
            }

            // CALL THE GEOCODE FUNCTION
            getGeocode(locationName, meetings);
        }
    });
});

function getGeocode(name, address) {
        var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';
        apiRequest += 'streetAddress=' + address.streetInfo.split(' ').join('%20');
        apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey;
        apiRequest += '&format=json&version=4.01';

        request(apiRequest, function (err, resp, body) {
            if (err) { throw err; }
            else {
                // var latLong = {}; // object container for 'address' lat' & 'lng'
                // latLong.address = tamuGeo['InputAddress']['StreetAddress'];
                var tamuGeo = JSON.parse(body);
                var lat = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Latitude'];
                var lon = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Longitude'];
                // geoCodes.push(latLong)

                meetings[name]['geocode'] = {
                    latitude: lat,
                    longitude: lon
                };

                //Save the meetings object to file
                fs.writeFileSync('data/AA09.json', JSON.stringify(meetings));
            }
        });
}