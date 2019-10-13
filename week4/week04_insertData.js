const { Client } = require('pg');
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config({ path: '/home/ec2-user/environment/week4/.env' });
var async = require('async');

// AWS RDS POSTGRESQL INSTANCE
const db_credentials = new Object({
   user: "huanx429",
   password: process.env.AWSRDS_PW,
   host: "database-structures.c9iddlpctkv6.us-east-1.rds.amazonaws.com",
   database: "aa",
   port: 5432,
});

var rawAddresses = fs.readFileSync('../week3/data/AA09.json');
var addressesForDb = JSON.parse(rawAddresses);


async.eachSeries(addressesForDb, function (value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aalocations VALUES (E'" + value.locationTitle + "','" + value.streetInfo + "', '" + value.city + "', '" + value.state + "', '"+ value.zip + "', '" + value.details + "', '" + value.latitude + "', '"+value.longitude + "', '" + value.meetingName + "', '" + value.day + "', '" + value.startTime + "', '" + value.endTime + "', '" + value.type + "');";

    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 2000);
});  