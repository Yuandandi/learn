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
const quizCart = new SellAble();
quizCart.addToCart(quiz1);
quizCart.addToCart(quiz2);
quizCart.showCart();
const course1 = { name: "TypeScript Basics", author: "John Doe", subject: "Programming" };
const course2 = { name: "Advanced TypeScript", author: "Jane Smith", subject: "Programming" };
const courseCart = new SellAble();
courseCart.addToCart(course1);
courseCart.addToCart(course2);
courseCart.showCart();
