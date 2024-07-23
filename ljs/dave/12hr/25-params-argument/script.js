// // {{{  Parameter
// function registerUser(user) {
//     return user + " is registered";
// }


// // console.log(typeof user); // undefined

// // console.log(user); // user is not defined

// // console.log(registerUser()); // undefined is registered ; user has a type of undefined

// // console.log(registerUser("Jokowi")); // Jokowi is registered
// // }}}
// {{{ Before ES 2016 to set the default Parameter;
// function registerUser(user) {
//     if (!user) {
//         user = "Bot";
//     };
//     return user + " is registered";
// }

// console.log(registerUser()) // Bot is registered}}}
// // Es 2016 to Set the Default Params;{{{
// function registerUser(user = "Bot") {
//     return user + " is registered";
// }

// console.log(registerUser()); // Bot is registered
// // }}}
// {{{ Rest Params

// // {{{ Basic 
// function sum(...numbers) {
//     return numbers;
// }

// console.log(sum(1, 2, 3)); // [ 1, 2, 3 ] ; the output is an array of numbers
// // }}}
// // {{{ For Loop Inside a Function

// function sum(...numbers) {
//     let total = 0;

//     for (const num of numbers) {
//         total += num;
//     }

//     return total;

// };

// console.log(sum(1, 2, 3, 4, 5, 9)); // 24 ; total number

// // }}}

// }}}
// // {{{  Object as Params;
// function loginUser(user) {
//     return `The user ${user.name} with the id of ${user.id} is logged in`;
// }

// const user = {
//     id: 1,
//     name: "John",
// };

// console.log(loginUser(user)); // The user John with the id of 1 is logged in

// // you can do this way too store the array inside the console itself;
// console.log(
//     loginUser({
//         id: 2,
//         name: "Sara",
//     })
// );
// // }}}
// // Arrays as Params;{{{
// function getRandom(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     const item = arr[randomIndex];

//     console.log(item);
// };
// getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// // }}}
// Use Rest Parameter;{{{
function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    console.log(item);
}

// since we passing spread operator on the params, we don't need to invoke the function in an array form;
getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// }}}
