var fs = require('fs');

function makeCSV(jsonFile){
    var meetings = JSON.parse(jsonFile);
    
    // Wipe text file and add headings
    fs.writeFileSync('data/AA09.csv', "Location_Title,Address_Street_Info,Address_City,Address_State,Address_Zipcode,Address_Details,Address_Latitude,Address_Longitude,Group_Title,Day,Start,End,Meeting_Type\n");
    
    for (var locationName in meetings) {
        if (meetings.hasOwnProperty(locationName)) {

            for (var meetingName in meetings[locationName]['meetings']){

                for (let i = 0; i < meetings[locationName]['meetings'][meetingName].length; i++) { 
                                    
                    var saveString = 
                        locationName + ',' +
                        meetings[locationName]['address']['street_info'] + ',' +
                        meetings[locationName]['address']['city'] + ',' +
                        meetings[locationName]['address']['state'] + ',' +
                        meetings[locationName]['address']['zip'] + ',' + '"' +
                        meetings[locationName]['address']['details'] + '"' + ',' +
                        meetings[locationName]['address']['geocode']['latitude'] + ',' +
                        meetings[locationName]['address']['geocode']['longitude'] + ',' +
                        meetingName + ',' +
                        meetings[locationName]['meetings'][meetingName][i]['day'] + ',' +
                        meetings[locationName]['meetings'][meetingName][i]['start'] + ',' +
                        meetings[locationName]['meetings'][meetingName][i]['end'] + ',' +
                        meetings[locationName]['meetings'][meetingName][i]['type'];
                    
                    // Save CSV into text file
                    fs.appendFileSync('data/AA09.csv', saveString + '\n');
                }
            }
        }
    }
}

// Read text file with saved HTML data
fs.readFile('data/AA09.json', 'utf8', (error, data) => {
    if (error) throw error;
    makeCSV(data);
});