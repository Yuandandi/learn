import React from "react"
import Jokes from "./component/Jokes.jsx" 
import jokesData from "./component/jokesData.js" 

// CONDITIONAL RENDERING PRACTICE
export default function App() { 
    const [messages, setMessages] = React.useState(["joko", "toni"]);
    return (
        <div>
        {
            messages.length === 0 ? 
            <h1>Your're all caught up</h1> :
            <h1>you have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1>
        }
        </div>
    )
}
// if we remove item from the array "you're all caught up";

// CONDITIONAL RENDERING : TERNARY
// export default function App() { 
//     const jokesElement = jokesData.map(joke => {
//         return <Jokes setup={joke.setup} punchline={joke.punchline}/>
//     })
//     return (
//         <div>
//             {jokesElement}
//         </div>
//     )
// }

// CONDITIONAL RENDERING && OPERATOR;
// export default function App() { 
//     const [messages, setMessages] = React.useState(["a", "b"]);
//     return (
//         <div>
//         {
//             messages.length &&
//             <h1>you have {messages.length} unread messages</h1>
//         }
//         </div>
//     )
// }

// export default function App() { 
//     const jokesElement = jokesData.map(joke => {
//         return <Jokes setup={joke.setup} punchline={joke.punchline}/>
//     })
//     return (
//         <div>
//             {jokesElement}
//         </div>
//     )
// }

