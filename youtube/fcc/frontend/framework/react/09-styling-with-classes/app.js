function Page() { // <Header/> self closing tag now can be used inside the page Function the concept of "composability" managed by a single header component
  return (
    <div>
    <Header/> 
    <MainContent/>
    <Footer/>
    </div>
  )
}

function Header() {
  return (
    <header>
    <nav className="nav">
    <img src="./../react-logo.png" className="nav-logo"/>
    <ul className="nav-items">
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
    </nav>
    </header>
  )
}

function MainContent() {
  return (
    <div>
    <h1>Fun fact about react</h1>
    <ul>
    <li>Was first released in 2013</li>
    <li>Was originally created by jordan walker</li>
    <li>Has well over 100k stars on GitHub</li>
    <li>Is maintained by facebook</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer>© 2023 Dandi. All Rights Reserved.</footer>
  )
}

ReactDOM.render(<Page/>,  document.getElementById("root"));
