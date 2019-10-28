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

var rawAddresses = fs.readFileSync('../week7/data/withGeo/AA01Geo.json');
var addressesForDb = JSON.parse(rawAddresses);


async.eachSeries(addressesForDb, function (value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aalocations (locationTitle, streetInfo, city, state, zip, details, wheelchair, zone, latitude, longitude) VALUES (E'" + value.locationTitle + "','" + value.streetInfo + "', '" + value.city + "', '" + value.state + "', '"+ value.zip + "', '" + value.details + "', '" + value.wheelchair + "', '" + value.zone + "', '" + value.geocode.latitude + "', '"+value.geocode.longitude + "');";
    // var thisQuery = "INSERT INTO aalocations (locationTitle, streetInfo, city, state, zip, details, wheelchair_access, zone, latitude, longitude) VALUES (E'" + value.meetings.locationTitle + "','" + value.meetings.address.streetInfo + "', '" + value.meetings.address.city + "', '" + value.meetings.address.state + "', '"+ value.meetings.address.zip + "', '" + value.meetings.address.details + "', '" + value.meetings.address.wheelchair_access + "', '" + value.meetings.address.zone + "', '" + value.meetings.address.latitude + "', '"+value.meetings.address.longitude + "');";

    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 2000);
});  