const { Client } = require('pg');
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config({ path: '/home/ec2-user/environment/week7/.env' });
var async = require('async');

// AWS RDS POSTGRESQL INSTANCE
const db_credentials = new Object({
   user: "huanx429",
   password: process.env.AWSRDS_PW,
   host: "database-structures.c9iddlpctkv6.us-east-1.rds.amazonaws.com",
   database: "aa",
   port: 5432,
});

var rawAddresses = fs.readFileSync('../week7/data/withGeo/AA010Geo.json');
var addressesForDb = JSON.parse(rawAddresses);
// var meetingsData = [];
// var meetings = {};

// console.log(addressesForDb[1].meetings[1].meetingName)


//  for (let i=0; i<addressesForDb.length; i++){
//     for (let m=0; m<addressesForDb[i]["meetings"].length; m++){
//       meetings.meetingName = addressesForDb[i]["meetings"][m]["meetingName"]
//       meetings.day = addressesForDb[i]["meetings"][m]["day"]

//       // meetingsData.push(meetings)
//     }
// }

//  for (let i=0; i<addressesForDb.length; i++){
//       meetings= addressesForDb[i]["meetings"]
//       meetingsData.push(meetings)
// }

// console.log(meetingsData)
// console.log(addressesForDb)



async.eachSeries(addressesForDb, function (value1, callback1) {
    async.eachSeries(value1.meetings, function (value2, callback2) {

            // aalocations table insert
            // var thisQuery = "INSERT INTO aameetings (locationTitle, streetInfo, city, state, zip, details, wheelchair, zone, latitude, longitude, meetingName, meetingDay, TimeStart, TimeEnd, meetingType) VALUES (E'" + value1.locationTitle + "','" + value1.streetInfo + "', '" + value1.city + "', '" + value1.state + "', '"+ value1.zip + "', '" + value1.details + "', '" + value1.wheelchair + "', '" + value1.zone + "', '" + value1.geocode.latitude + "', '"+value1.geocode.longitude + "'," + value2.meetingName + "','" + value2.day + "', '" + value2.start + "', '" + value2.end + "', '"+ value2.type + "');";

        const client = new Client(db_credentials);
        client.connect();
            // aalocations table insert
            
            var thisQuery = "INSERT INTO aameetings (locationTitle, streetInfo, city, state, zip, details, wheelchair, zone, latitude, longitude, meetingName, meetingDay, TimeStart, TimeEnd, meetingType) VALUES (E'" + value1.locationTitle + "','" + value1.streetInfo + "', '" + value1.city + "', '" + value1.state + "', '"+ value1.zip + "', '" + value1.details + "', '" + value1.wheelchair + "', '" + value1.zone + "', '" + value1.geocode.latitude + "', '"+value1.geocode.longitude + "','" + value2.meetingName + "','" + value2.day + "', '" + value2.start + "', '" + value2.end + "', '"+ value2.type + "');";
            // aameetings table insert
            // var thisQuery = "INSERT INTO aameetings (meetingName, meetingDay, TimeStart, TimeEnd, meetingType) VALUES (E'" + value2.meetingName + "','" + value2.day + "', '" + value2.start + "', '" + value2.end + "', '"+ value2.type + "');";
            // var thisQuery = "INSERT INTO aameetings VALUES (E'" + value2.meetingName + "','" + value2.day + "', '" + value2.start + "', '" + value2.end + "', '"+ value2.type + "');";


                client.query(thisQuery, (err, res) => {
                    console.log(err, res);
                    client.end();
                });
                setTimeout(callback2, 2000);
        });
        
        
    setTimeout(callback1,2000);

    
}); 



