"use strict";
// Utility Type
// {{{ Partial 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// partial utility type to pass an Object that just have 1 property of assignment;
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate); // spread operator, this allowed us to not passing all of the props, but declare It They are the props of assignment
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 95 })); // { studentId: 'compsci123', title: 'Final Project', grade: 95 }
// console.log(updateAssignment(assign1, { title: "getto"})) // { studentId: 'compsci123', title: 'getto', grade: 0 }
// }}};
// {{{ Required and Readonly
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
const recordAssignment = (assign) => {
    // send to database, etc
    return assign;
};
// read-only property {spread operator, create new Object 'verified'};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 88 // E: cannot assign to "grade" because It is  a read-only proprty
console.log(assignVerified);
//{
// studentId: 'compsci123',
// title: 'Final Project',
// grade: 95,
// verified: true
// }
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// // }}};
// {{{ Record
const hexCoorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U",
};
;
// Students as a key, and Grades as a value of an Object
const gradeData = {
    Sara: { assign1: 85, assign2: 80 },
    Kelly: { assign1: 76, assign2: 70 },
};
console.log(gradeData);
const score = {
    studentId: "k123",
    grade: 85
};
console.log(score); // { studentId: 'k123', grade: 85 }
const preview = {
    studentId: "123",
    title: "Final Project",
};
console.log(preview); // { studentId: '123', title: 'Final Project' }
// NamesOnly refers onto "Dave" and "John" only;
// }}}; // Object
// {{{ ReturnType
// type NewAssign = { title: string, points: number };
const createNewAssign = (title, points) => {
    return { title, points };
};
let tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign); // { title: 'Utility Types', points: 100 }
console.log(typeof tsAssign); // Object
const assignArags = ["Generics", 100];
console.log(assignArags); // ["Generics", 100] ; Object
const tsAssign2 = createNewAssign(...assignArags);
console.log(tsAssign2);
// 'fetchUsers' function
// return type 'Promise' an array of "User"
// fetch data from 'jsonplaceholder'
// use "thenable" to return the data
// or "catch" an error, if error log the error message
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users" // links you want to fetch
    ).then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
// }}}
