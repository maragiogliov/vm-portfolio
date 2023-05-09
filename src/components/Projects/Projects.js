import React from 'react'
import './Projects.css';



export default function Projects() {
  return (
      <>
      <div className='projects-container'>
      <h4 className='projects-collaborations'>Collaborations </h4>
        <h1 className='projects-recent'>Recent Projects</h1>

        <div className='project-card-container'>
        <h1 className='projects-title'>MOTHERCODE</h1>
        <h4 className='projects-title-description'>Final Project DCI</h4>

        <h1 className='projects-title'>CDE OLIVE OIL</h1>
        <h4 className='projects-title-description'>Olive Oil Website using React.js </h4>

        <h1 className='projects-title'>NED</h1>
        <h4 className='projects-title-description'>Frontend development for a digital art gallery using React.js</h4>


        <h1 className='projects-title'>LENGUAPP</h1>
        <h4 className='projects-title-description'>UX Research </h4>


        <h1 className='projects-title'>CV Desserts</h1>
        <h4 className='projects-title-description'>Shopify E-commerce </h4>


        <h1 className='projects-title'>Wheather App</h1>
        <h4 className='projects-title-description'>React.js project </h4>

        <h1 className='projects-title'>Guess Game</h1>
        <h4 className='projects-title-description'>Vanilla JavaScript </h4>
        </div>
      </div>
      </>
    )
  }