"use strict";
function createUser(user) {
    console.log(`Name: ${user.name}, Email: ${user.email}, Payment: ${user.totalPembayaran}`);
}
;
const userNew = {
    name: "bas",
    email: "bas@mail.com",
    totalPembayaran: 399,
};
createUser(userNew);
