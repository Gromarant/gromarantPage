import RRSS from '../../components/RRSS/RRSS.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Text_block from '../../components/Text_block/Text_block.jsx';
import rrss from "../../data/rrss.json";
import projects from "../../data/projects.json";
import {isEven, isNotLast} from "../../utils.js";


function Home() {
  return (
    <>
      { projects?.map((project, index) => {
          return (
          <section key={`${project.title}_${index}`}>
            <Banner className={`project_banner ${ isEven ? 'img-text' : 'text-img'}`}
              img={project.home_img}
              btns={project.btns}
              title={project.title}
            />
            <Text_block title={project.title} desc={project.desc} func={project.functionalities} authors={project.copyRight}/>
            <RRSS rrss={rrss}/>
            {(isNotLast( projects, index)) ? <span className='divisor'>---------------------------------------</span> : null}
          </section>
          )
      })} 
    </>
  )
}

export default Home;