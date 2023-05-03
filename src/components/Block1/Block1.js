import React from 'react'
import translate from '../../i18n/translate';
import './Block1.css';


    
    export default function Block1() {
      return (
        <>
          <section className='Block1-2'>
            <h1>
            {translate("Natural Taste of Sicily")}
              
            </h1>
            <p>
            {translate("With over 50 years of family farm tradition, CDE elevate your cooking with our organic extra virgin olive oil.")}          
            </p>
            <button>
              {translate("Shop Olives")}
          
            </button>

            
          </section>
     
        </>
        
      )
    }

