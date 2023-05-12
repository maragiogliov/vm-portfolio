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
            <img src={victorPic} alt="Victor"           className='about-victor-image' />       
          </div>
          <div className='about-right'>
            <h2>Hey!</h2>
            <p>
            You know, I'm just a Junior Web Developer who happens to like UX/UI Design. It's a passion of mine, and I'm constantly striving to improve. 
            </p>
            <br/>
            <p>
            I try my best to combine my design skills with data visualization expertise to create web solutions that I hope are pretty cool. It's a work in progress, but I'm always excited to learn and grow in this field.
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