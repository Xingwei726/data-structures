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

var rawTemp = fs.readFileSync('../week9/bodytemp.json');
var bodyTemp = JSON.parse(rawTemp);


async.eachSeries(bodyTemp, function (value, callback) {

        const client = new Client(db_credentials);
        client.connect();

        var thisQuery = "INSERT INTO bodytemps (tempDate, tempDay, tempTime, tempValue) VALUES (E'" + value.Day + "','" + value.Date + "', '" + value.Time + "', '" + value.Temperature + "');";

        client.query(thisQuery, (err, res) => {
            console.log(err, res);
            client.end();
        });
        setTimeout(callback,2000);

}); 


