var blogEntries = [];

class BlogEntry {
  constructor(patitionKey, sortKey, title, content, cupofcoffee, color, eatchocolate, iate) {
    this.mood = {};
    this.mood.S = patitionKey;
    this.date = {}; 
    this.date.S = new Date(sortKey).toDateString();
    this.title = {};
    this.title.S = title;
    this.content = {};
    this.content.S = content;
    this.cupofcoffee = {};
    this.cupofcoffee.N = cupofcoffee.toString();
    this.color = {};
    this.color.S = color;
    this.eatchocolate = {};
    this.eatchocolate.BOOL = eatchocolate; 
    if (iate != null) {
      this.iate = {};
      this.iate.SS = iate; 
    }
    // if (sunsetphoto !=null){
    //   this.sunsetphoto ={};
    //   this.sunsetphoto = sunsetphoto;
    // }
  }
}

blogEntries.push(new BlogEntry('Whimsical','Sep 10 2019', "Just A Peaceful Day", "Not much happened today, just made the plan for the upcoming weekend.", 1, "#7087D1", true, ["Poke", "Brownie"]));
blogEntries.push(new BlogEntry('Calm','Sep 20 2019', "A bit Chill", "Today I worked on my major studio assignment, have a bit timidity about learning new coding languages. Feel like summer is drifting away, shopping temptation for sweaters rises", 2,"#ff756b",false, ["Green Salads", "Meatballs"]));
blogEntries.push(new BlogEntry('Calm','Sep 21 2019', "Homemade Cupcakes", "It's saturday again besides working on my assignment, I learned a new recipe today, maybe I will give it a try later in the afternoon.", 0,"#FF9500", true, ["Homemade Cupcakes"]));
blogEntries.push(new BlogEntry('Lighthearted','Sep 22 2019', "Another Peaceful Day", "Exiciting about using the Met Data for Major Studio's project. Met is one of my favourite museums and I've visited it a lot, still feel like there is always new things to see there. Wondering what will I be doing after 5 years.", 1,"#000D31", false));
blogEntries.push(new BlogEntry('Tense','Sep 23 2019', "Ughh", "Monday is always the 'hardest' for me, but feeling happy about being able to finish Data Structure's weekly assignment on time. Forgot where I put the charging case for my toothbrush, its battery is down so I need to find it ASAP", 0,"#DEFFFF", true, ["lasagna", "Squid"]));
blogEntries.push(new BlogEntry('Happy','Sep 24 2019', "Exciting!", "Went to see the pop-up exhibition at Spring St in Soho, very crowded", 1,"#6ACCB1", true, ["Korean BBQ"]));
blogEntries.push(new BlogEntry('Calm','Sep 26 2019', "Wednesday Stress", "This week we need to use Node.js, read the assigned AA text file that I wrote for last week's assignment. Store the contents of the file in a variable. And write a program in Node.js that will write a new text file that contains the street address for every row in the table of meetings in your assigned AA file. Besides that I purchased a new sweater online, can't wait to try it on when 'winter is coming'.", 2,"#D7E6E1", false, ["fish","chips"]));
blogEntries.push(new BlogEntry('Calm','Sep 28 2019', "GOT", "Today is Friday which I don't have any classes, but still I was working on my Major Studio's assignment all day. Still not very familar with d3 language. Have to watch tutorials over and over again. And I started to watch Game of Thrones, surprisingly I like it better than last time", 0,"#A9D9C7", true, ["Thai Green Curry"]));
blogEntries.push(new BlogEntry('Lighthearted','Sep 30 2019', "Raining", "Nothing exciting happened today. I spent a great amount of time trying to figure out how to remove the space that come with <h4> tag, I didn't find a good solution, but to use .replace function manually.", 1,"#A6A26A", false));
blogEntries.push(new BlogEntry('Cheerful','Oct 1 2019', "China Blue", "My mum visited me this weekend and I took her to the China Blue, she liked the fish blossom there and thought it's pretty authetic.", 0,"#D9CBBA", true, ["Fish Blossom"]));


blogEntries.push(new BlogEntry('Peaceful','Oct 2 2019', "A Mashmellow Heart", "My heart is like a mashmellow, it gets 'sticky' when it's raining. ", 1,"#A63838", true, ["Poke", "Brownie"]));
blogEntries.push(new BlogEntry('Drained','Oct 3 2019', "Brainstorming", "This week's Data Structure assignment is to write a script that makes a request to the Texas A&M Geoservices Geocoding APIs for each address, using the address data we've parsed in Weekly Assignment 2. Keeping only the data we need from the API response and organize them into an array that contains an object for each meeting.", 2,"#000D02",false, ["Green Salads", "Meatballs"]));
blogEntries.push(new BlogEntry('Critical','Oct 4 2019', "Color Of The Day: Transparent", "Before my 6:00PM Quantitative Method class I was trying to wrap up my Data Structure's weekly assignment, had a little trouble with making connection to Texas A&M Geoservices Geocoding APIs. Then I realize I made a mistake by spelling my .env file wrong...no wonder I wasn't be able to connect.", 0, "#B7B0A1",true, ["Homemade Cupcakes"]));
blogEntries.push(new BlogEntry('Calm','Oct 5 2019', "Friday Fries", "Always craving for some fries at the end of a week. Maybe because I burned too much calories during the week or it's just simply because fries food taste good. ", 1,"#FFFFFF", false));
blogEntries.push(new BlogEntry('Idyllic','Oct 6 2019', "Curse of Knowledge", "Didn't do anything besides woking on the Major Studio's assignment, whenever I fixed one bug there was another bug pop up. Feeling a bit frustrated and also thougtht about the concept of 'curse of knowledge'. It is true that when an individual, communicating with other individuals, unknowingly assumes that the others have the background to understand.", 0,"#CDD5D8", true, ["lasagna", "Squid"]));
blogEntries.push(new BlogEntry('Drained','Oct 7 2019', "A Working Sunday", "Went to school library to work on my assignment, really enjoyed the large windows which allow the sunlight to shine through and cast upon the floor.", 1,"#5779C8", true, ["Dim Sum"]));
blogEntries.push(new BlogEntry('Happy','Oct 8 2019', "Simon Rich ", "In today's graduate writing class we were introduced to a writer called Simon Rich. He is an excellent writer who writes funny stuff for things. One such funny thing he wrote was for a short story published in the New Yorker titled I Love Girl. It’s written in the voice of a cave man struggling with self identity and wanting for the affections of Girl.", 2,"#FFC64C",false, ["fish","chips"]));
blogEntries.push(new BlogEntry('Calm','Oct 9 2019', "Inside Out", "As I was working on my AA data, I kept thinking about the importance of different interactions between humans. For example would a 'meeting' helps us to embrace ourselves better than living inside our own bubbles? Or the only one who can help us is noone but ourselves? ", 0,"#2787B7", true, ["Thai Green Curry"]));
blogEntries.push(new BlogEntry('Lighthearted','Oct 10 2019', "Need A Rainbow", "Not much today, stuck on my project for a while. Now I understand why developers never want to have lunch with a designer, very different thinking mode but I guess it's always helpful to think in someone else's shoes.", 1,"#AED3E5", false));



console.log(blogEntries);





var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();
var tableName = "processblog";


putItems(blogEntries)
.then(() => {
    return putItems(blogEntries);
})
.catch((err) => {
    console.error('Insert failed', err);
});

function putItems(items){
    var insertedCount = 0;
    return new Promise ((resolve, reject) =>{
        items.forEach(item =>{
            var params ={
              TableName: tableName,
              Item: item
            };
            
            dynamodb.putItem(params, (err,data) =>{
                if(err){
                    reject(err);
                }
                else{
                    if(++insertedCount ==items.length){
                        console.log('Successfully inserted'+items.length + 'items.');
                        resolve();
                    }
                }
            });
        });
    });
}
