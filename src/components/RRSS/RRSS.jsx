function IconButton({ title, link, icon }) {
  return (
    <button className='rrss_btn'>
      <a  href={link} target='_blank' title={title}>{icon}</a>
    </button>
  )
}

function RRSS({ rrss }) {
  return(
    <>
      {
        rrss?.map((red, index) => <IconButton key={`${red}_${index}`} title={red.title} link={red.link} icon={<red.icon className='icon'/>} />)
      }
    </>
  )
}

export default RRSS;