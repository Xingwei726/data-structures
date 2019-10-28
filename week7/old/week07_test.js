const { Client } = require('pg');
const async = require('async');
var escape = require('pg-escape');

const dotenv = require('dotenv').config();
const fs = require('fs');

// AWS RDS POSTGRESQL INSTANCE
const db_credentials = new Object({
   user: "huanx429",
   password: process.env.AWSRDS_PW,
   host: "database-structures.c9iddlpctkv6.us-east-1.rds.amazonaws.com",
   database: "aa",
   port: 5432,
});

//Read the previously saved json file
fs.readFile('data/AAAll.json', 'utf8', (error, data) => {
    if (error) throw error;
    //parse the json so it cant be used as an object
    var meetings = JSON.parse(data);

    //for each element in the json, extract the location name
    async.forEachOf(meetings, function(locationObj,location, callback) {
        const client = new Client(db_credentials);
        client.connect();
        
        //create a query string with the values from the json to be entered into the locations table (values are enetered in order), returning the assigned location id to be used for the groups table
        var locationQuery = escape("INSERT INTO locations VALUES (DEFAULT,%L,%L,%L,%L,%L,%s,%L,%s,%s,%s) RETURNING locationID;",
        location,
        meetings[location]['address']['streetInfo'],
        meetings[location]['address']['city'],
        meetings[location]['address']['state'],
        meetings[location]['address']['zip'],
        meetings[location]['address']['wheelchair_access'],
        meetings[location]['address']['details'],
        meetings[location]['address']['coords']['latitude'],
        meetings[location]['address']['coords']['longitude'],
        meetings[location]['address']['zone']);
        
        //create a query using the query string
        client.query(locationQuery, (err, res) => {
            if (err) {
                console.log(err, locationQuery);
            } else {
                // in the information has been enetered correct and a new location ID has been created, continue to add the groups associated with that location
                console.log('locationID: ' + res.rows[0].locationID);
                client.end();
                // for each of the nested groups, create a query string and add them to the groups table
                async.forEachOf(meetings[location]['meetings'], function(groupObj,group, callback) {
                    const client = new Client(db_credentials);
                    client.connect();
                        var meetingQuery = escape("INSERT INTO groups VALUES (DEFAULT, %s, %L, %L) RETURNING groupID;", res.rows[0].locationID, group, meetings[location]['meetings'][group]['details']);

                    client.query(meetingQuery, (err, res) => {
                        if (err) {
                            console.log(err, meetingQuery);
                        } else {
                            // in the information has been enetered correct and a new group ID has been created, continue to add the events associated with that group
                            console.log('groupID: ' + res.rows[0].groupID);
                            client.end();
                            
                            async.forEachOf(meetings[location]['meetings'][group]['times'], function(eventObj,event, callback) {
                                const client = new Client(db_credentials);
                                client.connect();
                                    var eventQuery = escape("INSERT INTO events VALUES (DEFAULT, %s, %L, %L, %L, %L, %L) RETURNING meetingsID;",
                                    res.rows[0].group_id,
                                    meetings[location]['meetings'][group]['times'][event]['day'],
                                    meetings[location]['meetings'][group]['times'][event]['timeStart'],
                                    meetings[location]['meetings'][group]['times'][event]['timeEnd'],
                                    meetings[location]['meetings'][group]['times'][event]['type'],
                                    );

                                client.query(eventQuery, (err, res) => {
                                    if (err) {
                                        console.log(err, eventQuery);
                                    } else {
                                        //confirm that the events have been created
                                        console.log('meetingsID: ' + res.rows[0].event_id);
                                        client.end();
                                    }
                                });
                            
                            setTimeout(callback, 2000); 
                            });
                        }
                    });
                
                setTimeout(callback, 2000); 
                });
            }
        });
    
    setTimeout(callback, 2000); 
    }); 
});