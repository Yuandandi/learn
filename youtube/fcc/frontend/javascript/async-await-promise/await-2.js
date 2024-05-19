// ********** AWAIT **********
let stocks = {
  Fruits : ["strawberry", "grapes", "banana", "apple"],
  Liquid : ["water", "ice"],
  Holder : ["cone", "cup"],
  Toppings : ["chocolate", "peanuts"],
}

let is_shop_open = true;

let toppings_choice = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(
        console.log("which topping would You like");
      );
    }, 3000);
  })
};

async function kitchen() {
  console.log("A");
  console.log("B");
  console.log("c");
  await toppings_choice();
  console.log("D");
  console.log("E");
};

kitchen();

console.log("cleaning the dishes");
console.log("cleaning the table");
console.log("take another order");
