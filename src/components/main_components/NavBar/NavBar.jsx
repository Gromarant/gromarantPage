import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { LangContext } from '../../../context/LangContext';
import { lang_en } from "../../../utils";
import { useContext } from 'react';
import Dropdown from '../../Dropdown/Dropdown';

function NavBar() {
  const { lang } = useContext(LangContext);

  const handleMenuClick = () => {
    const menuDropdown = document.querySelector('.dropdown');
    menuDropdown.classList.toggle('menu');
  }

  return(
    <nav className='navBar'>
      <Link to='/'><img className='navBar_logo' src='images/navBar_logo.svg' alt='Logo gromarant' title='Gromarant'/></Link>
      <FaBars className='icon burguer_menu' onClick={handleMenuClick}/>
      <section className='dropdown'>
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