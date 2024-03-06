import { FaLinkedinIn, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { isTheSameAs } from "../../utils";

function RRSS({rrss, footer, classProp="rrss"}) {
  return(
    <section className={classProp}>
    { rrss?.map((red, index) => 
      <button className='rrss_btn' key={`${red}_${index}`}>
        { 
          isTheSameAs( red.name, 'LinkedIn') ? <a  href={red.link} target='_blank' title={red.title}><FaLinkedinIn className='icon'/></a>
          : isTheSameAs( red.name, 'Instagram') ? <a  href={red.link} target='_blank' title={red.title}><FaInstagram className='icon'/></a>
          : isTheSameAs( red.name, 'Twitter') ? <a  href={red.link} target='_blank' title={red.title}><FaXTwitter className='icon'/></a> : null
        }
      </button>)
    }
    { footer && isTheSameAs( footer.name, 'Email') 
      ? <button className='rrss_btn'><a  href={footer.link} target='_blank' title={footer.title}><MdEmail className='icon'/></a></button> : null}
    </section>
  )
}

export default RRSS;