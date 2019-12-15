var express = require('express'), // npm install express
    app = express();
    
var sensor = [];
var aa=[];


//1.process blog credentials    
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";
// app.use(require("cors")()) // allow Cross-domain requests 
// app.use(require('body-parser').json()) 


//2&3. sensor and aa data noSQL credentials
const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: '/home/ec2-user/environment/week10/.env'});


const db_credentials = new Object({
  user: "huanx429",
  password: process.env.AWSRDS_PW,
  host: process.env.AWSRDS_EP,
  database: "aa",
  port: 5432,
});






const client = new Client(db_credentials);
client.connect();




//0. Homepage
app.get('/', function(req, res) {
    res.send(`<h1>Data Structure</h1>
              <ul>
                  <li><a href="/processblog"> Process Blog</a></li>
                  <li><a href="/sensor"> Sensor Data</a></li>
                  <li><a href="/aameetings"> AA Data</a></li>
              </ul>`);    
});



//1. Process Blog Data Query (noSQL)
app.get('/processblog', function(req, res) {
   
   var dynamodb = new AWS.DynamoDB();
   var params = {
        TableName : "processblog",
        KeyConditionExpression: "#tp = :patitionKey",
        ExpressionAttributeNames: {
            "#tp" : "mood",
        },
        ExpressionAttributeValues: {
            ":patitionKey": {S: "Calm"},
        }
    };
   dynamodb.query(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            console.log("Query succeeded.");
            // data.Items.forEach(function(item) {
            //     console.log("***** ***** ***** ***** ***** \n", item);
            // });
            
            //Get the first process glog under mood 'calm'
            // res.send(data.Items[1]);
            
            //Get all process blog under mood 'calm'
            res.send(data);
        }
    });
});



//2. Sensor Data (SQL) Query
app.get('/sensor', function(req, res) {
    // res.send('<h3>this is the page for my sensor data</h3>'); 
        res.send(sensor);
});

// Different SQL queries for sensor data: 
// var thisQuery = "SELECT sensorValue, sensorTemp FROM sensorData;"; // print all values
var thisQuery = "SELECT * FROM sensorData;"; // print all values
// var secondQuery = "SELECT COUNT (*) FROM sensorData;"; // print the number of rows
// var thirdQuery = "SELECT sensorValue, COUNT (*) FROM sensorData GROUP BY sensorValue;"; // print the number of rows for each sensorValue

client.query(thisQuery, (err, res) => {
    if (err) {throw err}
    else {
        console.table(res.rows);
        sensor.push(res.rows);
        // client.end();
    }
});



//3. AA Data Query
app.get('/aameetings', function(req, res) {
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
    





// app.get('/sensor', function(req, res) {
//     res.send('<h3>this is the page for my sensor data</h3>'); 
// });  
    


// serve static files in /public
app.use(express.static('public'));

// listen on port 8080
app.listen(8080, function() {
    console.log('Server listening...');
});