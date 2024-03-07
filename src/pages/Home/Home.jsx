import RRSS from '../../components/RRSS/RRSS.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Text_block from '../../components/Text_block/Text_block.jsx';
import { isEven, setInitialState } from "../../utils.js";


function Home({translate}) {
  return (
    <>
      <section className='projects' onClick={setInitialState}>
        <article className={`project ${ isEven(0) ? 'banner_desc' : 'desc_banner'}`}>
          <Banner
            img={translate.fullPokeApp_title}
            btns={translate.fullPokeApp_links}
            index={0}
          />
          <Text_block title={translate.fullPokeApp_title} desc={translate.fullPokeApp_desc} func={translate.fullPokeApp_functionalities} authors={translate.fullPokeApp_copyRight}/>
        </article>
        <RRSS rrss={translate.rrss}/>
        <span className='divisor'></span>

        <article className={`project ${ isEven(1) ? 'banner_desc' : 'desc_banner'}`}>
          <Banner
            img={translate.gromaSnake_title}
            btns={translate.gromaSnake_links}
            index={1}
          />
          <Text_block title={translate.gromaSnake_title} desc={translate.gromaSnake_desc} func={translate.gromaSnake_functionalities} authors={translate.gromaSnake_copyRight}/>
        </article>      
        <RRSS rrss={translate.rrss}/>
        <span className='divisor'></span>

        <article className={`project ${ isEven(2) ? 'banner_desc' : 'desc_banner'}`}>
          <Banner
            img={translate.funFace_title}
            btns={translate.funFace_links}
            index={2}
          />
          <Text_block title={translate.funFace_title} desc={translate.funFace_desc} func={translate.funFace_functionalities} authors={translate.funFace_copyRight}/>
        </article>    
        <RRSS rrss={translate.rrss}/>
        <span className='divisor'></span>

        <article className={`project ${ isEven(3) ? 'banner_desc' : 'desc_banner'}`}>
          <Banner
            img={translate.robopage_title}
            btns={translate.robopage_links}
            index={3}
          />
          <Text_block title={translate.robopage_title} desc={translate.robopage_desc} func={translate.robopage_functionalities} authors={translate.robopage_copyRight}/>
        </article>
      </section>
    </>
  )
}

export default Home;