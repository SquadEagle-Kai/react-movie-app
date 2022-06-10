import React from 'react';

import './Footer.css';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <Link to="/">
                          <h2>KaiTV</h2>
                        </Link>
                    </div>
                </div>
                <div className="footer__content__menus" >
                    <div className="footer__content__menu" data-aos="fade-right" data-aos-duration="1500">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Services</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer__content__menu" data-aos="fade-up" data-aos-duration="1500">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                    <div className="footer__content__menu" data-aos="fade-left" data-aos-duration="1500">
                        <Link to="/">Setting</Link>
                        <Link to="/">Login</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;