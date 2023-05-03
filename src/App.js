import './App.css';
import '@tailwindcss/forms'
import Hero from './components/Hero/Hero'
import { I18nProvider, LOCALES } from './i18n';
import { useState } from 'react';
import { ReactComponent as GB_flag } from './assets/GB.svg';
import { ReactComponent as FR_flag } from './assets/FR.svg';
import { ReactComponent as DE_flag } from './assets/DE.svg';
function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  const [selectedLanguage, setSelectedLanguage] = useState(LOCALES.ENGLISH);

  return (
    <>
      <I18nProvider locale={locale}>
        <section className='buttons-language-container'>
          <button 
            onClick={() => {
              setLocale(LOCALES.ENGLISH);
              setSelectedLanguage(LOCALES.ENGLISH);
            }}
            className={selectedLanguage === LOCALES.ENGLISH ? 'active' : ''}
          >
            <GB_flag className='buttons_languages'/>
          </button>
  
          <button 
            onClick={() => {
              setLocale(LOCALES.GERMAN);
              setSelectedLanguage(LOCALES.GERMAN);
            }}
            className={selectedLanguage === LOCALES.GERMAN ? 'active' : ''}
          >
            <DE_flag className='buttons_languages'/>
          </button>
            
          <button 
            onClick={() => {
              setLocale(LOCALES.FRENCH);
              setSelectedLanguage(LOCALES.FRENCH);
            }}
            className={selectedLanguage === LOCALES.FRENCH ? 'active' : ''}
          >
            <FR_flag className='buttons_languages'/>
          </button>
        </section>

        <Hero/>
    </I18nProvider>
    </>
  );
}

export default App;