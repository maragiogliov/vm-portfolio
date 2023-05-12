import React from 'react';
import './landing.css';
import { ReactComponent as BehanceIcon } from '../../assets/behance-icon.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-icon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin-icon.svg';

export default function Landing() {
  return (
    <section className='landing-container'>
      <h1 className='landing-title'>portfolio</h1>
      <h6 className='landing-hola'>Hola, I'am</h6>
      <h5 className='landing-name'>Victor</h5>
      <h2 className='landing-profession'>Junior Web Developer</h2>
      <h3 className='landing-location'>Based in Germany</h3>

      <div className="landing-icons-container">
      <a href="https://github.com/maragiogliov" target="_blank">
        <GithubIcon className="landing-icon" />
      </a>
      <a href="https://www.linkedin.com/in/victor-maragioglio-ba3073214/" target="_blank">
        <LinkedinIcon className="landing-icon" />
      </a>
      <a href="https://www.behance.net/vmaragioglio" target="_blank">
        <BehanceIcon className="landing-icon" />
      </a>
    </div>


      
      
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
