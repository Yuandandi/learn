"use strict";
function createUser(user) {
    console.log(`User created: ${user.name}, Email: ${user.email}, Active: ${user.isActive}`);
}
const newUser = {
    name: "bas",
    email: "bas@mail.com",
    isActive: true,
};
createUser(newUser);
