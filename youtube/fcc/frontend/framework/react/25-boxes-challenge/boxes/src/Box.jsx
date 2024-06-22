import React from "react"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    return (
        <div
        style={styles}
        className="box"
        onClick={() => props.toggle(props.id)}
    >
        </div>
    )
}

// onClick: This is an event handler that reacts to a click event on a particular element, typically a button or a div.
// () => props.toggle(props.id): This is an arrow function that gets executed when the click event occurs. It calls the toggle function passed down as a prop, with props.id as its argument.;
