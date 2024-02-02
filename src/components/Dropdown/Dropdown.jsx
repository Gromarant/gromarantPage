import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import { lang_en } from '../../utils';

function Dropdown() {
  const {lang, setLang} = useContext(LangContext);

  const handleLanguageSelection = (e) => {
    localStorage.setItem('lang', JSON.stringify(e.target.value));
    setLang(e.target.value)
  };
  
  return(
    <label htmlFor='lang' className='navBar_lang'>
      { lang_en(lang) 
        ? <img className='lang_img' src='https://cdn-icons-png.flaticon.com/128/323/323310.png' alt={lang}/> 
        : <img className='lang_img' src='https://cdn-icons-png.flaticon.com/128/10601/10601048.png' alt={lang}/> 
      }
      <select className='lang_selector' name='lang' id='lang' onClick={handleLanguageSelection}>
        <option value='en'>English</option>
        <option value='es'>Español</option>
      </select>
    </label>
  )
}

export default Dropdown;