import Banner from '../../components/Banner/Banner';
import Section_title from "../../components/Section_title/Section_title";
import Icon from '../../components/Icon/Icon';
import Text_block from "../../components/Text_block/Text_block";
import Profile from '../../components/Profile/Profile';
import {scrollUp} from "../../utils";
import Go_up_btn from '../../components/Go_up_btn/Go_up_btn';

function About_me({translate}){
  scrollUp();

  return(
    <section className='content_page'>
      <Profile 
        photo={translate.profile_photo_src}
        photo_alt={translate.profile_photo_alt}
        photo_title={translate.author_name}
        author={translate.author_name}
        profession={translate.author_profession}
        greating={translate.author_greating_src}
        greating_alt={translate.author_greating_alt}
        greating_title={translate.author_greating_title}
      /> 

      <Section_title title={translate.section_experience_title} isEven={true}/>
        <Banner img={translate.fullPokeApp_title} btns={translate.fullPokeApp_links} title={translate.fullPokeApp_title}/>
        <Banner img={translate.gromaSnake_title} btns={translate.gromaSnake_links} title={translate.gromaSnake_title}/>
        <Banner img={translate.funFace_title} btns={translate.funFace_links} title={translate.funFace_title}/>
        <Banner img={translate.robopage_title} btns={translate.robopage_links} title={translate.robopage_title}/>

      <Section_title title={translate.section_Lang_title} isEven={false}/>
      { translate.langs_and_tools?.
                                  map(element => <Icon key={element.name} img={element.url} name={element.name}/>) }

      <Section_title title={translate.section_academic_title} isEven={true}/>
        { translate.academic_title?.
                                    map(subject => <Text_block key={subject.date} academic_title={subject.title} date={subject.date} academy={subject.academy} fileLink={subject.diploma_link}/>)}

      {<Go_up_btn onClick={scrollUp} title={translate.scroll_btn_title}/>}
    </section>
  )
}

export default About_me;