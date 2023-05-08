import React from 'react';
import './landing.css';

export default function Landing() {
  return (
    <section className='landing-container'>
      <h1 className='landing-title'>portfolio</h1>
      <h6 className='landing-hola'>Hola, I'am</h6>
      <h5 className='landing-name'>Victor</h5>
      <h2 className='landing-profession'>Junior Web Developer</h2>
      <h3 className='landing-location'>Based in Germany</h3>
      
      <div className='buttons-container'>
        <button className='download-button'>
          Download CV
        </button>
        <button className='download-button'>
          CV herunterladen
        </button>
      </div>
    </section>
  );
}
