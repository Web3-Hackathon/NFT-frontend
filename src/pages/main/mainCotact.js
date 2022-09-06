import React, { useState } from "react"
import "../../css/main/mainContact.css";
import TextFieldGroup from '../../common/textFiledGroup'
import ListFieldGroup from "../../common/listFieldGroup";
import TextAreaFieldGroup from '../../common/textAreaFieldGroup';
import { IoMailSharp  } from "react-icons/io5";

const MainContact = () => {
    const [userName,setUserName] = useState("");
    const [userEmail,setUserEmail] = useState("");
    const [userErr,setUserErr] = useState("");
    const [userSubject,setUserSubjet] = useState("");
    const [userMessage,setUserMessage] = useState("");
    const submit = () => {

    }
    const selectOptions = [
        {label: "Select message theme", value:"1"},
        {label: "Select message theme1", value:"2"},
        {label: "Select message theme2", value:"3"}
    ];
    
    return (
        <div className="m-auto text-color-white">
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <form onChange={submit()}>
                                <TextFieldGroup 
                                    type="text"
                                    name="uername"
                                    placeholder="User name..."
                                    value={userName}
                                    label="User name"
                                    onChange={e=> setUserName(e.target.value)}
                                    err={userErr.username}
                                />
                                <TextFieldGroup 
                                    type="email"
                                    name="email"
                                    placeholder="Email..."
                                    value={userEmail}
                                    label="Your Email"
                                    onChange={e=> setUserEmail(e.target.value)}
                                    err={userErr.email}
                                />
                                <ListFieldGroup 
                                    label="Subject"
                                    options={selectOptions}
                                    name="subject"
                                    value={userSubject}
                                    addClass="form-select-lg"
                                    onChange={e=> setUserSubjet(e.target.value)}
                                    err={userErr.subject}
                                />
                                <TextAreaFieldGroup 
                                    label="Message"
                                    name="message"
                                    value={userMessage}
                                    placeholder="Write your message..."
                                    onChange={e=> setUserMessage(e.target.value)}
                                />
                                <div className="sendButton">
                                    <img className="mt-3" src="/landing/smallbutton.svg"></img>
                                    <p className="text-color-white sendTextCenter">SEND</p>
                                </div>
                            </form>
                        </div>  
                        <div className="col-lg-6 col-md-6 col-xs-12 rightPage">
                            <form>
                                <div>
                                    <label style={{color: "rgb(141,141,141)"}}>General Enquiry</label>
                                    <br/>
                                    <label style={{display:"flex"}}>
                                    <IoMailSharp size={25}/>
                                    <p>Email</p></label>     
                                </div>
                                <div>
                                    <label style={{color: "rgb(141,141,141)"}}>Affiliate Enquiry</label>
                                    <br/>
                                    <label style={{display:"flex"}}>
                                    <IoMailSharp size={25}/>
                                    <p>Email</p></label>     
                                </div>
                                <div>
                                    <label style={{color: "rgb(141,141,141)"}}>Partners & Investors</label>
                                    <br/>
                                    <label style={{display:"flex"}}>
                                    <IoMailSharp size={25}/>
                                    <p>Email</p></label>     
                                </div>
                                <div>
                                    <label style={{color: "rgb(141,141,141)"}}>Technical support</label>
                                    <br/>
                                    <label style={{display:"flex"}}>
                                    <IoMailSharp size={25}/>
                                    <p>Email</p></label>     
                                </div>
                                <div>
                                    <label style={{color: "rgb(141,141,141)"}}>Follow us</label>
                                    <br/>
                                    <div className="followus pt-4">
                                        <img src="/landing/Instagram.svg" width={"40px"} className="followusIcon"></img>
                                        <img src="/landing/Facebook.svg" width={"40px"} className="followusIcon"></img>
                                        <img src="/landing/Twitter.svg" width={"40px"} className="followusIcon"></img>
                                        <img src="/landing/Reddit.svg" width={"40px"} className="followusIcon"></img>
                                        <img src="/landing/Disord.svg" width={"40px"} className="followusIcon"></img>
                                        <img src="/landing/Telegram.svg" width={"40px"} className="followusIcon"></img>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default MainContact;     