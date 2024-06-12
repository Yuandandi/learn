import Navbar from "./components/Navbar.jsx"
import Section from "./components/Section.jsx"
import Data from "./Data.js"

function App() {
    return (
        <div>
            <Navbar />
            {Data.map((item, index) => (
                <Section 
                key={index}
                imageUrl={item.imageUrl}
                title={item.title}
                location={item.location}
                googleMapsUrl={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
            />
            ))}
            </div>
    )
}

export default App;

