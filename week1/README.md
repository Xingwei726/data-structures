## Assignment Description
Using Node.js in AWS Cloud 9 to make a request for each of the ten "Meeting List Agenda" pages for Manhattan. Try to come up with a Javascript loop to obtain the ten text files instead of copy paste the starter code and change the URL for each.

## Working Process
 **1. Starter Code:**

Started with 'Starter Code' we were given during the class. After I did some modifications to the starter code, it's returned with an error.
```javascript
var request = require('request');
var fs = require('fs');
/* Omit the var urls & var fns part here */
for (var i=0; i<10; i++){
    request(urls[i], function(error, response, body) {
        if (!error && response.statusCode == 200) {
            fs.writeFileSync(fns[i], body);
        }
        else {console.log("Request failed!")}
    });
};
```
 **2. Trouble Diagnosis:**

After running the code, I only got one text file. Therefore I thought the error might be related with the loop I created and asynchronous operations: the variable `i` within each of my request functions, is bound to the same variable outside of the function. After I did some research online, I realized that one solution might be to uniquely save the loop index `i` separately for each callback in order to work around this.
 
 **3. Solution:**

Accidentally I came across this website which explains how to fix a loop problem: [Use let with for Loops in JavaScript](https://wesbos.com/for-of-es6/). 
> What do we know about `let`? It’s block-scoped. We have curly brackets in the `for` loop. If you run it now, after a second we’ll log zero through nine. We’re not getting 10, 10 times. We getting it as it was declared each and every time.

This has remineded me that `let` is able to create a unique value of `i`for each invocation of the loop. I wasn't so sure about to just replace `var i=0` with `let i=0`at first, but loop function seems to work after the change. And I did check all my text files carefully to make sure they are all different.
```javascript
/* The part I modified */
for (let i=0; i<10; i++){
    request(urls[i], function(error, response, body) {
        if (!error && response.statusCode == 200) {
            fs.writeFileSync(fns[i], body);
        }
        else {console.log("Request failed!")}
});
```

## Comments

 - I'm not 100% sure if my solution is the right way to solve this problem tho the results indicates it might work.
 - I'm wondering is there a better way to simply the `var fns` list, so I did another version in week1_test file.
