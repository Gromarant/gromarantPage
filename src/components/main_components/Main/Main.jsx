import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LangContext } from "../../../context/LangContext.jsx";
import Home from "../../../pages/Home/Home.jsx";
import About_me from "../../../pages/About_me/About_me.jsx";
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../Footer/Footer.jsx';
import English from "../../../data/en.json";
import Spanish from "../../../data/es.json";
import { lang_en } from '../../../utils.js';

function Main() {
  const [ lang, setLang ] = useState('en');

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
        <Footer translate={lang_en(lang) ? English : Spanish}/>
      </LangContext.Provider>
    </>
  )
}

export default Main;