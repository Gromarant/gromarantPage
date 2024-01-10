
function Project_banner({projects}/*{img, btns, title, desc, functionalities, copyRight}*/ ) {

  return(
    <>
      { projects?.map((project, index) =>
        <article className={`project_banner ${index % 2 === 0 ? 'img-text' : 'text-img'}`} key={project.title}>
          <section className={`banner_img ${project.img}`}>
            { project.btns?.map(link => <button className={`banner_btn ${link}`} key={`${project.title}_${link}`}>{link}</button>)}
          </section>

          <section className='banner_desc'>
            <h1 className='banner_title'>{project.title}</h1>
            <p className='banner_textContent'>{project.desc}</p>
            <h2>Funcionalities</h2>
            { project.functionalities?.map( func => {
              <ul className='banner_functionalities' key={`${project.title}_${func}`}>
                <li>{func}</li>
              </ul>
            })}
            <p>develop by: {project.copyRight}</p>
          </section>
        </article>
      )}
    </>
  )
}

export default Project_banner;