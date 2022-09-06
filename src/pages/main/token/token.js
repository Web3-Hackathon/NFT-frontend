import {React,useState} from 'react'
import '../../../css/main/token.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {AiOutlineClose} from "react-icons/ai";

const Token = () => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    
    const showModal = () => {
        setShow(true);
    }

    return (
        <div className='token'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='token-container-left font-orbitron font-weight-700 text-color-white'>ARCADIAN Token</h1>  
                        <p className='text-color-white text-font-size-20'>Arcadian is the native token for our Arcade and Games, built on the
                        <br/>
                         Harmony blockchain.</p>
                        <div className='token-left-button-group'>
                            <div className='token-gif position-relative'>
                                <img src='/images/home/game/smallbutton.svg' width={"250px"} height={"90px"}></img>
                                <p className='token-gif-text text-color-white font-weight-700'>BUY TOKEN</p>
                            </div>
                            <div className='token-gif position-relative ml-3' onClick={showModal}>
                                <img src='/images/home/token/Documents.svg' width={"250px"} height={"100px"}></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img className='token-container-right' src='/videos/game_machine.gif'></img>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <div className="modalContent text-color-white">
                    <Modal.Body>
                        <div className='text-center'>
                            <a onClick={handleClose} className='token-float-right'><AiOutlineClose siez={40} /></a>
                            <h1 className='font-orbitron'>How to buy</h1>
                            <img src="/images/Logo.png" width={"80px"}></img>
                            <h4 className="font-orbitron mt-3">Note:</h4>
                            <p className="font-size-15 mt-3">You will need to purchase some ONE (Harmony) and have that ready in your Metamask wallet for this process.</p>
                        </div>   
                        <div className='mt-5'>
                            <h4 className="font-orbitron mt-3">Step1</h4>
                            <p className="font-size-15 mt-3">
                            Add the Metamask Wallet extension to your Chrome browser and connect it to the Harmony Mainnet network by following these instructions: 
                            <a className='token-text-color-blue text-decoration-none' href='#'>Metamask wallet documentation</a>
                            </p>
                        </div>
                        <div className='mt-5'>
                            <h4 className="font-orbitron mt-3">Step2</h4>
                            <p className="font-size-15 mt-3">
                            Add ARCDN Token to Metamask using this token address:
                            At the bottom, click Add Token and a new screen will appear. Enter the following address into [Token Contract Address]
                            the field.
                            </p>
                            <p className="font-size-15 mt-3 token-text-underline">
                                0xf546E83509b04bc36d8C5688f537E80e491aD8a8
                            </p>
                            <p className="font-size-15 mt-3">
                                <strong>You should see:</strong><br/>
                                Token Symbol : <strong>ARCDN</strong><br />
                                Token Decimal : <strong>18</strong><br />
                                Follow the steps to complete adding token.<br/>
                                The token should now appear in the list.<br/>
                            </p>
                        </div> 
                        <div className='mt-5'>
                            <h4 className="font-orbitron mt-3">Step2</h4>
                            <p className="font-size-15 mt-3 token-text-shdow">
                                Visit <a href="#" className='token-text-color-blue token-text-decoration-black'>SonicSwap.io</a> connect with your Metamask set to Harmony Mainnet
                                Search for ARCDN (Arcadian Token) it will be in the list by default.
                            </p>
                        </div>                                             
                    </Modal.Body>
                </div>
            </Modal>
        </div>
    )
    
}

export default Token;