import React from 'react';
import banner from '../../image/Illustration.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <a href="#Courses">Courses</a>
                <a href="#Enroll">Enroll</a>
                <a href="https://www.facebook.com/don.israfil.9">Contact Us</a>
                <a href="https://www.facebook.com/don.israfil.9">About us</a>
                <a href="https://www.facebook.com/don.israfil.9">Help</a>
            </nav>
            <div className="search">
                <input type="text" placeholder="Search Course"/>
                <button className='searchBtn'>Search >></button>
            </div>
            <figure>
                <img src={banner} alt=""/>
            </figure>
        </div>
    );
};

export default Header;