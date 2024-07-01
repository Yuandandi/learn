// JavaScript classes

// {{{ complex Pizza class
// class Pizza { // define a "Pizza" class
//     constructor(pizzaType, pizzaSize) { // constructor that initialize 'size' and 'crust' properties
//         this.type = pizzaType;
//         this.size = pizzaSize;
//         this.crust = "original";
//     }
//     bake() { // bake method, this is a public method of pizza class
//         console.log(`baking a ${this.size} ${this.crust} ${this.type} crust pizza`)
//     }
// }
// console.log(Pizza); // return a pizza class as It is the above
// // create a new object with a 'new' keyword;
// const myPizza = new Pizza(); // 'new' keyword ; creates a new object, It makes "this" variable point to the newly created object.
// console.log(typeof (new Pizza())); // object

// console.log(new Pizza()); // if we didn't pass a pizza type on a constructor() method it'll return undefined
// myPizza.bake() // access the 'bake' method with 

// console.log(myPizza.size);

// // now constructor() holds a parameter of pizzaType;
// const yourPizza = new Pizza("perreroni");
// console.log(yourPizza);

// const hisPizza = new Pizza("bismark", "small");
// hisPizza.bake();
// }}}
// // {{{ simplyfy Pizza class
// class Pizza { // parent class, as a blueprint for SpecialtyPizza child class
//     constructor(pizzaSize) {
//         this.size = pizzaSize;
//         this.crust = "original";
//     }
//     getCrust() { // getter
//         return this.crust;
//     }
//     setCrust() { // setter
//         this.crust = pizzaCrust;
//     }
// }

// class SpecialtyPizza extends Pizza { // 'extends' keyword will inherit from the parent 'piza'
//     constructor(pizzaSize) {
//         super(pizzaSize); // because we use 'extends' we need to use super() method to get the value from it's parent
//         this.type = "The Works"; // 'this' keyword can only applied after the "super" keyword
//     }
//     slice() {
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`)
//     };
// }

// const mySpecialty = new SpecialtyPizza("medium")
// mySpecialty.slice()
// // }}}
// // {{{ ._foo private keys
// class Pizza { // parent class, as a blueprint for SpecialtyPizza child class
//     constructor(pizzaSize) {
//         this._size = pizzaSize;
//         this._crust = "original";
//     }
//     getCrust() { // getter
//         return this._crust;
//     }
//     setCrust() { // setter
//         this._crust = pizzaCrust;
//     }
// }
// // }}}
// // Factory Function{{{

// // this is the solution in the old days When we want to retur in a "pirvate" variable;
// function pizzaFactory(pizzaSize) {
//     const crust = "original";
//     const size = pizzaSize
//     return {
//         bake: () => console.log(`Baking a ${this.size} ${crust} crust pizza`) // return bake function
//     }
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();
// // }}}
// class now support 'public' and ' # private' field; {{{

class Pizza {
    crust = "original";
    #sauce = "traditional"; // '#' indicate a private fields
    #size; // initiate the size so it's become private
    constructor(pizzaSize){
        // because ewe make the size property become "private", we need to add #;
        this.#size = pizzaSize // whatever we need in the parameter we store inside a 'constructor' body
    }
    getCrust() {
        return this.crust;
    }
    getCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }
    hereYouGo (){
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`)
    }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
// you can't access private variable outside of its class;
// console.log(myPizza.#sauce); // private field '#sauce' must be declared in an enclosing class
// }}}
