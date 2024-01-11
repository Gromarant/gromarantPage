function Icon({img, name}) {
  return(
    <article>
      <img className='lang-tool' src={img} alt={name} title={name}/>
      <p>{name}</p>
    </article>
  )
}

export default Icon;