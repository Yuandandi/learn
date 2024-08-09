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

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice", role: "guest" },
    { id: 4, username: "charlie_brown", role: "guest" },
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

updateUser(1, { username: "new_john_doe" })
updateUser(4, { role: "contributor" })
