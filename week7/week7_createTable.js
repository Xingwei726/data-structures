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

// var thisQuery = `CREATE TABLE aalocations (
//                                           locationID serial primary key,
//                                           locationTitle varchar(200),
//                                           streetInfo varchar(200),
//                                           city varchar(25),
//                                           state varchar(25),
//                                           zip varchar(25),
//                                           details varchar(200),
//                                           wheelchair BOOL,
//                                           zone smallint,
//                                           latitude double precision,
//                                           longitude double precision);`;
            
                                      
// var thisQuery = `CREATE TABLE aameetings (
//                                           meetingID serial primary key,
//                                           locationID int references aalocations(locationID),
//                                           meetingName varchar(200),
//                                           meetingDay varchar(25),
//                                           TimeStart varchar(25),
//                                           TimeEnd varchar(25),
//                                           meetingType varchar(25));`; 

//This table have everything                                            
var thisQuery = `CREATE TABLE aameetings (
                                          locationID serial primary key,
                                          locationTitle varchar(200),
                                          streetInfo varchar(200),
                                          city varchar(25),
                                          state varchar(25),
                                          zip varchar(25),
                                          details varchar(200),
                                          wheelchair BOOL,
                                          zone smallint,
                                          latitude double precision,
                                          longitude double precision,
                                          meetingName varchar(200),
                                          meetingDay varchar(25),
                                          TimeStart varchar(25),
                                          TimeEnd varchar(25),
                                          meetingType varchar(25));`;                                           
                                          

// var thisQuery = `CREATE TABLE aameetings (meetingsID serial primary key,
//                                           meetingName varchar(200),
//                                           meetingDay varchar(25),
//                                           TimeStart varchar(25),
//                                           TimeEnd varchar(25),
//                                           meetingType varchar(25));`;


// Sample SQL statement to delete a table
// var thisQuery = "DROP TABLE aalocations;";
// var thisQuery = "DROP TABLE aagroups;";
// var thisQuery = "DROP TABLE aameetings;"; 



client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});


