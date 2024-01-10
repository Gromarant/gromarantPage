import RRSS from '../RRSS/RRSS';

const rrss = ['Linkedin', 'Instagram', 'Twitter'];


function Project_banner({projects}) {

  return(
    <>
      { projects?.map((project, index) => {
        const isNotLast = index < projects?.length-1;
        
          return (
          <section key={`${project.title}_${index}`}>
            <article className={`project_banner ${index % 2 === 0 ? 'img-text' : 'text-img'}`}>
              <section className={`banner_img ${project.img}`}>
                { project.btns?.map(link => <button className={`banner_btn ${link}`} key={`${project.title}_${link}`}>{link}</button>)}
              </section>

              <section className='banner_desc'>
                <h1 className='banner_title'>{project.title}</h1>
                <p className='banner_textContent'>{project.desc}</p>
                <h2>Funcionalities</h2>
                <ul className='banner_functionalities'>
                  { project.functionalities?.map( func => {
                    <li key={`${project.title}_${func}`}>{func}</li>
                  })}
                </ul>
                <p>develop by: {project.copyRight}</p>
              </section>
            </article>
            <RRSS rrss={rrss}/>

            {(isNotLast) ? <span className='divisor'>---------------------------------------</span> : null}
          </section>
          )
      })} 
    </>
  )
}

export default Project_banner;