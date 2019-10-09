var request = require('request');
// var async = require('async'); 
var fs = require('fs');
const dotenv = require('dotenv');
// dotenv.config({ path: '/home/ec2-user/environment/week4/.env' });

var cheerio = require('cheerio');

// TAMU api key
dotenv.config();
const apiKey = process.env.TAMU_KEY;

var meetings = {};

for (let i = 0; i < 10; i++) {

    console.log("AA Address No." + (i + 1));
    let num = 0;
    if (i < 9) {
        num = '0' + (i + 1);
    } else {
        num = (i + 1);
    }

    fs.readFile('/home/ec2-user/environment/week1/m' + num + '.txt', 'utf8', (error, data) => {
        if (error) throw error;
        const $ = cheerio.load(data);

        $('tr tr tr').each(function (i, item) {
            if (i != 0) {
                //Meeting Name
                var meetingName = $(this).children().eq(0).find('b').text();
                meetingName = meetingName.split(' - ');
                meetingName = meetingName[0].toLowerCase();

                //Wheelchair Access
                var access = false;
                if ($(this).children().eq(0).find('span').text().trim() == "Wheelchair access") {
                    access = true;
                }

                // Delete Extra Information
                $(this).children().eq(0).find('div').remove().html();
                $(this).children().eq(0).find('b').remove().html();
                $(this).children().eq(0).find('span').remove().html();

                // Information Reorganizing
                var locationName = $(this).children().eq(0).find('h4').text();
                $(this).children().eq(0).find('h4').remove().html();
                var location = $(this).children().eq(0).text().split(/\n|,|\(|\)|-/).map(item => item.trim()).filter(Boolean);

                // Replace Abbreviations in address
                location[0] = location[0].replace(" E ", " East ");
                location[0] = location[0].replace(" E. ", " East ");
                location[0] = location[0].replace(" W ", " West ");
                location[0] = location[0].replace(" W. ", " West ");
                location[0] = location[0].replace(" St ", " Street ");
                location[0] = location[0].replace(" Av ", " Avenue ");
                location[0] = location[0].replace(" Av. ", " Avenue ");

                //Check is address line 1 only contains digits, if so, join the next line
                if ((location[0].replace(/\D+/g, '').length == 0) || (location[0].replace(/\d/g, '').length == 0)) {
                    location[0] = location[0] + " " + location[1];
                    location.splice(1, 1);
                }


                if ((location[0].replace(/\D+/g, '').length == 0) || (location[0].replace(/\d/g, '').length == 0)) {
                    location[0] = location[0] + " " + location[1];
                    location.splice(1, 1);
                }

                // Some location names are blank so use the first line of the address
                if (locationName == "") {
                    locationName = location[0];
                }


                var zipcode = location[location.length - 1].slice(-5).replace(/\D+/g, '');



                //Create an address object
                var addressObj = {
                    street_info: location[0],
                    city: "New York",
                    state: "NY",
                    zip: zipcode,
                    details: location.join(','),
                    wheelchair_access: access,
                    zone: num
                };

                //If the meetings object does not contain this address, add it.
                if (!(meetings.hasOwnProperty(locationName))) {
                    meetings[locationName] = {
                        address: addressObj,
                        'meetings': {}
                    };
                }

                //Extract the meeting times into an array
                var meetingTimes = $(this).children().eq(1).text().split('\n').map(item => item.trim()).filter(Boolean);

                //For each meeting time, itterate through and extract the details into an object.
                for (let x = 0; x < meetingTimes.length; x++) {

                    console.log(meetingTimes[x]);
                    var times = meetingTimes[x].split(' ');
                    var timesObj = {
                        day: times[0],
                        start: times[3] + ' ' + times[4],
                        end: times[6] + ' ' + times[7],
                        type: times[10]
                    };

                    //If the meeting has already been created, append the meeting times, else add the meeting and times.
                    if (meetings[locationName]['meetings'].hasOwnProperty(meetingName)) {
                        meetings[locationName]['meetings'][meetingName].push(timesObj);
                    } else {
                        meetings[locationName]['meetings'][meetingName] = [timesObj];
                    }
                }

                //Call the geocode function
                getGeocode(locationName, zipcode, addressObj);
            }
        });
    });
}

function getGeocode(name, zip, address) {
    //Check to see if the address already has the geocode before continue to save unneccesary API calls. 
    if (!(address.hasOwnProperty('geocode'))) {
        //Set up the API request
        var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';
        apiRequest += 'streetAddress=' + address.street_info.split(' ').join('%20');
        apiRequest += '&city=New%20York&state=NY&zip=' + zip + '&apikey=' + apiKey;
        apiRequest += '&format=json&version=4.01';

        request(apiRequest, function (err, resp, body) {
            if (err) { throw err; }
            else {
                var tamuGeo = JSON.parse(body);
                //Extract the latitude and longitude
                var lat = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Latitude'];
                var lon = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Longitude'];

                //Save a geocode object to the meetings object
                meetings[name]['address']['coords'] = {
                    latitude: lat,
                    longitude: lon
                };

                //Save the meetings object to file
                fs.writeFileSync('data/AAAll.json', JSON.stringify(meetings));
            }
        });
    } else {
        fs.writeFileSync('data/AAAll.json', JSON.stringify(meetings));
    }
}