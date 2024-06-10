import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'


function App() {
    return (
        <Card
        img="../public/Katie-Zaferes.jpg"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Live_Lessons with Katie Zaferes"
        price={136}
    />
    )
}

export default App
