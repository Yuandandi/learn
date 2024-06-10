// // vanilla js way ; but if you want to do Static better just put in the HTML right?
// const root = document.getElementById("root")
// const h1 = document.createElement("h1")
// h1.textContent = "This is the imperative way to program";
// h1.claassName = "header";
// root.append(h1);

// but in react you can put anything in react itself;

// ReactDOM.render(<h1>This is JSX</h1>, document.getElementById("root")); // jsx ; JavaScript xml (flavour of JavaScript)
// // react only can declared a single tag each line, so you can't do side by side add a new tag;

// // SINGLE TAG AS A PARENT TO PUT IT PROPERLY
// ReactDOM.render(
//   <div>
//   <h1 className="header">This is jsx</h1>
//   <p>this is the paragraph</p>
//   </div>,
//   document.getElementById("root")
// )

// DECLARATIVE
const page = (
<div>
  <h1 className="header">This is jsx</h1>
</div>
)

ReactDOM.render( 
  page,
  document.getElementById("root")
)

// What we're getting in jsx is just a JavaScript object
