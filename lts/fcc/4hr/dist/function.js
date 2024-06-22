"use strict";
function fail(msg) {
    throw new Error(msg);
}
;
function divide(a, b) {
    if (b == 0) {
        fail("Division by zero awok wok");
    }
    ;
    return a / b;
}
console.log(divide(4, 2));
console.log(divide(4, 0));
