import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header.jsx'
import Meme from './components/Meme.jsx'
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  )
}

export default App;

// // UPDATING STATE OBJECT
// function App() {
    // const [contact, setContact] = React.useState({
    //     firstname: "John",
    //     lastname: "Doe",
    //     phone: "+1 (719) 5551212",
    //     email: "itsmyrealname@example.com",
    //     isFafourite: false,
    // })

    // let starIcon = contact.isFafourite ? "filled-star.png" : "empty-star.png"

    // function toggleFavourite() {
    //     setContact(prevContact => ({
    //         ...contact,
    //         isFafourite: !contact.isFafourite
    //     }))
    // }

    // return (
    //     <main>
    //         <article className="card">
    //             <img src="./person.png" alt="user image" className="card-image"/>
    //             <div className="card-info">
    //                 <img 
    //                 src={`./${starIcon}`} 
    //                 className="card-favourite"
    //                 onClick={toggleFavourite}
    //             />
    //                     <p className="card-contact">{contact.phone}</p>
    //                     <p className="card-contact">{contact.email}</p>
    //                     <h2 className="card-name">
    //                         {contact.firstname} {contact.lastname}
    //                     </h2>
    //                 </div>
    //             </article>
    //         </main>
    // )
// }
// export default App;
    // // function toggleFavourite() {
    // //     setContact(prevContact => {
    // //         return {
    // //             ...contact,
    // //             isFafourite: !contact.isFafourite
    // //         }
    // //     })
    // // }
// // ...contact, will call all the contact object of an array and "isFafourite" will override the value ! is negasi to
// // toggle between true or false

                                         // APPLIED STATE IN THE FORM OF OBJECT
// function App() {
//     const [contact, setContact] = React.useState({
//         firstname: "John",
//         lastname: "Doe",
//         phone: "+1 (719) 5551212",
//         email: "itsmyrealname@example.com",
//         isFafourite: false,
//     })

//     let starIcon = contact.isFafourite ? "filled-star.png" : "empty-star.png"

//     function toggleFavourite() {
//         console.log("toggle favourite")
//     }

//     return (
//         <main>
//             <article className="card">
//                 <img src="./person.png" alt="user image" className="card-image"/>
//                 <div className="card-info">
//                     <img 
//                     src={`./${starIcon}`} 
//                     className="card-favourite"
//                     onclick={toggleFavourite}
//                 />
//                         <p className="card-contact">{contact.phone}</p>
//                         <p className="card-contact">{contact.email}</p>
//                         <h2 className="card-name">
//                             {contact.firstname} {contact.lastname}
//                         </h2>
//                     </div>
//                 </article>
//             </main>
//     )
// }

// export default App;
// because the state is an object so we can reference with "{contact.firstname}"


                                                   // SPREAD OPERATOR
// function App() {
//     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
//     function addItem() {
//         setThingsArray(prevThingsArray => {
//             // spread opertator ; to expand the elements of an array(or an iterable) into individual elements. updating
//             // state in an immutable way
//             return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`] 
//             // here we can't sue thingsArray.push() because It is destructive action, It modifies the original airy
//         })
//     }
//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
//     return (
//         <div> 
//             <button onClick={addItem}>Add item</button>
//             {thingsElements}
//         </div>
//     )
// }

// export default App

                                                        // THING
// function App() {
//   const thingsArray = ["Thing 1", "Thing 2"];
//   const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
//   const buttons = addEventListener("click", function addingItems() {
//     const newThingsText = `Thing ${thingsArray.length + 1}`
//     thingsArray.push(newThingsText)
//     console.log(thingsArray)
//   })

//   return (
//     <div> 
//       <button onClick={buttons}>Add item</button>
//       {thingsElements}
//     </div>
//   )
// }

// export default App

                                                 // STATE GET HOURS APP
// function App() {

//     function greeting(name) { // function that receiving parameters
//         const date = new Date();
//         const hours = date.getHours();
//         let timeOfDay;

//         if (hours >= 4 && hours >= 12) {
//             timeOfDay = "morning";
//         } else if (hours >= 12 && hours >= 17) {
//             timeOfDay = "afternoon";
//         } else if (hours >= 17 && hours >= 20) {
//             timeOfDay = "evening";
//         } else {
//             timeOfDay = "night";
//         }
//         return `Good ${timeOfDay}, ${name}!`
//     }

//     console.log(greeting("bob"))

//     return (
//         <div> 
//         </div>
//     )
// }

// export default App


                                                      // useState
// function App() {
//   // const result = React.useState("Hello"); // useState is part of react module, so you need to import react above, will return the "Hello" as index 0 and f() as index 1
//   const [penting, setPenting] = React.useState("Hello"); // array destructuring, separate from the Const into two or more item [] and you don't need to specify which index to be used in jsx (When you use non destructure ; {penting[0]})
//   function handleClick() {
//     setPenting("No")
//   }
//   return (
//     <div className="state"> 
//       <h1 className="state-title">Is state important to know?</h1>
//       <div className="state-value" onClick={handleClick}>
//         <h1>{penting}</h1>
//       </div>
//     </div>
//   )
// }

// export default App;

// COUNTER ADD SUBSTRACT;
// function App() {
//     const [count, setCount] = React.useState(0)
//     let initialValue = 0
//     function plusButton() {
//         // setCount(count + 1) // in jsx you can't do especially in use state you can't set to "count++" or "++count" It will re-set the value each time
//         setCount(prevCount => prevCount + 1);
//     }
//     function minusButton() {
//         // setCount(count - 1) // not best practice

//         // setCount(function (oldValue) { // best practice ; anytime we need to use our old state value to determine a new state value, and passing old value to reference and return to the new value
//         //     return oldValue - 1;
//         // })
        
//         // or use the callback function instead;
//         setCount(prevCount => prevCount - 1);
//     }
//     return (
//         <div className="counter">
//             <button className="counter-minus" onClick={minusButton}>-</button>
//             <div className="counter-count">
//                 <h1 >{count}</h1>
//             </div>
//             <button className="counter-plus" onClick={plusButton}>+</button>
//         </div>
//     )
// }

// export default App;

                                                  // TERNARY OPERATOR;
// function App() {
//     const isGoingOut = true;
//     // let answer = isGoingOut === true ? "Yes" : "No"; // you can store It ternary into a variable or just write
//     // directly in jsx below, if you store then you need to pass {answer}
//     return (
//         <div>
//             <h1 className="state-title">do i feel like going out tonight?</h1>
//             <div className="state-value">
//                 <h1>{isGoingOut === true ? "Yes" : "No"}</h1>
//             </div>
//         </div>
//     )
// }

                                                      // TRY ABOVE
// function App() {
//   const going = true;
//   return (
//     <div className="state">
//       <h1 className="state-title">Do i feel like going out tonight?</h1>
//       <div className="state-value">
//         <h1>{going ? "yes" : "no"}</h1>
//       </div>
//     </div>
//   )
// }

                                                   // USE STATE HOOK
// function App() {
//   const [isGoingOut, setIsGoingOut] = React.useState(false)
//   function changeMind() {
//     setIsGoingOut(prevState => !prevState)
//   }
//   return (
//     <div className="state">
//       <h1 className="state-title">Do i feel like going out tonight?</h1>
//       <div className="state-value" onClick={changeMind}>
//         <h1>{isGoingOut ? "Yes" : "No"}</h1>
//       </div>
//     </div>
//   )
// }

// export default App;
// setIsGoingOut(prevState => !prevState) ; useState hook in react, specifically Using a functional state update. this
// approach is used When the new state depends on the previous state. setIsGoingOut ; is the state updater function,
// which you get from calling useState. prevState ; is placeholder for the previous state. !prevState ; is used to
// toggle the state
