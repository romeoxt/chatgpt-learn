  import React from 'react';
  import styled from '@emotion/styled';
  
  const SecondaryHero = () => {
    return (
      <div className='wrapper'>
        <img className='HeroImg' src='./images/gtp.png'/>
        <span className='bglayer'>
            <div className='flex'>
              <div className='flex-forty'>
                <h4 className='hero-subtitle'>Explore</h4>
                <h1 className='hero-title'>GPT-Learn</h1>
              </div>
              <div className='flex-sixty'>
                <p className='hero-desc'>Looking to expand your knowledge and learn something new? Look no further than GPT Learn! Our platform offers a wide variety of tutorials and courses to help you enhance your existing skills or explore something completely different. Whether you're a beginner or an expert, we cater to multiple levels and provide a personalized learning experience to help you achieve your goals.</p>
              </div>
            </div>    
        </span>  
      </div>
    );
  };

  export default SecondaryHero;
