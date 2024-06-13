import trollFace from "./images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={trollFace} alt="troll face" className="header-image" />
            <h1 className="header-title">Meme Generator</h1>
            <h4 className="header-project">React course - project 3</h4>
        </header>
    )
}
