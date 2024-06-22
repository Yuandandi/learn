import { useState } from 'react'
import React from "react";
import Header from "./component/Header.jsx"
import Body from "./component/Body.jsx"

function App() {
    const [user, setUser] = React.useState("danzor");
    return (
        <div>
            <Header user={user} />
            <Body user={user} />
        </div>
    )
}

export default App
