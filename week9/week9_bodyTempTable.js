const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: '/home/ec2-user/environment/week9/.env'});


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



//This table have everything                                            
var thisQuery = `CREATE TABLE bodytemps (
                                          tempDate varchar(25),
                                          tempDay varchar(25),
                                          tempTime varchar(25),
                                          tempValue double precision);`;                                           
                                          

// Sample SQL statement to delete a table
// var thisQuery = "DROP TABLE bodytemps;";




client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});