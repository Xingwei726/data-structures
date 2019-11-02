const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: '/home/ec2-user/environment/week9/.env'});


const db_credentials = new Object({
   user: "huanx429",
   password: process.env.AWSRDS_PW,
   host: process.env.AWSRDS_EP,
   database: "aa",
   port: 5432,
});

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to create a table: 
// var thisQuery = "CREATE TABLE sensorData ( sensorValue double precision, sensorTemp timestamp DEFAULT current_timestamp, bodyTemp double precision, bodyTime timestamp DEFAULT current_timestamp );";
var thisQuery = "CREATE TABLE sensorData ( sensorValue double precision, sensorTemp timestamp DEFAULT current_timestamp );";


// Sample SQL statement to delete a table
// var thisQuery = "DROP TABLE sensorData;";

client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});