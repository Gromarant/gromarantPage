import { IoOpenOutline } from 'react-icons/io5';
import Banner from '../components/Banner.jsx';
import Section_title from "../components/Section_title.jsx";
import Icon from '../components/Icon.jsx';
import Profile from '../components/Profile.jsx';
import RRSS from '../components/RRSS.jsx';

function About_me({translate}){
  return(
    <section className='about_content'>
      <Profile 
        photo={translate.profile_photo}
        author={translate.author}
      /> 

      <section className='rrss'>
        <RRSS rrss={translate.rrss}/>
      </section>
      <span className='divisor'></span>

      <Section_title title={translate.text.about.sections.experience} isEven={true}/>
      <section className="about_projects">
        {
          translate.projects.map((project, index) => (
            <Banner
              key={project.title}
              img={project.image} 
              btns={project.links}
              index={index} 
              title={project.title}
            />
          ))
        }
      </section>

      <section className='rrss'>
        <RRSS rrss={translate.rrss}/>
      </section>
      <span className='divisor'></span>

      <Section_title title={translate.text.about.sections.languages} isEven={false}/>
      <section className='languages_tools'>
        { translate.langs_and_tools?.
                                    map(element => <Icon key={element.name} img={element.url} name={element.name}/>) }
      </section>

      <section className='rrss'>
        <RRSS rrss={translate.rrss}/>
      </section>
      <span className='divisor'></span>

      <Section_title title={translate.text.about.sections.academic} isEven={true}/>
        <section className='academic_titles'>
          {
            translate.academic_title?.map(({ title, date, academy, diploma_link, link_text }) => (
              <section key={title} className='academic_title'>
                <article className='academic_studies'>
                  <section className='study'>
                    <p className='study_title'>{title}</p>
                    <span className='academic_divisor'>|</span>
                    <p className='study_date'>{date}</p>
                  </section>
                  <p>{academy}</p>
                </article>
                <a className='btn openLink' href={diploma_link} target='_blank'>
                  <IoOpenOutline />{link_text}
                </a>
              </section>
            ))
          }
        </section>

    </section>
  )
}

export default About_me;