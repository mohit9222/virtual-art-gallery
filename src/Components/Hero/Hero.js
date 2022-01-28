import React from 'react'
import './Hero.scss'

function Hero() {

    return (

        <div className="hero-container">
            <div className="hero-title">
                <h3>Virtul Art Gallery 2022</h3>
            </div>
            <div className="text-container">
                {/* <h3>#ಚಿತ್ರ ಸಂತೆ 2022</h3> */}
                <h3>#ಬೆಂಗಳೂರು 2022</h3>
            </div>
            <div className="hero-text-1">
                <p>KCP<br/>
                    Welcomes you to the<br/>Virtual Event 2022</p>
            </div>

            <div className="hero-button">
                <a href="#gallery">
                    <button className="button">
                        Let's Explore
                        <div className="button__horizontal"></div>
                        <div className="button__vertical"></div>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Hero
