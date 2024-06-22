// function addTwo(num: number): number {
//     // num.toUpperCase(); //  property error since we specify to number we can only use the "number methods"
//     return num + 2;
// }

// console.log(addTwo(9));
// // addTwo("9"); // if we didn't specify the type of the parameter It still runw and loss the meaning

// function getUpper(val: string): string {
//     return val.toUpperCase();
// };

// console.log(getUpper("foo"));

// function signUpUpUser(name: string, email: string, isPaid: boolean) {};
// console.log(signUpUpUser("danzor", "danzor@foo.com", false));

// function loginUser(name: string, email: string, isPaid: boolean = false) {};
// console.log(loginUser("danzor", "danzor@foo.com"));

// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true
//     };
// };
// console.log(getValue(43))

// const heros = ["thor", "spoderman", "ironman"]; // if you throw "number" here It will complain here It will complain
// // heros.map(hero => { // expected hero type is not given
// heros.map((hero: string): string => {
//     return `list of available hero ${hero}`
//     // return false; // type error
// });


// function consoleError(errmsg: string): void {
//     // return "foo"; // type string is not assignable to type 'void'
//     console.log("foo");
// }
// consoleError("hahaha");

function fail(msg: string): never {
    throw new Error(msg);
};

function divide(a: number, b: number): number {
    if (b == 0) {
        fail("Division by zero awok wok"); // your message will appear in tHe errro message
    };
    return a/b;
}


console.log(divide(4,2));
console.log(divide(4,0));
