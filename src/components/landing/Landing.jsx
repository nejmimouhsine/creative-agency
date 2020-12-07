import React from 'react';
import creativeHero from '../assets/landing/creative_hero.jpg';
import Button from '../button/Button';
import './Landing.scss';

const Landing = () => {
    return (
        <section className='landing'>
            <div className='img_container landing_img'>
                <img src={creativeHero} alt='creative landing' />
            </div>
            <div className='landing_info'>
                <div className='container'>
                    <h1>Branding & website design agency</h1>
                    <p>We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.</p>
                    <Button className='btn btn_sm btn_red' value='Learn More' />
                </div>
            </div>
        </section>
    )
}

export default Landing;
