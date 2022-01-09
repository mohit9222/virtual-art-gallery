import React from 'react'
import './Button.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Button({text}) {
    return (
        <div className="button-container">
            <div className="button-text">
                <h3>Let's Explore</h3>
            </div>
            <div className="button-icon">
                <ArrowForwardIosIcon />
            </div>
        </div>
    )
}

export default Button
