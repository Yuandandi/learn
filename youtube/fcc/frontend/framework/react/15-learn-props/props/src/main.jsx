import React from 'react'
import ReactDOM from 'react-dom/client'
import Contact from './component/Contact.jsx'
import whikerson from "./images/mr-whikerson.png"
import felix from "./images/felix.jpg"
import Jomson from "./images/mr-jomson.png"
import kendrik from "./images/mr-kendrik.png"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode className="contacts">
        <Contact
        img={whikerson}
        name="Mr.Whikerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
    />
            <Contact
            img={felix}
            name="Mr.felix"
            phone="(212) 822-1232"
            email="mr.felix@catnap.meow"
        />
                <Contact
                img={Jomson}
                name="Mr.Jomson"
                phone="(212) 555-1232"
                email="mr.whiskaz@catnap.meow"
            />
                    <Contact
                    img={kendrik}
                    name="Mr.kendrik"
                    phone="(212) 555-2384"
                    email="mr.kendrik@oren.meow"
                />
                        </React.StrictMode>,
)
