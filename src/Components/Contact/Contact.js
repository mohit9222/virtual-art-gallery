import React from 'react'
import './Contact.css'
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
    return (
        <div className="contact-us">
            <div className="quote">
                <p>"A beautiful body perishes, but work of art dies not." <br /> - Leonardo da Vinci.</p>
            </div>
                <h3>For purchases and queries contact...</h3>
                <div className="contact-options">
                    <div className="contact-option">
                        <div className="icon">
                            <PhoneIcon fontSize='large'/>
                        </div>
                        <div className="detail">
                            <h5>+91-83101XXXX</h5>
                        </div>
                    </div>
                    <div className="contact-option">
                        <div className="icon">
                            <EmailIcon fontSize='large'/>
                        </div>
                        <div className="detail">
                            <h5>artgallery@gmail.com</h5>
                        </div>
                    </div>
                    <div className="contact-option">
                        <div className="icon">
                            <RoomIcon fontSize='large'/>
                        </div>
                        <div className="detail">
                            <h5>Kumara Park East, Bengaluru.</h5>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Contact
