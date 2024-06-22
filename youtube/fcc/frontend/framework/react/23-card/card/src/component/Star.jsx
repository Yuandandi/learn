import React from "react"

// onClick={props.handleClick} // passing onClick={toggleFavourite} and now you can use handleClick as a props of the
// component file

export default function Star(props) {
    const starIcon = props.isFilled ? "filled-star.png" : "empty-star.png"
    return (
        <img
        src={starIcon}
        className="card-favourite"
        onClick={props.handleClick}
    />
    )
}
