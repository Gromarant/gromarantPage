import { FaLinkedinIn, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { isTheSameAs } from "../../utils";

function RRSS({rrss}) {
  return(
    <section className='rrss'>
    { rrss?.map((red, index) => 
      <a key={`${red}_${index}`} href={red.link} target='_blank' title={red.title}>
        { 
          isTheSameAs( red.name, 'LinkedIn') ? <button><FaLinkedinIn /></button>
          : isTheSameAs( red.name, 'Instagram') ? <button><FaInstagram /></button>
          : isTheSameAs( red.name, 'Email') ? <button><MdEmail /></button>
          : <button><FaXTwitter /></button>
        }
      </a>
      )}
    </section>
  )
}

export default RRSS;