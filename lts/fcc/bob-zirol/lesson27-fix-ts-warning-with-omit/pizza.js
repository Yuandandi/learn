"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPizzaDetail = getPizzaDetail;
let nextPizzaId = 1;
const menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
];
let cashInRegister = 100;
const orderQueue = [];
let nextOrderId = 1;
// this return void
function addNewPizza(pizzObj) {
    const newPizza = Object.assign({ id: nextPizzaId++ }, pizzObj);
    // not return anything
    menu.push(newPizza);
    return newPizza;
}
addNewPizza({ name: "Seblak", price: 7 });
function placeOrder(pizzaName) {
    const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    console.log(selectedPizza);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    const order = orderQueue.find((order) => order.id === orderId);
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`);
        return;
    }
    order.status = "completed";
    return order;
}
// Type Narrowing ; narrow down the type and for each condition
function getPizzaDetail(identifier) {
    // challenge: write the code to check if the parameters is a string or a number, and use the menu.find() method
    // accordingly
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase()); // E: possibly returning value eof undefined
    }
    else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier);
    }
    else {
        throw new TypeError("parameter `identifier must be either string or a number`");
    }
}
;
// challenge (part 1) make It so w can use a blobal variable to track the nextPizzaId and use the same trick we use with
// nextOrderId++ When You're calling addNewPizza, update the menu items to use this as well so we don't have to manually
// enter ids 1-4 like we're currently doing;
addNewPizza({ name: "Chicken Bacon Ranch", price: 22 });
addNewPizza({ name: "BBQ Chicken", price: 3 });
addNewPizza({ name: "Spicy Sausage", price: 20 });
// placeOrder("Chicken Bacon Ranch");
// completeOrder(1); // we have change the orderId type to number ;;
console.log("Menu: ", menu);
// console.log("Cash in register: ", cashInRegister);
// console.log("Order queue: ", orderQueue);
