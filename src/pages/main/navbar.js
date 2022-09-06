import React, { useEffect, useState } from 'react'
import '../../css/main/navbar.css';
import {IoNotificationsOutline} from "react-icons/io5";
import Hamburger from 'hamburger-react'
import { NavLink } from 'react-router-dom';

const Navbar = ({navSelect}) => {

    return (
        <div className='Navbar'>
            <div className='row m-0 myNav'>
                <div className='col-xl-2 col-md-1'>
                    <a href="/" ><img className='nav-logo'  src="/images/Logo.png" width={"60px"} height={"60px"}></img></a>
                    <div className='nav-left-notification'>
                        <div className='notification'>
                            <IoNotificationsOutline className='notification-item m-0'/>
                            <div className="harmonyState">
                                <img src='/images/harmony-one-logo.svg' width={"15px"}></img>
                                <p className='walletAmount'>44021.3213 ONE</p>
                            </div>
                        </div>
                    </div>                   
                </div>
                <div className='col-xl-7 col-md-8 nav-justify-center'>
                    <div className='row x-mobile' id="x-mobile">
                            <div className='col-md-2 col-xs-2'>
                                <a className='link'>
                                    {/* <Hamburger 
                                    onChange={() => {menuState==0 ? setMenuState(1) : setMenuState(0)}} */}
                                    <Hamburger onToggle={toggled => {
                                        if (toggled) {
                                            // open a menu
                                            document.getElementById("x-desktop").style.setProperty("display", "flex", "important")                                            
                                        } else {
                                            // close a menu
                                            document.getElementById("x-desktop").style.display = "none";
                                            console.log(document.getElementById("x-desktop"));
                                        }
                                    }} color={"white"}/>
                                </a>
                            </div>
                        </div>
                    <div className='row x-desktop text-center ' id="x-desktop">
                        {/* <div className='col-md-2 col-xs-2'>
                            <a className={`link ${navSelect === 'home'? 'link-active' : ''}`} href="/home">Home</a>
                        </div>
                        <div className='col-md-2 col-xs-2'>
                            <a className={`link ${navSelect === 'about'? 'link-active' : ''}`} href="/main/about">About</a>
                        </div>
                        <div className='col-md-3 col-xs-2'>
                            <a className={`link ${navSelect === 'affiliates'? 'link-active' : ''}`}>Affiliates</a>
                        </div>
                        <div className='col-md-3 col-xs-2'>
                            <a className={`link ${navSelect === 'documentation'? 'link-active' : ''}`}>Documentation</a>
                        </div>
                        <div className='col-md-2 col-xs-2'>
                            <a className={`link ${navSelect === 'contact'? 'link-active' : ''}`}>Contact</a>
                        </div> */}
                        <ul className="nav nav-center ">
                                <li className="game-nav-item">                                    
                                    <NavLink 
                                    to="/home"
                                    className={`nav-link text-color-white mt-20 nav-height-60 ${navSelect === 'home'? 'link-active' : ''}`}
                                    >Home</NavLink>
                                </li>
                                <li className="game-nav-item">
                                    <NavLink 
                                    to="/main/about"
                                    className={`nav-link text-color-white mt-20 nav-height-60 ${navSelect === 'about'? 'link-active' : ''}`}
                                    >About</NavLink>
                                </li>
                                <li className="game-nav-item">
                                    <NavLink 
                                    to="/affiliates"
                                    className={`nav-link text-color-white mt-20 nav-height-60 ${navSelect === 'Affiliates'? 'link-active' : ''}`}
                                    >Affiliates</NavLink>
                                </li>
                                <li className="game-nav-item">                                    
                                    <NavLink 
                                    to="/documentation"
                                    className={`nav-link text-color-white mt-20 nav-height-60 ${navSelect === 'documentation'? 'link-active' : ''}`}
                                    >Documentation</NavLink>
                                </li>
                                <li className="game-nav-item">                                    
                                    <NavLink 
                                    to="/main/contact"
                                    className={`nav-link text-color-white mt-20 nav-height-60 ${navSelect === 'contact'? 'link-active' : ''}`}
                                    >Contact</NavLink>
                                </li>
                        </ul>
                    </div> 
                </div>
                <div className='col-xl-3 col-md-3'>
                    <div className='nav-right-notification'>
                        <div className='notification'>
                            <img src="/images/navbar/Notification Icon.svg" className='notification-item ml-0 mt-0' />
                            <div className="harmonyState">
                                <img src='/images/harmony-one-logo.svg' width={"15px"}></img>
                                <p className='walletAmount'>44021.3213 ONE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;