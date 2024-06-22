// GENERICS{{{
const score: Array<number> = [];
const names: Array<string> = [];
function identityOne(val: any): boolean | number {
    // console.log(val) // a function who declared type is neither 'undefined', 'void', nor 'any' must return a value
    return val;
}

function identityTwo(val: any): any {
    return val;
}

// <type> is almost like 'any' but What ever Argument you passing It will return the same type as the Argument you given;
function identityThree<type>(val: type) {
    return val;
}

function identityfour<T>(val: T): T {
    return val;
}
// It will accept all of these and change the return type (): <type you given>
// identityThree("3");
// identityThree("foo");
// identityThree(true);
identityThree(4); 

interface Bootle {
    brand: string;
    type: number;
}

const myBottle: Bootle = {brand: "corkcicle", type: 4};
console.log(identityfour<Bootle>(myBottle));// }}};
function getSearchproducts<T>(products: T[]): T {// {{{
    // return 3; //   'T' could be instantiated with an arbitrary type which could be unrelated to 'number'.
    const myIndex = 3;
    return products[myIndex];
};// }}}

// arrrow function
const getMoreSearch = <T,>(products: T[]): T => { // <T> is a generic tags common people use It so people not think this is jsx syntax rather it's generic syntax
    const yourIndex = 4;
    return products[yourIndex];
}
