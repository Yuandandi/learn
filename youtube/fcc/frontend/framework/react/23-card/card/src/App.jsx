import { useState } from 'react'
import React from "react";
import Star from './component/Star.jsx';

// <Star isFilled={contact.isFafourite} handleClick={toggleFavourite} /> // setting state from child component
function App() {
    const [contact, setContact] = React.useState({
        firstname: "John",
        lastname: "Doe",
        phone: "+1 (719) 5551212",
        email: "itsmyrealname@example.com",
        isFafourite: false,
    })

    let starIcon = contact.isFafourite ? "filled-star.png" : "empty-star.png"

    function toggleFavourite() {
        setContact(prevContact => ({
            ...prevContact,
            isFafourite: !prevContact.isFafourite,
        }))
    }

    return (
        <main>
            <article className="card">
                <img src="./person.png" alt="user image" className="card-image"/>
                <div className="card-info">
                    <Star isFilled={contact.isFafourite} handleClick={toggleFavourite} />
                    <p className="card-contact">{contact.phone}</p>
                    <p className="card-contact">{contact.email}</p>
                    <h2 className="card-name">
                        {contact.firstname} {contact.lastname}
                    </h2>
                </div>
            </article>
        </main>
    )
}

export default App
// because the state is an object so we can reference with "{contact.firstname}"
