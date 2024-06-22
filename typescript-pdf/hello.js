var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message; // accept the parameter message of type string
    }
    ;
    Greeter.prototype.greet = function () {
        return this.greeting; // return the value of the greeting property
    };
    ;
    return Greeter;
}());
var greeter = new Greeter("Hello, world!"); // creating an instance of 'Greeter' which passing the string "Hello, worldl!"
console.log(greeter.greet()); // call the greet method on the 'greeter' instance
