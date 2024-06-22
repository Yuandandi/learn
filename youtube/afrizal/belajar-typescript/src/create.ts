// FUNCTION

// if you have complex return and want to give more condition use this form function;
function create(): string { // function data type
    return "Termiakasih telah berbelanja";
};

console.log(create());

// ARROW FUNCTION;
const create2 = (): string => "Hello world"; // When you only want to return simple result just use arrow function

// console.log(create2()); // console log the function

// or passing the call function into a new variable for more readability
const result = create();
console.log({ result  });

// console.log inside the function and call the function
function ketawa(): void { // void is used where there is no data.
    console.log("hahah")
};

ketawa();

function combine(): void {
    let a = 1;
    let b = 2;
    let z = a + b;
    console.log("hahah " + z);
};

combine();

// PARAMETER;
// if It has no return statement you need to specify void, thus you need to specify each parameter you gave What type of each;
function add(x: number, y: number): void { 
    const z = x + y;
    console.log("hasil: " + z);
};

add(10, 40);

// GAVE THE EXPECTED RESULT;
// you expect to give string as the result, and give each paramenter a type;
function addition(x: number, y: number): string {
    return (
        `hasilnya adalah ${x + y}` // Using template literals
    );
};

// because It is not a void you need to pass a  console.log bellow;
console.log(addition(40, 20))
