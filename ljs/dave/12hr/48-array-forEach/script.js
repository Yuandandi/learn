// For Each

// const socials = ["Twitter", "Linkedin", "Facebook", "Instagram"];

// console.log(socials.__proto__); // Object of all properties available 
// // Traditional Function;{{{
// socials.forEach(function (item) {
//     console.log(item); // Twitter Linkedin Facebook Instagram
// });}}}
// Arrow Function;{{{
// socials.forEach((item) => console.log(item)); // Twitter Linkedin Facebook Instagram}}}
// // Accessing Item, Index and the Array;{{{
// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));  
// // 0 - Twitter [ 'Twitter', 'Linkedin', 'Facebook', 'Instagram' ]
// // 1 - Linkedin [ 'Twitter', 'Linkedin', 'Facebook', 'Instagram' ]
// // 2 - Facebook [ 'Twitter', 'Linkedin', 'Facebook', 'Instagram' ]
// // 3 - Instagram [ 'Twitter', 'Linkedin', 'Facebook', 'Instagram' ]}}}
// // Passing Name Function;{{{
// function logSocials(socials) {
//     console.log(socials); // Twitter Linkedin Facebook Instagram
// };

// socials.forEach(logSocials);// }}}
// When You're on an Array of the Object;{{{

const socialObjs = [
    { Name: "Twitter", url: "https://twitter.com"},
    { Name: "Facebook", url: "https://Facebook.com"},
    { Name: "LinkedIn", url: "https://LinkedIn.com"},
    { Name: "Instagram", url: "https://Instagram.com"},
];

// socialObjs.forEach((item) => console.log(item));
// { Name: 'Twitter', url: 'https://twitter.com' }
// { Name: 'Facebook', url: 'https://Facebook.com' }
// { Name: 'LinkedIn', url: 'https://LinkedIn.com' }
// { Name: 'Instagram', url: 'https://Instagram.com' }

socialObjs.forEach((item) => console.log(item.url)); 
// https://twitter.com
// https://Facebook.com
// https://LinkedIn.com
// https://Instagram.com

socialObjs.forEach((item) => console.log(item.Name)); ; 
// Twitter
// Facebook
// LinkedIn
// Instagram

// }}}
