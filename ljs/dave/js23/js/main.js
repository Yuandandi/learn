// workflow function
// // {{{ 
// const getAllUserEmails = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();

//     const userEmailArray = jsonUserData.map(user => {
//         return user.email;
//     })

//     console.log(userEmailArray); // get a readable object
// }

// getAllUserEmails();
// // }}}
// // {{{ // promise pending
// const getAllUserEmails = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();

//     const userEmailArray = jsonUserData.map(user => {
//         return user.email;
//     });

//     return userEmailArray;

// }

// console.log(getAllUserEmails()); // object Promeise <pending>
// // }}}
// // {{{ doesn't need async
// const getAllUserEmails = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();

//     const userEmailArray = jsonUserData.map(user => {
//         return user.email;
//     });

//     postToWebPage(userEmailArray);
// }

// const postToWebPage = (data) => {
//     console.log(data)
// }

// getAllUserEmails();
// // }}}
// supplying request object;
// // {{{ 2nd parameter of fetch is an object
// const getAllUserEmails = async () => {
//     const response = await fetch("https://icanhazdadjoke.com/", {
//         // define our object;
//         method: "GET", // default
//         headers: {
//             accept: "application/json"
//         }
//     });
//     const jsonJokeData = await response.json();

//     // console.log(jsonJokeData)
//     console.log(jsonJokeData.joke); // random dad joke

// }

// getAllUserEmails();
// // }}};
// // {{{ another way
// const getDadJoke = async () => {
//     const response = await fetch("https://icanhazdadjoke.com/", {
//         // define our object;
//         method: "GET", // default
//         headers: {
//             accept: "text/plain"
//         }
//     });
//     const textJokeData = await response.text();

//     console.log(textJokeData); // string 

// }

// getDadJoke();
// // }}};
// // {{{ send into different address

// const jokeObject = {
//     id: 'W018xscFIe',
//     joke: "Have you heard of the band 1023MB? They haven't got a gig yet.",
// }

// const postData = async (jokeObj) => {
//     const response = await fetch("https://httpbin.org/post", {
//         // define our object;
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(jokeObj)
//     });
//     const jsonResponse = await response.json();

//     console.log(jsonResponse); // object

// }

// postData(jokeObject);
// // }}};

const requestJoke = async (firstName, lastName) => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);
    const jsonResponse = await response.json();
    
    console.log(jsonResponse.value.joke);
}

requestJoke("Bruce","Lee");
