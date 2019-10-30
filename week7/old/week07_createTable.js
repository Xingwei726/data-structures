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
//                                           locationName varchar(200),
//                                           streetInfo varchar(200),
//                                           city varchar(25),
//                                           state varchar(25),
//                                           zip varchar(25),
//                                           details varchar(200),
//                                           wheelchair_access boolean,
//                                           zone varchar(25),
//                                           latitude double precision,
//                                           longitude double precision);`;
                                          
// var thisQuery = `CREATE TABLE aalocations (
//                                           locationID serial primary key,
//                                           locationName varchar(200),
//                                           streetInfo varchar(200),
//                                           city varchar(25),
//                                           state varchar(25),
//                                           zip varchar(25),
//                                           details varchar(200),
//                                           wheelchair_access boolean,
//                                           zone varchar(25),
//                                           latitude double precision,
//                                           longitude double precision);`;                                          
                                          
                                          
// var thisQuery = `CREATE TABLE aagroups (groupID serial primary key,
//                                         details varchar(200),
//                                         groupTitle varchar(100),
//                                         locationID int references locations(LocationID));`;
// var thisQuery = `CREATE TABLE aameetings (meetingsID serial primary key,
//                                           groupID int references groups(GroupID),
//                                           Day varchar(25),
//                                           TimeStart varchar(25),
//                                           TimeEnd varchar(25),
//                                           Meeting_Type varchar(25));`;

// Sample SQL statement to delete a table
var thisQuery = "DROP TABLE aalocations;";
// var thisQuery = "DROP TABLE aagroups;";
// var thisQuery = "DROP TABLE aameetings;"; 



client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});