import RRSS from '../../RRSS/RRSS';
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

function Footer({translate}) {

  const contactHandler = () => {
    const contactIcons = document.querySelector('.contact_icons');
    contactIcons.classList.toggle('hidden');
  }

  return(
    <footer>
      <section className='footer_up_items'>
        <article className='footer_section location'>
          <h2 className='show_medium'>{translate.location_title}</h2>
          <FaLocationDot className='icon show_small'/>
          <p>{translate.Location_place}</p>
        </article>


        <article className='footer_section contact' onClick={contactHandler}>
          <h2 className='show_medium'>{translate.OnTheWeb_title}</h2>
          <RRSS  className='show_medium' rrss={translate.rrss} footer={translate.mailTo}/>
          <MdAlternateEmail  className='icon show_small'/>
          <p className='show_small'>Contact</p>
        </article>
      </section>
      
      <article className='footer_section copyrights'>
        <h2 className='show_expanded'>{translate.copyright_title}</h2>
        <section className='copyright'>
          <img src='../../../../images/logo_short.png' alt='logo'/>
          <a href='https://www.linkedin.com/in/mariangelica-rodr%C3%ADguez-p%C3%A9rez/' target="_blank">© Mariangelica Rodríguez</a>
        </section>
      </article>
    </footer>
  )
}

export default Footer;