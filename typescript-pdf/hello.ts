class Greeter { // a class greeter
    greeting: string; // property greeting of type string
    
    constructor(message: string) { // constructor ; special method that gets called When a new instance of the class is created
        this.greeting = message; // accept the parameter message of type string
    };
    
    greet(): string { // greet method
        return this.greeting; // return the value of the greeting property
    };
}

let greeter = new Greeter("Hello, world!"); // creating an instance of 'Greeter' which passing the string "Hello, worldl!"
console.log(greeter.greet()); // call the greet method on the 'greeter' instance
