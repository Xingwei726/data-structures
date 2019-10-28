const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: '/home/ec2-user/environment/week7/.env'});


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
//                                         locationID int references locations(locationID),
//                                         groupTitle varchar(100),
//                                         details varchar(200),);`;
                                        
// var thisQuery = `CREATE TABLE aameetings (meetingsID serial primary key,
//                                           groupID int references groups(groupID),
//                                           day varchar(25),
//                                           timeStart varchar(25),
//                                           timeEnd varchar(25),
//                                           meetingType varchar(25));`;

// Sample SQL statement to delete a table
// var thisQuery = "DROP TABLE aalocations;";
// var thisQuery = "DROP TABLE aagroups;";
// var thisQuery = "DROP TABLE aameetings;"; 



var query = "";

var drop = false;

//This file will both add new tables and drop (delete) them. Changing the flag above will switch options.
if (drop == true) {
    
    // SQL statement to delete a table: 
    query += "DROP TABLE if exists events cascade;";
    query += "DROP TABLE if exists groups cascade;";
    query += "DROP TABLE if exists locations cascade;";
    
} else {
    
    // SQL statement to create a table: 
    query += "CREATE TABLE locations (locationID serial primary key,\
                                        locationName varchar(100),\
                                        streetInfo varchar(100),\
                                        city varchar(100),\
                                        state varchar(2),\
                                        zip varchar(5),\
                                        wheelchair_access BOOL,\
                                        details varchar(200),\
                                        latitude double precision,\
                                        longitude double precision,\
                                        Zone smallint);";
    
    //The two tables below include both ynamically generated primary keys and foreign keys to create realtionships between the tables.
    query += "CREATE TABLE groups (groupID serial primary key,\
                                    locationID int references locations(locationID),\
                                    groupTitle varchar(100),\
                                    details varchar(500));";
    

    // * Note for improvement: start and end could be time datatype but will not accept current JSON value                         
    query += "CREATE TABLE events (meetingsID serial primary key,\
                                    groupID int references groups(groupID),\
                                    day varchar(100),\
                                    timeStart time,\
                                    timeEnd time,\
                                    meetingType varchar(20));";





client.query(query, (err, res) => {
    console.log(err, res);
    client.end();
});

}

























// 