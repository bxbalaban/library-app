import React from 'react'
import "../components/style-footer.css"
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa"

const Footer = () => {
    return (

        <div id='footer' className='footer-container-1' >
            <div className='footer-container-2'>
                <div>
                    <h6 className='footer-text-1'>What We Offer</h6>
                    <ul>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                    </ul>
                </div>
                <div>
                    <h6 className='footer-text-1'>Support</h6>
                    <ul>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                    </ul>
                </div>
                <div>
                    <h6 className='footer-text-1'>Documentation</h6>
                    <ul>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                    </ul>
                </div>
                <div>
                    <h6 className='footer-text-1'>About</h6>
                    <ul>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                        <li className='footer-list'>Lorem</li>
                    </ul>
                </div>
            </div>
            <div className='footer-container-3'>
                <p className='py-4'>2022 Adesso.</p>
                <div className='footer-container-4'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>
        </div>

    );
}

export default Footer
