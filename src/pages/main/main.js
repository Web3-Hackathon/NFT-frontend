import React, { useEffect } from "react";
import Navbar from "./navbar";
import { IoMailSharp  } from "react-icons/io5";
import Menu from "./menu";
import "../../css/main/main.css"
import Footer from "./footer";
import TokenAbout from "./token/tokenAbout";
import HomeMultiplatform from "./homeMultiplatform";
import Support from "./support";

const Main = ({sitePage,navState,supportState ,menuState,navSelect,menuSelect,footerState,tokenAboutState,homeMultiState}) => {
    
    return (
        <div className="home" id="home">
            <div className="homeNav" id="homeNav">
                <Navbar navSelect={navSelect} />
            </div>
            
            <div className="main-page backgoround-black"  id="mainPage">                         
                    {navState === 1 ? <div className="row m-0 mb-5">
                        {menuState == 1 || menuSelect != "" ? <div className="col-xl-1 col-lg-2 col-md-2 col-xs-2">
                            <Menu menuSelect={menuSelect} />
                        </div> : ""}
                        <div className="col-xl-11 col-lg-10 col-md-10 col-xs-10 main-mobile">
                            <div className="sitePage">
                                {sitePage}
                            </div>
                        </div>
                    </div> : <div className="sitePage">
                                {sitePage}
                            </div> 
                    }
                    {homeMultiState == 1 ? <HomeMultiplatform /> : "" }
                    {tokenAboutState == 1 ? <TokenAbout /> : ""}
                    {supportState == 1 ? <Support /> : ""}
            </div>
            <div id="footer">
            {footerState == 1 ? <Footer id="footer" /> : ""}  
            </div>
        </div>
    )
}

export default Main;