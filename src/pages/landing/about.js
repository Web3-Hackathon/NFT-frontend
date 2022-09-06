import React from 'react'
import "../../css/landing/about.css"

const About = () => {
    return (
        <div className='about'>
            <div className="header">
                <a href="/"><img src="/images/Logo.png" width={"80px"} height={"80px"} className="logo"></img></a>
            </div>
            <div className='row main'>
                <div className='col-md-5'>
                    <img src="/videos/game_machine.gif" width={"75%"} height={"80%"} />
                </div>
                <div className='col-md-7'>
                    <h3>ABOUT US</h3>
                    <p>Lorem Ipsum is simply dummy<br />
                        text of the printing and 
                        typesetting industry.Lorem<br />
                        Ipsum has been the industry's<br />
                        standard dummy text ever since
                    </p>   
                    <br />
                    <p>the 1500s,when an unknown<br />
                        printer took a galley of type and<br />
                        scrambled it to make a type specimen book.It has<br />
                        survived not only five centuries,but also the leap into electronic<br />
                    </p>   
                    <br />
                    <p>typesetting,remaining essentially unchanged.It was popularised<br />
                        in the 1960s with the relese of Letraset sheets containin Lorem<br />
                        Ipsum passage,and more recently with desktop publishing<br />
                        software like Aldus PageMaker including versions of Lorem Ipsum.<br />
                    </p>   
                    <br />
                    <h3>Let's Chat</h3>
                </div>
            </div>
        </div>
    )
}

export default About;