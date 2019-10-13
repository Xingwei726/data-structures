{"filter":false,"title":"test.js","tooltip":"/week4/test.js","undoManager":{"mark":39,"position":39,"stack":[[{"start":{"row":0,"column":0},"end":{"row":22,"column":3},"action":"insert","lines":["const { Client } = require('pg');","","// AWS RDS POSTGRESQL INSTANCE","var db_credentials = new Object();","db_credentials.user = 'aaron';","db_credentials.host = 'dsdemo.c2g7qw1juwkg.us-east-1.rds.amazonaws.com';","db_credentials.database = 'mydb';","db_credentials.password = process.env.AWSRDS_PW;","db_credentials.port = 5432;","","// Connect to the AWS RDS Postgres database","const client = new Client(db_credentials);","client.connect();","","// Sample SQL statement to create a table: ","var thisQuery = \"CREATE TABLE aalocations (address varchar(100), lat double precision, long double precision);\";","// Sample SQL statement to delete a table: ","// var thisQuery = \"DROP TABLE aalocations;\"; ","","client.query(thisQuery, (err, res) => {","    console.log(err, res);","    client.end();","});"],"id":1}],[{"start":{"row":6,"column":27},"end":{"row":6,"column":31},"action":"remove","lines":["mydb"],"id":2},{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["a"]},{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":["a"]}],[{"start":{"row":10,"column":43},"end":{"row":10,"column":44},"action":"insert","lines":[" "],"id":3}],[{"start":{"row":10,"column":44},"end":{"row":10,"column":46},"action":"insert","lines":["()"],"id":4}],[{"start":{"row":10,"column":45},"end":{"row":10,"column":46},"action":"insert","lines":["n"],"id":5},{"start":{"row":10,"column":46},"end":{"row":10,"column":47},"action":"insert","lines":["o"]},{"start":{"row":10,"column":47},"end":{"row":10,"column":48},"action":"insert","lines":["t"]}],[{"start":{"row":10,"column":48},"end":{"row":10,"column":49},"action":"insert","lines":[" "],"id":6},{"start":{"row":10,"column":49},"end":{"row":10,"column":50},"action":"insert","lines":["g"]},{"start":{"row":10,"column":50},"end":{"row":10,"column":51},"action":"insert","lines":["o"]},{"start":{"row":10,"column":51},"end":{"row":10,"column":52},"action":"insert","lines":["n"]},{"start":{"row":10,"column":52},"end":{"row":10,"column":53},"action":"insert","lines":["n"]},{"start":{"row":10,"column":53},"end":{"row":10,"column":54},"action":"insert","lines":["a"]}],[{"start":{"row":10,"column":54},"end":{"row":10,"column":55},"action":"insert","lines":[" "],"id":7},{"start":{"row":10,"column":55},"end":{"row":10,"column":56},"action":"insert","lines":["c"]},{"start":{"row":10,"column":56},"end":{"row":10,"column":57},"action":"insert","lines":["h"]},{"start":{"row":10,"column":57},"end":{"row":10,"column":58},"action":"insert","lines":["a"]},{"start":{"row":10,"column":58},"end":{"row":10,"column":59},"action":"insert","lines":["n"]},{"start":{"row":10,"column":59},"end":{"row":10,"column":60},"action":"insert","lines":["g"]},{"start":{"row":10,"column":60},"end":{"row":10,"column":61},"action":"insert","lines":["e"]}],[{"start":{"row":14,"column":43},"end":{"row":14,"column":45},"action":"insert","lines":["()"],"id":8}],[{"start":{"row":14,"column":44},"end":{"row":14,"column":45},"action":"insert","lines":["s"],"id":9},{"start":{"row":14,"column":45},"end":{"row":14,"column":46},"action":"insert","lines":["e"]},{"start":{"row":14,"column":46},"end":{"row":14,"column":47},"action":"insert","lines":["m"]},{"start":{"row":14,"column":47},"end":{"row":14,"column":48},"action":"insert","lines":["i"]},{"start":{"row":14,"column":48},"end":{"row":14,"column":49},"action":"insert","lines":["c"]},{"start":{"row":14,"column":49},"end":{"row":14,"column":50},"action":"insert","lines":["o"]},{"start":{"row":14,"column":50},"end":{"row":14,"column":51},"action":"insert","lines":["l"]},{"start":{"row":14,"column":51},"end":{"row":14,"column":52},"action":"insert","lines":["o"]},{"start":{"row":14,"column":52},"end":{"row":14,"column":53},"action":"insert","lines":["n"]}],[{"start":{"row":14,"column":53},"end":{"row":14,"column":54},"action":"insert","lines":[" "],"id":10},{"start":{"row":14,"column":54},"end":{"row":14,"column":55},"action":"insert","lines":["i"]},{"start":{"row":14,"column":55},"end":{"row":14,"column":56},"action":"insert","lines":["s"]}],[{"start":{"row":14,"column":56},"end":{"row":14,"column":57},"action":"insert","lines":[" "],"id":11},{"start":{"row":14,"column":57},"end":{"row":14,"column":58},"action":"insert","lines":["i"]},{"start":{"row":14,"column":58},"end":{"row":14,"column":59},"action":"insert","lines":["m"]},{"start":{"row":14,"column":59},"end":{"row":14,"column":60},"action":"insert","lines":["p"]},{"start":{"row":14,"column":60},"end":{"row":14,"column":61},"action":"insert","lines":["o"]},{"start":{"row":14,"column":61},"end":{"row":14,"column":62},"action":"insert","lines":["r"]},{"start":{"row":14,"column":62},"end":{"row":14,"column":63},"action":"insert","lines":["t"]}],[{"start":{"row":14,"column":63},"end":{"row":14,"column":64},"action":"insert","lines":["a"],"id":12},{"start":{"row":14,"column":64},"end":{"row":14,"column":65},"action":"insert","lines":["n"]},{"start":{"row":14,"column":65},"end":{"row":14,"column":66},"action":"insert","lines":["t"]},{"start":{"row":14,"column":66},"end":{"row":14,"column":67},"action":"insert","lines":["?"]}],[{"start":{"row":14,"column":66},"end":{"row":14,"column":67},"action":"remove","lines":["?"],"id":13}],[{"start":{"row":14,"column":66},"end":{"row":14,"column":67},"action":"insert","lines":["!"],"id":14},{"start":{"row":14,"column":67},"end":{"row":14,"column":68},"action":"insert","lines":["!"]},{"start":{"row":14,"column":68},"end":{"row":14,"column":69},"action":"insert","lines":["!"]}],[{"start":{"row":14,"column":53},"end":{"row":14,"column":54},"action":"insert","lines":[" "],"id":15},{"start":{"row":14,"column":54},"end":{"row":14,"column":55},"action":"insert","lines":["h"]},{"start":{"row":14,"column":55},"end":{"row":14,"column":56},"action":"insert","lines":["e"]},{"start":{"row":14,"column":56},"end":{"row":14,"column":57},"action":"insert","lines":["r"]},{"start":{"row":14,"column":57},"end":{"row":14,"column":58},"action":"insert","lines":["e"]}],[{"start":{"row":5,"column":24},"end":{"row":5,"column":70},"action":"remove","lines":["sdemo.c2g7qw1juwkg.us-east-1.rds.amazonaws.com"],"id":16},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"remove","lines":["d"]}],[{"start":{"row":5,"column":23},"end":{"row":5,"column":79},"action":"insert","lines":["data-structures.c9iddlpctkv6.us-east-1.rds.amazonaws.com"],"id":17}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":28},"action":"remove","lines":["aaron"],"id":24},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["h"]},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["u"]},{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"insert","lines":["a"]},{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"insert","lines":["n"]},{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":["x"]},{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"insert","lines":["4"]},{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":["2"]},{"start":{"row":4,"column":30},"end":{"row":4,"column":31},"action":"insert","lines":["9"]}],[{"start":{"row":16,"column":43},"end":{"row":16,"column":45},"action":"insert","lines":["()"],"id":25}],[{"start":{"row":16,"column":44},"end":{"row":16,"column":45},"action":"insert","lines":["i"],"id":26},{"start":{"row":16,"column":45},"end":{"row":16,"column":46},"action":"insert","lines":["t"]}],[{"start":{"row":16,"column":46},"end":{"row":16,"column":47},"action":"insert","lines":[" "],"id":27},{"start":{"row":16,"column":47},"end":{"row":16,"column":48},"action":"insert","lines":["w"]},{"start":{"row":16,"column":48},"end":{"row":16,"column":49},"action":"insert","lines":["i"]},{"start":{"row":16,"column":49},"end":{"row":16,"column":50},"action":"insert","lines":["l"]},{"start":{"row":16,"column":50},"end":{"row":16,"column":51},"action":"insert","lines":["l"]}],[{"start":{"row":16,"column":51},"end":{"row":16,"column":52},"action":"insert","lines":[" "],"id":28},{"start":{"row":16,"column":52},"end":{"row":16,"column":53},"action":"insert","lines":["d"]},{"start":{"row":16,"column":53},"end":{"row":16,"column":54},"action":"insert","lines":["e"]},{"start":{"row":16,"column":54},"end":{"row":16,"column":55},"action":"insert","lines":["l"]},{"start":{"row":16,"column":55},"end":{"row":16,"column":56},"action":"insert","lines":["e"]},{"start":{"row":16,"column":56},"end":{"row":16,"column":57},"action":"insert","lines":["t"]},{"start":{"row":16,"column":57},"end":{"row":16,"column":58},"action":"insert","lines":["e"]}],[{"start":{"row":16,"column":58},"end":{"row":16,"column":59},"action":"insert","lines":[" "],"id":29},{"start":{"row":16,"column":59},"end":{"row":16,"column":60},"action":"insert","lines":["f"]},{"start":{"row":16,"column":60},"end":{"row":16,"column":61},"action":"insert","lines":["o"]},{"start":{"row":16,"column":61},"end":{"row":16,"column":62},"action":"insert","lines":["r"]},{"start":{"row":16,"column":62},"end":{"row":16,"column":63},"action":"insert","lines":["e"]},{"start":{"row":16,"column":63},"end":{"row":16,"column":64},"action":"insert","lines":["v"]},{"start":{"row":16,"column":64},"end":{"row":16,"column":65},"action":"insert","lines":["e"]},{"start":{"row":16,"column":65},"end":{"row":16,"column":66},"action":"insert","lines":["r"]}],[{"start":{"row":16,"column":66},"end":{"row":16,"column":67},"action":"insert","lines":["."],"id":30},{"start":{"row":16,"column":67},"end":{"row":16,"column":68},"action":"insert","lines":["."]},{"start":{"row":16,"column":68},"end":{"row":16,"column":69},"action":"insert","lines":["."]}],[{"start":{"row":4,"column":33},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":31},{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"remove","lines":["",""],"id":32}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":["/"],"id":33},{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":["/"]},{"start":{"row":5,"column":2},"end":{"row":5,"column":3},"action":"insert","lines":["h"]},{"start":{"row":5,"column":3},"end":{"row":5,"column":4},"action":"insert","lines":["i"]}],[{"start":{"row":5,"column":3},"end":{"row":5,"column":4},"action":"remove","lines":["i"],"id":34},{"start":{"row":5,"column":2},"end":{"row":5,"column":3},"action":"remove","lines":["h"]}],[{"start":{"row":5,"column":2},"end":{"row":5,"column":3},"action":"insert","lines":["r"],"id":35},{"start":{"row":5,"column":3},"end":{"row":5,"column":4},"action":"insert","lines":["e"]},{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"insert","lines":["m"]},{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"insert","lines":["e"]},{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"insert","lines":["m"]},{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["b"]},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["e"]},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["r"]}],[{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":[" "],"id":36},{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"insert","lines":["t"]},{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":["o"]}],[{"start":{"row":5,"column":13},"end":{"row":5,"column":14},"action":"insert","lines":[" "],"id":37},{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"insert","lines":["h"]},{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"insert","lines":["i"]},{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":["d"]},{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":[" "],"id":38},{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["t"]},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["h"]},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["e"]}],[{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":[" "],"id":39},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["f"]},{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":["o"]},{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["l"]},{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["l"]},{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["o"]},{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":["w"]}],[{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"insert","lines":["i"],"id":40},{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"insert","lines":["n"]},{"start":{"row":5,"column":31},"end":{"row":5,"column":32},"action":"insert","lines":["g"]}],[{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"insert","lines":[" "],"id":41},{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"insert","lines":["h"]},{"start":{"row":5,"column":34},"end":{"row":5,"column":35},"action":"insert","lines":["o"]},{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"insert","lines":["t"]}],[{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"remove","lines":["t"],"id":42}],[{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"insert","lines":["s"],"id":43},{"start":{"row":5,"column":36},"end":{"row":5,"column":37},"action":"insert","lines":["t"]}],[{"start":{"row":5,"column":37},"end":{"row":5,"column":38},"action":"insert","lines":[" "],"id":44},{"start":{"row":5,"column":38},"end":{"row":5,"column":39},"action":"insert","lines":["u"]},{"start":{"row":5,"column":39},"end":{"row":5,"column":40},"action":"insert","lines":["r"]},{"start":{"row":5,"column":40},"end":{"row":5,"column":41},"action":"insert","lines":["l"]}],[{"start":{"row":5,"column":41},"end":{"row":5,"column":42},"action":"insert","lines":[" "],"id":45},{"start":{"row":5,"column":42},"end":{"row":5,"column":43},"action":"insert","lines":["a"]},{"start":{"row":5,"column":43},"end":{"row":5,"column":44},"action":"insert","lines":["s"]}],[{"start":{"row":5,"column":44},"end":{"row":5,"column":45},"action":"insert","lines":[" "],"id":46},{"start":{"row":5,"column":45},"end":{"row":5,"column":46},"action":"insert","lines":["w"]},{"start":{"row":5,"column":46},"end":{"row":5,"column":47},"action":"insert","lines":["e"]},{"start":{"row":5,"column":47},"end":{"row":5,"column":48},"action":"insert","lines":["l"]},{"start":{"row":5,"column":48},"end":{"row":5,"column":49},"action":"insert","lines":["l"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":8,"column":45},"end":{"row":8,"column":45},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1568833190158,"hash":"eb94ea3e55f90ac7875e0151a1f54ff43a21d288"}