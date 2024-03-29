## Assignment Description

 - Working with my sensor, create a table to store my sensor data.
 - Continuously writing values to it using PM2 at a frequency of once every five minutes.

## Working Process
**Part One: Plan & Setup**

Because the dataset I will be using to design my temperature data visualization are pairs of external temperature and internal body temperature along one month timeline. The database itself doesn't have to be horizontally scalable as well as the data types can be fixed at this early stage so I chose to set up a PostgreSQL using the following javascript:

```javascript
const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: '/home/ec2-user/environment/week9/.env'});
const db_credentials = new Object({
   user: "huanx429",
   password: process.env.AWSRDS_PW,
   host: process.env.AWSRDS_EP,
   database: "aa",
   port: 5432,
});

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

var thisQuery = "CREATE TABLE sensorData ( sensorValue double precision, sensorTemp timestamp DEFAULT current_timestamp );";

client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});
```



**Part Two: Collecting External Temperature Data**

Connected my electron with Web IDE, I tested it in the web server to see if it's actually working. 
![](webtest.png)

After I made sure everything is set up and ready to go, in AWS I created a script file with the starter code, using following function to query temperature value and insert the values to the PostgreSQL I've created in Part 1.

```javascript
var getAndWriteData = function() {
    
    // Make request to the Particle API to get sensor values
    request(device_url, function(error, response, body) {
        
        // Store sensor value(s) in a variable
        var sv = JSON.parse(body).result;
        
        const client = new Client(db_credentials);
        client.connect();
        var thisQuery = "INSERT INTO sensorData VALUES (" + sv + ", DEFAULT);";
        console.log(thisQuery); // for debugging

        // Connect to the AWS RDS Postgres database and insert a new row of sensor values
        client.query(thisQuery, (err, res) => {
            console.log(err, res);
            client.end();
        });
    });
};
```
Then I changed the default setting in Cloud9 to specify that I would like my server to run continuously.  Installed [PM2 Runtime](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/) so it will help me to run the query code every 5 minutes. They also have a web-based dashboard where you can monitor all activities.
![](PM2.png)

**Part Three: Collecting Body Temperature Data**

For measuring core body temperature, I decided to use a less 'advanced' tool---a thermometer--- to help me track the data. It's an instant accurate reading thermometer which automatically save the last 35 readings and store them. It came with four modes: measure the temperature of ear, forehead, object surface and room. So I will measure my core body temperature once every hour.
![](thermometer.png)

![](bodyTemp.png)


**Part Four: Check Database**

Use the starter code to query all of the contents in my database to check if data pairs have been inserted successfully.
![](checkDatabase.png)

## Conclusions:
Because my device is 3G cellular-connected, I noticed that in some area it lost it's connection or the connection is not strong enough so it started to blink green. For example at my Quantitative Method class, usually the cell phone signal is weak inside the classroom, electron can't connect to the cellular data as well. This means I have to extremely careful and check on my device once in a while to make sure it's not losing connection for a long time. Other than that I'm quite exciting about the datasets I'm collecting and wonder what's the pattern I may discover with them.
