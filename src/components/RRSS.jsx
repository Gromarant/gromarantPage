function IconButton({ title, link, icon }) {
  return (
      <a className='rrss_btn' href={link} target='_blank' title={title}>{icon}</a>
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