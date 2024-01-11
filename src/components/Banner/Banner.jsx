function Banner({img, btns, title=''}) {
  const hasTitle = title !== '';

  return(
    <>
      <article className={`project_banner`}>
        { hasTitle ?<h1 key={`title_${title}`}>{title}</h1> : null}
        
        <section className={`banner_img ${img}`}>
          { btns?.map(link => <button className={`banner_btn ${link}`}  key={`btn_${link}`}>{link}</button>)}
        </section>
      </article>
    </>
  )
}

export default Banner;