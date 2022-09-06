import React from 'react'
import { IoMailSharp  } from "react-icons/io5";
import "../../css/main/menu.css"
import Hamburger from 'hamburger-react'
import {NavLink} from 'react-router-dom'

const Menu = ({menuSelect}) => {
    return (
        <div className='menu' >
            <div className='x-menu-mobile'>
                <Hamburger onToggle={toggled => {
                    if (toggled) {
                        // open a menu
                        console.log(toggled);
                        document.getElementById("x-menu-desktop").style.setProperty("display", "block", "important")                                            
                    } else {
                        // close a menu
                        document.getElementById("x-menu-desktop").style.display = "none";
                        console.log(document.getElementById("x-desktop"));
                    }
                }} color={"white"}/>
            </div>
            <div className='x-menu-desktop' id="x-menu-desktop">
                <div>                   
                    {/* <a href='/games' className='text-decoration-none'> */}
                    <NavLink
                        to="/games"
                        exact="true"
                        style={{textDecoration: 'none'}}
                    >
                    <div className={`menu-icon`}>
                        { menuSelect === 'games' ? <img src='/images/menu/Games Bright.svg'></img> : <img src='/images/menu/Games.svg'></img>}
                        <p>GAMES</p>
                    </div>
                    </NavLink>
                </div>
                <div>
                    <a>
                    <div className='menu-icon'>
                        <IoMailSharp size={40} />
                        <p>ARCADE</p>
                    </div>
                    </a>
                </div>  
                <div>
                    <a>
                    <div className='menu-icon'>
                        <img src='/images/menu/Mint.svg'></img>
                        <p>MINT</p>
                    </div>
                    </a>
                </div>
                <div>
                    <a>
                    <div className='menu-icon'>
                        <IoMailSharp size={40} />
                        <p>PORTAL</p>
                    </div>
                    </a>
                </div>  
                <div>
                    {/* <a href="/token" className='text-decoration-none'> */}
                    <NavLink
                        to="/token"
                        exact="true"
                        style={{textDecoration: 'none'}}
                    >
                    <div className='menu-icon text-decoration-none'>
                    { menuSelect === 'token' ? <img src='/images/menu/Token Bright.svg'></img> : <img src='/images/menu/Token.svg'></img>}
                        <p>TOKEN</p>
                    </div>
                    </NavLink>
                </div>
                <div>
                    {/* <a href='/whiteList' className='text-decoration-none'> */}
                    <NavLink
                        to="/whiteList"
                        eexact="true"
                        style={{textDecoration: 'none'}}
                    >
                    <div className={'menu-icon'}>
                        { menuSelect === 'whiteList' ? <img src='/images/menu/Whitelist Bright.svg'></img> : <img src='/images/menu/Whitelist.svg'></img>}
                        <p >WHITELIST</p>
                    </div>
                    </NavLink>
                </div>               
                <div>
                    <NavLink
                        to="/prizes"
                        exact="true"
                        style={{textDecoration: 'none'}}
                    >
                    <div className={'menu-icon'} >
                        { menuSelect === 'prizes' ? <img src='/images/menu/Prize Bright.svg'></img> : <img src='/images/menu/Prizes.svg'></img>}
                        <p>PRIZES</p>
                    </div>
                    </NavLink>
                </div>
                <div>
                    <a>
                    <div className='menu-icon'>
                        <img src='/images/menu/Market.svg'></img>
                        <p>MARKET</p>
                    </div>
                    </a>
                </div>
                <div>
                    <a>
                    <div className='menu-icon'>
                        <IoMailSharp size={40} />
                        <p>NEWS</p>
                    </div>
                    </a>
                </div>               
            </div>
        </div>
    )
}

export default Menu;