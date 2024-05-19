let stocks = {
  Fruits : ["strawberry", "grapes", "banana", "apple"],
  Liquid : ["water", "ice"],
  Holder : ["cone", "cup"],
  Toppings : ["chocolate", "peanuts"],
}

// accessing an array;
// variable.objects;
// console.log(stocks.Fruits[1]);

let order = (fruit_name, call_production) => {
  setTimeout( () => {
    console.log(`${stocks.Fruits[fruit_name]} was selected`)
    call_production(); // above first then below
  }, 2000)
  // call_production(); // below first then above
};

let production = () => {
  setTimeout(() => {
    console.log("production has started")
    setTimeout(() => {
      console.log("the food has been chopped") // after 2s and 2s more
      setTimeout(() => {
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)
        setTimeout(() => {
          console.log("the machine has started")
          setTimeout(() => {
            console.log(`${stocks.Holder[0]} was selected`)
            setTimeout(() => {
              console.log(`${stocks.Toppings[0]} was added as toppings`)
              setTimeout(() => {
                console.log("serve ice cream")
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000); // setTimeout() 0 seconds
};

order(0, production);

