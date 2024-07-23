// // {{{ Sample MDN

// const words = ["spray", "limit", "elite", "exuberent", "destruction", "present"];

// const result = words.filter(word => word.length > 6);

// console.log(result); // [ 'exuberent', 'destruction', 'present' ]

// //  }}}
// // {{{ Get Even Number

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0; // even number
// });

// console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ]

// //  }}};
// // {{{ Shorter Version

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ]

// //  }}};
// // {{{ Same With forEach

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = [];

// numbers.forEach(number => { // loop each number
//     if (number % 2 === 0) { // even number select
//         evenNumbers.push(number); // push the number into evenNumbers array
//         // console.log(number); // if you do this way you'll get number one by one not in array form
//     }
// });

// console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ]

// //  }}};
// {{{ Challenge

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

// Get only retail company;{{{
const retailCompanies = companies.filter(company => company.category === "Retail")
// console.log({ retailCompanies })

// Get Companies That Started in or After 1980 an Ended in or Before 2005;
const earlyCompanies = companies.filter(company => company.start >= 1980 && company.end <= 2005);
// console.log({ earlyCompanies })

// get companies that lasted 10 years or more;
const longCompanies = companies.filter(
    company => (company.end - company.start >= 10)
)

console.log({ longCompanies });

// }}}
