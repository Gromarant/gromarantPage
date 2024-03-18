import { useContext } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import { ContactContext } from '../context/ContactContext';
import RRSS from '../components/RRSS.jsx'; 


function Footer({translate}) {
  const {openContact, setOpenContact} = useContext(ContactContext);

  return(
    <footer>
      <section className='footer_up_items'>
        <article className='footer_section location'>
          <h2 className='show_medium'>{translate.text.footer.location}</h2>
          <FaLocationDot className='icon show_small'/>
          <p>{translate.text.footer.place}</p>
        </article>


        <article className='footer_section contact' onClick={() => setOpenContact(!openContact)}>
          <h2 className='show_medium'>{translate.text.footer.web}</h2>
          <section className='rrss show_medium'>
            <RRSS rrss={[...translate.rrss, translate.mailTo]}/>
          </section>
          <BsFillSendFill  className='icon show_small'/>
          <p className='show_small'>{translate.text.footer.contact}</p>
        </article>
      </section>
      
      <article className='footer_section copyrights'>
        <h2 className='show_expanded'>{translate.text.footer.copyright}</h2>
        <section className='copyright'>
          <img src='src/assets/images/logo.svg' alt='logo'/>
          <a href='https://www.linkedin.com/in/mariangelica-rodr%C3%ADguez-p%C3%A9rez/' target="_blank">{translate.text.footer.author}</a>
        </section>
      </article>
    </footer>
  )
}

export default Footer;