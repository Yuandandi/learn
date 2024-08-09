type Pizza = {
    id: number
    name: string;
    price: number;
};

type Order = {
    id: number;
    pizza: string;
    status: "ordered" | "completed";
};

let nextPizzaId = 1;

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderQueue: Order[] = [];
let nextOrderId = 1;

// this return void
function addNewPizza(pizzObj: Omit<Pizza, "id">): Pizza {
    const newPizza: Pizza = {
        id: nextPizzaId++,
        ...pizzObj
    }
    // not return anything
    menu.push(newPizza);
    return newPizza
}

addNewPizza({ name: "Seblak", price: 7 });

function placeOrder(pizzaName: string): Order | undefined {
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

function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array
};

addToArray(menu, { id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addToArray(orderQueue, { id: nextPizzaId++, pizza: menu[2], status: "completed" });

console.log(menu);
console.log(orderQueue)

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find((order) => order.id === orderId);
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return 
    } 
    order.status = "completed";
    return order;
}

// Type Narrowing ; narrow down the type and for each condition
export function getPizzaDetail(identifier: string | number): Pizza | undefined { // add undefined to allow undefined condition
    // challenge: write the code to check if the parameters is a string or a number, and use the menu.find() method
    // accordingly
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase()) // E: possibly returning value eof undefined
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("parameter `identifier must be either string or a number`")
    }
};

// challenge (part 1) make It so w can use a blobal variable to track the nextPizzaId and use the same trick we use with
// nextOrderId++ When You're calling addNewPizza, update the menu items to use this as well so we don't have to manually
// enter ids 1-4 like we're currently doing;

addNewPizza({ name: "Chicken Bacon Ranch", price: 22 });
addNewPizza({ name: "BBQ Chicken", price: 3 });
addNewPizza({ name: "Spicy Sausage", price: 20 });

// placeOrder("Chicken Bacon Ranch");
// completeOrder(1); // we have change the orderId type to number ;;

// console.log("Cash in register: ", cashInRegister);
// console.log("Order queue: ", orderQueue);

console.log("Menu: ", menu);
// Menu:  [
//   { id: 1, name: 'Margherita', price: 8 },
//   { id: 2, name: 'Pepperoni', price: 10 },
//   { id: 3, name: 'Hawaiian', price: 10 },
//   { id: 4, name: 'Veggie', price: 9 },
//   { id: 5, name: 'Seblak', price: 7 },
//   { id: 6, name: 'Chicken Bacon Ranch', price: 22 },
//   { id: 7, name: 'BBQ Chicken', price: 3 },
//   { id: 8, name: 'Spicy Sausage', price: 20 }
// ]

