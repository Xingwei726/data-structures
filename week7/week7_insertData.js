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



async.eachSeries(addressesForDb, function (value1, callback1) {
    async.eachSeries(value1.meetings, function (value2, callback2) {

        const client = new Client(db_credentials);
        client.connect();

            var thisQuery = "INSERT INTO aameetings (locationTitle, streetInfo, city, state, zip, details, wheelchair, zone, latitude, longitude, meetingName, meetingDay, TimeStart, TimeEnd, meetingType) VALUES (E'" + value1.locationTitle + "','" + value1.streetInfo + "', '" + value1.city + "', '" + value1.state + "', '"+ value1.zip + "', '" + value1.details + "', '" + value1.wheelchair + "', '" + value1.zone + "', '" + value1.geocode.latitude + "', '"+value1.geocode.longitude + "','" + value2.meetingName + "','" + value2.day + "', '" + value2.start + "', '" + value2.end + "', '"+ value2.type + "');";

                client.query(thisQuery, (err, res) => {
                    console.log(err, res);
                    client.end();
                });
                setTimeout(callback2, 2000);
        });
        setTimeout(callback1,2000);
}); 



