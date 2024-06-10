import React from "react"

export default function Header() { // you can do this to separate each Function, without export like below and put import in app.js
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

// export default Header // or this with the normal Function above
