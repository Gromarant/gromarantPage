import Text_block from '../Text_block/Text_block';

function Profile({photo, name, titles, presentation}) {
  // console.log('photo: ', photo);
  return(
    <article>
      <img src={photo.src} alt={photo.alt} title={photo.title}/>
      <Text_block title={name} desc={titles}/>
      <img src={presentation.src} alt={presentation.alt} title={presentation.title}/>
    </article>
  )
}

export default Profile;