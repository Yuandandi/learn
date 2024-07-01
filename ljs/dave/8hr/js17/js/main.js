// JavaScript event listener
// console.log(view);
// console.log(div);
// console.log(h2);
// // event listener;
// // Syntax; addEventListener("event", function, useCapture)
// const doSomething = () => {
//     alert("Doing something!")
// }
// // add and remove Eventlistener
// h2.addEventListener("click", doSomething, false) // false is the default, you don't have to write
// h2.removeEventListener("click", doSomething, false) // if we change to 'true' it'll applied again

// h2.addEventListener("click", (event) => { // anonymous arrow function
//     console.log(event.target) // .target ; What we clicked (element and it's content)
//     event.target.textContent = "clicked"; // change the text to clicked
// });
// // stopPropagation()
// document.addEventListener("readystatechange", (event) => {
//     if (event.target.readyState === "complete") { // readyState ; page completely loaded and the 'DOM' ready to use
//         console.log("readyState: complete");
//         initApp();
//     }
// })

// const initApp = () => {
//     const view = document.querySelector("#view2");
//     const div = document.querySelector("div");
//     const h2 = document.querySelector("h2");

//     view.addEventListener("click", (event) => {
//         // event.stopPropagation(); // stopPropagation() ; method prevents further propagation of the current event in the capturing and bubbling phases
//         // view.style.backgroundColor = "purple";
//         // event.target.style.backgroundColor = "purple" // event.target is the h2 
//         // view.classList.add("purple"); // add classes
//         // view.classList.remove('darkblue'); // remove classes
//         view.classList.toggle('purple'); // toggle classes
//         view.classList.toggle('darkblue');
//     }, false); // 'event bubbling' we didn't specify ", false" here
//     div.addEventListener("click", (event) => {
//         // view.style.backgroundColor = "blue";
//         // event.target.style.backgroundColor = "blue";
//         div.classList.toggle('black');
//         div.classList.toggle('blue');
//     }, false);
//     h2.addEventListener("click", (event) => {
//         // event.target.textContent = "clicked";
//         const myText = event.target.textContent;
//         myText === "My 2nd view"
//             ? (event.target.textContent = "clicked")
//             : (event.target.textContent = "My 2nd view")
//     }, false);
// };
// // mouseover mouseout for navbar
// const nav = document.querySelector("nav");
// nav.addEventListener("mouseover", (event) => {
//     // event.target.classList.toggle("height100"); // is no we're logging for
//     event.target.classList.add("height100");
// })
// nav.addEventListener("mouseout", (event) => {
//     event.target.classList.remove("height100");
// })
// preventDefault() 
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete")
        initApp();
    }
})

const initApp = () =>  {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => { // When we submit, we actually reaload the page
        event.preventDefault(); // prevent after submit to reload the page
        console.log("submit event")
    });
}
