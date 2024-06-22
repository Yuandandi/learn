import React from "react"

export default function Count(props) {
  // console.log("count component rendered") this will console after the app component rendered
  return (
    <div className="counter-count">
      <h1>{props.number}</h1>
    </div>
  )
}

    // <h1>{props.number}</h1> //  passing state as props
