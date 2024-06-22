"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityfour(val) {
    return val;
}
identityThree(4);
const myBottle = { brand: "corkcicle", type: 4 };
console.log(identityfour(myBottle));
function getSearchproducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
;
const getMoreSearch = (products) => {
    const yourIndex = 4;
    return products[yourIndex];
};
