const root = document.querySelector("#root");

// Inline Style (behave like an object so key:value, if the key has 2 or more word use camelcase, and ended with',')
let element = /*#__PURE__*/React.createElement("div", {
    style: {
        width: 200,
        height: 200,
        backgroundColor: 'yellow'
    }
});
// Refer to the App.Css File
const className = "box";
element = /*#__PURE__*/React.createElement("div", {
    className: className
});
// Event Handler
element = /*#__PURE__*/React.createElement("button", {
    onClick: function () {
        alert("foob");
    }
}, "Click Me");
// Event Handler With Call Function

function buttonClicked() {
    alert("foo");
}
;
element = /*#__PURE__*/React.createElement("button", {
    onClick: buttonClicked
}, "Click Me");
// Event Handler With Call Function With a Parameter

function menekanTombol(message) {
    alert(message);
}
;
element = /*#__PURE__*/React.createElement("button", {
    onClick: function () {
        menekanTombol("You just clicked me right?");
    }
}, "Click Me");
// Event Handler With Call Function With a Parameter, '.bind' method and "this" keyword

function tombolDitekan(message) {
    alert(message);
}
;
element = /*#__PURE__*/React.createElement("button", {
    onClick: tombolDitekan.bind(this, "You just clicked me right?")
}, "Click Me");
// // Simple React Component (destructured) React state
// function App() { // Using pascal case
//   // because React.useState() is an array we can destructured with that syntax
//   const [count, setCount] = React.useState(0) 
//   // conventionally use "set" as prefix

//   return (
//     <>
//     <button onClick={ function () {
//       setCount(count - 1)
//     }}>-</button>
//     <span>{ count }</span>
//     <button onClick={ function () {
//       setCount(count + 1) // state holder ; re-render only this part not like vanilla js or HTML
//     }}>+</button>
//     </>
//   );

// }
// function App() {

//   React.useEffect(function () { // will rendered after the DOM is fully rendered
//     console.log("now we get It rendered")
//   })
//   return <h1 id="title">Hello this is a title</h1>;
// };

// // // the document hasn't been rendered yet so It won't showed to the console (null)
// // console.log(document.getElementById("title")); // if you move after the ReactDOM.render() then It will work
// // but can be a problem too if we have a timeout to load a page It will return "null" too
// // With Button
// function App() {

//   const [clicked, setClicked] = React.useState(false);
//   const [count, setCount] = React.useState(0);

//   React.useEffect(function () { // will rendered after the DOM is fully rendered
//     console.log(document.getElementById("title")) // so now we ablet to select the DOM tree
//   }, [count]) // second parameter if you passsing this meaning we only want to execute "count" state and ignore the state "clicked"
//   // if you passing [count, clicked] of course It will execute anything on the title id=""

//   return (
//     <>
//     <h1 id="title">Hello this is a title</h1>
//     <button onClick={function () {
//       setClicked(true) // this will set the false to true so we can only see the function applied once (hardcoded)
//     }}>
//     click me please
//     </button>
//     <button onClick={function () {
//       setCount(count + 1) // the value is constantly changing so the function can run multiple times
//     }}>
//     Tambah
//     </button>
//     <p>Nilai saat ini: { count }</p>
//     </>
//   )
// };
// // // the document hasn't been rendered yet so It won't showed to the console (null)
// // console.log(document.getElementById("title")); // if you move after the ReactDOM.render() then It will work
// // but can be a problem too if we have a timeout to load a page It will return "null" too
// // With Button and second Argument as empty array 
// function App() {

//   const [clicked, setClicked] = React.useState(false);
//   const [count, setCount] = React.useState(0);

//   React.useEffect(function () { 
//     console.log("init carousel")

//     // cleanup memory
//     return function () { // in case you remove a node from the DOM and there is an event listener, you make sure both are completely removed
//       console.log("destroy carousel")
//     }
//   }); // empty array as a second Argument will render this function only the first time rendered, and ignore rendered processes
//   // good example When you want to fetch API data

//   return (
//     <>
//     <h1 id="title">Hello this is a title</h1>
//     <button onClick={function () {
//       // setClicked(true) // this will set the false to true so we can only see the function applied once (hardcoded)
//       setClicked(true)
//     }}>
//     click me please
//     </button>
//     <button onClick={function () {
//       setCount(count + 1) // the value is constantly changing so the function can run multiple times
//     }}>
//     Tambah
//     </button>
//     <p>Nilai saat ini: { count }</p>
//     </>
//   )
// };
// // Conditional Rendering;
// function App() {

//     const [login, setLogin] = React.useState(false);

//     // ternary operator
//     // <p>{ login ? <b>you have logged in</b> : <i>You haven't logged in yet</i>} </p> // toggle
//     return (
//         <>
//         <h1>Application</h1>
//         <p>{ login === true && <b>you have logged in</b> } </p>
//         <button
//         onClick={function () {
//             setLogin(true)
//         }}>
//         Login
//         </button>
//         </>
//     )
// }
// // DOM Manipulation
// function App() {
//     const [login, setLogin] = React.useState(false)

//     React.useEffect(function () {
//         const title = document.getElementById("title")
//         setTimeout(function () {
//             title.textContent = "Text node changed";
//         }, 1000) // change after 1s
//     }, [])

//     return (
//         <>
//         <h1 id="title">Application</h1>
//         </>
//     );

// };
// // DOM Manipulation without selector but usereff
// function App() {
//     const [login, setLogin] = React.useState(false);
//     const titleRef = React.useRef(null); 
//     // if the element changing the usestate will re-rendered

//     console.log(titleRef); // Object { current: h1 }

//     React.useEffect(function () {
//         const title = document.getElementById("title")
//         setTimeout(function () {
//             titleRef.current.textContent = "Text node changed";
//         }, 1000) // change after 1s
//     }, [])

//     return (
//         <>
//         <h1 ref={ titleRef }>Application</h1>
//         </>
//     );

// };
// // Make List in React
// // // standard list but hardcoded
// // return (
// //     <ul>
// //     <li>Apple</li>
// //     <li>Orange</li>
// //     <li>Grape</li>
// //     <li>Lengkeng</li>
// //     </ul>
// // )

// function App() {
//     const fruits = [
//         "Apple",
//         "Orange",
//         "Grape",
//         "Lengkeng",
//         // "Apple", if we passing the same key E: two children with the same key
//     ]

//     console.log(fruits);

//     return ( // you can't use forEach() because He doesn't return anything
//         <ul>
//         { fruits.map(function (fruit) {
//             return <li key={ fruit }>{ fruit }</li>
//         }) }
//         </ul>
//     ) // we need to passing key=, since our array 'list' has no redundant items so we can use that
//     // but a proper way is to use something like 'productId'

// };
// // Return the User Type With Uncontrolled Document
// function App() {

//     const namaRef = React.useRef(null)

//     function clicked(event) {
//         event.preventDefault(); // usialy button will reload the page so now we disable It
//         const nama = namaRef.current.value; // here we used uncontrolled document

//         console.log("Nama:", nama)
//     };

//     return (
//         <form onSubmit={ clicked }>
//         <div>
//         <label>Nama: </label>
//         <input type="text" name="nama" ref={ namaRef }/>
//         </div>
//         <button type="submit">Kirim</button>
//         </form>
//     )
// };
// // Return the User Type With Controlled Document
// function App() {
//     // const [nama, setNama] = React.useState("your name"); // pass default value
//     const [nama, setNama] = React.useState("");
//     // Controlled Component meaning component was handled by the react state above

//     function clicked(event) {
//         event.preventDefault();
//         console.log("name: ", nama)
//     }

//     return (
//         <form onSubmit={ clicked } >
//         <label>Nama: </label>
//         <div>
//         <input 
//         type="text"
//         name="nama"
//         value={ nama }
//         onChange={ function (event) {
//             setNama(event.target.value)
//         }}/>
//         </div>
//         <button type="submit">Send</button>
//         </form>
//     )
// }

// // Http Request With Standard Fetch API
// function App() {
//     React.useEffect(function () {
//         // fetch(); browser native API request
//         const data = fetch("https://api.github.com/users/Yuandandi")
//             .then(function (response) { // request finished either success or fail
//                 // console.log(response) // ok: true meaning success
//                 // console.log(response.json()) // this JSON also asynchronous, we wait for the data to come 
//                 return response.json();
//             })// don't wait for this data completed, execute the next line first (promise, put in the background)
//             .then(function (response) {
//                 console.log(response)
//             })
//         // promise return we can use .then()
//         // reject status (404, 500)
//         // resolve status (200)
//         console.log(data) // Object Promise { <state>: "pending" } ; promise asynchronous
//     }, [])

//     return (
//         <h1>Data Fetch</h1>
//     )
// };
// // Http Request With Async Await

// function App() {
//     const [news, setNews] = React.useState([]);

//     React.useEffect(function () {
//         async function getData() {
//             const request = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
//             const response = await request.json();

//             // Assuming the data you want is in response.data
//             setNews(response.data);
//         }
//         getData();
//     }, []);

//     return (
//         <>
//         <h1>Populaion per year in USA</h1>
//         <ul>
//         {news.map(function (item, index) {
//             return <li key={index}>Year: {item.Year}, Population: {item.Population}</li>
//         })}
//         </ul>
//         </>
//     );
// }
// // Simple TODO List

// function App() {
//     // react state
//     const [activity, setActivity] = React.useState("")
//     const [todos, setTodos] = React.useState([])

//     function addTodoHandler(event) {
//         event.preventDefault(); // disable refresh
//         // console.log(activity) // console user type
//         // setTodos([activity]) // this only replace if user input more then one
//         setTodos([...todos, activity]) // ... spread operator (merge data)
//         setActivity("") // after user submit will reset to placeholder 
//     }

//     return (
//         <>
//         <h1>Simple Todo List</h1>
//         <form onSubmit={addTodoHandler}>
//         <input 
//         type="text"
//         placeholder="Nama Aktifitas" // default text on the input field
//         value={ activity } // turn back onto activity
//         onChange={function (event) {
//             setActivity(event.target.value) // stored every change user made in the input field
//         }}
//         />
//         <button>Tambah</button>
//         </form>
//         <ul>
//         { todos.map(function (todo) {
//             return <li key={ todo }>{ todo }</li> // this only will append the string not the list
//         }) }
//         </ul>
//         </>
//     )
// }

// Simple TODO List Adding Remove Feature
function App() {
    // react state
    const [activity, setActivity] = React.useState("");
    onst[(todos, setTodos)] = React.useState([]); // todos; array of todos, setTodos; boundFunctionObject

    // one of the solution to generate unique id because It will return a different everytime executed"
    function generateId() {
        return Date.now();
    }
    ;
    function addTodoHandler(event) {
        event.preventDefault(); // disable refresh
        // console.log(activity) // console user type
        // setTodos([activity]) // this only replace if user input more then one
        setTodos([
            // change the activity as an Object with "value" and "id" innIt
            ...todos, {
                id: generateId(),
                activity: activity
            }]); // ... spread operator (merge data)
        setActivity(""); // after user submit will reset to placeholder 
    }

    // function removeTodoHandler(todoId) { // passing 'todoid' is What user clicked
    //     const filteredTodos = todos.filter(function (todo) {
    //         // console.log(todoId, todo.id) // this is all the list except your removed one
    //         return todo.id !== todoId // return all the todo.id which not removed
    //     })
    //     // console.log(filteredTodos);
    //     setTodos(filteredTodos) // move the list
    // }

    function removeTodoHandler(todoId) {
        console.log(todos, setTodos, todoId) / console.log("foob");
    }
    ;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), /*#__PURE__*/React.createElement("form", {
        onSubmit: addTodoHandler
    }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        placeholder: "Nama Aktifitas" // default text on the input field
        ,
        value: activity // turn back onto activity
        ,
        onChange: function (event) {
            setActivity(event.target.value); // stored every change user made in the input field
        }
    }), /*#__PURE__*/React.createElement("button", null, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
        return /*#__PURE__*/React.createElement("li", {
            key: todo.id
        }, todo.activity, /*#__PURE__*/React.createElement("button", {
            onClick: removeTodoHandler.bind(this, todo.id)
        }, "Hapus")) // will look onto the id we want to remove
        ;
    }))) // .bind() method ; creates a new function that When called all this function with it's "this" keyword set to the provided value
    ; // we get new unique id and activity
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);
