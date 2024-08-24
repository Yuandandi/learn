import logo from './logo.svg';
import './App.css';
import Welcome, { Welcome2, Welcome3 } from "./welcome.js"
import Button from "./Button.js"
import React from "react" 

// if you write It "welcome.js" It will treat as a module, not the file in the current Directory
// we can import more than one component in the same file
// Welcome no need {  } because we "export default"
// Welcome2 is need {  } because we "export function"

function App() {
  return (
    <div className="App">
    {/*<Welcome />
        <Welcome2 text="Modified Welcome"/> 
        <Welcome3 children="welcome anak"/>
        <Welcome3>Using double closing tag</Welcome3> */}
    <Button text="click me">foo</Button>
    <img src="./logo512.png" alt="react logo" />
    </div>
  ); 
} 

// we can use paired tag too
// modified text right in the tags 
// always use pascal case for react component <Button> is actually a react component not HTML tags

// foo in button is not applied because we use { props.text } in react component
// we can access all of our properties inside public Directory without import first (a.g. logo512.png)
// They are in root file, meaning we don't need to use 'sub URL' like ./public/logo512.png

React.createElement("h1", {
  children: "Hello"
});


export default App;
