type UserRole = "guest" | "member" | "admin" | "contributor"; // union types ; | (or operator)

type User = {
    id: number
    username: string
    role: UserRole
};

// type UpdateUser = {
//     id?: number
//     username?: string
//     role?: UserRole
// };

// there's a builtin Partial<> to do the same ass comment above;
type UpdateUser = Partial<User> // hover over UpdateUser and see the same type reffered

let nextUserId = 1;

const users: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" },
];

// UpdateUser so It won't complain since They are all optional
function updateUser(id: number, updates: UpdateUser) {
    // find the user in the array by the id 
    const foundUser = users.find(user => user.id === id)
    if (!foundUser) {
        console.error("User not found")
        return
    }
    // use Object.assign to update the found user in place
    Object.assign(foundUser, updates)
    // check mdn if you need help wih using Object.assign
}

// Omit<> generic exclude which properties
function addNewUser(newUser: Omit<User, "id">): User {
    const user: User = {
        id: nextUserId++,
        ...newUser // spread operator 
    }
    users.push(user)
    return user
};

addNewUser({ username: "joe_schmoe", role: "member" });

console.log(users)
// [
//   { id: 1, username: 'john_doe', role: 'member' },
//   { id: 2, username: 'jane_smith', role: 'contributor' },
//   { id: 3, username: 'joe_schmoe', role: 'member' } // user added
// ]
