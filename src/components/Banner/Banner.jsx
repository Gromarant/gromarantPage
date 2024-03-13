import {isEven} from "../../utils";

function Banner({img, btns, index, title}) {

  return(
    <>
      <article className='project_banner'>
        { title ? <h1>{title}</h1> : null}
        
        <section className={`banner_img ${ isEven(index) ? 'btns_img' : 'img_btns'} ${img}`}>
          <section className='banner_btns'>
            { btns?.map(btn => <a key={`btn_${btn.name}`} href={btn.link} target='_blank'>
                                  <button className={`btn ${btn.name}`}><btn.icon />{btn.name}</button>
                               </a>)
            }
          </section>
        </section>
      </article>
    </>
  )
}

export default Banner;