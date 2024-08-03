// {{{ Avoid This
// let name = "fulan" // "name" is registered in TypeScript
let nama = "fulan" // read as string immediately ("")


// }}}
// {{{ Type Declaration and Type Assignment
// type declaration
let kota: string;
let tahun: number;
let isActive: boolean;

// assign the value
kota = "Bandung"
tahun = 1997
isActive = false

console.log(typeof kota, typeof tahun, typeof isActive); // string number boolean
console.log(kota, tahun, isActive); // Bandung 1997 false

// }}}
// {{{ Union Type & Intersection Type

// Union Type 
type GabunganDuaData = string | number; // | ; union type meaning (string or number) type
let contohData: GabunganDuaData = 2

// Intersection Type
type IntersectionType = string & number;
// let contohItersection: IntersectionType = 2 // E: type 'number' is not assignable to type never
// intersection usually used in Object type

// }}}
// {{{  String Literal Types

type JenisKelamin = "laki-laki" | "perempuan"; // string literal
// let person: JenisKelamin = { // if the return is an Object you have to wrap It with '{}'
let person: {gender: JenisKelamin} = {
    // gender: "laki-laki"
    gender: "perempuan" // only this 2 value is right

    // gender: "pansexual" // E: is not assignambel to type "JenisKelamin"
}

console.log(person); // { gender: 'laki-laki' }

// }}}
// {{{ Interface 

interface PersonInterface {
    name: string,
    age: number,
    sayHello(): string;
}

// implementation inside the Object;
const anton: PersonInterface = {
    name: "Anton",
    age: 30,
    sayHello: function(): string {
        return `Hello, my name is ${this.name}`
    }
}

console.log(anton.sayHello()); // Hello, my name is Anton

// }}}
// {{{ Interface Implementation Inside the Class
// Implementation Using SSO{{{
type loginStatus = "login" | "logout";

interface AuthFlow {
    getCredential(user: string, pass: string): boolean;
    checkLoginStatusByUsername(user: string): loginStatus;
}

// inside OOP
class SSOService implements AuthFlow {
    getCredential(user: string, pass: string): boolean {
        if (user === "dimas" && pass === "12341") {
            return false // better writing than 'else return false'
        }
    }
    checkLoginStatusByUsername(user: string): loginStatus {
        if (user === "dimas") {
            return "login";
        }
        return "logout"
    };
}

// }}}

// {{{ Implementation Using Internal API

class Loginservice implements AuthFlow {
    getCredential(user: string, pass: string): boolean {
        if (user === "admin") {
            return true
        }
    }
    checkLoginStatusByUsername(user: string): loginStatus {
        if (user === "admin")
            return  "login"
    };
}

// }}}

// use case;
const loginProvider: AuthFlow = new Loginservice()
const loginByService: AuthFlow = new SSOService()

// }}}
// {{{ Implementation Inside Dto

interface PersonObj {
    name: string,
    age: number,
}

interface TodoObj {
    title: string,
    status: boolean,
}

// T ; generic type (whatever type passing in ApiResponse) will be used in "data" fields
interface ApiResponse<T> {
    data: T
    page: number
    totalPage: number
}

// 'ApiResponse' has generic type of array 'PersonObj'
const mockupPersonResponse: ApiResponse<Array<PersonObj>> = {
    data: [
        {name: "dimas", age: 19},
        {name: "anton", age: 17},
        // {title: "anton", age: 17} // E: 'title' doesn't exist in type PersonObj, we can't messed up ehe type given
    ],
    page: 1,
    totalPage: 10,
}

const mockupTodoResponse: ApiResponse<Array<TodoObj>> = {
    data: [
        {title: "dimas", status: true},
        {title: "anton", status: false},
        // {title: "anton", age: 17} // E: 'title' doesn't exist in type PersonObj, we can't messed up ehe type given
    ],
    page: 1,
    totalPage: 10,
}

// }}}

// {{{ Inheritance

// parent class animal
abstract class Animal {
    abstract sound(): void; // void tipe data kosong
    
    getClassName(): string {
        return "Animal"
    }
}

// child class Cat
class Cat extends Animal {
    sound(): void {
        console.log("Meowww...")
    }
}

// child class Dog;
class Dog extends Animal {
    sound(): void {
        console.log("Guk-Guk...")
    }
    
    // // override the "getClassName()" method from 'Animal' class;
    // override getClassName(): string {
    //     return Dog.name
    // }
}

const Cimi: Animal = new Dog();
Cimi.getClassName();
console.log(Cimi.getClassName()); // Animal
console.log(Cimi.sound()); // Guk-Guk

const kitty: Animal = new Cat();
kitty.sound(); // Meowww
console.log(kitty.getClassName()); // Animal

// }}}; 
