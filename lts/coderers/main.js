var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// {{{ Avoid This
// let name = "fulan" // "name" is registered in TypeScript
var nama = "fulan"; // read as string immediately ("")
// }}}
// {{{ Type Declaration and Type Assignment
// type declaration
var kota;
var tahun;
var isActive;
// assign the value
kota = "Bandung";
tahun = 1997;
isActive = false;
console.log(typeof kota, typeof tahun, typeof isActive); // string number boolean
console.log(kota, tahun, isActive); // Bandung 1997 false
var contohData = 2;
// let person: JenisKelamin = { // if the return is an Object you have to wrap It with '{}'
var person = {
    // gender: "laki-laki"
    gender: "perempuan" // only this 2 value is right
    // gender: "pansexual" // E: is not assignambel to type "JenisKelamin"
};
console.log(person); // { gender: 'laki-laki' }
// implementation inside the Object;
var anton = {
    name: "Anton",
    age: 30,
    sayHello: function () {
        return "Hello, my name is ".concat(this.name);
    }
};
console.log(anton.sayHello()); // Hello, my name is Anton
// inside OOP
var SSOService = /** @class */ (function () {
    function SSOService() {
    }
    SSOService.prototype.getCredential = function (user, pass) {
        if (user === "dimas" && pass === "12341") {
            return false; // better writing than 'else return false'
        }
    };
    SSOService.prototype.checkLoginStatusByUsername = function (user) {
        if (user === "dimas") {
            return "login";
        }
        return "logout";
    };
    ;
    return SSOService;
}());
// }}}
// {{{ Implementation Using Internal API
var Loginservice = /** @class */ (function () {
    function Loginservice() {
    }
    Loginservice.prototype.getCredential = function (user, pass) {
        if (user === "admin") {
            return true;
        }
    };
    Loginservice.prototype.checkLoginStatusByUsername = function (user) {
        if (user === "admin")
            return "login";
    };
    ;
    return Loginservice;
}());
// }}}
// use case;
var loginProvider = new Loginservice();
var loginByService = new SSOService();
// 'ApiResponse' has generic type of array 'PersonObj'
var mockupPersonResponse = {
    data: [
        { name: "dimas", age: 19 },
        { name: "anton", age: 17 },
        // {title: "anton", age: 17} // E: 'title' doesn't exist in type PersonObj, we can't messed up ehe type given
    ],
    page: 1,
    totalPage: 10,
};
var mockupTodoResponse = {
    data: [
        { title: "dimas", status: true },
        { title: "anton", status: false },
        // {title: "anton", age: 17} // E: 'title' doesn't exist in type PersonObj, we can't messed up ehe type given
    ],
    page: 1,
    totalPage: 10,
};
// }}}
// {{{ Inheritance
// parent class animal
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.getClassName = function () {
        return "Animal";
    };
    return Animal;
}());
// child class Cat
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sound = function () {
        console.log("Meowww...");
    };
    return Cat;
}(Animal));
// child class Dog;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.sound = function () {
        console.log("Guk-Guk...");
    };
    return Dog;
}(Animal));
var Cimi = new Dog();
Cimi.getClassName();
console.log(Cimi.getClassName()); // Animal
console.log(Cimi.sound()); // Guk-Guk
var kitty = new Cat();
kitty.sound(); // Meowww
console.log(kitty.getClassName()); // Animal
// }}}; 
