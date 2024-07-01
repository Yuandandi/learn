// higher order functions{{{

// a higher order function is a funct ion that does at least one of the following:
// Takes one or more funct as an Argument (parameter)
// Returns a function as the is result;}}}
// import;{{{
import { posts } from "./posts.js";
// }}}
// .forEach() ; method is easier rather than we work with js object, no need to for loop the object;{{{
posts.forEach(post => {
    console.log(post.body)
});
console.clear(); // clear the console}}}
// {{{ .filter()
const filterPosts = posts.filter((post) => {
    return post.userId === 10;
});
console.log(filterPosts);
// }}}
// .map(){{{
const mappedPosts = filterPosts.map((post) => {
    return post.id * 10;
});
console.log(mappedPosts);// }}}
// .reduce(){{{
const reducePosts = mappedPosts.reduce((sum, post) => {
    return sum * post
});
console.log(reducePosts);// }}}
