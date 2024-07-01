// JSON: Javascript Object Notation

/*{{{ JSON definition
JSON is used to send and receive data.
JSON is a text format that is completely language independent;
meaning JSON is used to send & receive data in may language, not only in JavaScript
*/// }}}

const myObj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("Hello!");
    }
};

console.log(myObj);
console.log(myObj.name); // Dave
console.log(myObj.hobbies); // ["eat", "sleep", "code"]
myObj.hello() // Hello!
console.log(typeof myObj); // object

// convert object into JSON;{{{
const sendJSON = JSON.stringify(myObj); // return name and hobbies
console.log(sendJSON);
console.log(typeof sendJSON); // string
console.log(sendJSON.name); // 'undefined' you can't do no more because It just turn into a string}}}
// turn the string into JSON again;{{{
const receiveJSON = JSON.parse(sendJSON)
console.log(receiveJSON); // It turns into an object again, but we loosing 'Hello' method
console.log(typeof receiveJSON); // object}}}
