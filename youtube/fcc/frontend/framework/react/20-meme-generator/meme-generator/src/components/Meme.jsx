import memesData from '../memesData.js'
import React from 'react'

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg",
    }) 

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImages() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        // const {url} = memesArray[randomNumber] // access the url properties
        // setMemeImage(memesArray[randomNumber].url)
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    };
    return (
        <main>
            <div className="form">
                <input type="text" className="form-input" placeholder="Top text"/>
                <input type="text" className="form-input" placeholder="Bottom text"/>
                <button className="form-button" onClick={getMemeImages}>Get a new meme image</button>
            </div>
            <img src={meme.randomImage} alt="meme image" className="meme-image"/>
        </main>
    )
}

// const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg") // placeholder for the firs time site is appear;
