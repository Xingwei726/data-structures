// npm install aws-sdk
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

//query using "mood"
var params = {
    TableName : "processblog",
    KeyConditionExpression: "#tp = :patitionKey", // the query expression
    ExpressionAttributeNames: { // name substitution, used for reserved words in DynamoDB
        "#tp" : "mood",
    },
    ExpressionAttributeValues: { // the query values
        ":patitionKey": {S: "Calm"},
    }
};

// //query using both "mood" and "date"
// var params = {
//     TableName : "processblog",
//     KeyConditionExpression: "#tp = :patitionKey AND #dt =:sortKey", // the query expression
//     ExpressionAttributeNames: { // name substitution, used for reserved words in DynamoDB
//         "#tp" : "mood",
//         "#dt" : "date"
//     },
//     ExpressionAttributeValues: { // the query values
//         ":patitionKey": {S: "Calm"},
//         ":sortKey" : {S: new Date("Aug 16 2019").toDateString()},

//     }
// };



dynamodb.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log("***** ***** ***** ***** ***** \n", item);
        });
    }
});