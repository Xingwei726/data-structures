const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: '/home/ec2-user/environment/week7/.env'});


// AWS RDS POSTGRESQL INSTANCE
const db_credentials = new Object({
   user: "huanx429",
   password: process.env.AWSRDS_PW,
   host: "database-structures.c9iddlpctkv6.us-east-1.rds.amazonaws.com",
   database: "aa",
   port: 5432,
});

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();



//Query from aameetings
// var thisQuery = "SELECT meetingName, meetingDay, TimeStart, TimeEnd, meetingType FROM aameetings;";
var thisQuery = "SELECT * FROM aameetings;";
// var thisQuery = "SELECT locationTitle, meetingName, TimeStart FROM aameetings ORDER BY TimeStart";
// var thisQuery = "SELECT locationTitle, meetingName, meetingDay, meetingType, TimeStart FROM aameetings WHERE meetingDay = 'Tuesdays' AND meetingType = 'O'";
// var thisQuery = "SELECT COUNT(*) FROM aameetings WHERE TimeStart > '7:45 PM'"; //return count 163




client.query(thisQuery, (err, res) => {
    if (err) {throw err}
    else {
        console.table(res.rows);
        client.end();
    }
});