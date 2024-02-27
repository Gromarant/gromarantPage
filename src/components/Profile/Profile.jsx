function Profile({photo, photo_alt, photo_title, author, profession, greating, greating_alt, greating_title}) {
  console.log(profession);
  return(
    <article className='profile'>
      <img className='profile_photo' src={photo} alt={photo_alt} title={photo_title}/>
      <section className='profile_text'>
        <h1 className='profile_name'>{author}</h1>
        <article className='profile_professions'>
          <p>{profession["fullstack"]}</p>
          <span>|</span>
          <p>{profession["ux/ui"]}</p>
        </article>
      </section>
      <img className='profile_greeting' src={greating} alt={greating_alt} title={greating_title}/>
    </article>
  )
}

export default Profile;