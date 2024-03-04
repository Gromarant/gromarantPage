function Icon({img, name}) {
  return(
    <article className='tools'>
      <section className='tool_bg'>
        <img className='lang-tool' src={img} alt={name} title={name}/>
      </section>
      <p>{name}</p>
    </article>
  )
}

export default Icon;