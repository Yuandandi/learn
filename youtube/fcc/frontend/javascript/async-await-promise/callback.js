// ********** CALLBACK **********
let order = (call_production) => {
  console.log("order placed, please call production")
  call_production()
}; // arrow Function

let production = () => {
  console.log("order received")
}; 

order(production);
