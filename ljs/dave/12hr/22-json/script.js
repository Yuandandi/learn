// {{{ JSON.stringify() ; Convert to JSON String;
const post = {
    id: 1,
    title: "post one",
    body: "thisi is the body",
}

// console.log(post); // { id: 1, title: 'post one', body: 'thisi is the body' } ; Object


// const str = JSON.stringify(post); // {"id":1,"title":"post one","body":"thisi is the body"} ; string, we send in this formwt to the server

// console.log(str);

// // Local Storage ; is a way to store things on your browser and They can only stor ein your browser in string format;}}}
// JSON.parse();  Convert String to JSON{{{

const str = JSON.stringify(post); // {"id":1,"title":"post one","body":"thisi is the body"} ; string, we send in this formwt to the server

const obj = JSON.parse(str); // { id: 1, title: 'post one', body: 'thisi is the body' } ; string to an Object

// console.log(obj);

const posts = [
    {
        id: 1,
        title: "Post One",
        body: "This is the body",
    },
    {
        id: 2,
        title: "Post Two",
        body: "This is the body",
    }
]

const str2 = JSON.stringify(posts); // [{"id":1,"title":"Post One","body":"This is the body"},{"id":2,"title":"Post Two","body":"This is the body"}]

console.log(str2);// }}}
