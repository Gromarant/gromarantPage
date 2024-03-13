import { useEffect, useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LangContext } from '../../../context/LangContext.jsx';
import { ContactContext } from "../../../context/ContactContext.jsx";
import { FaLinkedinIn, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Home from '../../../pages/Home/Home.jsx';
import About_me from '../../../pages/About_me/About_me.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../Footer/Footer.jsx';
// import RRSS from '../../RRSS/RRSS.jsx';
import Go_up_btn from '../../Go_up_btn/Go_up_btn.jsx';
import { scrollUp } from '../../../utils.js';
import { lang_en } from '../../../utils.js';
import English from '../../../data/en.json';
import Spanish from '../../../data/es.json';


function Main() {
  const [ lang, setLang ] = useState('en');
  const [openContact, setOpenContact] = useState(false);

  const rrssContactRef = useRef();

  const handleContact = (e) => {
    if (e.target !== document.querySelector('.contact')
     && e.target !== document.querySelector('.contact .show_small')
     && !rrssContactRef.current.contains(e.target)) {
      setOpenContact(false);
    }
  }
  document.addEventListener('mousedown', handleContact)


  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('lang'));
    (storage) ? setLang(JSON.parse(localStorage.getItem('lang'))) : lang
  }, [lang]);

  return(
    <>
      <LangContext.Provider value={{lang, setLang}}>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home translate={lang_en(lang) ? English : Spanish}/>}/>
          <Route path='/about_me' element={<About_me translate={lang_en(lang) ? English : Spanish}/>}/>
        </Routes>
        <Go_up_btn onClick={scrollUp} title={`${lang === 'en' ? 'scroll up' : 'Subir' }`}/>
        <section className={`rrss rrss_contact ${openContact ? 'contact_icons' : 'hidden'}`} ref={rrssContactRef}>
          <button className='rrss_btn'>
          { lang_en(lang)
            ? <a  href={English.rrss[0].link} target='_blank' title={English.rrss[0].title}><FaLinkedinIn className='icon'/></a>
            : <a  href={Spanish.rrss[0].link} target='_blank' title={Spanish.rrss[0].title}><FaLinkedinIn className='icon'/></a>
          }
          </button>
          <button className='rrss_btn'>
          { lang_en(lang)
            ? <a  href={English.rrss[1].link} target='_blank' title={English.rrss[1].title}><FaInstagram className='icon'/></a>
            : <a  href={Spanish.rrss[1].link} target='_blank' title={Spanish.rrss[1].title}><FaInstagram className='icon'/></a>
          }
          </button>
          <button className='rrss_btn'>
          { lang_en(lang)
            ? <a  href={English.rrss[2].link} target='_blank' title={English.rrss[2].title}><FaXTwitter className='icon'/></a>
            : <a  href={Spanish.rrss[2].link} target='_blank' title={Spanish.rrss[2].title}><FaXTwitter className='icon'/></a>
          }
          </button>
          <button className='rrss_btn'>
          { lang_en(lang)
            ? <a  href={English.mailTo.link} target='_blank' title={English.mailTo.title}><MdEmail className='icon'/></a>
            : <a  href={Spanish.mailTo.link} target='_blank' title={Spanish.mailTo.title}><MdEmail className='icon'/></a>
          }
          </button>
        </section>
        <ContactContext.Provider value={{openContact, setOpenContact}}>
          <Footer translate={lang_en(lang) ? English : Spanish}/>
        </ContactContext.Provider>
      </LangContext.Provider>
    </>
  )
}

export default Main;