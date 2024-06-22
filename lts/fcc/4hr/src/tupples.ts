// TUPPLES{{{
// Using in fixed format (order of the data) e.g. API calls;
let person: [string, number, boolean] 
person = ["foo", 3, true];

// const person: [string, number, boolean] = [ 3, true, "foo"]; // you need to follow the order type given otherwise It will error
console.log({ person })//}}}
//{{{another with rgb colors;
let rgb: [number, number, number];
rgb = [255, 132, 112];
console.log({ rgb });//}}}
//{{{ something weird with tupples
type tUser = [number, string];
const penggunaBaru: tUser = [112, "example@foo.com"];
// penggunaBaru[0] = "foo"; // type error
penggunaBaru.push("fooooo");
console.log({ penggunaBaru })//}}}
