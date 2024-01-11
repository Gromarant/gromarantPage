import Banner from '../../components/Banner/Banner';
import Section_title from "../../components/Section_title/Section_title";
import Icon from '../../components/Icon/Icon';
import Text_block from "../../components/Text_block/Text_block";
import Profile from '../../components/Profile/Profile';
import projects from "../../data/projects.json";
import langs_and_tools from "../../data/langs_and_tools.json";
import academic from "../../data/academic.json";
import profileData from "../../data/professional_profile.json";
import {lang_en} from "../../utils";


function About_me(){
  const lang = 'en';

  return(
    <section className='content_page'>
      { lang_en(lang) && profileData 
        ? <Profile 
            photo={profileData.english.photo}
            name={profileData.english.name}
            titles={profileData.english.profession}
            presentation={profileData.english.greating}
          /> 
        :<Profile 
        photo={profileData.spanish.photo}
        name={profileData.spanish.name}
        titles={profileData.spanish.profession}
        presentation={profileData.spanish.greating}
      /> }
      <Section_title title='Experience' isEven={true}/>
      { projects?.map(project => <Banner img={project.about_img} btns={project.btns} title={project.title} key={`${project.title}_about`}/>)} 
      <Section_title title='Languages and tools' isEven={false}/>
      { langs_and_tools?.map(element => <Icon key={element.name} img={element.url} name={element.name}/>) }
      <Section_title title='Academic titles' isEven={true}/>
      { lang_en(lang) 
      ? academic?.english.map(subject => <Text_block key={subject.date} academic_title={subject.title} date={subject.date} academy={subject.academy} fileLink={subject.diploma_link}/>)
      : academic?.spanish.map(subject => <Text_block key={subject.date} academic_title={subject.title} date={subject.date} academy={subject.academy} fileLink={subject.diploma_link}/>)}
    </section>
  )
}

export default About_me;