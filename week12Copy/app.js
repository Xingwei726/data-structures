// Require Express
var express = require('express');
var app = express();
var moment = require('moment');
// var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: true });
// var moment = require('moment-timezone');



// TAMU service
var request = require('request');
const apiKey = process.env.TAMU_KEY;


//Process blog noSQL credentials    
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";
var dynamodb = new AWS.DynamoDB();



//Sensor and aa data SQL credentials
const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: '/home/ec2-user/environment/week12Copy/.env'});


//Handlebar setup
var fs = require('fs');
var handlebars = require('handlebars');

var sensor = {};









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


app.get('/temp', async function(req, res) {
    if (req.query == {}){
        res.send(await temp());
    } else {
        res.send(await temp(req.query.period));
    }
});


// app.get('/pb', async function (req, res) {
//     if (req.query == {}){
//         res.send(await processBlog());
//     } else {
//         res.send(await processBlog(req.query.start,req.query.end,req.query.mood));
//     } 
// });


app.get('/pb', async function (req, res) {
    if (req.query == {}){
        res.send(await processBlog());
    } else {
         res.send(await processBlog(req.query.mood));
    } 
});




function temp(period){
  return new Promise(resolve =>{
        period = period || 'Month'
        
        var start;
        var end = new Date().toISOString();
        
        if (period == 'Month'){
            start = moment(end).subtract(30, 'days').format();
        } else {
            start = moment(end).subtract(7, 'days').format();
        }
        
        const db_credentials = new Object({
          user: "huanx429",
          password: process.env.AWSRDS_PW,
          host: process.env.AWSRDS_EP,
          database: "aa",
          port: 5432,
        });
        
        const client = new Client(db_credentials);
        client.connect();
        
        var thisQuery = `SELECT 
        EXTRACT(DAY FROM sensortemp) as sensorday,
        EXTRACT(HOUR FROM sensortemp) as sensorhour,
        AVG(sensorvalue::int) as AVGTEMP
        FROM sensorData
        GROUP BY sensorday,sensorhour
        ORDER BY sensorday
        ;`;
        
        
        client.query(thisQuery, async(err, res) => {
            if (err) {
                console.log(err);
            } else {
                resolve(res.rows);
            }
        });
    });
}






function dayFilter(day, type){
  return new Promise(resolve => {
      // var now = moment.tz(Date.now(), "America/New_York"); 
      var dayy = day || moment().format("dddd") + 's'; 
      var typee = type;
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



// //8. Create a function to query data by concepts 

// function processBlog(minDate, maxDate, patitionKey){
//     return new Promise(resolve => {
//         var output = {};
        
//         minDate = minDate || "Tue Sep 10 2019";
//         maxDate = maxDate || "Thu Oct 10 2019"; 
//         patitionKey = patitionKey || "calm";

//         output.blogpost = [];
        
//         if (patitionKey != 'all'){
//             var params = {
//                 TableName : "processblog",
//                 KeyConditionExpression: "#tp = :patitionKey and created between :minDate and :maxDate",
//                 ExpressionAttributeNames: {
//                     "#tp" : "mood",
//                 },
//                 ExpressionAttributeValues: { 
//                     ":patitionKey": {S: patitionKey},
//                     ":minDate": {S: new Date(minDate).toISOString()},
//                     ":maxDate": {S: new Date(maxDate).toISOString()},
//                 }
//             };
            
//             dynamodb.query(params, onScan);

//         } else {
//             var params = {
//                 TableName: "processblog",
//                 ProjectionExpression: "title, mood, content, cupofcoffee, color, eatchocolate, iate",
//                 FilterExpression: "created between :minDate and :maxDate",
//                 ExpressionAttributeValues: { // the query values
//                     ":minDate": {S: new Date(minDate).toISOString()},
//                     ":maxDate": {S: new Date(maxDate).toISOString()}
//                 }
//             };
            
//             dynamodb.scan(params, onScan)

//         }
        
//         function onScan(err, data) {
//             if (err) {
//                 console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
//             } else {
//                 // print all the movies
//                 console.log("Scan succeeded.");
//                 data.Items.forEach(function(item) {
//                     output.blogpost.push({'title':item.title.S, 'content':item.content.S,'created':moment(item.date.S).format("LL")});
//                 });
    
//                 fs.readFile('pbhandlebars.html', 'utf8', (error, data) => {
//                     var template = handlebars.compile(data);
//                     var html = template(output);
//                     resolve(html);
//                 });
//             }
//         };
//     });
// }
 
 
 
 
 //8. Create a function to query data by concepts 
function processBlog(mood){
    return new Promise(resolve => {
     
        var output = {};
        output.blogpost = [];
        var patitionKeyy=mood

        var params = {
            TableName : "processblog",
            KeyConditionExpression: "#tp = :patitionKey", // the query expression
            ExpressionAttributeNames: { // name substitution, used for reserved words in DynamoDB
                "#tp" : "mood",
            },
            ExpressionAttributeValues: { // the query values
                ":patitionKey": {S: patitionKeyy},
            }
        };

        
        dynamodb.query(params, function(err, data) {
            if (err) {
                console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            } else {
                console.log("Query succeeded.");
                    data.Items.forEach(function(item) {
                        console.log("***** ***** ***** ***** ***** \n", item);
                        output.blogpost.push({'title':item.title.S, 'mood':item.mood.S,'date':moment(item.date.S).format("L"),'color':item.color.S,'coffee':item.cupofcoffee.N,'content':item.content.S});
                    });
                    fs.readFile('pbhandle.html', 'utf8', (error, data) => {
                        console.log(data)
                        var template = handlebars.compile(data);
                        var html = template(output);
                        resolve(html);
                    });
            }
        });
    });
 }