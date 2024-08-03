"use strict";
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
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
console.log(typeof Coder);
console.log(Coder);
const Dave = new Coder("Dave", "Rock", 42, "TypeScript");
console.log(Dave.getAge());
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
    ;
}
;
const Sara = new webDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
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
console.log(Page.play("strums"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    ;
}
Peeps.count = 0;
;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(John.id);
console.log(Steve.id);
console.log(Amy.id);
class Bands {
    constructor() {
        this.dataState = [];
    }
    ;
    get data() {
        return this.dataState;
    }
    ;
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
;
const MyBands = new Bands();
console.log(MyBands.data);
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ top"];
console.log(MyBands.data);
MyBands.data = ["Van Halen", 3002];
