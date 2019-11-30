// Require Express
var express = require('express');
var app = express();
var moment = require('moment');

// TAMU service
var request = require('request');
const apiKey = process.env.TAMU_KEY;

//Process blog noSQL credentials    
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";
var dynamodb = new AWS.DynamoDB();

// app.use(require("cors")()) // allow Cross-domain requests 
// app.use(require('body-parser').json()) 


//Sensor and aa data SQL credentials
const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: '/home/ec2-user/environment/week12/.env'});

const db_credentials = new Object({
  user: "huanx429",
  password: process.env.AWSRDS_PW,
  host: process.env.AWSRDS_EP,
  database: "aa",
  port: 5432,
});


var aa=[];

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

app.use(express.static('public'));

const client = new Client(db_credentials);
client.connect();


// end point to return AA meeting data in both JSON format and HTML format (via handlebars)
// app.get('/aa', async function (req, res) {
//     if (req.query == {}){
//         res.send(await aa());
//     } else {
//         res.send(await aa(req.query.after,req.query.before,req.query.day));
//     }
// });
 
//3. AA Data Query
app.get('/aa', function(req, res) {
    // res.send('<h3>this is the page for my sensor data</h3>'); 
        res.send(aa);
});

//Different SQL quries for aa data
// var aaQuery = "SELECT locationTitle FROM aameetings;";
// var aaQuery = "SELECT locationTitle, meetingName, TimeStart FROM aameetings ORDER BY TimeStart";
// var aaQuery = "SELECT locationTitle, meetingName, meetingDay, TimeStart FROM aameetings WHERE meetingDay = 'Tuesdays'";
var aaQuery = "SELECT locationTitle, meetingName, meetingDay, meetingType, TimeStart FROM aameetings WHERE meetingDay = 'Tuesdays' AND meetingType = 'O'";





client.query(aaQuery, (err, res) => {
    if (err) {throw err}
    else {
        console.table(res.rows);
        aa.push(res.rows);
        client.end();
    }
});


