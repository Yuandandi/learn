const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 150 + 1);

const sumOutput = x + y;
const differenceOutput = x - y;
const productOuput = x * y;
const quotientOuput = x / y;
const rmOutput = x % y;

console.log(`${x} + ${y} = ${sumOutput}`); 
console.log(`${x} - ${y} = ${differenceOutput}`);  
console.log(`${x} * ${y} = ${productOuput}`); 
console.log(`${x} / ${y} = ${quotientOuput}`); 
console.log(`${x} % ${y} = ${rmOutput}`); 
