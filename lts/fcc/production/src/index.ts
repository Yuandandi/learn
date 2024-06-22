// {{{ un proper way TODO
// class User {
//     email: string;
//     name: string;
//     private religion: string;
//     city: string = "";
//     public gender: 'male' | 'female';
//     constructor(email: string,name: string, gender: string, religion: string){
//         this.email = email
//         // name = name;//property 'name' has no initializer and is not definitely assigned in the constructor ; we need 'this'
//         this.name = 'jaka' 
//         this.gender = "female";
//         this.religion = religion;
//     }
// }

// // you can't reassign the 'this' method into a 'new' keyword;
// const danzor = new User("danzor@mail.com", "joko", 'male', 'Islam'); // class constructor cannot be invoked without 'new'
// danzor.city = "Bandung" // comment will result an empty string `city: ''`
// danzor.gender = "male"; // public keys means we can access and reassign in outfield of class 'User'
// danzor.name = 'hanzo';
// // danzor.religion = "christian"; // property 'religion' is private and only accessible within class 'User'
// console.log(danzor);
// }}}
////{{{ the proper way
//class User {
//    private _courseCount = 3;
//    readonly city: string = 'Jakarta'; // 'readonly' put outside the 'constructor'
//    constructor( // public and private key put inside the constructor
//                public email: string, // It pruduce the same in js 'this.property'
//                public name: string,
//                private userId: string,
//               ) {}
//               get getAppleEmail(): string{ // getter
//                   return `your apple mail ${this.email}`;
//               }
//               get courseCount(): number {
//                   return this._courseCount;
//               }
//               set courseCount(courseNum: number) {
//                   if (courseNum <= 1) {
//                       throw new Error("Course count should be more than 1");
//                   } else
//                       this._courseCount = courseNum;
//               }
//}
//const danzor = new User("foo@bas.com", 'joko', 'jksjiIosijwje');
//// danzor._courseCount = 9; //private only accessible within class
//console.log({ danzor })
//console.log(danzor.getAppleEmail);
////}}}
//{{{ e.g.2
// class User {
//     private _courseCount = -1;
//     readonly city: string = 'Jakarta';

//     constructor(
//         public email: string,
//         public name: string,
//         private userId: string,
//     ) {}

//     get getAppleEmail(): string { 
//         return `your apple mail ${this.email}`;
//     }

//     get courseCount(): number {
//         return this._courseCount;
//     }

//     set courseCount(courseNum: number) {
//         if (courseNum <= 1) {
//             throw new Error("Course count should be more than 1");
//         }
//         this._courseCount = courseNum;
//     }
// }

// const danzor = new User("foo@bas.com", 'joko', 'jksjiIosijwje');
// // danzor.courseCount = 2; // Setting the course count using the setter
// console.log(danzor);
// console.log(danzor.getAppleEmail);
// console.log(danzor.courseCount);
//}}}
//{{{ try and catch
// class User {
//     private _courseCount = 1;
//     readonly city: string;

//     constructor(
//         public email: string,
//         public name: string,
//         private userId: string,
//         city: string = "Jakarta"
//     ) {
//         this.city = city
//     }

//     get getAppleEmail(): string { 
//         return `your apple mail ${this.email}`;
//     }

//     get courseCount(): number {
//         return this._courseCount;
//     }

//     set courseCount(courseNum: number) {
//         if (courseNum <= 1) {
//             throw new Error("Course count should be more than 1");
//         }
//         this._courseCount = courseNum;
//     }
// }

// const danzor = new User("foo@bas.com", 'joko', 'jksjiIosijwje');

// try {
//     danzor.courseCount = 2; // This should be valid
//     console.log(`course count is ${danzor.courseCount} satisfied`);
// } catch (error) {
//     console.error(error.message); // Handling the error
// }

// console.log(danzor);
// console.log(danzor.getAppleEmail);
//}}}
class User {//{{{
    // private _courseCount = 1;
    protected _courseCount = 1; // if we change to protected It works in inherit 'extends' keyword but not outside anywhere else
    readonly city: string = "Jakarta";
    constructor (
        public email: string,
        public name: string,
    ){}; // constructor implementation
    private deleteToken(){
        console.log("Token deleted")
    };
    get getAppleEmail(): string{
        return `apple ${this.email}`
    };
    get courseCount(): number {
        return this._courseCount
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than one");
        }
    };
};//}}}
//{{{ inherit class with keyword "extends"
// you can't access 'private' on the 'User' class
class subUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4; // private and only accessible within class 'user'
    };
}
//}}}
const danzor = new User("danzor@mail.com", "danzor");
console.log(danzor);

const rehan = new subUser('raihan@mail.com', 'raihan');
rehan.changeCourseCount(); // to applied the change of rehanc courseCount
console.log(rehan);
