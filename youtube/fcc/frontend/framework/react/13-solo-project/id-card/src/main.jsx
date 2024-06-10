import React from 'react'
import ReactDOM from 'react-dom/client'
import Info from './components/Info.jsx'
import About from './components/About.jsx'
import Interest from './components/Interest.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Info/>
    <About/>
    <Interest/>
    <Footer/>
    </React.StrictMode>,
)

