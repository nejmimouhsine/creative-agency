import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Button from '../button/Button';
import {GiHamburgerMenu} from 'react-icons/gi';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const toggleHandler = () => setToggle(!toggle); 

    return (
        <header className='header'>
            <div className='header_container container'>
                <h2 className='header_logo'>Creative</h2>
                <nav className={toggle ? 'header_nav active' : 'header_nav'}>
                    <ul>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/'>Service</Link></li>
                        <li><Link to='/'>Projects</Link></li>
                    </ul>
                    <Button className='btn btn_lg btn_black' value='Schedule a Call' />
                </nav>
                <div className='toogle'>
                    <GiHamburgerMenu onClick={toggleHandler} />
                </div>
            </div>
        </header>
    )
}

export default Header;