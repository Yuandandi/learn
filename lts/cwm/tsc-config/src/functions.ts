// anotate your function What data type It will return, if not return anything use 'void'
// tsconfig.json "noUnusedParameters: true";

// function calculateTax(income: number, taxYear?: number): number {
function calculateTax(income: number, taxYear = 2022): any {
    if (taxYear < 50_000) {
        return income * 1.2 
        return income * 1.3 
    }
}

console.log(calculateTax(10_000)) // if you pass more or less then 2 It will complain

// function above will return undefined, we can change the config;
// noImplicitReturns: true;

// x is declared but Its value never read;
// taxYear? is an optional parameters you can give or not give the parameters When you call the function);
