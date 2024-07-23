// {{{ Sum of All the Array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// break down an array into  one by one;
const sum = numbers.reduce(function (prev, cur) {
    return prev + cur;
}, 0); // started at 0

console.log(sum); // 55

// shorten;
const sum2 = numbers.reduce((prev, cur) => prev + cur, 10); // we start at 10 so it'll be 65 // we start at 10 so it'll be 65
console.log(sum2); // 65

//  }}}
// {{{ Using for loop

const sum3 = () => { // array type
    let acc = 0; // instantiate
    for (const cur of numbers) {
        acc += cur // acc = acc + cur
    };
    return acc;
};

console.log(sum3()); // 55

//  }}};
// {{{ Using Reduce

const cart = [
    { id: 1, name: "Product 1", price: 150},
    { id: 2, name: "Product 2", price: 170},
    { id: 3, name: "Product 3", price: 125},
];

const total = cart.reduce(function (prev, cur) {
    return prev + cur.price;
}, 0);

console.log(total); // 445

//  }}};
