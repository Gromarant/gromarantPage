function RRSS({rrss}) {
  return(
    <>
      <section className='rrss'>
      { rrss?.map((red, index) => <button key={`${red}_${index}`}>{red}</button>)}
      </section>
    </>
  )
}

export default RRSS;