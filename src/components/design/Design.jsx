import React from 'react';
import './Design.scss';
import design from '../assets/design/design.jpeg';
import designMb from '../assets/design/design-mobile.jpg';
import { Link } from 'react-router-dom';

const Design = () => {
    return (
        <section className='design'>
            <div className='design_img'>
                <picture>
                    <source srcSet={`${designMb} 1x`} media="(max-width: 500px)" />
                    <img
                        className="logo__apple"
                        srcSet={`${design} 2x`}
                        alt="Full Logo" 
                    />
                </picture>
            </div>

            <div className='design_info'>
                <div className='design_content'>
                    <h2><span>Design</span> is strategic.</h2>
                    <p>"A well-crafted design strategy consistenly produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients.</p>
                    <button className='design_cta'>
                        <Link to='/'>Schedule a Call</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Design;