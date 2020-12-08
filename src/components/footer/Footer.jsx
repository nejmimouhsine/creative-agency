import React from 'react';
import Button from '../button/Button';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container footer_container'>
                <h2 className='footer_title'>Let's build something great together.</h2>
                <Button className='btn btn_lg btn_red' value='Schedule a Call' />
            </div>
        </footer>
    )
}

export default Footer;
