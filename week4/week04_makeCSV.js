var fs = require('fs');

function makeCSV(jsonFile,writeFile){
    var meetings = JSON.parse(jsonFile);
    
    // Wipe text file and add headings
    fs.writeFileSync(writeFile, "LocationTitle,AddressStreetInfo,City,State,Zipcode,Details,Latitude,Longitude,GroupTitle,Day,Start,End,MeetingType\n");
    
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
                        meetings[locationName]['address']['coords']['latitude'] + ',' +
                        meetings[locationName]['address']['coords']['longitude'] + ',' +
                        meetings[locationName]['address']['zone'] + ',' +

                        '"' + meetingName + '"' + ',' +
                        meetings[locationName]['meetings'][meetingName][i]['day'] + ',' +
                        meetings[locationName]['meetings'][meetingName][i]['start'] + ',' +
                        meetings[locationName]['meetings'][meetingName][i]['end'] + ',' +
                        meetings[locationName]['meetings'][meetingName][i]['type'];
                    
                    // Save CSV into text file
                    fs.appendFileSync(writeFile, saveString + '\n');
                }
            }
        }
    }
}

// Read text file with saved HTML data
fs.readFile('data/AAAll.json', 'utf8', (error, data) => {
    if (error) throw error;
    makeCSV(data, 'data/AAAll.csv');
});