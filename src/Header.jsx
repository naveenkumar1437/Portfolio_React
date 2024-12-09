import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import { LiaLinkedinIn } from 'react-icons/lia';

const Header = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/contact');
    };
    return (
        <section id='header'>
            <header className="header">
                <div className="profile-container">
                    <img
                        src="https://i.imgur.com/WUauq8J.jpeg"
                        width="150px"
                        height="150px"
                        alt="Profile"
                        className="profile-image"
                    />
                    <h1 className="profile-name">MATTHURTHI NAVEEN KUMAR</h1>
                    <p className="profile-bio">
                        I am excited about starting my professional journey in web development and am actively looking for opportunities to contribute and grow. Feel free to reach out to me if you’d like to connect!
                    </p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/naveen-kumar-matthurthi-65888826b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <button className="buy-button" onClick={handleButtonClick}>Click to Contact</button>
                </div>
            </header>
        </section>

    );
};

export default Header;