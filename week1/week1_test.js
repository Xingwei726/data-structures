var request = require('request');
var fs = require('fs');

for (let i=0; i<10; i++){
    request('http://.nyc/aa/m'+[i]+'.html', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            fs.writeFileSync('/home/ec2-user/environment/m'+[i]+'.txt', body);
        }
        else {console.log("Request failed!")}
    });
};