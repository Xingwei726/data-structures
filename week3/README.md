## Assignment Description
Write a script that makes a request to the [Texas A&M Geoservices Geocoding APIs](http://geoservices.tamu.edu/Services/Geocode/WebService/) for each address, using the address data we've parsed in Weekly Assignment 2. Keeping only the data we need from the API response and organize them into an **array** that contains an **object** for each meeting.


## Working Process
1/ Using starter code to install dependencies and set up TAMU api key.
```javascript
// dependencies
var request = require('request');
var async = require('async'); 
const fs = require('fs');
const dotenv = require('dotenv');

// TAMU api key
dotenv.config();
const apiKey = process.env.TAMU_KEY;
```
2/Load addresses information (m09AAInfo.json) from last week's assignment. If you want to view further details about how did I create this file, please visit [here](https://github.com/Xingwei726/data-structures/blob/master/week2/week02_2.js). Because I stored all the addresses in JSON format, I need to parse them in order to get access the data encoded inside.
```javascript
var rawAddresses = fs.readFileSync('../week3/m09AAInfo.json');
var afterAddresses = JSON.parse(rawAddresses);
```
After I parsed the addresses, now it's an array contains a group of objects which have nameValuePairs and I can target on each.

Then I targeted on the `'streetAddress'`property inside each object, extract them and store into an array object called `addresses`
```javascript
var addresses = [];
for (i in afterAddresses){
    addresses.push(afterAddresses[i]['streetAddress']);
}
```

3/ Use the starter code to perform a request for the geocode APIs. Besides a bunch of other information I got back from the API, OutputGeocodes was put in another JSON format which shown below. 
`  {
	"OutputGeocodes" :
	[
		{
		"OutputGeocode" :
			{
			"Latitude" : "40.805958",
			"Longitude" : "-73.940763",
			"NAACCRGISCoordinateQualityCode" : "00",
			"NAACCRGISCoordinateQualityType" : "AddressPoint",
			"MatchScore" : "97.3372781065089",
			"MatchType" : "Relaxed",
			"FeatureMatchingResultType" : "Success",
			"FeatureMatchingResultCount" : "1",
			"FeatureMatchingGeographyType" : "Parcel",
			"RegionSize" : "0",
			"RegionSizeUnits" : "Meters",
			"MatchedLocationType" : "LOCATION_TYPE_STREET_ADDRESS",
			"ExceptionOccured" : "False",
			"Exception" : "",
			"ErrorMessage" : ""
			}
		}
	]
}`
Therefore before I can access these information, I need to parse the body again by using `JSON.parse` function.
```javascript
var tamuGeo = JSON.parse(body);
```

4/ Create a 'template' and store the information I extracted from tamuGeo in the desired format. I examined the desire format in the assignment description which is an array that contains multiple objects.
```javascript
    request(apiRequest, function(err, resp, body) {
        if (err) {throw err;}
        else {
            var tamuGeo = JSON.parse(body);
            var latLong = {}; // object container for 'address' lat' & 'lng'
            latLong.address = tamuGeo['InputAddress']['StreetAddress'];
            latLong.lat = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Latitude'];
            latLong.lng = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Longitude'];
            geoCodes.push(latLong)
        }
    });
```
After the reorganizing data, I pushed all the information into `geoCode[ ]` which is an array object that I've defined earlier.

5/ Store all the information into a JSON file.
```javascript
function() {
    fs.writeFileSync('first.json', JSON.stringify(geoCodes));
};
```

## Comments
- I checked the `first.jason` file, all addresseses' geocodes were included.
- When I first uploaded all the files onto github I made a mistake by naming '.env' file wrong, therefore the gitignore didn't include my .env file. After I found out the accident, I renamed it and remove the old one from my github repository.