type UserRole = "guest" | "member" | "admin"; // union types ; | (or operator)

type User = {
    username: string
    role: UserRole
};

const users: User[] = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_doe", role: "guest" },
];

// if we remove the ": User" and hover the fetchUserDetail TypeScript will infer the : User as an output
function fetchUserDetail(username: string): User { /// we want to retrurn a User Object not a user string
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`user with username ${username} not found`)
    }
    return user // if we didn't specify the ooutput : User They will accept the condition below (be more specific)
    // return user.username
}

console.log(fetchUserDetail("guest_doe")) // { username: 'guest_doe', role: 'guest' }
