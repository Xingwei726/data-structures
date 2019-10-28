const { Client } = require('pg');
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config({path: '/home/ec2-user/environment/week4/.env'});
var async = require('async');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'huanx429';
db_credentials.host = 'database-structures.c9iddlpctkv6.us-east-1.rds.amazonaws.com';
db_credentials.database = 'aa';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

var rawAddresses = fs.readFileSync('../week4/data/AAAll.json');
var addressesForDb = JSON.parse(rawAddresses);

async.eachSeries(addressesForDb, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    // var thisQuery = "INSERT INTO aalocations VALUES (E'" + value.address + "', " + value.lat + ", " + value.lng + ");";
    var thisQuery = "INSERT INTO aalocations VALUES (E'" + value.locationName + "', " + value.address.street_info + ", " + value.meetings.day + ", " + value.address.state + ", " + value.address.zip + ", " + value.address.details + ", " + value.address.coords.latitude + ", " + value.address.coords.longitude + ", " + value.address.zone + ", " + value.meetingName + ", " + value.meetingName.day + ", " + value.meetingName.start + ", " + value.meetingName.end + ", " + value.meetingName.type + ");";

    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000); 
}); 