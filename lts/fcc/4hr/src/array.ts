// type of array, and all array contains strings

const superHero: string[] = []
// const heroPower: number[] = [];
const heroPower: Array<number> = [];

superHero.push("Spiderman");
heroPower.push(30);
console.log({ heroPower }); // {} print the variable name into the console too

type username = {
    name: string
    isActive: boolean
};

const allUser: username[] = [];

allUser.push({name: "", isActive: true}); // we can passing an empty string
console.log({ allUser }) 

const MLModels: number[][] = [
    [100,200,400],
    []
];

console.log({ MLModels });
// ReadonlyArray is a special types that describes arrays that shouldn't be changed;
function doStuff(values: ReadonlyArray<string>) {
    const copy = values.slice();
    console.log(`the first value is ${values[0]}`);
    // values.push("Hello!"); // you can't push anything to ReadonlyArray<>
};

doStuff(["foo", "hahah"]);
