import {React, useEffect} from 'react';
import Navbar from "./navbar";
import Footer from "./footer";
import '../../css/main/document.css'

const Document = ({navSelect,footerState}) => {



    return (
        <div className="document">
            <div className='document-main'>
                <div className='container'>                    
                    <h3 className='document-header-name text-center'>
                        Documents
                    </h3>
                    <div className='row'>
                        <div className='col-md-4 p-3'>
                            <a href='#' className='document-text-decoration-none'>
                            <div className='document-item text-center'>
                                <img src='/images/Logo.png' width={"80px"}></img>
                                <p className='text-color-white mt-4'>Media</p>
                            </div>
                            </a>
                        </div>
                        <div className='col-md-4 p-3'>
                            <a href='#' className='document-text-decoration-none'>
                                <div className='document-item text-center'>
                                    <img src='/images/Logo.png' width={"80px"}></img>
                                    <p className='text-color-white mt-4'>Contact address</p>
                                </div>
                            </a>
                        </div>
                        <div className='col-md-4 p-3'>
                            <a href='#' className='document-text-decoration-none'>
                                <div className='document-item text-center'>
                                    <img src='/images/Logo.png' width={"80px"}></img>
                                    <p className='text-color-white mt-4'>Litepapter</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='row'>
                        
                        <div className='col-md-4 p-3'>
                            <a href='#' className='document-text-decoration-none'>
                                <div className='document-item text-center'>
                                    <img src='/images/Logo.png' width={"80px"}></img>
                                    <p className='text-color-white mt-4'>Marketing plan</p>
                                </div>
                            </a>
                        </div>
                        <div className='col-md-4 p-3'>
                            <a href='#' className='document-text-decoration-none'>
                                <div className='document-item text-center'>
                                    <img src='/images/Logo.png' width={"80px"}></img>
                                    <p className='text-color-white mt-4'>Game Documents</p>
                                </div>
                            </a>
                        </div>
                        <div className='col-md-4 p-3'>
                            <a href='#' className='document-text-decoration-none'>
                                <div className='document-item text-center'>
                                    <img src='/images/Logo.png' width={"80px"}></img>
                                    <p className='text-color-white mt-4'>How to guide</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>         
        </div>
    )
}

export default Document;