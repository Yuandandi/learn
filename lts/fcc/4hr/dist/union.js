"use strict";
let danzor = { username: "dinda", id: 938, name: "foo" };
console.log({ danzor });
function getDbId(id) {
    console.log(`DB id is: ${id}`);
}
;
getDbId(3);
getDbId("3");
function dbId(id) {
    if (typeof id === "string") {
        console.log(id.toLowerCase());
    }
    else {
        console.log(id);
    }
}
;
dbId("foo");
dbId(4);
const data = [1, 2, 3, "4", false];
console.log({ data });
let seatAllotment;
