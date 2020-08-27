import React from 'react';
import banner from '../../image/Illustration.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <a href="#Courses">Courses</a>
                <a href="#About">About us</a>
                <a href="#Help">Help</a>
            </nav>
            <figure>
                <img src={banner} alt=""/>
            </figure>
        </div>
    );
};

export default Header;