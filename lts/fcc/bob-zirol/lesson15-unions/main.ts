
type User = {
    username: string
    role: "guest" | "member" | "admin";
};

type UserRole = "guest" | "member" | "admin"; // union types ; | (or operator)

let userRole: UserRole = "member"
