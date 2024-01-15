import { Link } from 'react-router-dom';
import { lang_en } from "../../../utils";

function NavBar() {
  return(
    <nav className='navBar'>
      <Link to='/'><img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=518,fit=crop,q=95/m5KpR2QMglIWRz11/logo-big-medium-gromarant-2023-m5KpR2JP9kuKQ8R1.png' alt='Logo gromarant' title='Gromarant'/></Link>
    { lang_en('en')
      ? <ul>
          <li><Link to='/'>Projects</Link></li>
          <li><Link to='/about_me'>About me</Link></li>
        </ul> 
      : <ul>
          <li><Link to='/'>Proyectos</Link></li>
          <li><Link to='/sobre_mi'>Sobre mi</Link></li>
        </ul>
    }
    </nav>
  )
}

export default NavBar;