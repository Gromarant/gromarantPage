import RRSS from '../RRSS/RRSS';
import Banner from '../Banner/Banner.jsx';
import Text_block from '../Text_block/Text_block.jsx';
const rrss = ['Linkedin', 'Instagram', 'Twitter'];

function Project_banner({projects}) {
  return(
    <>
      { projects?.map((project, index) => {
        const isNotLast = index < projects?.length-1;
        const isEven = index % 2 === 0;

          return (
          <section key={`${project.title}_${index}`}>
            <Banner className={`project_banner ${ isEven ? 'img-text' : 'text-img'}`}
              img={project.img}
              btns={project.btns}
              title={project.title}
            />
            <Text_block title={project.title} desc={project.desc} func={project.functionalities} authors={project.copyRight}/>
            <RRSS rrss={rrss}/>
            {(isNotLast) ? <span className='divisor'>---------------------------------------</span> : null}
          </section>
          )
      })} 
    </>
  )
}

export default Project_banner;