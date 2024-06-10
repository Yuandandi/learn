import Jokes from "./Jokes.jsx" // file name must be capitalize first letter and the import 'Joke' must be the same as the file and it's function name
import jokesData from "./jokesData.js" 

export default function App() { 
  const jokesElement = jokesData.map(joke => {
    return <Jokes setup={joke.setup} punchline={joke.punchline}/>
  })
  return (
    <div>
      {jokesElement}
    </div>
  )
}

// <div>
//     <Jokes 
//     // setup="i got my daughter a fridge for her birthday." 
// punchline="i can't wait to see her face light up When She" 
//     ispun={true}
// />
//         <Jokes 
//         setup="How did the hacker escape the police?" 
//         punchline="He just ransomware!" 
//         ispun={false}
//     />
//             <Jokes 
//             setup="why don't pirate travel on mountain roads?" 
//             punchline="Scurvy" 
//             ispun={true}
//         />
//                 <Jokes 
//                 setup="why do bees stay in the hive in the winter" 
//                 punchline="Swarm" 
//                 ispun={false}
//             />
//                 </div>
