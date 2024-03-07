function Profile({
  photo_small, 
  photo_medium, 
  photo_large, 
  photo_alt, 
  photo_title, 
  author, 
  profession, 
  greating_small, 
  greating_large, 
  greating_alt, 
  greating_title
}) {
  return(
    <article className='profile'>
      <img className='profile_photo' 
        src={photo_small}
        srcSet={
                `${photo_small} 120w,
                 ${photo_medium} 144w,
                 ${photo_large} 168w`
               }
        alt={photo_alt} 
        title={photo_title}/>
      <section className='profile_text'>
        <h1 className='profile_name'>{author}</h1>
        <article className='profile_professions'>
          <p>{profession["fullstack"]}</p>
          <span>|</span>
          <p>{profession["ux/ui"]}</p>
        </article>
      </section>
      <img className='profile_greeting' 
        src={greating_small}
        srcSet={
                `${greating_small},
                 ${greating_large}`
               }
               alt={greating_alt} 
               title={greating_title}/>
    </article>
  )
}

export default Profile;