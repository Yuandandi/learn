// Step 1{{{
const library = [
    {
        title: "Ketika cinta bertasbih",
        author: "Habiburrahman El Shirazy",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: "Laskar pelangi",
        author: "Andrea Hirata",
        status: {
            own: false,
            reading: false,
            read: false,
        },
    },
    {
        title: "Ketika cinta bertasbih",
        author: "Habiburrahman el shirazy",
        status: {
            own: true,
            reading: true,
            read: true,
        },
    },
]
// }}}
// Step 2{{{
library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

console.log(library);
// }}}
// Step 3{{{
const { title: firstBook } = library[0];

console.log(firstBook); // Ketika cinta bertasbih
// }}}
// Step 4;{{{
const libJSON = JSON.stringify(library);

console.log(libJSON);// }}}
