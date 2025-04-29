//Esta archivo contiene las traducciones de la UI y el idioma por defecto
// y la función para acceder a las traducciones
export const languageList = {
  es: "Español",
  en: "English"
};

export const defaultLang = 'es';
//Etiquetas en español
export const labels = {
  es: {
    nav: {
      experience: {
        title: 'Experiencia',
        label: 'experiencia'
      },
      projects: {
        title: 'Proyectos',
        label: 'proyectos'
      },
      aboutMe: {
        title: 'Sobre mí',
        label: 'sobre-mi'
      },
      contact: {
        title: 'Contacto',
        label: 'contacto'
      }
    },
    pageMeta: {
      title: "Portafolio de Alan Ortiz - Desarrollador Fullstack",
      description: "Conoce mi trabajo como desarrollador web y fullstack. Más de 6 años de experiencia en soluciones para eCommerce, fintech y productos digitales."
    },
    hero: {
      badge: {
        available: 'Disponible para trabajar'
      },
      iAm: 'Hola, soy',
      overview: {
        title: 'Desarrollador Fullstack',
        with: 'con',
        experience: 'más de 6 años de experiencia',
        in: 'en',
        technologies: 'React, Node.js y TypeScript.',
        context: 'Siempre busco crear aplicaciones web escalables y funcionales. Actualmente, resido en',
        location: 'Valencia (España 🇪🇸).',
        closing: 'Estoy siempre dispuesto a asumir nuevos retos y a aportar',
        skills: 'soluciones prácticas e innovadoras.'
      },
      socialPills: {
        contact: "Contáctame",
        linkedin: "LinkedIn",
        downloadCV: "Descargar CV"
      }
    },
    projects: {
      weatherApp: {
        title: "WeatherApp - Consulta el clima de tu ciudad",
        description:
          "Aplicación web simple y moderna que te permite consultar el clima actual y el pronóstico de los próximos días usando la API de OpenWeatherMap. Desarrollada con Next.js, Tailwind y Recharts."
      },
      kalanban: {
        title: "Kalanban - Tablero tipo Trello con drag & drop",
        description:
          "App estilo Trello para crear, mover y eliminar tareas en columnas. Usa React, Tailwind y localStorage, con soporte para drag and drop gracias a Atlaskit."
      },
      buttons: {
        code: "Código",
        preview: "Vista previa"
      }
    },
    aboutMe: {
      text: `Hola, me llamo Alan Ortiz. Soy desarrollador fullstack con más de 6 años de experiencia construyendo soluciones a la medida para empresas en sectores como <strong>eCommerce, fintech y comunicación digital</strong>.<br><br>
      Me especializo en el stack <strong>JavaScript (React, Node, TypeScript)</strong>, y también he trabajado con <strong>PHP, Java y sistemas basados en VTEX</strong>.<br><br>
      Durante mi carrera he colaborado en equipos de distintos tamaños, desde startups hasta corporativos, siempre adaptándome a contextos técnicos diversos y formas de trabajo dinámicas.<br><br>
      Me gusta trabajar en equipo, escribir código que sea fácil de entender y seguir aprendiendo cosas nuevas.<br><br>
      Hoy busco seguir creciendo como desarrollador, aportar mi experiencia y construir tecnología que sea <strong>útil y no solo bonita</strong>.`
    },
    experience: {
      visitSite: "Visitar página"
    },
    footer: {
      rights: "Todos los derechos reservados.",
      aboutMe: "Sobre mí",
      contact: "Contacto"
    },
    language: {
      title: "Idiomas",
      choose: "Elige el idioma"
    },
    settings: {
      open: "Abrir configuración",
      language: "Idioma",
      theme: "Tema",
      back: "Volver"
    }        
  },
//Etiquetas en inglés
  en: {
    nav: {
      experience: {
        title: 'Experience',
        label: 'experience'
      },
      projects: {
        title: 'Projects',
        label: 'projects'
      },
      aboutMe: {
        title: 'About me',
        label: 'about-me'
      },
      contact: {
        title: 'Contact',
        label: 'contact'
      }
    },
    pageMeta: {
      title: "Alan Ortiz's Portfolio - Fullstack Developer",
      description: "Discover my work as a fullstack web developer. Over 6 years of experience building solutions for eCommerce, fintech, and digital products."
    },
    hero: {
      badge: {
        available: 'Available for work'
      },
      iAm: 'Hey, I am',
      overview: {
        title: 'Fullstack Developer',
        with: 'with',
        experience: 'more than 6 years of experience',
        in: 'in',
        technologies: 'React, Node.js and TypeScript.',
        context: 'I always strive to build scalable and functional web applications. I currently live in',
        location: 'Valencia (Spain 🇪🇸).',
        closing: 'I am always open to new challenges and to contributing',
        skills: 'practical and innovative solutions.'
      },
      socialPills: {
        contact: "Contact me",
        linkedin: "LinkedIn",
        downloadCV: "Download CV"
      }
    },
    projects: {
      weatherApp: {
        title: "WeatherApp - Check the weather in your city",
        description:
          "A clean and modern web app to check current weather conditions and multi-day forecasts using the OpenWeatherMap API. Built with Next.js, Tailwind, and Recharts."
      },
      kalanban: {
        title: "Kalanban - Trello-style board with drag & drop",
        description:
          "A lightweight Kanban-style app that lets you create, move, and delete tasks across columns. Built with React, Tailwind, and localStorage, featuring smooth drag-and-drop with Atlaskit."
      },
      buttons: {
        code: "Code",
        preview: "Live preview"
      }
    },
    aboutMe: {
      text: `Hi, I'm Alan Ortiz. I'm a fullstack developer with over 6 years of experience building custom solutions for companies in <strong>eCommerce, fintech, and digital communication</strong>.<br><br>
      I specialize in the <strong>JavaScript stack (React, Node, TypeScript)</strong>, and I've also worked with <strong>PHP, Java, and VTEX-based systems</strong>.<br><br>
      Throughout my career, I've collaborated with teams of all sizes—from startups to large corporations—adapting to different technical contexts and fast-paced work environments.<br><br>
      I enjoy teamwork, writing clean and readable code, and continuously learning new things.<br><br>
      Right now, I'm looking to grow further as a developer, share my experience, and build tech that is <strong>useful, not just beautiful</strong>.`
    },
    experience: {
      visitSite: "Visit site"
    },
    footer: {
      rights: "All rights reserved.",
      aboutMe: "About me",
      contact: "Contact"
    },
    language: {
      title: "Languages",
      choose: "Choose language"
    },
    settings: {
      open: "Open settings",
      language: "Language",
      theme: "Theme", 
      back: "Back"
    }        
  }
};