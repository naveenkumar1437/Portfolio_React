import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <span>Follow us on social media:</span>
                <div className="social-icons">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">
                        <FaTwitter />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">
                        <FaFacebook />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;