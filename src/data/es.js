import { FaGithub, FaPlayCircle, FaGlobe  } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { FaLinkedinIn, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const spanish = {
  projects: [
    {
      title: 'FullPokeApp',
      links: [
        {
          name: "Repositorio",
          link: "https://github.com/Gromarant/fullPokeApp",
          icon: FaGithub
        },
        {
          name: "Web",
          link: "https://fullpokeapp.netlify.app/",
          icon: FaGlobe
        }
      ],
      desc: 'Aplicación web desarrollada en React.js, SASS y Nextui.',
      subtitle: "Funciones",
      functionalities: [ "Juego de memoria.", "Buscador.", "Sección para crear Pokémones."],
      developed: "Desarrollado por",
      copyRight: ["Mariangelica Rodriguez"],
      image: "fullPokeApp"
    },
    {
      title: 'Groma-Snake',
      links: [
        {
          name: "Prototipo",
          link: "https://www.figma.com/file/6SYeCJMoiDG8LZPKQ3QRyZ/GromaSnake?type=design&node-id=0-1&mode=design&t=taUbdkRK095LZ2Cp-0",
          icon: MdDevices
        },
        {
          name: "Repositorio",
          link: "https://github.com/Gromarant/GromaSnake",
          icon: FaGithub
        },
        {
          name: "Web",
          link: "https://gromarant.github.io/GromaSnake/",
          icon: FaGlobe
        },
        {
          name: "Video",
          link: "https://www.youtube.com/watch?v=hwLYrtQhLVI",
          icon: FaPlayCircle
        }
      ],
      desc: 'Juego desarrollado en  HTML, CSS y JavaScript vanilla.',
      subtitle: "Funciones",
      functionalities: [ "Juego de la culebra.", "Reiniciar el juego.", "Ver Puntaje y score."],
      developed: "Desarrollado por",
      copyRight: ["Mariangelica Rodriguez"],
      image: "groma-Snake"
    },
    {
      title: 'FunFace',
      links: [
        {
          name: "Prototipo",
          link: "https://www.figma.com/proto/fV01fBdBQbbT5fScqf7ro1/FunFace?page-id=15%3A772&node-id=15-933&viewport=758%2C109%2C0.05&scaling=scale-down&starting-point-node-id=15%3A1603",
          icon: MdDevices
        },
        {
          name: "Repositorio",
          link: "https://github.com/Gromarant/FunFace",
          icon: FaGithub
        },
        {
          name: "Web",
          link: "https://gromarant.github.io/FunFace/",
          icon: FaGlobe
        }
      ],
      desc: 'Página web estática, desarrollada en HTML, CSS y JavaScript vanilla.',
      subtitle: "Funciones",
      functionalities: [ "Mostrar un emoji aleatorio.", "Elegir emoji a mostrar desde selector."],
      developed: "Desarrollado por",
      copyRight: ["Mariangelica Rodriguez"],
      image: "funFace"
    },
    {
      title: 'Robopage',
      links: [
        {
          name: "Repositorio",
          link: "https://github.com/Gromarant/Robopage",
          icon: FaGithub
        },
        {
          name: "Web",
          link: "https://robopage.netlify.app/",
          icon: FaGlobe
        }
      ],
      desc: 'Aplicación web en React.js',
      subtitle: "Funciones",
      functionalities: [ "Buscador con solicitud de datos a una Api externa."],
      developed: "Desarrollado por",
      copyRight: ["Mariangelica Rodriguez"],
      image: "robopage"
    }
  ],

  rrss : [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mariangelica-rodr%C3%ADguez-p%C3%A9rez/",
      title: "Ir a LinkedIn",
      icon: FaLinkedinIn
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/gromarant/",
      title: "Ir a Instagram",
      icon: FaInstagram
    },
    {
      name: "Twitter",
      link: "https://twitter.com/GromarantDev",
      title: "Ir a Twitter",
      icon: FaXTwitter
    }
  ],

  mailTo: {
    name: "Email",
    link: "mailto:contacto@gromarant.com",
    title: "Escribir un correo",
    icon: MdEmail
  },

  profile_photo : {
    src: {
      small: "src/assets/images/profile_photo120.svg",
      medium: "src/assets/images/profile_photo144.svg",
      large: "src/assets/images/profile_photo168.svg"
    },
    alt: "Foto de perfil"
  },

  author: {
    name: "Mariangelica Rodriguez",
    profession: ["Desarrolladora Full stack", "Diseñadora UI/UX"],
    greating: {
      src: {
        small: "src/assets/images/profile_greeting_card_es_small.svg",
        large: "src/assets/images/profile_greeting_card_es_large.svg"
      },
      alt: "Hola!! Encantada de que estés por aquí y que conozcas un poco sobre mí",
      title: "bienvenid@!!"
    }
  },
 
  langs_and_tools: [
    {
      name: "Javascript",
      url: "src/assets/images/icons/icon_js_small.svg"
    },
    {
      name: "React.Js",
      url: "src/assets/images/icons/icon_react_small.svg"
    },
    {
      name: "Node.js",
      url: "src/assets/images/icons/icon_nodejs_small.svg"
    },
    {
      name: "HTML5",
      url: "src/assets/images/icons/icon_html5_small.svg"
    },
    {
      name: "SASS",
      url: "src/assets/images/icons/icon_sass_small.svg"
    },
    {
      name: "Express.js",
      url: "src/assets/images/icons/icon_expressjs_small.svg"
    },
    {
      name: "CSS3",
      url: "src/assets/images/icons/icon_css3_small.svg"
    },
    {
      name: "Nextui",
      url: "src/assets/images/icons/icon_nextui_small.svg"
    },
    {
      name: "Jest",
      url: "src/assets/images/icons/icon_jest_small.svg"
    },
    {
      name: "GIT/ GitHub",
      url: "src/assets/images/icons/icon_github_small.svg"
    },
    {
      name: "Figma",
      url: "src/assets/images/icons/icon_figma_small.svg"
    },
    {
      name: "Balsamic",
      url: "src/assets/images/icons/icon_balsamic_small.svg"
    },
    {
      name: "Firebase",
      url: "src/assets/images/icons/icon_firebase_small.svg"
    },
    {
      name: "MongoDb",
      url: "src/assets/images/icons/icon_mongodb_small.svg"
    },
    {
      name: "Docker",
      url: "src/assets/images/icons/icon_docker_small.svg"
    },
    {
      name: "SQL",
      url: "src/assets/images/icons/icon_sql_small.svg"
    }
  ],

  academic_title: [
    {
      title: "Desarrollador Full stack",
      date: "08/2023",
      academy: "The Bridge | Digital Talent Accelerator",
      diploma_link: "https://drive.google.com/file/d/17Tliv0fcZHBc5yvRQ8RAyOg80NLgF-eY/view?usp=sharing",
      link_text: "Abrir enlace"
    },
    {
      title: "Diseñador UX/UI",
      date: "01/2021",
      academy: "The Bridge | Digital Talent Accelerator",
      diploma_link: "https://drive.google.com/file/d/1YrrCJn8vf9AQ1EBPqmh7G1oCbn7oYGjv/view",
      link_text: "Abrir enlace"
    },
    {
      title: "Web development",
      date: "07/2020",
      academy: "Centro de estudios Infer, SL (Sistema de Formación Profesional)",
      diploma_link: "https://drive.google.com/file/d/1TdUkbtT7b-GAhFzkx_daRuHY050DQZaU/view",
      link_text: "Abrir enlace"
    }
  ],

  text: {
    navigation: {
      links: {
        project: "Proyectos",
        about_me: "Sobre mí",
      }
    }, 
    scroll: "subir",
    footer: {
      location: "Dirección",
      place: "Madrid, España",
      web: "En la web",
      copyright: "Derechos de autor",
      author: "© Mariangelica Rodríguez",
      contact: "contacto"
    },
    about: {
      sections: {
        experience: "Experiencia",
        languages: "Lenguajes / herramientas",
        academic: "Titulaciones"
      }
    }
  }
}

export default spanish;