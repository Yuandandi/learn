"use strict";
// // {{{ Class
// // this is soooo DRY;
// class Coder {
//     // put all of the members to the class;
//     name: string // this only ; E: property "name" has no initializer and is not definitely assigned in the constructor
//     music: string
//     age: number
//     lang: string
//     // constructor accept the members as the parameters
//     constructor (
//         name: string,
//         music: string,
//         age: number,
//         lang: string
//     ) {
//         // assigned the value
//         this.name = name // put the "name" into the constructor
//         this.music = music // put the "music" into the constructor
//         this.age = age // put the "age" into the constructor
//         this.lang = lang // put the "lang" into the constructor
//     }
// };
// console.log(typeof Coder); // function
// console.log(Coder); // []
// // // }}}
// {{{ Class
// this is soooo DRY;
class Coder {
    // constructor accept the members as the parameters
    constructor(name, music, age, lang = "TypeScript" // passing default value inside constructor is able
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        // assigned the value
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
    ;
}
;
console.log(typeof Coder); // function
console.log(Coder); // [class Coder]
// }}}
const Dave = new Coder("Dave", "Rock", 42, "TypeScript"); // default passing 4 parameters // default passing 4 parameters
console.log(Dave.getAge());
// TypeScript doesn't like It and complain but the config allowed this and transpiled, in the browser console It actually work;
// console.log(Dave.age); // property of "age" is private and only can ansible within class 'Coder'
// console.log(Dave.lang); // same
// // }}}
// {{{
class webDev extends Coder {
    constructor(// E: constructor for derived class must  contain a "super" cell
    computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`; // we can only access lang here
    }
    ;
}
;
const Sara = new webDev("Mac", "Sara", "Lofi", 25);
// console.log(sara); // sara object
console.log(Sara.getLang()); // I write ${this.lang}
;
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
    ;
}
;
const Page = new Guitarist("Jimmy", "Guitar");
// console.log(Page); // Guitarist { name: 'Jimmy', instrument: 'Guitar' }
console.log(Page.play("strums")); // Jimmy strums the Guitar
// // }}}
// {{{ Static Keyword
class Peeps {
    // count doesn't applied to any instantiating of the class, It applied to the class directly
    static getCount() {
        return Peeps.count; // after Using "static member" we can use "class Peeps" here
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; // ++Peeps means the first is 1, count increment first
        // this.id = Peeps.count++ // means the first is 0
    }
    ;
}
Peeps.count = 0; // static member
;
// if you change the order of this function callback It will change the order of the id too
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count); // 3, if we remove a single member It will be 2 (incrementing count on the class peeps)
console.log(John.id); // 1
console.log(Steve.id); // 2
console.log(Amy.id); // 3
// // }}};
// {{{ Getter and Setter
class Bands {
    constructor() {
        this.dataState = []; // initialize as an empty array
    }
    ;
    // getter; keyword in JavaScript to get our data we have inside our state
    get data() {
        return this.dataState;
    }
    ;
    // setter;
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")) {
            // return this.dataState = value; setter cannot return a value
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
;
const MyBands = new Bands();
console.log(MyBands.data); // []
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data); // [ 'Neil Young', 'Led Zep' ]
MyBands.data = [...MyBands.data, "ZZ top"]; // ...MyBands.data ; spread operator
console.log(MyBands.data); // [ 'Neil Young', 'Led Zep', 'ZZ top' ]
// MyBands.data = ["Joko Anwar"]; // ["Joko Anwar"] you'll override the value
MyBands.data = ["Van Halen", 3002]; // E: number is not assignable to type string
// you need to comment noEmitError on tsonfig to comple error line;
// // }}};
