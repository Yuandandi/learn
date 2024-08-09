"use strict";
let nextUserId = 1;
const users = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" },
];
// UpdateUser so It won't complain since They are all optional
function updateUser(id, updates) {
    // find the user in the array by the id 
    const foundUser = users.find(user => user.id === id);
    if (!foundUser) {
        console.error("User not found");
        return;
    }
    // use Object.assign to update the found user in place
    Object.assign(foundUser, updates);
    // check mdn if you need help wih using Object.assign
}
// Omit<> generic exclude which properties
function addNewUser(newUser) {
    const user = Object.assign({ id: nextUserId++ }, newUser // spread operator 
    );
    users.push(user);
    return user;
}
;
addNewUser({ username: "joe_schmoe", role: "member" });
console.log(users);
// [
//   { id: 1, username: 'john_doe', role: 'member' },
//   { id: 2, username: 'jane_smith', role: 'contributor' },
//   { id: 3, username: 'joe_schmoe', role: 'member' } // user added
// ]
