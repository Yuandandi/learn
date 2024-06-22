type User = {
    name: string;
    email: string;
    totalPembayaran: number;
}

function createUser(user: User): void { // if It only console and doesn't have a return statement you better to specify : void
    console.log(`Name: ${user.name}, Email: ${user.email}, Payment: ${user.totalPembayaran}`)
};

const userNew = {
    name: "bas",
    email: "bas@mail.com",
    totalPembayaran: 399,
};

createUser(userNew);
