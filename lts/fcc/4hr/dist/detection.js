"use strict";
function detectType(val) {
    if (typeof val == "string") {
        return val.toLowerCase();
    }
    return val + 4;
}
console.log(detectType("Akbar Maulana"));
console.log(detectType(83));
function provideId(id) {
    if (!id) {
        console.log("Please provide your ID");
        return;
    }
    console.log(id.toLowerCase());
}
console.log(provideId(''));
console.log(provideId("jagoanPapah"));
function printAll(strs) {
    if (strs) {
        if (typeof strs == "object") {
            for (const s of strs)
                console.log(s);
        }
        else if (typeof strs == "string") {
            console.log(strs);
        }
    }
}
console.log(printAll(""));
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
const rootUser = { name: "Alice", email: "alice@example.com" };
const penggunaSuper = { name: "Bob", email: "bob@example.com", isAdmin: true };
console.log(isAdminAccount(rootUser));
console.log(isAdminAccount(penggunaSuper));
