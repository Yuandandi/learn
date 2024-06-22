"use strict";
class SellAble {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
    showCart() {
        console.log('Cart Contents:', this.cart);
    }
}
const quiz1 = { name: "Quiz 1", type: "Multiple Choice" };
const quiz2 = { name: "Quiz 2", type: "True/False" };
const course1 = { name: "TypeScript Basics", author: "John Doe", subject: "Programming" };
const quizCart = new SellAble();
quizCart.addToCart(quiz1);
quizCart.addToCart(quiz2);
quizCart.showCart();
const courseCart = new SellAble();
courseCart.addToCart(course1);
courseCart.showCart();
