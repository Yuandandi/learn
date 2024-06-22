import { useState } from 'react'
import Count from './component/Count.jsx'
import React from "react"

function App() {
  const [count, setCount] = React.useState(0)
  function add() {
    setCount(prevCount => prevCount + 1)
  }
  function substract() {
    setCount(prevCount => prevCount - 1)
  }

    // console.log("app component rendered") // will rendered before the count component

  return (
    <div className="counter">
      <button className="counter-minus" onClick={substract}>-</button>
      <Count number={count} />
      <button className="counter-plus" onClick={add}>+</button>
    </div>
  )
}

export default App;

// <Count number={count} /> // passing state ass props

// setting state from child components;
