// import React from "react" 

export default function Jokes(props) { // everything inside the {} is the vanilla JavaScript code which you can execute
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}

// if the props.setup is exist and return this <h3> tag ; to make It not break
