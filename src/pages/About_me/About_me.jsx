import Banner from '../../components/Banner/Banner';
import Section_title from "../../components/Section_title/Section_title";
import Icon from '../../components/Icon/Icon';
import Text_block from "../../components/Text_block/Text_block";
import Profile from '../../components/Profile/Profile';
import RRSS from '../../components/RRSS/RRSS';

function About_me({translate}){

  return(
    <section className='about_content'>
      <Profile 
        photo_alt={translate.profile_photo_alt}
        photo_title={translate.author_name}
        author={translate.author_name}
        profession={translate.author_profession}
        greating={translate.author_greating_src}
        greating_alt={translate.author_greating_alt}
        greating_title={translate.author_greating_title}
      /> 

      <RRSS rrss={translate.rrss}/>
      <span className='divisor'></span>

      <Section_title title={translate.section_experience_title} isEven={true}/>
      <section className="about_projects">
        <Banner
          img={translate.fullPokeApp_title} 
          btns={translate.fullPokeApp_links}
          index={0} 
          title={translate.fullPokeApp_title}
        />
        <Banner 
          img={translate.gromaSnake_title} 
          btns={translate.gromaSnake_links}
          index={1} 
          title={translate.gromaSnake_title}
        />
        <Banner 
          img={translate.funFace_title} 
          btns={translate.funFace_links}
          index={2} 
          title={translate.funFace_title}
        />
        <Banner 
          img={translate.robopage_title} 
          btns={translate.robopage_links}
          index={3} 
          title={translate.robopage_title}
        />
      </section>

      <RRSS rrss={translate.rrss}/>
      <span className='divisor'></span>

      <Section_title title={translate.section_Lang_title} isEven={false}/>
      <section className='languages_tools'>
        { translate.langs_and_tools?.
                                    map(element => <Icon key={element.name} img={element.url} name={element.name}/>) }
      </section>

      <RRSS rrss={translate.rrss}/>
      <span className='divisor'></span>

      <Section_title title={translate.section_academic_title} isEven={true}/>
        <section className='academic_titles'>
          { translate.academic_title?.
                                      map(subject => <Text_block key={subject.date} academic_title={subject.title} date={subject.date} academy={subject.academy} fileLink={subject.diploma_link}/>)}
        </section>

    </section>
  )
}

export default About_me;