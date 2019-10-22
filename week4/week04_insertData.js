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

var rawAddresses = fs.readFileSync('../week3/data/AA091.json');
var addressesForDb = JSON.parse(rawAddresses);
var items = addressesForDb[0]["locationTitle"];
// var addressesForDb = parseJson({AA091}, “$.items.qty”)
// console.log (addressesForDb.locationTitle);
console.log (items);

async.eachSeries(addressesForDb, function (value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aalocations (locationName, streetInfo, city, state, zip, details, wheelchair_access, zone, latitude, longitude) VALUES (DEFAULT, '"+ value.locationName + "', " + value.locationName.address.streetInfo + ", " + value.locationName.address.city + ", " + value.locationName.address.state + ", " + value.locationName.address.zip + ", " + value.locationName.address.details + ", " + value.locationName.address.wheelchair_access + ", " + value.locationName.geocode.latitude + ", " + value.locationName.geocode.longitude + ");";

    client.query(thisQuery, (err, res) => {
         console.log(err, res);
         client.end();
    });
    setTimeout(callback, 2000);
});  