import React from 'react';
import './Features.scss';

const Features = () => {
    return (
        <section className='features'>
            <div className='features_title'>
                <h4>Our approach for creating a winning brand</h4>
            </div>

            <div className='features_info'>
                <div className='features_text'>
                    <h5>Our approach for creating a winning brand</h5>
                </div>
                <div className='features_feat'>
                    <span>01</span>
                    <h5>Brand Strategy</h5>
                    <p>Brand Strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.</p>
                </div>
                <div className='features_feat'>
                    <span>02</span>
                    <h5>Brand Design</h5>
                    <p>Keeping the brand design unique and meaningful helps in communicating the brand's timeless value effectively.</p>
                </div>
                <div className='features_feat'>
                    <span>03</span>
                    <h5>Web Design</h5>
                    <p>A beautifally crafted website is the best tool for brand awareness, and ultimately results increased revenues.</p>
                </div>
            </div>
        </section>
    )
}

export default Features;
