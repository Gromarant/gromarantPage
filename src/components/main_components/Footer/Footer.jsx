import RRSS from '../../RRSS/RRSS';
 const rrss= [
  {
    "name": "LinkedIn",
    "link": "https://www.linkedin.com/in/mariangelica-rodr%C3%ADguez-p%C3%A9rez/",
    "title": "Go to LinkedIn"
  },
  {
    "name": "Instagram",
    "link": "https://www.instagram.com/gromarant/",
    "title": "Go to Instagram"
  },
  {
    "name": "Twitter",
    "link": "https://twitter.com/GromarantDev",
    "title": "Go to Twitter"
  },
  {
    "name": "Email",
    "link": "mailto:contacto@gromarant.com",
    "title": "Write and email"
  }
]

function Footer({location, OnTheWeb}) {
  return(
    <footer>
      <article>
        <h3>location.title</h3>
        <p>Location.place</p>
      </article>
      <article>
        <h3>OnTheWeb.title</h3>
        <RRSS rrss={rrss}/>
      </article>
        <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=91,h=63,fit=crop/m5KpR2QMglIWRz11/logo-short-medium-2023-AMqVRn6paDio9xDP.png' alt='Gromarant logo'/>
        <a href='https://www.linkedin.com/in/mariangelica-rodr%C3%ADguez-p%C3%A9rez/' target="_blank">© Mariangelica Rodríguez</a>
    </footer>
  )
}

export default Footer;