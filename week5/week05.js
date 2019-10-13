var blogEntries = [];

class BlogEntry {
  constructor(patitionKey, sortKey, author, title, content, cupofcoffee, eatchocolate, iate, sunsetphoto) {
    this.mood = {};
    this.mood.S = patitionKey;
    this.date = {}; 
    this.date.S = new Date(sortKey).toDateString();
    this.author = {};
    this.author.S = author;
    this.title = {};
    this.title.S = title;
    this.content = {};
    this.content.S = content;
    this.cupofcoffee = {};
    this.cupofcoffee.N = cupofcoffee.toString();
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

blogEntries.push(new BlogEntry('Whimsical','Aug 10 2019', "Xingwei", "Just Another Peaceful Day", "Not much happened today, just made the plan for upcoming weekend.", 1, true, ["Poke", "Brownie"]));
blogEntries.push(new BlogEntry('Calm','Aug 16 2019', "Xingwei", "A bit Chill", "Feel like summer is drifting away, shopping temptation for sweaters rises", 2,false, ["Green Salads", "Meatballs"]));
blogEntries.push(new BlogEntry('Calm','Aug 16 2019', "Xingwei", "Homemade Cupcakes", "Learned a new recipe today, maybe I will give it a try tomorrow.", 0, true, ["Homemade Cupcakes"]));
blogEntries.push(new BlogEntry('Lighthearted','Aug 22 2019', "Xingwei", "Another Peaceful Day", "Wondering what will I be doing after 5 years.", 1, false));
blogEntries.push(new BlogEntry('Tense','Aug 28 2019', "Xingwei", "Ughh", "Forgot where I put the charging case for my toothbrush, its battery is down so I need to find it ASAP", 0, true, ["lasagna", "Squid"]));
blogEntries.push(new BlogEntry('Happy','Sep 12 2019', "Xingwei", "Exciting!", "Went to see the pop-up exhibition at Spring St in Soho, very crowded", 1, true, ["Korean BBQ"]));
blogEntries.push(new BlogEntry('Calm','Sep 24 2019', "Xingwei", "Online Shopping", "Purchased a new sweater online, can't wait to try it on when 'winter is coming'.", 2,false, ["fish","chips"]));
blogEntries.push(new BlogEntry('Calm','Sep 26 2019', "Xingwei", "GOT", "Starting to watch Game of Thrones, surprisingly I like it better than last time", 0, true, ["Thai Green Curry"]));
blogEntries.push(new BlogEntry('Lighthearted','Sep 28 2019', "Xingwei", "Raining", "My heart is like mashmellow, it's fluffy when there is sun and gets sticky when it's rainning", 1, false));
blogEntries.push(new BlogEntry('Cheerful','Oct 5 2019', "Xingwei", "China Blue", "My mum visit me this weekend and I took her to the China Blue, she liked the fish blossom there and thought it's pretty authetic.", 0, true, ["Fish Blossom"]));

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
