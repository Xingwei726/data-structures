## Assignment Description
Using Node.js, read the assigned AA text file that you wrote for last week's assignment. Store the contents of the file in a variable. And write a program in Node.js that will write a new text file that contains the street address for every row in the table of meetings in your assigned AA file.


## Working Process

 **1. Observation of the txt file:**

- In the m09.txt file, since address information weren't wrapped inside a complete tag, it will be a bit tricky to extract exact information.
- There are some extra information which are nested inside `<div class="detailsBox">`  and `<span>`.

 **2. Working Steps:**

First I use the starter code to load m09.txt file into a variable, and then load the `content` into a cheerio object.
```javascript
var fs = require('fs');
var cheerio = require('cheerio');

var content = fs.readFileSync('../week2/m09.txt');
var $ = cheerio.load(content);

```
Then I create a container called `meetingAddress` to contain all the location information that will be extracted from the text file. I want it to be an array so later on if I need to call on any location information it will be easier.
```javascript
var meetingAddress=[ ];
```
After carefully examined the text file, I found out all location title are wrapped by a `<td>` tag and has a specific style assigned to it. There are more than 50 `<td>` tags in this document, but if I'm able to locate only the `<td>` tag which has that style, then I would be able to target on the location information. Cheerio has `.attr( )` method so I decided to give it a try.
```javascript
$('td').each(function(i, ele) {
    if($(ele).attr("style")==='border-bottom:1px solid #e3e3e3; width:260px'){
        meetingAddress+=$(ele).text().trim('')+"\n"
    };
});
```
This returns all text element inside document which has that style, and with `.trim('')`the white space before and after each element has been trimed as well. Next step is to get rid of other unnecessary information, I used `.replaceWith( )` and `.remove( )` methods.
```javascript
$('span').replaceWith(function(i, ele) {
     return ''
   });
$('.detailsBox').remove();
```
At last, I used regular expressions to further remove the extra white space.
```javascript
meetingAddress = meetingAddress.replace(/\t/g,'')
```
I spent a great amount of time trying to figure out how to remove the space that come with `<h4>` tag, I didn't find a good solution, but to use `.replace("\n      ","\n")` manually.
```javascript
    if($(ele).attr("style")==='border-bottom:1px solid #e3e3e3; width:260px'){
        meetingAddress.push(($(ele).text().trim('')+"\n\n").replace(/\t/g,'').replace("\n      ","\n"))
    };
```
## Comments
- The method I used to remove `<h4>` space doesn't feel like an 'authentic' way to do it, so I'm still exploring other ways.
- I saved the address informtion into a text file but I know there are other better document types to store these info, still doing research on that.
