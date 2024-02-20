import React from "react";
import InstagramIcon from "../assets/instagram.png";
import FacebookIcon from "../assets/facebook.png";
import WhatsappIcon from "../assets/whatsapp.png";

const Footer = () => {
    return (
        <div className="footer">
            <p>&#169; 2024 - All rights reserved</p>
            <div className="socialIcons">
                <a href="#" target="_blank" ><img className="socialIcon" src={InstagramIcon} alt="social media - instagram" /></a>
                <a href="#" target="_blank" ><img className="socialIcon" src={FacebookIcon} alt="social media - facebook" /></a>
                <a href="#" target="_blank" ><img className="socialIcon" src={WhatsappIcon} alt="social media - whatsapp" /></a>
            </div>
        </div>
    );
};

export default Footer;
