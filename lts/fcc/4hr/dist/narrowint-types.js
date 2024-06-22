"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food";
    }
    else {
        pet;
        return "Bird food";
    }
}
const fish = { swim: () => console.log("Swimming") };
const bird = { fly: () => console.log("Flying") };
console.log(getFood(fish));
console.log(getFood(bird));
function getTrueShape(shape) {
    if (shape.kind == "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
}
const circle = { kind: "circle", radius: 6 };
const square = { kind: "square", side: 4 };
console.log(`circle area: ${getTrueShape(circle)}`);
console.log(`square area: ${getTrueShape(square)}`);
