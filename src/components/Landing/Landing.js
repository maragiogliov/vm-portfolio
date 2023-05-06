import React from 'react'
import translate from '../../i18n/translate';
import './landing.css';


    
    export default function Landing() {
      return (
        <>
          <section className='landing'>
            <h1>
            {translate("Portfolio")}
              
            </h1>
            <p>
            {translate("Hola, I'am")}          
            </p>
            <h2>
            {translate("Victor")}
              
            </h2>
            <h2>
            {translate("Junior Web Developer")}
              
            </h2>
            <h3>
            {translate("Based in Berlin, Germany")}
              
            </h3>
            <button>
              {translate("Download CV")}
          
            </button>
            <button>
              {translate("CV herunterladen")}
          
            </button>

            
          </section>
     
        </>
        
      )
    }

