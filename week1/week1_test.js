var request = require('request');
var fs = require('fs');

// var urls =[
//  'https://parsons.nyc/aa/m01.html',  
//  'https://parsons.nyc/aa/m02.html', 
//  'https://parsons.nyc/aa/m03.html',  
//  'https://parsons.nyc/aa/m04.html',  
//  'https://parsons.nyc/aa/m05.html',  
//  'https://parsons.nyc/aa/m06.html', 
//  'https://parsons.nyc/aa/m07.html',  
//  'https://parsons.nyc/aa/m08.html',  
//  'https://parsons.nyc/aa/m09.html',  

//  'https://parsons.nyc/aa/m10.html' 
//  ];
 
// var fns = [
// '/home/ec2-user/environment/m01.txt',
// '/home/ec2-user/environment/m02.txt',
// '/home/ec2-user/environment/m03.txt',
// '/home/ec2-user/environment/m04.txt',
// '/home/ec2-user/environment/m05.txt',
// '/home/ec2-user/environment/m06.txt',
// '/home/ec2-user/environment/m07.txt',
// '/home/ec2-user/environment/m08.txt',
// '/home/ec2-user/environment/m09.txt',
// '/home/ec2-user/environment/m10.txt' 
// ];

for (let i=0; i<10; i++){
    request('http://.nyc/aa/m'+[i]+'.html', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            fs.writeFileSync('/home/ec2-user/environment/m'+[i]+'.txt', body);
        }
        else {console.log("Request failed!")}
    });
};