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
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            country={item.location}
            title={item.title}
            price={item.price}
        />
        )
    })

  return (
    <div>
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}



export default App
