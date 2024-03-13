function RRSS({rrss, footer}) {
  return(
    <>
    { rrss?.map((red, index) => 
      <button className='rrss_btn' key={`${red}_${index}`}>
        <a  href={red.link} target='_blank' title={red.title}><red.icon className='icon'/></a>
      </button>)
    }
    { footer && <button className='rrss_btn'>
      <a  href={footer.link} target='_blank' title={footer.title}><footer.icon className='icon'/></a>
      </button>
    }
    </>
  )
}

export default RRSS;