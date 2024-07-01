// web storage API

// not part of the DOM - refers to the window API;
// available to js via the global variable: window;
// we do not have to type window. It is implied;
// alert 2 times;
// window.alert("OK!");
// alert("foo");
// // alert the URL;
// window.alert(window.location);
// alert(location);
const myArray = {
    name: "dave",
    hobbies: ["eat", "sleep", "code"],
    logName: function () {
        console.log(this.name);
    }
};
// sessionSotrage and localStorage;
// myArray.logName(); // work just fine
// local storage;
// sessionStorage.setItem("mySessionStore", myArray); // [object, object] ; JSON only store string data
sessionStorage.setItem("mySessionStore", JSON.stringify(myArray)); // string type
// localStorage.clear(); // clear the local storage
const storeLength = localStorage.length; // the number of local storage we got
// const mySessionData = sessionStorage.getItem("mySessionStore");
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore")); // object type
// console.log(mySessionData); // eat,sleep,code
console.log(storeLength);
