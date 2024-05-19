let stocks = {
  Fruits : ["strawberry", "grapes", "banana", "apple"],
  Liquid : ["water", "ice"],
  Holder : ["cone", "cup"],
  Toppings : ["chocolate", "peanuts"],
}

let is_shop_open = true;

async function order() {
  try{
    await abc;
  }
  catch(error){
    console.log("abc doesn't exist", error);
  }
  finally{
    console.log("runs code anyways") // finally still be printed even though the code above him is error
  };
};


order().then(() => {
  console.log("foo");
});
