import React from 'react';
import './landing.css';

export default function Landing() {
  return (
    <section className='landing'>
      <h1>Portfolio</h1>
      <p>Hola, I'am</p>
      <h2>Victor</h2>
      <h2>Junior Web Developer</h2>
      <h3>Based in Berlin, Germany</h3>
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
