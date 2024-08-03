"use strict";
// Generics
// <T> ; type parameter or type variable placeholder{{{
const stringEcho = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null);
    // typeof arg is "Object"
    // not an array
    // not a null value;
};
console.log(isObj(true)); // false
console.log(isObj(("john"))); // false
console.log(isObj([1, 2, 3])); // false
console.log(isObj({ name: "John" })); // true
console.log(isObj(null)); // false
;
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
;
// extends keyword;
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: "Dave" })); // { id: 1, name: 'Dave' }
// console.log(processUser({ name: "Dave" })); // E: Object literal may only specify known properties, and "name" does not exist in type "HasID"
// // }}};
// {{{
const getUserProperty = (users, key) => {
    return users.map(user => user[key]);
};
// T extends HasID: T is a generic type that extends HasID, meaning it must include the properties defined in HasID.
// K extends keyof T: K is a generic type that must be a key of T.
// users: T[]: The function takes an array of objects of type T.
// key: K: The function takes a key of type K.
// T[K][]: The return type is an array of values of the type corresponding to the key K in T.;
// console.log(getUserProperty, typeof getUserProperty); // [Function: getUserProperty] function
const userArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincer@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496",
            }
        },
        "phone": "1-213-123-524-313 x123154",
        "website": "hildegard.org",
        "company": {
            "name": "romaguera-crona",
            "catchPhrase": "Multi-layerd client-server neural-net",
            "bs": "harness real-time e-markets",
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@mellisa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 979",
            "city": "Wisokyburgh",
            "zipcode": "91412-1197",
            "geo": {
                "lat": "-44.312312",
                "lng": "-34.341",
            }
        },
        "phone": "9-141-123-346-989 x518324",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contngency",
            "bs": "synegize scalable suppley-chains",
        }
    }
];
console.log(getUserProperty(userArray, "phone")); // [ '1-213-123-524-313 x123154', '9-141-123-346-989 x518324' ]
console.log(getUserProperty(userArray, "username")); // [ 'Bret', 'Antonette' ]
// // }}};
// {{{ create generic in ac class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
// const store = new StateObject("John"); // if we change the state here to be 'number' than we can only reassign as 'number'
const store = new StateObject("John"); // inferring type string, now you can't passing strig
console.log(store.state);
store.state = "Dave"; // reassignment is okay
console.log(store.state);
// store.state = 90; // E: must be string
const myState = new StateObject([17]);
console.log(myState); // StateObject { data: [ 17 ] }
console.log(typeof myState); // Object
// // }}};
