import { FaGithub, FaPlayCircle, FaGlobe  } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { FaLinkedinIn, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const english = {
  projects: [
    {
      title: "FullPokeApp",
      links: [
        {
          name: "Repository",
          link: "https://github.com/Gromarant/fullPokeApp",
          icon: FaGithub
        },
        {
          name: "Web",
          link: "https://fullpokeapp.netlify.app/",
          icon: FaGlobe
        }
      ],
      desc: "Web application develop in React.js, SASS and Nextui.",
      subtitle: "functionalities",
      functionalities: [ "Memory game", "Search engine", "Pokémon creation"],
      developed: "Developed by",
      copyRight: ["Mariangelica Rodriguez"],
      image: "fullPokeApp"
    },
    {
      title: "Groma-Snake",
      links: [
        {
          name: "Prototype",
          link: "https://www.figma.com/file/6SYeCJMoiDG8LZPKQ3QRyZ/GromaSnake?type=design&node-id=0-1&mode=design&t=taUbdkRK095LZ2Cp-0",
          icon: MdDevices
        },
        {
          name: "Repository",
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
      desc: "Game develop in HTML, CSS and JavaScript.",
      subtitle: "functionalities",
      functionalities: [ "Snake game", "Reset game", "See points and score"],
      developed: "Developed by",
      copyRight: ["Mariangelica Rodriguez"],
      image: "groma-Snake"
    },
    {
      title: "FunFace",
      links: [
        {
          name: "Prototype",
          link: "https://www.figma.com/proto/fV01fBdBQbbT5fScqf7ro1/FunFace?page-id=15%3A772&node-id=15-933&viewport=758%2C109%2C0.05&scaling=scale-down&starting-point-node-id=15%3A1603",
          icon: MdDevices
        },
        {
          name: "Repository",
          link: "https://github.com/Gromarant/FunFace",
          icon: FaGithub
        },
        {
          name: "Web",
          link: "https://gromarant.github.io/FunFace/",
          icon: FaGlobe
        }
      ],
      desc: "Static web page, build with HTML, CSS and JavaScript vanilla.",
      subtitle: "functionalities",
      functionalities: [ "Display random emoji", "Emoji selector"],
      developed: "Developed by",
      copyRight: ["Mariangelica Rodriguez"],
      image: "funFace"
    },
    {
      title: "Robopage",
      links: [
        {
          name: "Repository",
          link: "https://github.com/Gromarant/Robopage",
          icon: FaGithub
        },
        {
          name: "Web",
          link: "https://robopage.netlify.app/",
          icon: FaGlobe
        }
      ],
      desc: "React web app",
      subtitle: "functionalities",
      functionalities: [ "Search engine with API fetch data"],
      developed: "Developed by",
      copyRight: ["Mariangelica Rodriguez"],
      image: "robopage"
    }
  ],

  rrss : [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mariangelica-rodr%C3%ADguez-p%C3%A9rez/",
      title: "Go to LinkedIn",
      icon: FaLinkedinIn
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/gromarant/",
      title: "Go to Instagram",
      icon: FaInstagram
    },
    {
      name: "Twitter",
      link: "https://twitter.com/GromarantDev",
      title: "Go to Twitter",
      icon: FaXTwitter
    }
  ],

  mailTo: {
    name: "Email",
    link: "mailto:contacto@gromarant.com",
    title: "Write and email",
    icon: MdEmail
  },

  profile_photo : {
    src: {
      small: "src/assets/images/profile_photo120.svg",
      medium: "src/assets/images/profile_photo144.svg",
      large: "src/assets/images/profile_photo168.svg"
    },
    alt: "Profile photo"
  },

  author: {
    name: "Mariangelica Rodriguez",
    profession: ["Full stack developer", "UI/UX product designer"],
    greating: {
      src: {
        small: "src/assets/images/profile_greeting_card_en_small.svg",
        large: "src/assets/images/profile_greeting_card_en_large.svg"
      },
      alt: "Hi!! I'm glad you are here and Learn something about me, welcome!!",
      title: "Welcome!!"
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
      title: "Full stack developer",
      date: "08/2023",
      academy: "The Bridge | Digital Talent Accelerator",
      diploma_link: "https://drive.google.com/file/d/17Tliv0fcZHBc5yvRQ8RAyOg80NLgF-eY/view?usp=sharing",
      link_text: "Open link"
    },
    {
      title: "UX/UI Product Design",
      date: "01/2021",
      academy: "The Bridge | Digital Talent Accelerator",
      diploma_link: "https://drive.google.com/file/d/1YrrCJn8vf9AQ1EBPqmh7G1oCbn7oYGjv/view",
      link_text: "Open link"
    },
    {
      title: "Web development",
      date: "07/2020",
      academy: "Centro de estudios Infer, SL (Sistema de Formación Profesional)",
      diploma_link: "https://drive.google.com/file/d/1TdUkbtT7b-GAhFzkx_daRuHY050DQZaU/view",
      link_text: "Open link"
    }
  ],

  text: {
    navigation: {
      links: {
        project: "Projects",
        about_me: "About me"
      }
    },  
    scroll: "Scroll to top",
    footer: {
      location: "Location",
      place: "Madrid, Spain",
      web: "On The Web",
      copyright: "Copyright",
      author: "© Mariangelica Rodríguez",
      contact: "contact"
    },
    about: {
      sections: {
        experience: "Experience",
        languages: "Languages / tools",
        academic: "Academic titles"
      }
    }
  }
}

export default english;