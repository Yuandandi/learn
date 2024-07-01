// {{{var, let, const

// var used in most old browser;
var x = 1;
var x = 9; // var can do redeclaration which, lateron can be a problem
console.log(x);

let y = 3
// let y = 8; // y has already been declared
y = 4; // we can't do redeclare let, but we can reassigned it's value
console.log(y);

const z = 10;
// z = 85; // assignment to constant variable
console.log(z);

// prever to use const wehenever you can, if the value won't be changed later on;
// }}}
// {{{global scope;
var x = 1;
let o = 53;
const n = 43;
// }}}
// local scope;{{{
// {{{ block scope;
{
    let h = 8;
    console.log(h); // but you can access inside the block scope only
}
// console.log(h) // you can't accces local scope directly}}}
// {{{ block scope inside a function
function myFunc() {
    const k = 4;
    console.log(k); // but you can access here
};
myFunc()
// console.log(k); // you can't access in a global scope}}}}}};
// {{{ scope hierarchy
function huruf() {
    console.log(r);
    {
        let r = 10; // r local scope will lose compare to global scope
        // so It will return 8;
        // It won't conflict with the variable that declared in global scope with the same name;
    }
}

// even though global scope variable declared after local scope;
let r = 8;

huruf();// }}}
// {{{ global, function, block scope
// global scope;
var q = 1; // function scoped
var w = 2; // block scoped
var e = 2;

console.log(`global: ${q}`);
console.log(`global: ${w}`);
console.log(`global: ${e}`);

function fungsiSaya() {
    var q = 10;
    let e = 5;
    console.log(`function: ${q}`);
    console.log(`function: ${w}`);
    console.log(`function: ${e}`);
    {
        console.log(`blocks: ${q}`); // blocks, will look into the function scope, because in the blocks hasn't be declared
        console.log(`blocks: ${w}`);
        console.log(`blocks: ${e}`);
    }
};

fungsiSaya();// }}}
// {{{
// function func(x,y = 0, ...args) {
//     return x + y + args.reduce((sum, current) => sum + current, 0);
// };

// let result = func(1,2,3,4,5,6);
// console.log(result);}}}
