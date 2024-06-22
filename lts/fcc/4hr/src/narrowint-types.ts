// {{{ type narrowing
type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet;
        return "Fish food";
    } else {
        pet;
        return "Bird food";
    }
}

const fish: Fish = { swim: () => console.log("Swimming") };
const bird: Bird = { fly: () => console.log("Flying") };

console.log(getFood(fish));
console.log(getFood(bird));// }}}
// {{{
interface Circle {
    kind: "circle",
    radius: number,
}

interface Square {
    kind: "square",
    side: number,
}

interface Rectangle {
    kind: "rectangle",
    radius: number,
    width: number,
}

type Shape = Circle | Square

function getTrueShape(shape: Shape) {
    if (shape.kind == "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
}

const circle: Circle = { kind: "circle", radius: 6};
const square: Square = { kind: "square", side: 4};

console.log(`circle area: ${getTrueShape(circle)}`);
console.log(`square area: ${getTrueShape(square)}`);// }}}
