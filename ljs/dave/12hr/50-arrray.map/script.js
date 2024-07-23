// {{{ array.map()

const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(numbers => numbers * 2);
const doubledNumbers = numbers.map(numbers => "Number " + numbers * 2);

console.log(doubledNumbers);  // [ 'Number 2', 'Number 4', 'Number 6', 'Number 8', 'Number 10' ]

//  }}}
// {{{ Same With forEach

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers2 = [];

numbers.forEach(number => {
    doubledNumbers2.push(number * 2);
});

console.log(doubledNumbers2); // [ 2, 4, 6, 8, 10 ]

//  }}}
// {{{ Map Return an Object

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004},
    { name: "Company Two", category: "Retail", start: 1992, end: 2008},
    { name: "Company Three", category: "Auto", start: 1999, end: 2007},
    { name: "Company Four", category: "Retail", start: 1989, end: 2010},
    { name: "Company Five", category: "Technology", start: 2009, end: 2009},
    { name: "Company Six", category: "Finance", start: 1987, end: 2010},
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    { name: "Company Eight", category: "Technonlogy", start: 2001, end: 2011},
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

// Create an array of company name;
const companyName = companies.map(company => company.name);
// console.log(companyName);

// create an array with just company and category;
const companyNameCategory = companies.map(company => {
    return { // return an Object form
        name: company.name,
        category: company.category
    }
});
// console.log(companyNameCategory);

// Create an array of the length of each companies in years;
const companyAge = companies.map(company => {
    return {
        name: company.name,
        length: company.end - company.start,
    };
});
console.log(companyAge);

//  }}}
// {{{ Chain Map Methods

const numbers = [1, 2, 3, 4, 5];

// you can do one liner but often do this format{{{
const squareAndDouble = numbers
    .map(number => Math.sqrt(number))
    .map(sqrt => sqrt * 2);

console.log(squareAndDouble);
// }}}
// longer version{{{
const squareAndDouble2 = numbers
    .map(function (number) {
        return Math.sqrt(number);
    })
    .map(function (sqrt) {
        return sqrt * 2;
    });  // you can nest How many you like

console.log(squareAndDouble2);
// }}}
//  }}};
// {{{ Chaining Different Methods

const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10];

const evenDouble = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 2);

console.log(evenDouble); // [ 4, 8, 12, 20 ]

//  }}};
