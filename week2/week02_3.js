const fs = require('fs');
var cheerio = require('cheerio');

var meetings = {};

// load the m09.txt file into into a cheerio object
fs.readFile('/home/ec2-user/environment/week1/m09.txt', 'utf8', (error, data) => {
    if (error) throw error;
    const $ = cheerio.load(data);
    
    $('tr tr tr').each(function(i, item) {
        if (i != 0){
            //Meeting Name
            var meetingName = $(this).children().eq(0).find('b').text();
            meetingName = meetingName.split(' - ');
            meetingName = meetingName[0].toLowerCase();
            
            //Wheelchair Access
            var access = false;
            if ($(this).children().eq(0).find('span').text().trim() == "Wheelchair access"){
               access = true;
            }

            // Delete additional html code within the table row
            $(this).children().eq(0).find('div').remove().html();
            $(this).children().eq(0).find('b').remove().html();
            $(this).children().eq(0).find('span').remove().html();
            
            // Location Detalils
            var location = $(this).children().eq(0).text().split(/\n|,|\(|\)|-/).map(item => item.trim()).filter(Boolean);
            
            // Replace E in address with East
            location[1] = location[1].replace(" E ", " East ");
            location[1] = location[1].replace(" E. ", " East ");

            // Combine variables togther in a comma deliminated string
            var saveString = location[0] + ',' + location[1] + ',' + 'NY,' + location[location.length - 1].replace(/\D+/g, '') + ',' + "\"" + location.join(',') + "\"";
            
            // Save CSV into text file
            fs.appendFileSync('data/AA09.csv', saveString + '\n');
            
            var addressObj = {
                line_1 : location[1],
                city : "New York",
                state : "NY",
                zip : location[location.length - 1].replace(/\D+/g, ''),
                details: location.join(','),
                wheelchair_access: access,
                meetings : {
                    [meetingName] : []
                }
            };

            if (!(meetings.hasOwnProperty(location[0]))){
                meetings[location[0]] = addressObj;
            }
            console.log(location[0]);

            var meetingTimes = $(this).children().eq(1).text().split('\n').map(item => item.trim()).filter(Boolean);

            for (let x = 0; x < meetingTimes.length; x++) { 
            
                console.log(meetingTimes[x]);
                var times = meetingTimes[x].split(' ');
                var timesObj = {
                    day : times[0],
                    start : times[3]+' '+times[4],
                    end : times[6]+' '+times[7],
                    type : times[10]
                };

                if (meetings[location[0]]['meetings'].hasOwnProperty(meetingName)) {
                    meetings[location[0]]['meetings'][meetingName].push(timesObj);
                } else {
                    meetings[location[0]]['meetings'][meetingName] = [timesObj];
                }
            }


            fs.writeFileSync('data/AA09.json', JSON.stringify(meetings));

        }
    });
});

fs.writeFileSync('data/AA09.csv', "Location_Name,Address_Line_1,State,Zipcode,Extended_Address\n");
