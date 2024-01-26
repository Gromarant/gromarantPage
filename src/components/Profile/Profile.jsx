function Profile({photo, photo_alt, photo_title, author, profession, greating, greating_alt, greating_title}) {
  return(
    <article className='profile'>
      <img src={photo} alt={photo_alt} title={photo_title}/>
      <h1>{author}</h1>
      <p>{profession}</p>
      <img src={greating} alt={greating_alt} title={greating_title}/>
    </article>
  )
}

export default Profile;