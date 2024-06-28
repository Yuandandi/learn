// Objects
// {{{ single pair object
// key-value pairs in curl braces
const myObj = { name: "Danzor"};
console.log(myObj); // { name: "Danzor"}
console.log(myObj.name); // Danzor
// }}}
// {{{ larger objects
const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["eat", "sleep", "code"],
    beverage: {
        morning: "Coffe",
        afternoon: "Iced tea",
    },
    action: function () { // method name called 'action' and passing anonymous function
        return "Hello world!";
    },
    schedule: function () { // 'this' keyword allow us to use other values our of the object with the keyword this.
        return `Time for ${this.beverage.morning}`;
    }
}

// dot notation only;
console.log(anotherObj.beverage.morning);
console.log(anotherObj.alive);
console.log(anotherObj.answer);
console.log(anotherObj.hobbies);

// bracket notation with index number;
console.log(anotherObj.hobbies[0]);

// bracket notation with key string
console.log(anotherObj["hobbies"]);
console.log(anotherObj["beverage"]['afternoon']);

// call a function inside an object;
console.log(anotherObj.action());

console.log(anotherObj.schedule());
// }}}
// {{{ inheritance, 'Object' key and .create() method
const vehicle = {
    wheels: 4,
    engine: function () {
        return "Vroooom!";
    }
}

const truck = Object.create(vehicle) // inheritance
truck.doors = 2; // passing new object 'doors' to the truck variable 'truck'
console.log(truck);

// now all 'truck' variable has all of the vehicle objects;
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle)
console.log(car.engine());
car.engine = function () { // override the object value
    return "Stututututtu!";
};
console.log(car.engine());

// }}}
// {{{ .keys() and .values() methods
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham",
}

// add a new personil
band.keyboard = "Kingston hamburgh"
// return the keys;
console.log(Object.keys(band)); // [vocals, guitar, band, drums]
// return the values;
console.log(Object.values(band)); // ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham"]

// loops through each item;
for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}!`) // template literals
}

// delete a properties;
delete band.bass;
console.log(band); // there's no bass and it's player anymore

// .hasOwnProperty() check on property;
console.log(band.hasOwnProperty("bass")); // false, return a boolean

// }}}
// {{{ destructuring objects
const group = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham",
}

// get the value and store into new variable, with passing their "key";
const { guitar: myGuitar, bass: myBass } = group;
console.log(myGuitar, myBass);

// simple version;
const { vocals, guitar, bass, drums } = group;
console.log({ vocals, guitar, bass, drums });

// destructuring and store inside a function;
function sings({ vocals }) {
    return `${vocals} sings!`;
}


// function name ( object name);
console.log(sings(group)); // Robert Plant sing!

// }}}
