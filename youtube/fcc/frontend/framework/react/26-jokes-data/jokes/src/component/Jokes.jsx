import React from "react"

export default function Jokes(props) { 
    const [isShown, setIsShown] = React.useState(false);
    function toggleShown() {
        setIsShown(prevShown => !prevShown);
    };
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>Punchline: {props.punchline}</p>}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
    )
}
// <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button> // ternary operator inside the content

// REPLACEMENT OF TERNARY OPERATOR;
// export default function Jokes(props) { 
//     const [isShown, setIsShown] = React.useState(true);
//     function toggleShown() {
//         setIsShown(prevShown => !prevShown);
//     };
//     return (
//         <div>
//             {props.setup && <h3>{props.setup}</h3>}
//             {isShown && <p>Punchline: {props.punchline}</p>}
//             {isShown && <button onClick={toggleShown}>Hide Punchline</button>}
//             {!isShown && <button onClick={toggleShown}>show Punchline</button>}
//             <hr />
//         </div>
//     )
// }

