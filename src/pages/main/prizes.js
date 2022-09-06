import React from 'react'
import "../../css/main/prizes.css"

const Prizes = () => {
    return (
        <div className='prizes mt-5'>
            <div className='container mt-4 position-relative'>
                <img src='/images/home/prizes/ComingSoonFrame.svg' width={"90%"}></img>
                <img src='/videos/game_machine.gif' className='prizes-machine'></img>
            </div>            
            {/* <div className='container border-main border-radius-1 mt-4'>
                <h3 className='prizes-header-name'>
                    Prizes
                </h3>
                <p className='text-center text-color-white'>
                    Mercury is the native token for the upcoming sci-fi racing game MercuryONE,built on<br />
                    the Harmony blockchain
                </p>
                <img src='/videos/game_machine.gif' className='center'></img>
                <p className='font-orbitron text-center text-color-white'>COMING SOON</p>
                <div className="progress prizes-comming-soon mb-4">
                    <div className="progress-bar prizes-comming-soon-progress" style={{width: "50%"}}></div>
                </div>  
            </div> */}
        </div>
    )
}

export default Prizes;