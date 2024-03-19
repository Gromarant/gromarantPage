import { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import Dropdown from '../components/Dropdown.jsx';

function NavBar({ translate }) {
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
      <Link to='/'><img className='navBar_logo' src='src/assets/images/navBar_logo.svg' alt='Logo gromarant' title='Gromarant'/></Link>
      <button className='burguer_menu' onClick={() => setOpen(!open)}><FaBars className='icon'/></button>
      <section className={`dropdown ${open ? 'menu' : ''}`} ref={dropdownRef}>
        <Dropdown/>
        <ul className='dropdown_links'>
          <li><NavLink to='/'>{translate.text.navigation.links.project}</NavLink></li>
          <li><NavLink to='/about_me'>{translate.text.navigation.links.about_me}</NavLink></li>
        </ul> 
      </section>
    
    </nav>
  )
}

export default NavBar;