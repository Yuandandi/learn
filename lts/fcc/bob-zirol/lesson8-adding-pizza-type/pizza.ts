type Pizza = {// {{{
    name: string
    price: number
}// }}}
const menu = [// {{{
    { name: "Margherita", price: 8 }, { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]// }}}
// {{{ variable
let cashInRegister = 100;
const orderQueue = [];
let nextOrderId = 1;
// add a utility function "addNewPizza" that takes a pizza Object and adds It to the menu;
// }}}
function addNewPizza(pizzObj: Pizza) {// {{{
    menu.push(pizzObj);
}

addNewPizza({ name: "Seblak", price: 7 });

// console.log(menu); 
// ]}}}
// // write another utility function, placeOrder, that takes a pizza name parameter and{{{
// // finds that pizza object in the menu
// // adds the income to the cashInRegister
// // pushes a new "order Object" in order/queue
// // returns the name order Object (just in case we need It later);

// function orderanKamu(menuKamu) {
//     const pilihanKamu = menu.find(menuObjek => menuObjek.name === menuKamu);
//     cashInRegister += pilihanKamu.price;
//     const statusOrder = { id: nextOrderId++, menu: pilihanKamu, status: "Dalam pesanan"};
//     return statusOrder;
// }

// console.log(orderanKamu("Veggie"))
// // }}}
function placeOrder(pizzaName) {// {{{
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    cashInRegister += selectedPizza.price;
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"};
    orderQueue.push(newOrder);
    return newOrder;
}
// }}}
// {{{ challenge

// challenge: write another utility function, 'completeOrder', that takes an 'orderId' as a parameter
// finds the correct order in the 'orderQueue', and marks it's status as 'completed' for good measure
// return the found order from the function
//
// note: you'll need to ensure that we're adding this to our orders When we create new orders. you can use a global
// 'nextOrderId' variable and increment It every time a new order is created to simulate real IDs being managed for us
// by a database
function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 22 });
addNewPizza({ name: "BBQ Chicken", price: 3 });
addNewPizza({ name: "Spicy Sausage", price: 20 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1); // we have change the orderId type to number ;;

console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order queue: ", orderQueue);

// }}};
