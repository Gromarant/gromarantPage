import RRSS from '../../RRSS/RRSS';

function Footer({translate}) {
  return(
    <footer>
      <article>
        <h3>{translate.location_title}</h3>
        <p>{translate.Location_place}</p>
      </article>
      <article>
        <h3>{translate.OnTheWeb_title}</h3>
        <RRSS rrss={translate.rrss} footer={true}/>
      </article>
        <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=91,h=63,fit=crop/m5KpR2QMglIWRz11/logo-short-medium-2023-AMqVRn6paDio9xDP.png' alt='Gromarant logo'/>
        <a href='https://www.linkedin.com/in/mariangelica-rodr%C3%ADguez-p%C3%A9rez/' target="_blank">© Mariangelica Rodríguez</a>
    </footer>
  )
}

export default Footer;