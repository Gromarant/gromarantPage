import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import { lang_en } from '../../utils';
import { IoOpenOutline } from "react-icons/io5";

function Text_block({title, desc, func=null, authors=null, academic_title=null, date=null, academy=null, fileLink=null}) {
  const { lang } = useContext(LangContext);
  const hasFunctionalities = func !== null;
  const hasAuthors = authors !== null;
  const hasAcademic_title = academic_title !== null;
  const hasDate = date !== null;
  const hasAcademy = academy !== null;
  const hasFileLink = fileLink !== null;

  return(
    <>
      { hasFunctionalities && hasAuthors ?  
        <article className='project_desc'>
          <section className='desc_title'>
            <h1>{title}</h1>
            <p>{desc}</p>
          </section>

          <section className='desc_func'>
            { lang_en(lang) ? <h2>Functionalities:</h2> : <h2>Functionalidades:</h2>}
            <ul>
              { func?.map((functionality, index) => <li key={`${title}_functionalitie_${index}`}>{functionality}</li>)}
            </ul>
          </section>
          <section className='desc_authors'>
            { lang_en(lang) ? <p className='dev'>Develop by: </p> : <p className='dev'>Desarrollado por: </p>}
            { authors?.map((author, index) => <p className='authors' key={`${title}_${author}_${index}`}>{author}</p>)}
          </section>
        </article>
        : null
      }
      { hasAcademic_title && hasDate && hasAcademy && hasFileLink ?
        <section className='academic_title'>
          <article className='academic_studies'>
            <section className='study'>
              <p className='study_title'>{academic_title}</p>
              <span className='academic_divisor'>|</span>
              <p className='study_date'>{date}</p>
            </section>
            <p>{academy}</p>
          </article>
          <a href={fileLink} target='_blank'><button className='btn openLink'><IoOpenOutline />{`${lang_en(lang) ? 'See link' : 'abrir link'}`}</button></a>
        </section>
        : null
      }
    </>
  )
}

export default Text_block;