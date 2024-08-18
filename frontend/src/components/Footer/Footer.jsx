import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iste vero accusamus. Aliquam, sint saepe libero cupiditate voluptates reprehenderit quis corporis illo vitae tempora iure provident expedita temporibus voluptate distinctio?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-centre">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+916306198126</li>
                        <li>vipinpathak018@gmail.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 Ⓒ Tomato.com - All Right Reserved </p>
        </div>
    )
}

export default Footer