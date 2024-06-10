import AirbnbLogo from "../images/airbnb-logo.png" 

export default function Navbar() {
    return (
        <nav>
            <img src={AirbnbLogo} alt="Airbnb Logo" className="nav--logo"/>
        </nav>
    )
}
