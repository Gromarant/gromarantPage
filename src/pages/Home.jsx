import { isEven } from "../utils.js"; 
import RRSS from '../components/RRSS.jsx';
import Banner from '../components/Banner.jsx';


function Home({translate}) {
  return (
    <section className='projects'>
      {
        translate.projects.map((project, projectIndex) => {
          const isNotLastProject = projectIndex < translate.projects.length -1;

          return (
            <section className='project_container'  key={`project-${project.title}`}>
              <article className={`project ${isEven(0) ? 'banner_desc' : 'desc_banner'}`}>
                <Banner
                  img={project.image}
                  btns={project.links}
                  index={projectIndex} />
                <article className='project_desc'>
                  <section className='desc_title'>
                    <h1>{project.title}</h1>
                    <p>{project.desc}</p>
                  </section>

                  <section className='desc_func'>
                    <h2>{project.subtitle}:</h2>
                    <ul>
                      { project.functionalities?.map((functionality, index) => <li key={`${project.title}_functionalitie_${index}`}>{functionality}</li>)}
                    </ul>
                  </section>
                  <section className='desc_authors'>
                    <p className='dev'>{project.developed}</p>
                    { project.copyRight?.map((author, index) => <p className='authors' key={`${project.title}_${author}_${index}`}>{author}</p>)}
                  </section>
                </article>
              </article>
              {
                isNotLastProject && <section className='rrss'>
                  <RRSS rrss={translate.rrss} />
                </section>
              }
              {
                isNotLastProject && <span className='divisor'></span>
              }
            </section>
          )
        })
      }
    </section>
  )
}

export default Home;