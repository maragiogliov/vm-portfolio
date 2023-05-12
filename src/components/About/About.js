import React from 'react'
import './About.css';
import victorPic from '../../assets/victor-pic3.jpg';




export default function About() {
  return (
      <>
      <div className='about-container'>
        <h4 className='about-history'>My history </h4>
        <h1 className='about-me'>About me</h1>
        <div className='about-content'>
          <div className='about-left'>
            <img src={victorPic} alt="Victor"className='about-victor-image' />       
          </div>
          <div className='about-right'>
            <h2>Hey!</h2>
            <p>
             I'm a Junior Frontend Developer living in Berlin,  creating websites with HTML, SCSS, JavaScrip, React, Express, Node.js, PosgradeSQL.

            </p>
            <br/>
            <p>
            I enjoy design and I take UX/UI as a fundamental part of the creation of websites, we need research and prototypes. We need to test and iterate. 
            </p>
            <br/>

            <p>
            ...and that person is me, creating while flying high in the sky.




</p>
            
          <div className='about-years-container'>
            <h1 className='about-years'>3+ years</h1>
            <h4 className='about-years-description'>Web Dev Experience</h4>

            <h1 className='about-years'>7+ years</h1>
            <h4 className='about-years-description'>Traveling and Working Around The World</h4>

            <h1 className='about-years'>10+ years</h1>
            <h4 className='about-years-description'>Architectural Design</h4>
          </div>
          </div>
        </div>
      </div>
      </>
    )
  }