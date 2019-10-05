// dependencies
var request = require('request');
// var async = require('async'); 
var fs = require('fs');
const dotenv = require('dotenv');
var cheerio = require('cheerio');

// TAMU api key
dotenv.config();
const apiKey = process.env.TAMU_KEY;

var meetings = {};

// load the m09.txt file into into a cheerio object
fs.readFile('/home/ec2-user/environment/week1/m09.txt', 'utf8', (error, data) => {
    if (error) throw error;
    const $ = cheerio.load(data);
    
    $('tr tr tr').each(function(i, item) {
        if (i != 0){
            //Extract meeting name
            var meetingName = $(this).children().eq(0).find('b').text();
            meetingName = meetingName.split(' - ');
            meetingName = meetingName[0].toLowerCase();
            
            //Extract if Wheelchair access is available
            var access = false;
            if ($(this).children().eq(0).find('span').text().trim() == "Wheelchair access"){
               access = true;
            }

            // Delete additional html code within the table row
            $(this).children().eq(0).find('div').remove().html();
            $(this).children().eq(0).find('b').remove().html();
            $(this).children().eq(0).find('span').remove().html();
            
            // Extract the location details. Split at a new line, deleting white space and blank lines
            var location = $(this).children().eq(0).text().split(/\n|,|\(|\)|-/).map(item => item.trim()).filter(Boolean);
            
            // Replace E in address with East
            location[1] = location[1].replace(" E ", " East ");
            location[1] = location[1].replace(" E. ", " East ");
            
            //Create an address object
            var addressObj = {
                line_1 : location[1],
                city : "New York",
                state : "NY",
                zip : location[location.length - 1].replace(/\D+/g, ''),
                details: location.join(','),
                wheelchair_access: access,
            };

            //If the meetings object does not contain this address, add it.
            if (!(meetings.hasOwnProperty(location[0]))){
                meetings[location[0]] = {
                    address : addressObj,
                    'meetings':{}
                };
            }
            
            //Extract the meeting times into an array
            var meetingTimes = $(this).children().eq(1).text().split('\n').map(item => item.trim()).filter(Boolean);
            
            //For each meeting time, itterate through and extract the details into an object.
            for (let x = 0; x < meetingTimes.length; x++) { 
            
                console.log(meetingTimes[x]);
                var times = meetingTimes[x].split(' ');
                var timesObj = {
                    day : times[0],
                    start : times[3]+' '+times[4],
                    end : times[6]+' '+times[7],
                    type : times[10]
                };
                
                //If the meeting has already been created, append the meeting times, else add the meeting and times.
                if (meetings[location[0]]['meetings'].hasOwnProperty(meetingName)) {
                    meetings[location[0]]['meetings'][meetingName].push(timesObj);
                } else {
                    meetings[location[0]]['meetings'][meetingName] = [timesObj];
                }
            }
            
            //Call the geocode function
            getGeocode(location[0],addressObj);
        }
    });
});

function getGeocode(name, address){
    //Check to see if the address already has the geocode before continue to save unneccesary API calls. 
    if (!(address.hasOwnProperty('geocode'))){
        //Set up the API request
        var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';
        apiRequest += 'streetAddress=' + address.line_1.split(' ').join('%20');
        apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey;
        apiRequest += '&format=json&version=4.01';
        
        request(apiRequest, function(err, resp, body) {
            if (err) {throw err;}
            else {
                var tamuGeo = JSON.parse(body);
                //Extract the latitude and longitude
                var lat = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Latitude'];
                var lon = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Longitude'];
                
                //Save a geocode object to the meetings object
                meetings[name]['address']['geocode'] = {
                    latitude : lat,
                    longitude : lon
                };
                
                //Save the meetings object to file
                fs.writeFileSync('data/AA09.json', JSON.stringify(meetings));
            }
        });
    } else {
        fs.writeFileSync('data/AA09.json', JSON.stringify(meetings));
    }
}