// fetch API requires a discussion of ...
// Callbacks, Promise, Thenables, and Async/Await
// // syntax;{{{
// function firstFunction(parameters, callback) {
//     callback();
// };// }}}
// // callback hell;{{{
// function firstFunction(para, callback) {
//     secondFunction(para, function thirdFunction() {
//     // do stuf;
//         thirdFunction(para, function () {
//         // do stuff;
//         })
//     })
// };}}}
// // Promieses;{{{
// // 3 States: Pending, Fulfilled, Rejected;
// const myPromise = new Promise((resolve, reject) => { // creates a new Promise object, takes two arguments 'resolve' and 'reject'
//     // const error = true;
//     const error = false;
//     if (!error) {
//         resolve("Yes! resolved the promise");
//     } else {
//         reject("Yes! rejected the promise");
//     }
// })
// console.log(myPromise); // get the state of the promise
// // // es2015 thenable; get the resolve of the promise{{{
// // myPromise.then(value => {
// //     return value + 1;
// // })

// // // method chaning from the previous value;
// //     .then(newValue => {
// //         console.log(newValue) // Yes! resolve the promise1
// //     })
// // // catch the error
// //     .catch(err => {
// //         console.error(err)
// //     })// }}}
// // When fetching API we need to wait to get the data and then 'do this' after we get It;
// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve('myNextPromise resolved!');
//     }, 3000) // wait for 3000ms or 3s
// })

// myNextPromise.then(value => {
//     console.log(value)
// })

// myPromise.then(value => {
//     console.log(value)
// });// }}}
// // pending{{{

// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users); // promise object

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         // console.log(response) // object Response
//         return response.json(); // returns a promise which resolves with the result of pa the body text as JSON
//     })
//     .then(data => {
//         // console.log(data) // complete data JSON format
//         data.forEach(user => {
//             console.log(user) // data for each user
//         });
//     });

// console.log(users); // this will execute first, the above are 'pending'}}}
// Async / Await{{{
const myUsers = {
    userList: []
}

// you can do this format;{{{
// const async myCoolFunction = () => {
// }}}}

const myCoolFunction = async ()  => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    console.log(jsonUserData);
}

const anotherFunc = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    // console.log(data);
    console.log(myUsers.userList); // so you need to put It here
}

// myCoolFunction();
anotherFunc();
// console.log(myUsers.userList); // [] if we console here It just appear an empty array , because we use await, It like says you do your job, while I'm doing mine, so you }}}
