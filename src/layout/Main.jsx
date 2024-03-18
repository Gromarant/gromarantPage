import { useEffect, useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LangContext } from '../context/LangContext.jsx';
import { ContactContext } from "../context/ContactContext.jsx";
import English from '../data/en.js';
import Spanish from '../data/es.js';
import { scrollUp } from '../utils.js';
import { lang_en } from '../utils.js';
import Home from '../pages/Home.jsx';
import About_me from '../pages/About_me.jsx';
import NavBar from '../layout/NavBar.jsx';
import Footer from '../layout/Footer.jsx';
import RRSS from '../components/RRSS.jsx';
import Go_up_btn from '../components/Go_up_btn.jsx';


function Main() {
  const [ lang, setLang ] = useState('en');
  const [openContact, setOpenContact] = useState(false);

  const rrssContactRef = useRef();

  const handleContact = (e) => {
    const contactIcon = document.querySelector('.contact .show_small');
    const contactContainer = document.querySelector('.contact');
    if (![contactContainer, contactIcon].includes(e.target)
     && !rrssContactRef.current.contains(e.target)) {
      setOpenContact(false);
    }
  }
  document.addEventListener('mousedown', handleContact)


  useEffect(() => {
    const storedLang = JSON.parse(localStorage.getItem('lang'));
    if (storedLang) {
      setLang(storedLang);
    }
  }, [lang]);

  const language = lang_en(lang) ? English : Spanish;

  return(
    <>
      <LangContext.Provider value={{lang, setLang}}>
        <NavBar translate={language}/>
        <Routes>
          <Route path='/' element={<Home translate={language}/>}/>
          <Route path='/about_me' element={<About_me translate={language}/>}/>
        </Routes>
        <Go_up_btn onClick={scrollUp} title={`${lang === 'en' ? 'scroll up' : 'Subir' }`}/>
        <section className={`rrss rrss_contact ${openContact ? 'contact_icons' : 'hidden'}`} ref={rrssContactRef}>
          <RRSS rrss={[...language.rrss, language.mailTo]}/>
        </section>
        <ContactContext.Provider value={{openContact, setOpenContact}}>
          <Footer translate={language}/>
        </ContactContext.Provider>
      </LangContext.Provider>
    </>
  )
}

export default Main;