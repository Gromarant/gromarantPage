function RRSS({rrss}) {
  return(
    <>
      <section className='rrss'>
      { rrss?.map((red, index) => <a key={`${red}_${index}`} href={red.link} target='_blank'><button>{red.name}</button></a>)}
      </section>
    </>
  )
}

export default RRSS;