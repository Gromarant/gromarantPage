function Section_title({title, isEven}) {
  
  return(
    <section className='section_title'>
      <h1 className={`section_name ${isEven ? 'title-diamond' : 'diamond-title'}`}>{title}</h1>
      <div className={`diamond ${isEven ? 'orange' : 'aqua'}`}>
      </div>
    </section>
  )
}

export default Section_title;