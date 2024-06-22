import { useState } from 'react' 
import React from "react";
import boxes from "./boxes.js";
import Box from "./Box.jsx";

function App() {
    const [squares, setSquares] = React.useState(boxes);

    function toggle(id) {
        setSquares(prevSquares => 
            prevSquares.map(square => 
                square.id === id ? {...square, on: !square.on } : square
            )
        );
    }

    const squareElements = squares.map(square => (
        <Box
        key={square.id}
        id={square.id}
        on={square.on}
        toggle={toggle}
    />
    ))

  return (
    <main>
      {squareElements}
    </main> 
  )
}

export default App

                                                    // DERIVE STATE;
// function App(props) {
//     const [squares, setSquares] = React.useState(boxes);
//     const styles = {
//         backgroundColor: props.darkMode ? "#222" : "#ccc"
//     }

//     const squareElements = squares.map(square => (
//         <Box key={square.id} on={props.on}/>
//     ))

//   return (
//     <main>
//       {squareElements}
//     </main> 
//   )
// }

// export default App

// DARK MODE;
// function App(props) {
//     const [squares, setSquares] = React.useState(boxes);
//     const styles = {
//         backgroundColor: props.darkMode ? "#222" : "#ccc"
//     }

//     const squareElements = squares.map(square => (
//         <div style={styles}className="box" key={square.id}></div>
//     ))

//   return (
//     <main>
//       {squareElements}
//     </main> 
//   )
// }

// c style for loop;
// function toggle(id) {
//     setSquares(prevSquares => {
//         const newSquares = []
//         for (let i = 0; i < prevSquares.length; i++) {
//             const currentSquares = prevSquares[i];
//             if (currentSquares.id === id) {
//                 const updatedSquare = {
//                     ...currentSquares,
//                     on: !currentSquares.on
//                 };
//                 newSquares.push(updatedSquare);
//             } else {
//                 newSquares.push(currentSquares);
//             };
//         };
//         return newSquares;
//     })
// }

// improvement;
// function toggle(id) {
//     setSquares(prevSquares => {
//         return prevSquares.map((square) => {
//             return square.id === id ? {...square, on: !square.on} : square
//         })
//     });
// }
