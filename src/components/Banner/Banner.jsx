function Banner({img, btns, title=''}) {
  const hasTitle = title !== false;

  return(
    <>
      <article className={`project_banner`}>
        { hasTitle ? <h1>{title}</h1> : null}
        
        <section className={`banner_img ${img}`}>
          { btns?.map(btn => <a key={`btn_${btn.name}`} href={btn.link} target='_blank'><button className={`banner_btn ${btn.name}`}>{btn.name}</button></a>)}
        </section>
      </article>
    </>
  )
}

export default Banner;