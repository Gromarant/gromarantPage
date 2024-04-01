function Profile({ photo, author }) {
  return(
    <article className='profile'>
      <img className='profile_photo' 
        src={photo.src.small}
        srcSet={
                `${photo.src.small} 120w,
                 ${photo.src.medium} 144w,
                 ${photo.src.large} 168w`
               }
        alt={photo.alt} 
        title={author.name}/>
      <section className='profile_text'>
        <h1 className='profile_name'>{author.name}</h1>
        <article className='profile_professions'>
          <p>{author.profession[0]}</p>
          <p>|</p>
          <p>{author.profession[1]}</p>
        </article>
      </section>
      <img className='profile_greeting' 
        src={author.greating.src.small}
        srcSet={
                `${author.greating.src.small},
                 ${author.greating.src.large}`
               }
               alt={author.greating.alt} 
               title={author.greating.title}/>
    </article>
  )
}

export default Profile;