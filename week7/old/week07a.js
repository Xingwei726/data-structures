const { Client } = require('pg');
const dotenv = require('dotenv').config();

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'AAAdmin';
db_credentials.host = 'database-structures.csjve6pmlqxu.us-east-2.rds.amazonaws.com';
db_credentials.database = 'aa';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

//To avoid calling the database multiple times with different requests, one long request string will be concatinated
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
                                        details varchar(200),\
                                        wheelchair_access BOOL,\
                                        Zone varchar(25),\
                                        latitude double precision,\
                                        longitude double precision);";
    
    //The two tables below include both ynamically generated primary keys and foreign keys to create realtionships between the tables.
    query += "CREATE TABLE groups (groupID serial primary key,\
                                    locationID int references locations(locationID),\
                                    groupTitle varchar(100),\
                                    details varchar(200));";
    

    // * Note for improvement: start and end could be time datatype but will not accept current JSON value                         
    query += "CREATE TABLE events (meetingsID serial primary key,\
                                    groupID int references groups(groupID),\
                                    day varchar(100),\
                                    timeStart time,\
                                    timeEnd time,\
                                    meetingType varchar(20));";
}

// Uncomment this to check Schema                               
// query = 'SELECT * FROM INFORMATION_SCHEMA.COLUMNS';

//run the query string from above
client.query(query, (err, res) => {
    console.log(err, res);
    client.end();
});