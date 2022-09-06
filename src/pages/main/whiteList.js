import React, { useEffect, useState } from 'react'
import '../../css/main/whiteList.css'
import "typeface-orbitron"

import { MdKeyboardArrowDown , MdKeyboardArrowUp } from "react-icons/md";

const WhiteList = () => {
    const onDropDownChange = () => {
        document.getElementById("arrowDown").style.display = "none";
        document.getElementById("arrowUp").style.display = "block";
        document.getElementById("whiteList-detail").style.display = "flex";
        document.getElementById("head-text-drop").style.display = "block"
        document.getElementById("head-text-origin").style.display = "none"
    }

    const onDropUpChange = () => {
        document.getElementById("arrowDown").style.display = "block";
        document.getElementById("arrowUp").style.display = "none";
        document.getElementById("whiteList-detail").style.display = "none";
        document.getElementById("head-text-drop").style.display = "none"
        document.getElementById("head-text-origin").style.display = "block"
    }

    return (
        <div className='whiteList'>
            <h3 className='whiteList-header-name'>
                Whitelist
            </h3>
            <p className='text-center text-color-white' id="head-text-origin">
                You can Register with your Whitelist NFT for the following gamesbelow<br/>
                Note:If you don't have an NFT you can mint one <a href="#" className='white-list-link-color text-decoration-none'>here...</a>
            </p>
            <p className='text-center text-color-white' id="head-text-drop">
                Register for MercuryONE whitelist and early access.<br />
                Whitelist will go live along with the public sale.<span className='font-color-yellow'>Early access</span> is valid for 24hours 1day befroe launch
            </p>
            <div className='row height-120 border border-radius-1 position-relative'>
                <h3 className='white-list-title white-list-font-size font-orbitron font-weight-700 text-color-white div-center'>
                    Harmony 8 Ball
                </h3>
                <div className='whiteList-dropdown'>
                    <a onClick={onDropDownChange}>
                        <MdKeyboardArrowDown id="arrowDown" className="float-right whiteList-dropdown-icon" size={60} />
                    </a>
                    <a onClick={onDropUpChange}>
                        {/* <MdKeyboardArrowUp id="arrowUp" className="float-right whiteList-dropdown-icon" size={60} /> */}
                        <img  id="arrowUp" className='float-right' src='/images/home/whiteList/ArrowIcon.svg' />
                    </a>
                </div>
            </div>
            <div className='row mt-3' id='whiteList-detail'>
                <div className='col-md-3'>
                    <div className='border border-radius-1 p-2'>
                        <p className='font-orbitron text-center text-color-white mt-5 font-weight-700'>5% Whitelist</p>
                        <div className='border background-grey width-70 ml-15 border-radius-6'>
                            <p className='font-size-12 text-center mt-1 mb-1 text-color-grey'>Valid for 24 hours on launch</p>
                        </div>
                        <div className='background-color-main border-radius-6 mt-3  font-weight-700'>
                            <p className='text-color-white pt-2 pb-2 text-center font-weight-700'>Register</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='border border-radius-1 p-2'>
                        <p className='font-orbitron text-center text-color-white mt-5 font-weight-700'>10% Whitelist</p>
                        <div className='border background-grey width-70 ml-15 border-radius-6'>
                            <p className='font-size-12 text-center mt-1 mb-1 text-color-grey'>Valid for 24 hours on launch</p>
                        </div>
                        <div className='background-color-main border-radius-6 mt-3  font-weight-700'>
                            <p className='text-color-white pt-2 pb-2 text-center font-weight-700'>Register</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='border border-radius-1 p-2'>
                        <p className='font-orbitron text-center text-color-white mt-5 font-weight-700'>20% Whitelist</p>
                        <div className='border background-grey width-70 ml-15 border-radius-6'>
                            <p className='font-size-12 text-center mt-1 mb-1 text-color-grey'>Valid for 24 hours on launch</p>
                        </div>
                        <div className='background-color-main border-radius-6 mt-3  font-weight-700'>
                            <p className='text-color-white pt-2 pb-2 text-center font-weight-700'>Register</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='border border-radius-1 p-2'>
                        <p className='font-orbitron text-center text-color-white mt-5 font-weight-700'><span className='font-color-yellow'>VIP</span> Early Access</p>
                        <div className='border background-grey width-70 ml-15 border-radius-6'>
                            <p className='font-size-12 text-center mt-1 mb-1 text-color-grey'>Valid for 24 hours <span className='font-color-main'>Pre-Launch</span></p>
                        </div>
                        <div className='background-color-yellow border-radius-6 mt-3  font-weight-700'>
                            <p className='text-color-white pt-2 pb-2 text-center font-weight-700'>Register</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row height-120 border border-radius-1 position-relative mt-3'>
                <h3 className='white-list-title white-list-font-size font-orbitron font-weight-700 text-color-white div-center'>
                    Mercury ONE
                </h3>
                <div className='whiteList-coming-soon'>
                    <img className='float-right  mt-5 p-1' src='/images/home/whiteList/ComingSoonButton.svg'></img>
                </div>
            </div>
            <div className='row height-120 border border-radius-1 position-relative mt-3'>
                <h3 className='white-list-title white-list-font-size font-orbitron font-weight-700 text-color-white div-center'>
                    Kool Karts Racing
                </h3>
                <div className='whiteList-coming-soon '>
                    <img className='float-right  mt-5 p-1' src='/images/home/whiteList/ComingSoonButton.svg'></img>
                </div>
            </div>
            <div className='row height-120 border border-radius-1 position-relative mt-3'>
                <h3 className='white-list-title white-list-font-size font-orbitron font-weight-700 text-color-white div-center'>
                    9-Realms-House of HEL
                </h3>
                <div className='whiteList-coming-soon '>
                    <img className='float-right  mt-5 p-1' src='/images/home/whiteList/ComingSoonButton.svg'></img>
                </div>
            </div>
        </div>
    )
}

export default WhiteList;