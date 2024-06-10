import React from "react"
import Profile from "../images/profile.jpg"

export default function Info() {
    return (
        <div>
        <img src={Profile} alt="profile image" className="profile-pict"/>
        <h1>Dandi Yuan</h1>
        <div className="button-container">
        <button className="button-email">Email</button>
        <button className="button-linkedin">Linkedin</button>
        </div>
        </div>
    )
}
