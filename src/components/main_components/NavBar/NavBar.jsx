import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { LangContext } from '../../../context/LangContext';
import { lang_en } from "../../../utils";
import { useContext, useRef, useState } from 'react';
import Dropdown from '../../Dropdown/Dropdown';

function NavBar() {
  const { lang } = useContext(LangContext);
  const [ open, setOpen ] = useState(false);

  const dropdownRef = useRef();

  const handleMenu = (e) => {
    if (!dropdownRef.current.contains(e.target) && e.target !== document.querySelector('.burguer_menu')) {
      setOpen(false);
    }
  }
  document.addEventListener('mousedown', handleMenu);
  

  return(
    <nav className='navBar'>
      <Link to='/'><img className='navBar_logo' src='images/navBar_logo.svg' alt='Logo gromarant' title='Gromarant'/></Link>
      <FaBars className='icon burguer_menu' onClick={() => setOpen(!open)}/>
      <section className={`dropdown ${open ? 'menu' : ''}`} ref={dropdownRef}>
        <Dropdown/>
        { lang_en(lang)
          ? <ul className='dropdown_links'>
              <li><NavLink to='/'>Projects</NavLink></li>
              <li><NavLink to='/about_me'>About me</NavLink></li>
            </ul> 
          : <ul className='dropdown_links'>
              <li><NavLink to='/'>Proyectos</NavLink></li>
              <li><NavLink to='/about_me'>Sobre mi</NavLink></li>
            </ul>
        }
      </section>
    
    </nav>
  )
}

export default NavBar;