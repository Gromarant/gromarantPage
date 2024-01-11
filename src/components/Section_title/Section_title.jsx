function Section_title({title, isEven}) {
  
  return(
    <article className={isEven ? 'img-text' : 'text-img'}>
      <span>{isEven ? 'Diamond-orange' : 'Diamond-green'}</span>
      <h1>{title}</h1>
    </article>
  )
}

export default Section_title;