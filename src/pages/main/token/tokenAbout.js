import React from 'react'
import '../../../css/main/tokenAbout.css'
import { Link } from 'react-router-dom';

import dropmap_background from '../../../img/dropmap_background.png'

const TokenAbout = () => {
    return (
        <div className='tokenAbout'>
            <div className='container'>
                <Link
                to="/acadian_price_monitor"
                >
                <div className='text-center position-relative'>
                    <img src="/images/token/smallbutton.svg" width={"250px"}></img>
                    <p className='text-color-white token-pricechat-button tokenAbout-font-size-16'>VIEW PRICE CHART</p>
                </div>
                </Link>
                <div className='row token-mt-188'>
                    <div className='col-md-6'>
                        <div className='container'>
                            <img src='/images/token/arcadian_token.png' width={"100%"} height={"100%"}></img>
                        </div>
                    </div>
                    <div className='col-md-6 position-relative'>
                        <div className='tokenAbout-arcadianToken-div-center'>
                            <h1 className='font-orbitron text-color-white tokenAbout-font-size-48'>ARCADIAN Token</h1>
                            <p className='text-color-white tokenAbout-font-size-16'>HRC20 Gaming Token used as In-Game currency and Arcade access credits</p>
                        </div>
                    </div>
                </div>
                <div className='row token-mt-188'>     
                    <div className='col-md-6 position-relative'>
                        <div className='tokenAbout-arcadianToken-div-center'>
                            <h1 className='font-orbitron text-color-white tokenAbout-font-size-48'>Utility</h1>
                            <p className='text-color-white tokenAbout-font-size-16'>
                            Can be utilised for:<br/>PVP currency in all of our games 
                            Purchasing limited edition NFTs and game assets<br/>For leasing NFT items in the marketplace
                            Earning a percentage of In-Game Reflections <br/>and more..
                            </p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='container'>
                            <img src='/images/token/utility.png' width={"100%"} height={"100%"}></img>
                        </div>
                    </div>
                </div>
                <div className='row token-mt-188'>
                    <div className='col-md-6'>
                        <div className='container'>
                            <img src='/images/token/nft.png' width={"100%"} height={"100%"}></img>
                        </div>
                    </div>
                    <div className='col-md-6 position-relative'>
                        <div className='tokenAbout-arcadianToken-div-center'>
                            <h1 className='font-orbitron text-color-white tokenAbout-font-size-48'>NFT</h1>
                            <p className='text-color-white tokenAbout-font-size-16'>You can use our Token to
                                <li>
                                    Mint Limited Edition NFTs                                       
                                </li> 
                                <li>
                                 Upgrade NFTs
                                </li> 
                                <li>
                                Lease NFTs with ARCDN Token 
                                </li>                           
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row token-mt-188'>     
                    <div className='col-md-6 position-relative'>
                        <h1 className='font-orbitron text-color-white tokenAbout-font-size-48'>Tokenomics</h1>
                        <p className='font-orbitron text-color-white tokenAbout-font-size-16'>
                        ARCDN Token
                        </p>
                        <p className='text-color-white tokenAbout-font-size-16'>
                        Available on <a href="#" className='tokenAbout-font-color-blue'>SonicSwap.io</a>
                        </p>
                        <img src='/images/token/tokenomics.png' width={"100%"} ></img>
                    </div>
                    <div className='col-md-6'>
                        <div className='container'>
                            <div className='token-about-tokenomics-right-list token-about-pt-1 token-about-pl-3 token-about-pb-1'>
                                <p className='font-orbitron token-font-size-24 token-text-color-grey '>MAX supply of</p>
                                <p className='font-orbitron token-font-size-36 token-text-color-grey '>100 Million hardcap</p>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <p className='font-orbitron token-font-size-36 text-color-white '>5%</p>
                                        <p className='tokenAbout-font-size-14 token-text-color-grey'>Founders </p>
                                    </div>
                                    <div className='col-md-3'>
                                        <p className='font-orbitron token-font-size-36 text-color-white '>10%</p>
                                        <p className='tokenAbout-font-size-14 token-text-color-grey'>DEV Supplement </p>
                                    </div>
                                    <div className='col-md-4'>
                                        <p className='font-orbitron token-font-size-36 text-color-white '>5%</p>
                                        <p className='tokenAbout-font-size-14 token-text-color-grey'>Marketing and Giveaways  </p>
                                    </div>
                                </div>
                            </div>
                            <div className='token-about-tokenomics-right-list token-about-pt-1 token-about-pl-3 token-about-pb-1 mt-3'>
                                <p className='font-orbitron token-font-size-24 token-text-color-grey '>Tax-In-Game</p>
                                <p className='font-orbitron token-font-size-36 text-color-white '>15%</p>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <p className='tokenAbout-font-size-14 token-text-color-grey'>Fees and Taxes are in game on winnings only and vary for each game.  </p>
                                    </div>
                                </div>
                            </div>
                            <div className='token-about-tokenomics-right-list token-about-pt-1 token-about-pl-3 token-about-pb-1 mt-3'>
                                <p className='font-orbitron token-font-size-24 token-text-color-grey '>Antiwhale set at</p>
                                <p className='font-orbitron token-font-size-36 text-color-white '>0.01 %</p>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <p className='tokenAbout-font-size-14 token-text-color-grey'>MAX Transaction limit is currenty set to 10,000 tokens </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row token-mt-188'>     
                    <div className='col-md-6 position-relative'>
                        <div className='tokenAbout-arcadianToken-div-center'>
                            <h1 className='font-orbitron text-color-white tokenAbout-font-size-48'>Utility and Incentives</h1>
                            <p className='token-text-color-grey tokenAbout-font-size-16 mt-5'>
                            ARCDN Token can be used in all of our products and games<br/>Additional staking utility on SonicSwap.io 
                            Can be utilised for various products and services in the Arcade ( TBD ) 
                            <br/>When you use the token to play our games you will incur less tax and fees<br/> 
                            Regular liquidity will be added to our token pairs from In-Game fees and taxes
                            Controlled release of the supply into circulation based off game transaction volume.
                            </p>
                            <p className='token-text-color-grey tokenAbout-font-size-16 mt-5'>More information can be found in <a className='tokenAbout-font-color-blue'>Documents</a></p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='container'>
                            <div className='token-display-flex mt-3'>
                                <div className='token-about-utility-and-incentives-right-div token-about-margin-right-1'>
                                    <img src='/images/token/Fire Icon.svg' width={"100px"} height={"100px"}></img>
                                    <p className='text-center text-color-white tokenAbout-font-size-16'>Staking Incentives</p>
                                </div>
                                <div className='token-about-utility-and-incentives-right-div token-about-margin-right-1'>
                                    <img src='/images/token/Rocket Icon.svg' width={"100px"} height={"100px"}></img>
                                    <p className='text-center text-color-white tokenAbout-font-size-16'>Regular updates</p>
                                </div>
                            </div>  
                            <div className='token-display-flex mt-3'>
                                <div className='token-about-utility-and-incentives-right-div token-about-margin-right-1'>
                                    <img src='/images/token/Pistol Icon.svg' width={"100px"} height={"100px"}></img>
                                    <p className='text-center text-color-white tokenAbout-font-size-16'>Regular Giveaways </p>
                                </div>
                                <div className='token-about-utility-and-incentives-right-div token-about-margin-right-1'>
                                    <img src='/images/token/Coins Icon.svg' width={"100px"} height={"100px"}></img>
                                    <p className='text-center text-color-white tokenAbout-font-size-16'>PVP P2E</p>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className='token-mt-188'>
                    <h1 className='text-center tokenAbout-font-size-48 font-orbitron text-color-white'>
                    Roadmap
                    </h1>
                    <div id="flex-container-text-up">
                        <div className="roadmap-text-up"><p className="text-left">Launch Q1 2023 (Arcade)</p></div>
                        <div className="roadmap-text-up"><p className="text-center">Marketing campaign on all available fronts</p></div>
                        <div className="roadmap-text-up"><p className="text-right">Partnerships with various corss-chain projects</p></div>
                    </div>
                    <div className='mt-5'>
                        <div id="flex-container-roadmap"  style={{ backgroundImage: `url(${dropmap_background})` }} >
                            <div><img src='/images/token/Roadmap Down.svg'></img></div>
                            <div><img src='/images/token/Roadmap Up.svg'></img></div>
                            <div><img src='/images/token/Roadmap Down.svg'></img></div>
                            <div><img src='/images/token/Roadmap Up.svg'></img></div>
                            <div><img src='/images/token/Roadmap Down.svg'></img></div>
                        </div>
                        <div id="flex-container-text-down" className='mt-5'>
                            <div className="roadmap-text-down"><div className="text-center"><p>More token utillity across multiple platforms Q2 2023</p></div></div>
                            <div className="roadmap-text-down"><div className="text-center"><p>CMS/ Coingecko listings</p></div></div>                
                        </div>
                    </div>                    
                </div>
                <div>
                    <img src='/images/token/Final.png' width={"100%"} height={"504px"}></img>
                </div>
            </div>     
        </div>      
    )
}

export default TokenAbout;