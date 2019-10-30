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

// Sample SQL statement to query the entire contents of a table: 
// var thisQuery = "SELECT locationName, streetInfo, city, state, zip, details, wheelchair_access, zone, latitude, longitude FROM aalocations WHERE type ='OD';";
var thisQuery = "SELECT locationTitle, streetInfo, city, state, zip, details, wheelchair, zone, latitude, longitude FROM aalocations;";

client.query(thisQuery, (err, res) => {
    if (err) {throw err}
    else {
        console.table(res.rows);
        client.end();
    }
});
