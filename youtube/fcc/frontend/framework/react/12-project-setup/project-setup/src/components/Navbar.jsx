import React from "react" 
import reactLogo from "../images/react-icon-small.png" // working with images you need to declare with import first and call It inside the {} laeter on


export default function Navbar() {
    return (
        <nav>
        <img src={reactLogo} className="nav--icon"/>
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}
