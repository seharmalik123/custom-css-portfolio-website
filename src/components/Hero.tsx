
import React from 'react';
import Navbar from './Navbar';
import '../app/styles/hero.css';

const Hero = () => {
  return (
    <div 
    id='hero' 
    className='hero-container'
    >
        <Navbar />
        <div className='hero-content'>
            <div className='hidden lg:block'></div>

            <div className='hero-text'>
                <div className='hero-slide'>
                    <p data-aos="zoom-in-up">I&apos;m</p> {/* use &apos; for apostrophe */}
                    <p className=' hover:text-white' data-aos="zoom-in-up">Sehar</p>
                    <p className=' hover:text-white' data-aos="zoom-in-up">Malik</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;