"use strict";
// {{{ Index Signature
// When we creating an Object but we don't know the Object keys but you know the shape of It, but you can declare type{{{ definition
// of the keys and type of the values;
// attempt to access an Object property dynamically;}}}
// withot index signature;{{{
// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// };}}}
// // with index signature and a must item{{{
// // index of string and return a number, and (Pizza, Books, Job) is a must item on the list;
// interface TransactionObj {
//     readonly [index: string]: number;
//     Pizza: number,
//     Books: number,
//     Job: number
// };}}}
;
const todaysTransactions = {
    Pizza: -19,
    Books: -8,
    Job: 73
};
console.log(todaysTransactions.Pizza); // 19
console.log(todaysTransactions["Pizza"]); // 19 ; Using string index
let prop = "Pizza";
// console.log(todaysTransactions['prop']); // E: element has implicitly has an "c" type because expression of type "string can't be used to index type"
// we haven't creating an index signature and trying to access It dynamically;
const todaysNet = (transactions) => {
    let total = 0;
    // for in loop;
    for (const transaction in transactions) { // loop through the object
        total += transactions[transaction]; // total number (we need index signature to fix E: element implicitly has any type)
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// {{{
// todaysTransactions.Pizza = 10; // E: index signature in ttype TransactionObj only permits reading}}}
console.log(todaysTransactions["Dave"]); // undefined ; because our interface is only an index of string that returns a number
;
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
// for in;
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // change this 'as keyof '
}
;
// name: Doug
// GPA: 3.5
// classes: 100,200
Object.keys(student).map(key => {
    console.log(student[key]);
});
// Doug
// 3.5
// [ 100, 200 ]
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA"); // Student GPA: 3.5
logStudentKey(student, "name"); // Student name: Doug
logStudentKey(student, "classes"); // Student classes: 100,200
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    // console.log(monthlyIncomes[revenue]) // E: element implicitly has an "any" type
    console.log(monthlyIncomes[revenue]); // add assertion
}
;
// 500
// 100
// 250
console.log(monthlyIncomes); //{ salary: 500, bonus: 100, sidehustle: 250 }
// // }}};
