// function detectType(val: number | string | number[]) { // can't be return in number of array{{{
function detectType(val: number | string) {
    if (typeof val == "string") {
        return val.toLowerCase();
    }
    return val + 4
}

console.log(detectType("Akbar Maulana"));
console.log(detectType(83));// }}}
// {{{ 
function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide your ID");
        return;
    }
    console.log(id.toLowerCase())
}

console.log(provideId(''));
console.log(provideId("jagoanPapah"));// }}}
// {{{
function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs == "object") {
            for (const s of strs) // for loop
                console.log(s);
        } else if (typeof strs == "string") {
            console.log(strs);
        }
    }
}

// console.log(printAll("foo"));
// console.log(printAll(["foo", "bar"]));
// console.log(printAll(null));
console.log(printAll("")); // empty string}}}
// {{{ in operator narrowing
interface Root {
    name: string,
    email: string,
}

interface SuperUser {
    name: string,
    email: string,
    isAdmin: boolean,
}

function isAdminAccount(account: Root | SuperUser) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}

// Example usage
const rootUser: Root = { name: "Alice", email: "alice@example.com" };
const penggunaSuper: SuperUser = { name: "Bob", email: "bob@example.com", isAdmin: true };

console.log(isAdminAccount(rootUser));  // Output: false
console.log(isAdminAccount(penggunaSuper)); // Output: true;
// }}}
