import React from "react";
import "./App.css";

const page = (
  <div>
  <h1>my awesome website in react</h1>
  <h3>reasons i love react</h3>
  <ol>
  <li>it's composable</li>
  <li>it's declarative</li>
  <li>it's a hireable skill</li>
  <li>it's actively mainitained by skilled people</li>
  </ol>
  </div>
)


function App() {
  return (
    <div className="App">
    <header className="App-header">
    {page}
    </header>
    </div>
  );
}

export default App;

