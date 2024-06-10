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
    <nav>
    <img src="./../react-logo.png" alt="react logo" />
    </nav>
    </header>
  )
}

function MainContent() {
  return (
    <div>
    <h1>fun fact about react</h1>
    <ul>
    <li>was first released in 2013</li>
    <li>was originally created by jordan walker</li>
    <li>has well over 100k stars on GitHub</li>
    <li>is maintained by facebook</li>
    <li>powers thousands of enterprise apps, including mobile apps</li>
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
