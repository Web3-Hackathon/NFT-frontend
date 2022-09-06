import React from "react";
import "../../css/main/home.css"
import TextFieldGroup from "../../common/textFiledGroup";
import { useState } from "react";

const HomeMultiplatform = () => {

    const [userEmail,setUserEmail] = useState("");
    const [userErr,setUserErr] = useState("");

    return (
        <div className="container">
            <h1 className="font-orbitron home-font-size-64 text-center text-color-white font-weight-700">MULTI-PLATFORM</h1>
            <h1 className="font-orbitron home-font-size-40 text-center home-color-grey font-weight-700">SUPPORT</h1>
            <div className="row">
                <div className="col-md-4 multi-home-support-list">
                    <div className="multi-home-support-list-item">
                        <h1 className="font-orbitron text-center home-font-size-18 text-color-white">BROWSER</h1>
                    </div>
                </div>
                <div className="col-md-4 multi-home-support-list">
                    <div className="multi-home-support-list-item">
                        <h1 className="font-orbitron text-center home-font-size-18 text-color-white">PC & MAC</h1>
                    </div>
                </div>
                <div className="col-md-4 multi-home-support-list">
                    <div className="multi-home-support-list-item">
                        <h1 className="font-orbitron text-center home-font-size-18 text-color-white">MOBILE</h1>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <img  src="/images/home/Multi 1.png">
                </img>
                <div className="mt-5">
                    <h1 className="home-font-size-64 text-center font-orbitron text-color-white">NFT</h1>
                    <h1 className="home-font-size-40 text-center font-orbitron text-color-grey">On-Chain & Off-Chain NFT Gaming</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 p-3">
                    <div className="home-nft-list home-height-480">
                        <img src="/images/home/8-ball.png" width={"100%"} height={"220px"}></img>
                        <p className="ml-2 home-font-size-32 text-color-white font-orbitron">Crypto 8 Ball</p>
                        <p className="ml-2 home-font-size-16 home-color-weak-grey">Play a classic 8 ball billiards game with friends 
                            Familiar interface with crypto PVP style battles and P2E functions, reflections and more.
                        </p>
                        <div className="home-view-game ml-2 mb-4 mt-5 pb-3">
                            <p className="home-font-size-12 mb-0">View Game</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-3">
                    <div className="home-nft-list home-height-480">
                    <img src="/images/home/arcaderetro.jpeg" width={"100%"} height={"220px"}></img>
                        <p className="ml-2 home-font-size-32 text-color-white font-orbitron">Virtual Arcade</p>
                        <p className="ml-2 home-font-size-16 home-color-weak-grey">Explore the Virtual Arcade and discover games from various blockchains, interact with friends, join in on AMA’s and have fun. 
                        </p>
                        <div className="home-view-game ml-2 mb-4 mt-5 pb-3">
                            <p className="home-font-size-12 mb-0">View Game</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-3">
                    <div className="home-nft-list home-height-480">
                    <img src="/images/home/street fighter.jpeg" width={"100%"} height={"220px"}></img>
                        <p className="ml-2 home-font-size-32 text-color-white font-orbitron">Fight Club</p>
                        <p className="ml-2 home-font-size-16 home-color-weak-grey">A 2.5D classid arcade figher game. Fight you opponenet in a PVP setting and WIN. 
                        </p>
                        <div className="home-view-game ml-2 mb-4 mt-5 pb-3">
                            <p className="home-font-size-12 mb-0">View Game</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center position-relative">
                <img src="/images/home/smallbutton.svg" width={"271px"}></img>
                <p className="text-color-white home-font-size-16 home-upcoming-releases-button text-center">UPCOMING RELEASES</p>
            </div>
            <div className="mt-5 position-relative">
                <h1 className="home-font-size-64 text-color-white font-orbitron">COMMUNITY ARCADE</h1>
                <h1 className="home-font-size-40 text-color-grey font-orbitron">Find games & play with<br />
                your Friends
                </h1>
                <div className="position-relative mt-3 home-height-600">
                    <img src="/images/home/smallbutton.svg" width={"184px"}></img>
                    <p className="text-color-white home-visit-arcade">Visit Arcade</p>
                </div>
                <img src="/images/home/Controllers2.png" className="home-community-backgroundImage"></img>
            </div>
            <div className="home-arcadian-token position-relative">
                <h1 className="text-color-white font-size-56 font-orbitron home-mt-30">ARCADIAN TOKEN</h1>
                <h1 className="text-color-grey font-size-40 font-orbitron">Native Arcade and Gaming Token</h1>
                <div className="position-relative mt-3 home-height-600">
                    <img src="/images/home/smallbutton.svg" width={"184px"}></img>
                    <p className="text-color-white home-visit-arcade">Visit Arcade</p>
                </div>
                <img src="/images/home/Tokens.png" className="home-token-backgroundImage"></img>
            </div>
            <div className="text-center">
                <h1 className="home-font-size-56 text-color-white font-orbitron">USE OUR PROTAL TO DEPOSIT</h1>
                <h1 className="home-font-size-40 text-color-white font-orbitron">Token From <label className="home-font-color-main">ANY</label> Blockchain</h1>
                <img src="/images/home/Portal.png" width={"509px"} height={"471px"}></img>
            </div>
            <div className="position-relative mt-5">
                <h1 className="home-font-size-56 text-color-white font-orbitron">ADVERTISE YOUR GAME</h1>
                <h1 className="home-font-size-40 text-color-grey font-orbitron">On our Arcade</h1>
                <p className="home-font-size-16 text-color-white">
                Are you an Independent game developer?<br/>Building a DeFi or Game-Fi project?<br/><br/>We can offer you an access point for your project<br />
                in our Arcade and provide you with a custom<br/>
                3D Arcade machine for your game.
                </p>
                <div className="position-relative mt-3 home-height-500">
                    <img src="/images/home/smallbutton.svg" width={"184px"}></img>
                    <p className="text-color-white home-visit-arcade">Contact Us</p>
                </div>
                <img src="/images/home/VRHED 1.png" className="home-ADVERTISE-backgroundImage"></img>
            </div>
            <div>
                <p className="text-center text-color-white font-orbitron">Join our Newsletter</p>
                <div className="home-email-address-div">
                    <div className="home-ml-35p">
                        <TextFieldGroup 
                            type="text"
                            name="uername"
                            placeholder="Your Email Address"
                            value={userEmail}
                            label=""
                            onChange={e=> setUserEmail(e.target.value)}
                            err={userErr.userEmail}
                        />
                    </div>                    
                    <img src="/images/home/Sign Up Glow.svg" className="ml-m-30 home-mt-12"></img>                   
                </div>
            </div>
        </div>
    )
}

export default HomeMultiplatform;