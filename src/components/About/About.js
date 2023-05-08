import React from 'react'
import './About.css';
import victorPic from '../../assets/victor-pic3.jpg';




export default function About() {
  return (
      <>
      <div className='about-container'>
        <h4 className='about-history'>My history </h4>
        <h1 className='about-me'>About me</h1>
        <img src={victorPic} alt="Victor" className='about-victor-image' width={'250px'} height={'250px'} />       
        <p>
        As a talented Junior Web Developer with a passion for UX/UI Design, I blend design and data visualization expertise to craft cutting-edge web solutions.
        </p>
        <br/>
        <p>
        With a solid foundation in Web & Software Development from my studies in Germany, I'm excited to take on diverse web projects and make an impact.
        </p>
        <br/>
        <p>
        Looking for an extraordinary website or web solution? Let me create captivating, secure, and user-focused designs that boost your business and redefine performance.
        </p>
      </div>
      </>
    )
  }