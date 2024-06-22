//{{{ nested types of array with different option
type Orang = {
    name: string;
    id: number;
};

type Admin = {
    username: string;
    id: number;
};

// let danzor: Orang | Admin = {id: 938}; // username or admin is missing
// let danzor: Orang | Admin = {username: "dinda", id: 938}; // you can declare 2
let danzor: Orang | Admin = {username: "dinda", id: 938, name: "foo"}; // or even 3
console.log({ danzor })//}}}
//{{{ passing id as parameter with optional type
function getDbId(id: number | string) {
    console.log(`DB id is: ${id}`);
};
getDbId(3);
getDbId("3");//}}}
//{{{ if else inside a function with multiple types
function dbId(id: number | string): void {
    // id.toLowerCase() // doesn't exist on type number
    if (typeof id === "string") { // this will work, but if you change to "number" It will complain
        console.log(id.toLowerCase())
    } else {
        console.log(id)
    }
};

// now both method is working just fine;
dbId("foo");
dbId(4)//}}}
//{{{ multiple types passing through an array 
const data: (string | number | boolean)[] = [1,2,3,"4",false]; // wraps all the types inside ()
console.log({ data });//}}}
//{{{ fixed types other than that is error
let seatAllotment: "aisle" | "middle" | "window";
// seatAllotment = "crew"; // It will complain cause you only have 3 options}}}
