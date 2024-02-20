import { isTheSameAs } from "../../utils";
import { FaGithub, FaPlayCircle, FaGlobe  } from "react-icons/fa";
import { MdDevices } from "react-icons/md";

function Banner({img, btns, title}) {

  return(
    <>
      <article className={`project_banner`}>
        { title ? <h1>{title}</h1> : null}
        
        <section className={`banner_img ${img}`}>
          <section className='banner_btns'>
            { btns?.map(btn => <a key={`btn_${btn.name}`} href={btn.link} target='_blank'><button className={`banner_btn ${btn.name}`}>
              { 
                isTheSameAs(btn.name , 'Repository') || isTheSameAs(btn.name , 'Repositorio') ? <FaGithub />
                : isTheSameAs(btn.name , 'Web') ? <FaGlobe />
                : isTheSameAs(btn.name , 'Prototype') || isTheSameAs(btn.name , 'Prototipo') ? <MdDevices />
                : isTheSameAs(btn.name , 'Video') ? <FaPlayCircle /> : null
              }
              {btn.name}</button></a>)}
          </section>
        </section>
      </article>
    </>
  )
}

export default Banner;