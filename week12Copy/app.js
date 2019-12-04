// Require Express
var express = require('express');
var app = express();
var moment = require('moment');
// var moment = require('moment-timezone');

// const ash = require('express-async-handler');
// app.post('/signup', asyncHandler(async(req, res) => {
//     await firstThing()
//     await secondThing()
// }));


// TAMU service
var request = require('request');
const apiKey = process.env.TAMU_KEY;


//Process blog noSQL credentials    
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";
// var dynamodb = new AWS.DynamoDB();


//Sensor and aa data SQL credentials
const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: '/home/ec2-user/environment/week12Copy/.env'});


//Handlebar setup
var fs = require('fs');
var handlebars = require('handlebars');


app.listen(8080, function () {
  console.log('It is working!');
});


app.use(express.static('public'));
app.get('/aa',async function (req, res){
  if (req.query == {}){
    res.send(await dayFilter());
  } else {
    res.send(await dayFilter(req.query.day, req.query.type));
  }
});

// function dayFilter(day){
//   return new Promise(resolve => {
//       // var now = moment.tz(Date.now(), "America/New_York"); 
//       dayy = day || moment().format("dddd") + 's'; 
//       console.log(day)
//       var output = {};
     
//       const db_credentials = new Object({
//         user: "huanx429",
//         password: process.env.AWSRDS_PW,
//         host: process.env.AWSRDS_EP,
//         database: "aa",
//         port: 5432,
//       });
      
//       const client = new Client(db_credentials);
//       client.connect();
      
//       var thisQuery = `SELECT latitude, longitude, locationTitle, city, state, zip, json_agg(json_build_object('location', locationTitle, 'address', streetInfo,'details',details, 'meeting', meetingName, 'day', meetingDay, 'types', meetingType,'shour', TimeStart)) as meeting
//       FROM aameetings
//       WHERE meetingDay = '` + dayy + `'
//       GROUP BY locationTitle, latitude, longitude, city, state, zip
//       ;`;

//       // var aaQuery;
//       // aaQuery = "SELECT latitude, longitude, details, json_agg(json_build_object('location', locationTitle, 'address', streetInfo, 'meeting', meetingName)) as meeting ";
//       // aaQuery +=  "FROM aameetings ";
//       // aaQuery +=  "WHERE meetingDay = '" + dayy +"'";
//       // aaQuery += "GROUP BY latitude, longitude, locations.Extended_Address;";
      
      
//       client.query(thisQuery, async (err, res) => {
//         if (err){console.log(err)}
//             console.log(res)
//             await fs.readFile('./aahandle.html', 'utf8', (error, data) => {
//               var template = handlebars.compile(data);
//               output.meetings = res.rows;
//               var html = template(output);
//               resolve([html,res.rows]);
//             });
//             client.end();
//         });
//     });
// }
 
 

function dayFilter(day, type){
  return new Promise(resolve => {
      // var now = moment.tz(Date.now(), "America/New_York"); 
      dayy = day || moment().format("dddd") + 's'; 
      typee = type;
      console.log(day)
      var output = {};
     
      const db_credentials = new Object({
        user: "huanx429",
        password: process.env.AWSRDS_PW,
        host: process.env.AWSRDS_EP,
        database: "aa",
        port: 5432,
      });
      
      const client = new Client(db_credentials);
      client.connect();
      
      var thisQuery = `SELECT latitude, longitude, locationTitle, city, state, zip, json_agg(json_build_object('location', locationTitle, 'address', streetInfo,'details',details, 'meeting', meetingName, 'day', meetingDay, 'types', meetingType,'shour', TimeStart)) as meeting
      FROM aameetings
      WHERE meetingDay = '` + dayy + `' AND meetingType = '` + typee + `'
      GROUP BY locationTitle, latitude, longitude, city, state, zip
      ;`;

      // var aaQuery;
      // aaQuery = "SELECT latitude, longitude, details, json_agg(json_build_object('location', locationTitle, 'address', streetInfo, 'meeting', meetingName)) as meeting ";
      // aaQuery +=  "FROM aameetings ";
      // aaQuery +=  "WHERE meetingDay = '" + dayy +"'";
      // aaQuery += "GROUP BY latitude, longitude, locations.Extended_Address;";
      
      
      client.query(thisQuery, async (err, res) => {
        if (err){console.log(err)}
            console.log(res)
            await fs.readFile('./aahandle.html', 'utf8', (error, data) => {
              var template = handlebars.compile(data);
              output.meetings = res.rows;
              var html = template(output);
              resolve([html,res.rows]);
            });
            client.end();
        });
    });
 }

