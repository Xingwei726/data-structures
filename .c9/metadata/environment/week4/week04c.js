{"filter":false,"title":"week04c.js","tooltip":"/week4/week04c.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":24,"column":0},"end":{"row":30,"column":31},"action":"remove","lines":["","// client.connect()","// .then(() => console.log(\"Connected successfully\"))","// .then(() => client.query(\"select * from employees\"))","// .then(results => console.table (results.rows))","// .catch(e => console.log(e))","// .finally(() =>client.end());"],"id":8}],[{"start":{"row":22,"column":0},"end":{"row":23,"column":17},"action":"remove","lines":["    console.log(err, res.rows);","    client.end();"],"id":10},{"start":{"row":22,"column":0},"end":{"row":26,"column":5},"action":"insert","lines":["    if (err) {throw err}","    else {","        console.table(res.rows);","        client.end();","    }"]}],[{"start":{"row":6,"column":0},"end":{"row":11,"column":27},"action":"remove","lines":["var db_credentials = new Object();","db_credentials.user = 'huanx429';","db_credentials.host = 'database-structures.c9iddlpctkv6.us-east-1.rds.amazonaws.com';","db_credentials.database = 'aa';","db_credentials.password = process.env.AWSRDS_PW;","db_credentials.port = 5432;"],"id":9},{"start":{"row":6,"column":0},"end":{"row":12,"column":3},"action":"insert","lines":["const db_credentials = new Object({","   user: \"huanx429\",","   password: process.env.AWSRDS_PW,","   host: \"database-structures.c9iddlpctkv6.us-east-1.rds.amazonaws.com\",","   database: \"aa\",","   port: 5432,","});"]}]]},"ace":{"folds":[],"scrolltop":187.5,"scrollleft":0,"selection":{"start":{"row":6,"column":34},"end":{"row":6,"column":34},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":10,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1570991415588,"hash":"3d4b3c2c76ab8dbd0a987b387fd1035134dba9d2"}