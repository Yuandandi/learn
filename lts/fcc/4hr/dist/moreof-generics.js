"use strict";
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
const hasilnya = anotherFunction(3, {
    connection: "starlink",
    username: "foobarhahah",
    password: "genzHoreHore",
    authToken: "sfsew342107894sglsh"
});
console.log(hasilnya);
class SellAble {
    constructor() {
        this.cart = [];
    }
    addToChart(product) {
        this.cart.push(product);
    }
    showCart() {
        console.log('Cart Content', this.cart);
    }
    ;
}
const quiz1 = { name: "Quiz 1", type: "Multiple choice" };
const quiz2 = { name: "Quiz 2", type: "Essay" };
const course1 = { name: "Thermodynamics", author: "John Wellaz", subject: "Fluids mechanics" };
const quizCart = new SellAble();
quizCart.addToChart(quiz1);
quizCart.addToChart(quiz2);
quizCart.showCart();
const courseCart = new SellAble();
quizCart.addToChart(quiz2);
