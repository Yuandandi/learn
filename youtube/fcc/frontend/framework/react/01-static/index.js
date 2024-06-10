ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root")) // (What you want to display and where)
// ReactDOM ; library we uploaded in .HTML file, render ; method display to the screen;
// ReactDOM.render(<h1>foo</h1>, root) // also works but better to be specific

ReactDOM.render(
  <ul> 
  <li>thing 1</li>
  <li>thing 2</li>
  </ul>,
  document.getElementById("root")
)
