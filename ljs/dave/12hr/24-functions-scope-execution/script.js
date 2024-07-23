// Function Keyword
function sayHello() { // function declaration
    console.log("Hello world!"); // function body
}

// sayHello(); // Hello world! ; invoke a function

//          parameters
function add(num1, num2) {
    console.log(num1 + num2);
}

// sink your function has a parameter you need to specify the parameter too When invoke the function;
// add(4, 2); // 6

function subtract(num1, num2) {
    return num1 - num2
    
    // console.log("After the return") // this won't showed because it's written after the "return" statement the function stops there
}

subtract(10, 3); // you can't do It like this because your function has no console statement and only return statement

const result = subtract(10, 3);

console.log(result, subtract(20, 5)); // 7 15

// it's good When You don't actually need to return anything you might just want return with no value;
