import React from 'react'
import "../../css/main/footer.css"
import { AiFillTwitterSquare } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top pt-3 pb-3'>
                    <div className='row m-0'>
                        <div className='col-md-7 ml-3'>
                            <p className='text-color-grey mb-0 ml-2'>QUICK LINKS</p>
                            <ul className="nav mt-3 ml-2  footer-nav-item">
                                <li className="nav-item">
                                    <a className="nav-link text-color-white pl-0" href="#">Game</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-color-white" href="#">Market</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-color-white" href="#">Mint</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-color-white" href="#">Token</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-color-white" href="#">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-color-white" href="#">Documents</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-color-white" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                    to={"/support"}
                                    className="nav-link text-color-white"
                                    >
                                    Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-4 footer-top-right'>
                            <p className='text-color-grey mb-0 text-center'>STAY CONNECTED</p>
                            <ul className="nav justyify-content-center mt-3">
                                <li className="nav-item">
                                    <a className="nav-link text-color-white pl-0" href="#">
                                        <img src='/images/footer/Instagram.svg'></img>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-color-white pl-0" href="#">
                                        <img src='/images/footer/Facebook.svg'></img>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-color-white pl-0" href="#">
                                        <img src='/images/footer/Twitter.svg'></img>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-color-white pl-0" href="#">
                                        <img src='/images/footer/Reddit.svg'></img>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-color-white pl-0" href="#">
                                        <img src='/images/footer/Telegram.svg'></img>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-color-white pl-0" href="#">
                                        <img src='/images/footer/Disord.svg'></img>
                                    </a>
                                </li>
                            </ul>  
                        </div>
                    </div> 
            </div>
            <div className='footer-bottom'>
                    <div className='row m-0'>
                        <div className='col-md-6'>
                            <div id="copyright">
                                <img className='nav-logo ml-0'  src="/images/Logo.png" width={"60px"} height={"60px"}></img>
                            &copy; ARCADIAN All rights reserved.
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div id="terms">
                                <Link className='termlink' to="/terms_conditions">Terms & Conditions</Link>
                                <Link className='termlink' to="/privacy_policy">Privacy & policy</Link>
                                <Link className='termlink' to="/cookie_use">Cookie use</Link>
                            </div>
                        </div>
                    </div>               
            </div>
        </div>
    )
}

export default Footer;