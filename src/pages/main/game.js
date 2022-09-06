import React from 'react'
import '../../css/main/game.css'
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io';

const Game = () => {

    const itemBottomDisappear = (idx) => {
        document.getElementById("game-arrowDown"+idx).style.display = "block";
        document.getElementById("game-arrowUp"+idx).style.display = "none";
        document.getElementById("faq-list-item-bottom"+idx).style.display = "none";
    }

    const itemBottomAppear = (idx) => {
        console.log("game-arrowDown"+idx);
        document.getElementById("game-arrowDown"+idx).style.display = "none";
        document.getElementById("game-arrowUp"+idx).style.display = "block";
        document.getElementById("faq-list-item-bottom"+idx).style.display = "block";
    }

    return (
        <div className='game'>
            <h3 className='game-header-name'>
                Arcadian HUB Games
            </h3>
            <p className='text-center text-color-white'>
                Mercury is the native token for the upcoming sci-fi racing game MercuryONE,built<br />
                the Harmony blockchain
            </p>
            <div className='row mt-5'>
                <div className='col-md-3'>
                    <div className='p-4 position-relative'>
                        <img src='/images/home/machine.png' width={"100%"}></img>
                        <p className='text-center text-color-white font-orbitron'>Harmony 8 Ball</p>
                        <p className='game-early-access'>Early Access</p>
                    </div>                    
                </div>
                <div className='col-md-3'>
                    <div className='p-4 position-relative'>
                        <img src='/images/home/machine.png' width={"100%"}></img>
                        <p className='text-center text-color-white font-orbitron'>Harmony 8 Ball</p>
                        <img className='game-coming-soon' src="/images/home/game/ComingSoonButoon.svg"></img>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='p-4 position-relative'>
                        <img src='/images/home/machine.png' width={"100%"}></img>
                        <p className='text-center text-color-white font-orbitron'>Harmony 8 Ball</p>
                        <img className='game-coming-soon' src="/images/home/game/ComingSoonButoon.svg"></img>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='p-4 position-relative'>
                        <img src='/images/home/machine.png' width={"100%"}></img>
                        <p className='text-center text-color-white font-orbitron'>Harmony 8 Ball</p>
                        <img className='game-coming-soon' src="/images/home/game/ComingSoonButoon.svg"></img>
                    </div>
                </div>
            </div>
            <div className='align-item-center mb-5'>
                <div className='position-relative hub-button'>
                    <img src='/images/home/game/smallbutton.svg' width={"400px"}>
                    </img>               
                    <h5 className='hub-text'>ABOUT ACADIAN HUB</h5>
                </div>
            </div>
            <h3 className='game-header-name mt-5'>
                FAQ
            </h3>
            <div className='faq-list mb-5'>
                <div className='faq-list-item mb-3'>
                    <div className='faq-list-item-top'>
                        <div className='container game-justify-between'>
                            <p className='text-color-white mb-0 p-2'>Lorem ipsum dolor sit amet,cosector adipiscing elit.landit semper?</p>
                            <IoIosArrowUp id={`game-arrowUp${1}`} onClick={() => itemBottomDisappear(1)} size={40} className="faq-list-item-arrow-up" />
                            <IoIosArrowDown id={`game-arrowDown${1}`} onClick={() => itemBottomAppear(1)} size={40} className="faq-list-item-arrow-down" />
                        </div>
                    </div>   
                    <div className='faq-list-item-bottom' id={`faq-list-item-bottom${1}`}>
                        <div className='container'>
                            <p className='text-color-white mb-0 p-2'>Lorem ipsum dolor sit amet,cosector adipiscing elit.landit semper?</p>
                        </div>
                    </div>     
                </div>
                <div className='faq-list-item mb-3'>
                    <div className='faq-list-item-top'>
                        <div className='container game-justify-between'>
                            <p className='text-color-white mb-0 p-2'>What is the maximum supply of Mercury Token?</p>
                            <IoIosArrowUp id={`game-arrowUp${2}`} onClick={() => itemBottomDisappear(2)} size={40} className="faq-list-item-arrow-up" />
                            <IoIosArrowDown id={`game-arrowDown${2}`} onClick={() => itemBottomAppear(2)} size={40} className="faq-list-item-arrow-down" />
                        </div>
                    </div>   
                    <div className='faq-list-item-bottom' id={`faq-list-item-bottom${2}`}>
                        <div className='container'>
                            <p className='text-color-white mb-0 p-2'>Mercury token is a crypto currency built </p>
                        </div>
                    </div>     
                </div>
                <div className='faq-list-item mb-3'>
                    <div className='faq-list-item-top'>
                        <div className='container game-justify-between'>
                            <p className='text-color-white mb-0 p-2'>What is MercuryONE ?</p>
                            <IoIosArrowUp id={`game-arrowUp${3}`} onClick={() => itemBottomDisappear(3)} size={40} className="faq-list-item-arrow-up" />
                            <IoIosArrowDown id={`game-arrowDown${3}`} onClick={() => itemBottomAppear(3)} size={40} className="faq-list-item-arrow-down" />
                        </div>
                    </div>   
                    <div className='faq-list-item-bottom' id={`faq-list-item-bottom${3}`}>
                        <div className='container'>
                            <p className='text-color-white mb-0 p-2'>Where can I purchase the token?</p>
                        </div>
                    </div>     
                </div>
                <div className='faq-list-item mb-3'>
                    <div className='faq-list-item-top'>
                        <div className='container game-justify-between'>
                            <p className='text-color-white mb-0 p-2'>What is MercuryONE ?</p>
                            <IoIosArrowUp id={`game-arrowUp${4}`} onClick={() => itemBottomDisappear(4)} size={40} className="faq-list-item-arrow-up" />
                            <IoIosArrowDown id={`game-arrowDown${4}`} onClick={() => itemBottomAppear(4)} size={40} className="faq-list-item-arrow-down" />
                        </div>
                    </div>   
                    <div className='faq-list-item-bottom' id={`faq-list-item-bottom${4}`}>
                        <div className='container'>
                            <p className='text-color-white mb-0 p-2'>Can I sell my tokens and get my money back?</p>
                        </div>
                    </div>     
                </div>
                <div className='faq-list-item mb-3'>
                    <div className='faq-list-item-top'>
                        <div className='container game-justify-between'>
                            <p className='text-color-white mb-0 p-2'>What is MercuryONE ?</p>
                            <IoIosArrowUp id={`game-arrowUp${5}`} onClick={() => itemBottomDisappear(5)} size={40} className="faq-list-item-arrow-up" />
                            <IoIosArrowDown id={`game-arrowDown${5}`} onClick={() => itemBottomAppear(5)} size={40} className="faq-list-item-arrow-down" />
                        </div>
                    </div>   
                    <div className='faq-list-item-bottom' id={`faq-list-item-bottom${5}`}>
                        <div className='container'>
                            <p className='text-color-white mb-0 p-2'>How do I find local enthusiasts and other investors?</p>
                        </div>
                    </div>     
                </div>
            </div>
        </div>
    )
}

export default Game;