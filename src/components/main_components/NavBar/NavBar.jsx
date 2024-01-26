import { Link } from 'react-router-dom';
import Dropdown from '../../Dropdown/Dropdown';
import { lang_en } from "../../../utils";
import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

function NavBar() {
  const { lang } = useContext(LangContext);

  return(
    <nav className='navBar'>
      <Link to='/'><img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=518,fit=crop,q=95/m5KpR2QMglIWRz11/logo-big-medium-gromarant-2023-m5KpR2JP9kuKQ8R1.png' alt='Logo gromarant' title='Gromarant'/></Link>
    { lang_en(lang)
      ? <ul>
          <li><Link to='/'>Projects</Link></li>
          <li><Link to='/about_me'>About me</Link></li>
        </ul> 
      : <ul>
          <li><Link to='/'>Proyectos</Link></li>
          <li><Link to='/about_me'>Sobre mi</Link></li>
        </ul>
    }
    <Dropdown/>
    </nav>
  )
}

export default NavBar;