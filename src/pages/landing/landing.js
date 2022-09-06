import React from "react"
import "../../css/landing/landing.css"
import "typeface-orbitron"

const Landing = () => {
    return(
        <div className="landing">            
            <div className="header">
                <a href="/"><img src="/images/Logo.png" width={"80px"} height={"80px"} className="logo"></img></a>
                <a href="/home" className="text-decoration-none font-color-white"><div className="rotating-border rotating-border-white">ENTER</div></a>
            </div>
            <div className="main">
                <img src="/videos/banner-black.gif" width={"75%"} height={"80%"} />
            </div>
            <div className="footer">
                <a className="landing_about" href="/about">ABOUT</a>
                <a className="landing_contactus" href="/contact">CONTACT US</a>
            </div>
        </div>
    )
}

export default Landing;