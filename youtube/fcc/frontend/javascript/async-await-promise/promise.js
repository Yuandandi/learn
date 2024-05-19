// Promises are the foundation of asynchronous programming in modern JavaScript. A
// promise is an object returned by an asynchronous function, which represents the
// current state of the operation. At the time the promise is returned to the
// caller, the operation often isn't finished, but the promise object provides
// methods to handle the eventual success or failure of the operation.

// object stocks is declared with four properties: "Fruits", "Liquid", "Holder", "Toppings". each properties is an array containing different items that could be part of an ice cream order;
let stocks = {
  Fruits : ["strawberry", "grapes", "banana", "apple"],
  Liquid : ["water", "ice"],
  Holder : ["cone", "cup"],
  Toppings : ["chocolate", "peanuts"],
}

let is_shop_open = true;
// let is_shop_open = false; // our shop is closed, customer left ; by Using .catch method It will run after the else statement is true

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve( work() )
      }, time);
    } else {
      reject(console.log("our shop is closed"))
    }
  })
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0000, () => console.log("production has started"))
  })
  .then(() => {
    return order(2000, () => console.log("the fruit was chopped"))
  })
  .then(() => {
    return order(0000, () => console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was selected`))
  })
  .then(() => {
    return order(3000, () => console.log(`ice cream placed on ${stocks.Holder[0]}`))
  })
  .then(() => {
    return order(1000, () => console.log("ice cream was served"))
  })
  .catch(() => {
    console.log('customer left')
  })
  .finally(() => { // running both accept the order or reject
    console.log("day ended, shop is closed")
  });
;
