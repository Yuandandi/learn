type Pizza = {
    id: number
    name: string;
    price: number;
};

// challenge: Using literal types and unions, update the order status so that It can only ever be "ordered" or "completed"

type Order = {
    id: number;
    pizza: string;
    status: "ordered" | "completed";
};

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 1, name: "Pepperoni", price: 10 },
    { id: 1, name: "Hawaiian", price: 10 },
    { id: 1, name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderQueue: Order[] = [];
let nextOrderId = 1;

function addNewPizza(pizzObj: Pizza) {
    // {{{
    menu.push(pizzObj);
}

addNewPizza({ name: "Seblak", price: 7 });

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    console.log(selectedPizza)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return 
    }
    cashInRegister += selectedPizza.price;
    const newOrder: Order = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);
    return newOrder;
}

// challenge: fix the warning below by handling the 'sad path' scenario;

function completeOrder(orderId: number) {
    const order = orderQueue.find((order) => order.id === orderId);
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return 
    } 
    order.status = "completed";
    return order;
}

addNewPizza({ id: 1, name: "Chicken Bacon Ranch", price: 22 });
addNewPizza({ id: 1, name: "BBQ Chicken", price: 3 });
addNewPizza({ id: 1, name: "Spicy Sausage", price: 20 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1); // we have change the orderId type to number ;;

console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order queue: ", orderQueue);
