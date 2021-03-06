import React from 'react';
import creativeHero from '../assets/landing/creative_hero.jpg';
import creativeHeroMb from '../assets/landing/creative_hero-mobile.jpg';
import Button from '../button/Button';
import './Landing.scss';

const Landing = () => {
    return (
        <section className='landing'>
            <div className='landing_img'>
                <picture>
                    <source srcSet={`${creativeHeroMb} 1x`} media="(max-width: 500px)" />
                    <img
                        className="logo__apple"
                        srcSet={`${creativeHero} 2x`}
                        alt="Full Logo" 
                    />
                </picture>
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
