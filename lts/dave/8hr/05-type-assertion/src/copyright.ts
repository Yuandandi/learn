// Original{{{
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear),;
// year.textContent = thisYear;}}}

// // Solugion 1{{{
// let year: HTMLElement | null 
// year = document.getElementById("year");

// let thisYear: string
// thisYear = new Date().getFullYear().toString();

// // put into type guard;
// if (year) {
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear;
// };
// console.log(typeof year); // Object
// // }}}

// Solution 1{{{
// type assertion;
const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear)
year.textContent = thisYear;
console.log(year);
console.log(thisYear);
// }}}
