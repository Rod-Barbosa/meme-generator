// import React from "react"

// export default function Header () {
    //     return (
        //         <header className="header">
        //                 <img className="header--image"  src={trollFace} alt="troll face" />
        //                 <h2 className="header--title" >Meme Generator</h2>
        //             <h4 className="header--project">React Course - Project 3</h4>
        //         </header>
        //     )
        // }
        
        
import trollFace from "../images/troll-face.png"
import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollFace}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}