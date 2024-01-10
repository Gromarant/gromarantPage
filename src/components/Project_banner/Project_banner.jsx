
function Project_banner() {

  return(
    <>
      <article className='project_banner'>Project_banner Component
        <section className='banner_img'>
          <button className='banner_btn'>Prototype</button>
          <button className='banner_btn'>Web</button>
          <button className='banner_btn'>Repository</button>
        </section>

        <section className='banner_desc'>
          <h1 className='banner_title'>Prototype</h1>
          <p className='banner_textContent'>Web</p>
          <h2>Funcionalities</h2>
          <ul className='banner_functionalities'>
            <li>function</li>
          </ul>
          <p>develop by: {}</p>
        </section>
      </article>
    </>
  )
}

export default Project_banner;