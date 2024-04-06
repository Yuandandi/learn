// GETTERS AND SETTERS
// obtain a vaue of object and set a value of a property within an object

// class Book {
//   constructor(author) {
//     this.author = author;
//   }
//   set writer(updateAuthor) {
//     this.author = updateAuthor;;
//   }
//   get writer() { // getter Function are meant to simply return or get the value of an objects private varibale to the user withour the user directly accessing the private varibale
//     return this._author; // this._author `._` means private variable (means
//     You can't used It outside that class)
//   }
// };

// getter and setter inside thermostat class;
// only accept the celcius;
function makeClass() {
  class Thermostat {
    constructor(temp) { // farenhheit to celcius
      this._temp = 5/9 * (temp - 32); // this. means accessible only in this class, convert farenhheit to celcius
    } // `_` means private variable
    get temperature(){
      return this._temp; // it's already in celcius so no need to be change
    }
    set temperature(updatedTemp) { // update farenheit to celcius
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // instantiating an object we need a "new" keyword. 76 go to the constructor(temp)
let temp = thermos.temperature; // getter and setter is not a Function so You don't need to add ()
thermos.temperature = 26; // ussing getter
temp = thermos.temperature;

console.log(temp);
