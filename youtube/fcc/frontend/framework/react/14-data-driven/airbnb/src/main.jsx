import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'

// place your image on public Directory on a root project so that you don't need to import It first

ReactDOM.createRoot(document.getElementById('root')).render( 
    <React.StrictMode>
        <Navbar/>
        <Card
        img="../public/Katie-Zaferes.jpg"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Live_Lessons with Katie Zaferes"
        price={136}
    />
            </React.StrictMode>,
)
