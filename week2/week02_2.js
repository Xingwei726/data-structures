var fs = require('fs');
var cheerio = require('cheerio');

// load the m09.text file into `content`, then load the `content` into a cheerio object
var content = fs.readFileSync('../week1/m09.txt');
var $ = cheerio.load(content);

// create a container variable 'meetingAddress'
var meetingData=[];

$('td').each(function(i, elem) {
   if($(elem).attr("style")==='border-bottom:1px solid #e3e3e3; width:260px'){
       var thisMeeting ={};
       thisMeeting.streetAddress=$(elem).html().split('<br>')[2].trim().split(',')[0];
       
    //Below code overwrite the original file if there is a spell mistake.
    //   if (thisMeeting.streetAddress==""){
    //       thisMeeting.streetAddress==""
    //   }
       
       thisMeeting.city = "New York";
       thisMeeting.state = "NY";
       meetingData.push(thisMeeting);
   }
});


// function printIt (){
//     console.log(meetingData);
// }
// setTimeout(printIt, 1000)
//  console.log(meetingData)

fs.writeFileSync('../week2/m09AAInfo', JSON.stringify(meetingData));

