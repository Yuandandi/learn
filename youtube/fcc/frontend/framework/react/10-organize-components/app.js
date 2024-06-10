import Header from "./Header.js" // the file you create on the current Directory
import Footer from "./Footer.js"
import ReactDOM form "react-dom";

function App() { 
  return (
    <div>
    <Header/> 
    <MainContent/>
    <Footer/>
    </div>
  )
}

function MainContent() {
  return (
    <div>
    <h1>Fun fact about react</h1>
    <ul>
    <li>Was first released in 2013</li>
    <li>Was originally created by jordan Walker</li>
    <li>Has well over 100k stars on GitHub</li>
    <li>Is maintained by facebook</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    </div>
  )
}

ReactDOM.render(<App/>,  document.getElementById("root"));
