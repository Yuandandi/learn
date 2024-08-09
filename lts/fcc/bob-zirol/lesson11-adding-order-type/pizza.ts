type Pizza = {
  name: string;
  price: number;
};

// challenge: add an order type, It should have 'id', 'pizza' and 'status' properties
// look through the code if you need a reminder as to What data types thos should be

type Order = {
  id: number;
  pizza: string;
  status: string;
};

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderQueue: Order[] = [];
let nextOrderId = 1;

function addNewPizza(pizzObj: Pizza) {
  // {{{
  menu.push(pizzObj);
}

addNewPizza({ name: "Seblak", price: 7 });

function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 22 });
addNewPizza({ name: "BBQ Chicken", price: 3 });
addNewPizza({ name: "Spicy Sausage", price: 20 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1); // we have change the orderId type to number ;;

console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order queue: ", orderQueue);
