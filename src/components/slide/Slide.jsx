import React from 'react';
import './Slide.scss';
import {IoIosArrowDropleft} from 'react-icons/io';
import {IoIosArrowDropright} from 'react-icons/io';
import slide from '../assets/slide/slide.jpeg';
import slideMb from '../assets/slide/slide-mobile.jpg';


const Slide = () => {
    const year = new Date().getFullYear();

    return (
        <section className='slide'>
            <div className='slide_info'>
                <div className='slide_contain'>
                    <h3>Brand naming & guidelines</h3>
                    <div className='slide_arrows'>
                        <IoIosArrowDropleft />
                        <IoIosArrowDropright />
                    </div>
                </div>
            </div>
            <div className='slide_right'>
                <div className='slide_img'>
                    <picture>
                        <source srcSet={`${slide} 1x`} media="(max-width: 500px)" />
                        <img
                            className="logo__apple"
                            srcSet={`${slideMb} 2x`}
                            alt="Full Logo" 
                        />
                    </picture>
                </div>
                <div className='slide_content'>
                    <h5>Lean Product Roadmap</h5>
                    <p>{year} Project</p>
                </div>
            </div>
        </section>
    )
}

export default Slide;