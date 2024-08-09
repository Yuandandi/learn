var users = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_doe", role: "guest" },
];
// if we remove the ": User" and hover the fetchUserDetail TypeScript will infer the : User as an output
function fetchUserDetail(username) {
    var user = users.find(function (user) { return user.username === username; });
    if (!user) {
        throw new Error("user with username ".concat(username, " not found"));
    }
    return user; // if we didn't specify the ooutput : User They will accept the condition below (be more specific)
    // return user.username
}
console.log(fetchUserDetail("guest_doe"));
