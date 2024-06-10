import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Navbar />
    <Main />
    </React.StrictMode>
)

// now your Directory should looks like this
// .
// ├── assets
// │   └── react.svg
// ├── components
// │   ├── Main.jsx
// │   └── Navbar.jsx
// └── main.jsx

// 3 directories, 4 files


