function Banner({img, btns, key, title=''}) {
  const hasTitle = title !== '';

  return(
    <>
      <article className={`project_banner`}>
        { hasTitle ?<h1>{title}</h1> : null}
        <section className={`banner_img ${img}`}>
          { btns?.map(link => <button className={`banner_btn ${link}`} key={key}>{link}</button>)}
        </section>
      </article>
    </>
  )
}

export default Banner;