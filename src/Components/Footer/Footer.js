import React from 'react'
import './Footer.css'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function Footer() {
    return (
        <div className="footer-container">
            <div className="copyright-text">
                <p>&copy; 2022 Art Gallery.</p>
            </div>
            <div className="made-text">
                <p> Virtual Event 2022</p>
            </div>
            <div className="to-top" href="#gallery">
                <ArrowCircleUpIcon />
            </div>
        </div>
    )
}

export default Footer
