import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './data.js'


function App() {
    const cards = data.map(item => { // everytime you use .map() will appear an error child key, so you need to specify key attribute and passing unique value, in this case "id" as we know id is the only unique value
        return (
            <Card
            key={item.id} // key attribute specify which items have changed, are added or removed as unique identifier
            {...item} // spread operator. spread the properties of the "item" object as the properties in the "item" object will be passed to the component as separate props
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}


export default App

// return (
//     <Card
//     key={item.id}
//     img={item.coverImg}
//     rating={item.stats.rating}
//     reviewCount={item.stats.reviewCount}
//     country={item.location}
//     title={item.title}
//     price={item.price}
//     openSpots={item.openSpots}
// />
// );

// <Card
// key={item.id}
// item={item} // you need to add "item" on each properties in the data.js
// />
