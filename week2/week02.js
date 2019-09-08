var fs = require('fs');
var cheerio = require('cheerio');

// load the m09.text file into `content`, then load the `content` into a cheerio object
var content = fs.readFileSync('../week1/m09.txt');
var $ = cheerio.load(content);

// create a container variable 'meetingAddress'
var meetingAddress=[];

$('td').each(function(i, ele) {
    if($(ele).attr("style")==='border-bottom:1px solid #e3e3e3; width:260px'){
        meetingAddress.push(($(ele).text().trim('')+"\n\n").replace(/\t/g,'').replace("\n      ","\n"))
    };
    //Remove the extra information that's contained inside <span> tag and .detailsBox class
    $('span').replaceWith(function(i, ele) {
        return ''
    });
    $('.detailsBox').remove();
});


meetingAddress = meetingAddress.join("");
console.log(meetingAddress)

fs.writeFileSync('../week2/m09AAInfo.txt', meetingAddress);
