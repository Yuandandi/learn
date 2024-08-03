// Generics
// <T> ; type parameter or type variable placeholder{{{
const stringEcho = <T>(arg: string): string => arg 

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null)
    // typeof arg is "Object"
    // not an array
    // not a null value;
};

console.log(isObj(true)); // false
console.log(isObj(("john"))); // false
console.log(isObj([1, 2, 3])); // false
console.log(isObj({ name: "John"})); // true
console.log(isObj(null)); // false
// }}}

// // {{{ we need generics When our function needs to do some logic

// const isTrue = <T>(arg: T): { arg: T, is: boolean} => {
//     if (Array.isArray(arg) && !arg.length) {
//         return { arg, is: false }
//     }
//     if (isObj(arg) && !Object.keys(arg as keyof T).length) {
//         return { arg, is: false }
//     }
//     return { arg, is: !!arg};
// };

// console.log(isTrue(false)); // { arg: false, is: false }
// console.log(isTrue(0)); // { arg: 0, is: false }
// console.log(isTrue(true)); // { arg: true, is: true }
// console.log(isTrue(1)); // { arg: 1, is: true }
// console.log(isTrue("Dave")); // { arg: 'Dave', is: true }
// console.log(isTrue("")); // { arg: '', is: false }
// console.log(isTrue(null)); // { arg: null, is: false }
// console.log(isTrue(undefined)); // { arg: undefined, is: false }
// console.log(isTrue({})); // { arg: {}, is: false }
// console.log(isTrue({ name: "Dave"})); // { arg: { name: 'Dave' }, is: true }
// console.log(isTrue([])); // { arg: [], is: false }
// console.log(isTrue([1, 2, 3])); // { arg: [ 1, 2, 3 ], is: true }
// console.log(isTrue(NaN)); // { arg: NaN, is: false }
// console.log(isTrue(-0)); // { arg: -0, is: false }

// // Array Check: If the argument arg is an array and it is empty (!arg.length), the function returns an object with is
// // set to false.

// // Object Check: If the argument arg is an object and it has no own enumerable properties (!Object.keys(arg as keyof
// // T).length), the function returns an object with is set to false.

// // Fallback: If neither of the above conditions are met, the function returns an object with is set to the boolean
// // conversion of arg (!!arg).;


// // // }}};

// {{{ Redo With Interface

interface BoolCheck<T> { // type place holder in generic interface
    value: T,
    is: boolean
};

const isTrue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false }
    }
    return { value: arg, is: !!arg};
};

interface HasID {
    id: number
};

// extends keyword;
const processUser = <T extends HasID>(user: T): T => {
    // process the user with logic here
    return user
};


console.log(processUser({ id: 1, name: "Dave"}));  // { id: 1, name: 'Dave' }
// console.log(processUser({ name: "Dave" })); // E: Object literal may only specify known properties, and "name" does not exist in type "HasID"


// // }}};

// {{{

const getUserProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
};
// T extends HasID: T is a generic type that extends HasID, meaning it must include the properties defined in HasID.
// K extends keyof T: K is a generic type that must be a key of T.
// users: T[]: The function takes an array of objects of type T.
// key: K: The function takes a key of type K.
// T[K][]: The return type is an array of values of the type corresponding to the key K in T.;

// console.log(getUserProperty, typeof getUserProperty); // [Function: getUserProperty] function

const userArray = [
    {
        "id":  1,
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
            "bs" : "harness real-time e-markets",
        }
    },
    {
        "id":  2,
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
            "bs" : "synegize scalable suppley-chains",
        }
    }
];

console.log(getUserProperty(userArray, "phone")) // [ '1-213-123-524-313 x123154', '9-141-123-346-989 x518324' ]
console.log(getUserProperty(userArray, "username")) // [ 'Bret', 'Antonette' ]

// // }}};

// {{{ create generic in ac class

class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value;
    }
    
    get state(): T {
        return this.data
    }
    
    set state(value: T) {
        this.data = value
    }
}

// const store = new StateObject("John"); // if we change the state here to be 'number' than we can only reassign as 'number'
const store = new StateObject<string>("John");  // inferring type string, now you can't passing strig
console.log(store.state);

store.state = "Dave"; // reassignment is okay
console.log(store.state);

// store.state = 90; // E: must be string

const myState = new StateObject<(string|number|boolean)[]>([17]);
console.log(myState); // StateObject { data: [ 17 ] }
console.log(typeof myState); // Object
// // }}};
