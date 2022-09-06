import React from 'react'
import "../../css/main/home.css"

const Home = () => {
    return (
        <div className='home'>
            <div className='home-develop mt-5'>
                <img className='home-develop-image' src='/images/home/ArcadeMachine.png'></img>
                <h1 className='font-orbitron home-font-size-64 font-weight-700 mb-0 text-color-white'>WE DEVELOP</h1>
                <p className=' font-orbitron home-font-size-40 font-weight-700 home-color-main mb-0'>FUN</p>
                <p className=' font-orbitron home-font-size-40 font-weight-700 mb-0'>INTERACTIVE</p>
                <p className=' font-orbitron home-font-size-40 font-weight-700'>GAMES</p>
            </div>
        </div>
    )
}

export default Home;