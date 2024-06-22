"use strict";
function createUser(user) {
    console.log(`Name: ${user.name}, Email: ${user.email}, Payment: ${user.pembayaran}`);
}
const newUser = {
    name: "bas",
    email: "bas@mail.com",
    pembayaran: 399,
};
createUser(newUser);
