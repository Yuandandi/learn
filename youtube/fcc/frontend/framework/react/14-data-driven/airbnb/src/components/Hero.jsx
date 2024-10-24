import React from "react" 
import PhotoGrid from "../images/photo-grid.jpg" 

export default function Hero() {
    return (
        <section className="hero"> 
            <img src={PhotoGrid} className="hero--photo"/>
            <h1 className="hero--header">online experiences</h1>
            <p className="hero--text">join unique intervaceactivities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}
