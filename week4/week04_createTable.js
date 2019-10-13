const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: '/home/ec2-user/environment/week4/.env'});


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

var thisQuery = `CREATE TABLE aalocations (
                                          locationTitle varchar(200),
                                          streetInfo varchar(200),
                                          city varchar(25),
                                          state varchar(25),
                                          zip varchar(25),
                                          details varchar(200),
                                          latitude double precision,
                                          longitude double precision,
                                          meetingName varchar(200), 
                                          day VARCHAR(10),
                                          startTime VARCHAR(20),
                                          endTime VARCHAR(20),
                                          type VARCHAR(10));`;
                                          
// var thisQuery = `CREATE TABLE aalocations (
//                                           LocationTitle varchar(100),
//                                           AddressStreetInfo varchar(75),
//                                           City varchar(25),
//                                           State varchar(25),
//                                           Zipcode varchar(25),
//                                           Details varchar(200),
//                                           Accessibility boolean,
//                                           Latitude double precision,
//                                           Longitude double precision,
//                                           Zone varchar(25));`;                                         
                                          
// var thisQuery = `CREATE TABLE aagroups (GroupID serial primary key,
//                                         Details varchar(200),
//                                         GroupTitle varchar(100),
//                                         LocationID int references locations(LocationID));`;
// var thisQuery = `CREATE TABLE aameetings (MeetingsID serial primary key,
//                                           GroupID int references groups(GroupID),
//                                           Day varchar(25),
//                                           TimeStart varchar(25),
//                                           TimeEnd varchar(25),
//                                           Meeting_Type varchar(25));`;

// Sample SQL statement to delete a table
// var thisQuery = "DROP TABLE aalocations;";
// var thisQuery = "DROP TABLE aagroups;";
// var thisQuery = "DROP TABLE aameetings;"; 



client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});

























// 