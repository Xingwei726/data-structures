// INSTALL DEPENDENCIES
var request = require('request');
var fs = require('fs');
const dotenv = require('dotenv');
var cheerio = require('cheerio');

// TAMU API KEY
dotenv.config();
// const apiKey = process.env.TAMU_KEY;


var meetingList = [];

let html = fs.readFileSync('/home/ec2-user/environment/week2/m01.txt');
let $ = cheerio.load(html);

$('tr tr tr').each(function (i, elem) {
    if (i !== 0) {

        // LOCATION DETAILS
        var location = $(elem).find('td').eq(0).text().split(/\n|,|\(|\)|-/).map(item => item.trim()).filter(Boolean);

        // LOCATION NAMES
        var locationName = location[0];
        
        // STREET INFO
        var streetInfo = $(elem).html().split('<br>')[2].split(',')[0].trim().replace(" W. ", " West ");
        // streetInfo[0]= streetInfo[0].replace(" E ", " East ");
        // streetInfo[0]= streetInfo[0].replace(" E. ", " East ");
        // streetInfo[0]= streetInfo[0].replace(" W ", " West ");
        // streetInfo[0]= streetInfo[0].replace(" W. ", " West ");
        // streetInfo[0]= streetInfo[0].replace(" St ", " Street ");
        // streetInfo[0]= streetInfo[0].replace(" Av ", " Avenue ");
        // streetInfo[0]= streetInfo[0].replace(" Av. ", " Avenue ");
        // streetInfo[0]= streetInfo[0].replace(" Ave ", " Avenue ");
        // streetInfo[0]= streetInfo[0].replace(" street ", " Street ");
        
        // MEETING NAMES
        var meetingName = $(elem).find('td').eq(0).find('b').text().split(' - ')[0].toUpperCase();

        // ZIPCODE
        var zipcode = $(elem).html().split('<br>')[3].trim().slice(-5);

        // WHEELCHAIR ACCESS INFORMATION
        var wheelchair;
        if ($(elem).html().includes('Wheelchair access')) {
            wheelchair = true;
        } else {
            wheelchair = false;
        }

        // REMOVE REDUNDANT
        $(elem).find('div').eq(0).remove();
        $(elem).find('b').eq(0).remove();
        $(elem).find('span').eq(0).remove();

        let thisMeeting = {
            locationTitle: locationName,
            streetInfo: streetInfo,
            city: "New York",
            state: "NY",
            zip: zipcode,
            details: location[3] + ' ' + location[4] + ' ' + location[5],
            wheelchair: wheelchair,
            zone:"2"
        };


        // EXTRACT MEETING TIMES
        var meetingTimes = $(elem).find('td').eq(1).text().split('\n').map(item => item.trim()).filter(Boolean);

        let meetingTimesList = [];
        for (let t = 0; t < meetingTimes.length; t++) {
            // console.log(meetingTimes[t]);
            var times = meetingTimes[t].split(' ');
            var timesObj = {
                meetingName: meetingName,
                day: times[0],
                start: times[3] + ' ' + times[4],
                end: times[6] + ' ' + times[7],
                type: times[10]
            };

            meetingTimesList.push(timesObj);


        }
        thisMeeting.meetings = meetingTimesList;
        meetingList.push(thisMeeting);
    }
});


let write = JSON.stringify(meetingList);
fs.writeFileSync('data/AA02.json', write);
