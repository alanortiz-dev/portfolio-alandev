export type Locale = 'es' | 'en';

export interface HeroMetric {
  label: string;
  value: string;
}

export interface FeaturedProject {
  name: string;
  summary: string;
  problem: string;
  role: string;
  architecture: string;
  decisions: string[];
  impact: string;
  stack: string[];
  links: {
    preview?: string;
    code?: string;
  };
  accent?: 'emerald' | 'slate' | 'blue';
}

export interface DeploymentItem {
  name: string;
  url: string;
  summary: string;
  focus: string[];
}

export interface PrincipleItem {
  title: string;
  body: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
  stack?: string[];
  technicalDetails?: string[];
  defaultOpen?: boolean;
  link?: string;
}

export interface HomeContent {
  meta: {
    title: string;
    description: string;
  };
  proofStrip: {
    label: string;
    items: string[];
  };
  nav: {
    featured: string;
    experience: string;
    principles: string;
    timeline: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    location: string;
    status: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: HeroMetric[];
  };
  sectionTitles: {
    featured: string;
    featuredIntro: string;
    production: string;
    productionIntro: string;
    deployments: string;
    deploymentsIntro: string;
    principles: string;
    principlesIntro: string;
    timeline: string;
    timelineIntro: string;
    about: string;
  };
  featuredProjects: FeaturedProject[];
  deployments: DeploymentItem[];
  principles: PrincipleItem[];
  experiences: ExperienceItem[];
  about: string[];
  labels: {
    problem: string;
    role: string;
    architecture: string;
    decisions: string;
    impact: string;
    stack: string;
    code: string;
    preview: string;
    visitSite: string;
    basedIn: string;
  };
}

export const homeContent: Record<Locale, HomeContent> = {
  es: {
    meta: {
      title: 'Alan Ortiz · Frontend Developer especializado en React, Vue.js y TypeScript',
      description:
        'Portfolio de Alan Ortiz, Frontend Developer con experiencia en React, Vue.js, TypeScript, e-commerce, fintech, integraciones, performance, accesibilidad y testing.',
    },
    proofStrip: {
      label: 'Enfoque técnico',
      items: ['Frontend systems con React, Vue.js y TypeScript', 'UX, performance y accesibilidad en interfaces de producto', 'Automatización e integraciones para flujos operativos'],
    },
    nav: {
      featured: 'Proyectos',
      experience: 'Lanzamientos',
      principles: 'Habilidades',
      timeline: 'Experiencia',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'Frontend Engineer · React · Vue.js · TypeScript',
      title: 'Construyo interfaces frontend claras, rápidas y fáciles de mantener.',
      description:
        'Trabajo con React, Vue.js y TypeScript en e-commerce, fintech y herramientas internas, conectando interfaces con APIs, rendimiento, accesibilidad y pruebas.',
      location: 'Ciudad de México, México',
      status: 'Disponible para roles frontend remotos e internacionales',
      primaryCta: 'Ver proyectos',
      secondaryCta: 'Descargar CV',
      metrics: [
        { label: 'Interfaces claras', value: 'Componentes reutilizables y patrones accesibles para trabajo frontend de producto.' },
        { label: 'Código mantenible', value: 'React, Vue.js y TypeScript con estructura ordenada, integraciones limpias y una base fácil de mantener.' },
        { label: 'APIs, rendimiento y pruebas', value: 'Integraciones con APIs y pruebas que cuidan rendimiento, accesibilidad y flujos de usuario.' },
      ],
    },
    sectionTitles: {
      featured: 'Proyectos seleccionados',
      featuredIntro:
        'Productos y sistemas UI que muestran cómo pienso arquitectura frontend, experiencia de uso e implementación lista para iterar.',
      production: 'Sitios en producción',
      productionIntro:
        'Sitios publicados y trabajo con clientes donde participé desde frontend, estructura visual e integraciones.',
      deployments: 'Sitios en producción',
      deploymentsIntro:
        'Lanzamientos y trabajo con clientes donde participé desde implementación frontend, jerarquía visual y entrega usable.',
      principles: 'Principios',
      principlesIntro:
        'Criterios que uso para diseñar interfaces mantenibles, decisiones de UX y arquitectura que aguanta cambios reales.',
      timeline: 'Experiencia profesional',
      timelineIntro:
        'Experiencia construyendo interfaces, integraciones y sistemas frontend para productos y operaciones reales.',
      about: 'Sobre mí',
    },
    featuredProjects: [
      {
        name: 'FitLog',
        summary:
          'App mobile-first de nutrición enfocada en registro diario de alimentos, estado local y una experiencia simple para uso frecuente.',
        problem:
          'Registro diario de alimentos con búsqueda, escaneo y entrada manual en una interfaz pensada para uso frecuente.',
        role: 'Demuestra trabajo frontend con React, TypeScript, estado local y una UI mobile-first para uso real.',
        architecture:
          'React + TypeScript con componentes de UI, estado local y flujos separados para cada tipo de entrada.',
        decisions: [
          'React + TypeScript para UI de producto',
          'Interfaz mobile-first y responsive',
          'Estado local para registro diario',
          'Flujos para búsqueda, escaneo y entrada manual',
        ],
        impact:
          'Muestra una app de frontend centrada en estado local, responsive UI y flujos de uso frecuente.',
        stack: ['React', 'TypeScript', 'Vite', 'Local state'],
        links: {
          preview: '#',
          code: '#',
        },
        accent: 'emerald',
      },
      {
        name: 'Dashboard Assistant',
        summary:
          'Asistente embebido para dashboard construido con Vue 3 y TypeScript, con mensajes, widgets reutilizables y separación entre UI y lógica.',
        problem:
          'Integrar un asistente dentro de un dashboard sin romper la lectura ni la estructura de la interfaz.',
        role: 'Demuestra trabajo con Vue 3, TypeScript, UI conversacional y composición de componentes reutilizables.',
        architecture:
          'Vue 3 + TypeScript con mensajes tipados, widgets reutilizables y separación entre UI y lógica.',
        decisions: [
          'Vue 3 Composition API',
          'Modelos de mensajes tipados',
          'Composición de componentes reutilizables',
          'Patrones de UI conversacional',
        ],
        impact:
          'Muestra experiencia en interfaces con mensajes, widgets reutilizables y separación clara entre UI y lógica.',
        stack: ['Vue 3', 'TypeScript', 'Vite', 'Composition API'],
        links: {
          preview: 'https://dashboard-assistant-chi.vercel.app/',
          code: 'https://github.com/alanortiz-dev/dashboard-assistant',
        },
        accent: 'slate',
      },
      {
        name: 'Kalanban',
        summary:
          'Interfaz tipo kanban construida con React y TypeScript, enfocada en estados de UI, acciones rápidas y gestión simple de tareas.',
        problem:
          'Resolver una UI con varios estados y acciones rápidas para gestión cotidiana de tareas.',
        role: 'Demuestra manejo de estado local, componentes en React y decisiones prácticas de UX.',
        architecture:
          'React + TypeScript con componentes, modales y estados de interacción para tareas rápidas.',
        decisions: [
          'Estructura de componentes en React',
          'Estado local',
          'Modales y estados de interacción',
          'Decisiones prácticas de UX',
        ],
        impact:
          'Muestra trabajo frontend centrado en interacción, estado local y una UI simple de tareas.',
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Local state'],
        links: {
          preview: 'https://kalanban.vercel.app/',
          code: 'https://github.com/alanortiz-dev/kalanban',
        },
        accent: 'blue',
      },
    ],
    deployments: [
      {
        name: 'Tatuajes en Valencia',
        url: 'https://tatuajesenvalencia.com/',
        summary: 'Sitio orientado a conversión y visibilidad local para servicio real.',
        focus: ['Ejecución responsive', 'claridad comercial', 'SEO base', 'entrega usable'],
      },
      {
        name: 'Hivora Clothes',
        url: 'https://hivoraclothes.com/',
        summary: 'Implementación visual y de producto para una marca con foco en presentación y navegación limpia.',
        focus: ['Presentación de marca', 'UI responsive', 'flujo claro', 'entrega al cliente'],
      },
      {
        name: 'Spark Creative House',
        url: 'https://www.sparkcreativehouse.com/',
        summary: 'Presencia web para estudio creativo con foco en comunicación clara y estructura profesional.',
        focus: ['Jerarquía de información', 'implementación responsive', 'posicionamiento de negocio', 'calidad de lanzamiento'],
      },
      {
        name: 'Pia Maria Coaching',
        url: 'https://www.pia-maria-coaching.com/',
        summary: 'Sitio orientado a captación y claridad de oferta para servicio profesional.',
        focus: ['Captación de leads', 'UX que genera confianza', 'entrega responsive limpia', 'claridad de contenido'],
      },
    ],
    principles: [
      {
        title: 'Interfaces que sobreviven releases',
        body: 'Prefiero sistemas de UI con piezas reutilizables, contratos claros e integraciones entendibles. Lo importante no es solo entregar rápido, sino poder iterar sin romper flujos críticos.',
      },
      {
        title: 'UX como ingeniería, no maquillaje',
        body: 'Performance, accesibilidad, jerarquía visual y comportamiento consistente forman parte del diseño del sistema. Una buena UX también reduce soporte, errores y fricción operativa.',
      },
      {
        title: 'Frontend conectado al negocio',
        body: 'Trabajo pensando en formularios, automatizaciones, CMS, handoffs operativos, testing y estabilidad. El frontend no vive aislado; sostiene procesos reales.',
      },
      {
        title: 'Escalar con criterio, no con complejidad gratuita',
        body: 'Busco separar UI, lógica, tipos y datos cuando aporta mantenibilidad real. La meta no es sobrearquitectura, sino una base que permita crecer sin rehacer todo.',
      },
    ],
    experiences: [
      {
        period: '06/2025 – Actualidad',
        role: 'Independent Product / Frontend Engineer',
        company: 'Profesional independiente',
        location: 'España · Austria',
        link: 'https://alanortizconsulting.com/',
        defaultOpen: true,
        stack: ['JavaScript', 'TypeScript', 'Vue.js', 'Formularios', 'CMS', 'Make', 'n8n'],
        summary:
          'Trabajo independiente enfocado en mejoras frontend, formularios, sitios para clientes e integraciones con automatización.',
        highlights: [
          'Implementé mejoras en interfaces de producción, formularios y flujos de usuario con JavaScript y TypeScript.',
          'Construí una interfaz conversacional modular en Vue.js y TypeScript con separación clara entre UI, lógica y tipos.',
          'Conecté formularios, CMS y automatizaciones para mejorar captura de leads y traspasos.',
        ],
        technicalDetails: [
          'Trabajo con responsive UI, comportamiento de formularios e integraciones con CMS.',
          'Uso Make y n8n para reducir pasos manuales en procesos de cara al cliente.',
        ],
      },
      {
        period: '02/2023 – 06/2025',
        role: 'Fullstack Developer',
        company: 'IT Globers',
        location: 'Valencia, España',
        defaultOpen: true,
        stack: ['React', 'TypeScript', 'VTEX IO', 'REST APIs', 'GraphQL', 'Playwright'],
        summary:
          'Desarrollo de storefronts en VTEX IO para e-commerce de alto tráfico con React, TypeScript e integraciones con APIs.',
        highlights: [
          'Desarrollé funcionalidades customer-facing en storefronts de producción con React y TypeScript.',
          'Integré servicios REST y GraphQL en login, checkout y gestión de pedidos.',
          'Mantuve cobertura E2E con Playwright para recorridos de compra y gestión de pedidos.',
        ],
        technicalDetails: [
          'Trabajé en responsive UI, accesibilidad y estabilidad de releases dentro de VTEX IO.',
          'Corregí issues de producción y ajustes de interfaz para mejorar consistencia y rendimiento.',
        ],
        link: 'https://www.itglobers.com/',
      },
      {
        period: '08/2022 – 02/2023',
        role: 'Frontend Developer',
        company: 'Grupo Salinas',
        location: 'Ciudad de México, México',
        defaultOpen: true,
        stack: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'UI responsive', 'Accesibilidad'],
        summary:
          'Desarrollo frontend para Elektra con React, JavaScript y Tailwind CSS en interfaces de alto tráfico.',
        highlights: [
          'Construí interfaces de alto tráfico conectadas a APIs para flujos de compra y navegación.',
          'Convertí diseños de Figma en pantallas accesibles y responsive listas para producción.',
          'Creé componentes reutilizables y patrones compartidos para acelerar cambios de interfaz.',
        ],
        technicalDetails: [
          'Trabajé en performance, experiencia móvil y accesibilidad.',
          'Colaboré sobre módulos frontend orientados a consistencia visual y mantenimiento.',
        ],
        link: 'https://www.gruposalinas.com/',
      },
      {
        period: '05/2021 – 04/2022',
        role: 'Fullstack Developer',
        company: 'Layer 7',
        location: 'Ciudad de México, México',
        defaultOpen: false,
        stack: ['PHP', 'Laravel', 'Symfony', 'SQL', 'REST APIs', 'PHPUnit'],
        summary:
          'Desarrollo fullstack para microservicios, dashboards internos y procesamiento operativo con PHP, Laravel, Symfony y SQL.',
        highlights: [
          'Microservicios con PHP, Laravel y Symfony para campañas que enrutan más de 400M llamadas al mes.',
          'Optimicé consultas SQL y dashboards internos para monitoreo y procesamiento.',
          'Integré servicios REST con autenticación y cifrado.',
        ],
        technicalDetails: [
          'Trabajé con Laravel, Symfony, SQL y pruebas automatizadas con PHPUnit.',
          'Participé en herramientas internas enfocadas en monitoreo, seguridad y operación.',
        ],
        link: 'https://www.layer7.mx/',
      },
      {
        period: '10/2018 – 02/2021',
        role: 'Fullstack Developer',
        company: 'Blumonpay',
        location: 'Ciudad de México, México',
        link: 'https://www.blumonpay.com/',
        defaultOpen: false,
        stack: ['Vue.js', 'JavaScript', 'REST APIs', 'Dashboards', 'Selenium', 'POS'],
        summary:
          'Construcción de dashboards internos y aplicaciones web para procesos POS y bancarios.',
        highlights: [
          'Construí dashboards internos y aplicaciones web para monitoreo y soporte operativo.',
          'Desarrollé interfaces en Vue.js y JavaScript conectadas a servicios REST.',
          'Implementé vistas en tiempo real y paneles de KPIs para seguimiento de procesos.',
        ],
        technicalDetails: [
          'Trabajé con dashboards, formularios y procesos internos relacionados con POS y banca.',
          'Automaticé pruebas funcionales con Selenium.',
        ],
      },
    ],
    about: [
      'Soy frontend/product engineer con experiencia construyendo interfaces para e-commerce, fintech y operaciones digitales. Me interesa especialmente la parte donde producto, UX e ingeniería se cruzan: flujos claros, sistemas mantenibles y software que realmente ayuda a operar mejor.',
      'Actualmente estoy enfocando mi perfil hacia frontend systems, automatización e interfaces con IA aplicada.',
    ],
    labels: {
      problem: 'Problema',
      role: 'Rol',
      architecture: 'Arquitectura',
      decisions: 'Decisiones clave',
      impact: 'Por qué importa',
      stack: 'Stack',
      code: 'Código',
      preview: 'Ver proyecto',
      visitSite: 'Visitar sitio',
      basedIn: 'Base',
    },
  },
  en: {
    meta: {
      title: 'Alan Ortiz · Frontend Developer specialized in React, Vue.js and TypeScript',
      description:
        'Portfolio of Alan Ortiz, Frontend Developer with experience in React, Vue.js, TypeScript, e-commerce, fintech, integrations, performance, accessibility and testing.',
    },
    proofStrip: {
      label: 'Technical focus',
      items: ['Frontend systems with React, Vue.js, and TypeScript', 'UX, performance, and accessibility in product interfaces', 'Automation and integrations for operational workflows'],
    },
    nav: {
      featured: 'Work',
      experience: 'Launches',
      principles: 'Skills',
      timeline: 'Experience',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Frontend Engineer · React · Vue.js · TypeScript',
      title: 'I build clear, fast and maintainable frontend interfaces.',
      description:
        'I work with React, Vue.js and TypeScript across e-commerce, fintech and internal tools, connecting interfaces with APIs, performance, accessibility and testing.',
      location: 'Mexico City, Mexico',
      status: 'Available for remote and international frontend roles',
      primaryCta: 'View projects',
      secondaryCta: 'Download resume',
      metrics: [
        { label: 'Clear interfaces', value: 'Reusable components and accessible patterns for product-focused frontend work.' },
        { label: 'Maintainable code', value: 'React, Vue.js and TypeScript with clean structure, clear integrations and a codebase that is easy to maintain.' },
        { label: 'APIs, performance and testing', value: 'API integrations and testing that support performance, accessibility and user flows.' },
      ],
    },
    sectionTitles: {
      featured: 'Selected projects',
      featuredIntro:
        'Products and UI systems that show how I approach frontend architecture, usability, and product delivery.',
      production: 'Production websites',
      productionIntro:
        'Published websites and client work where I contributed through frontend execution, visual structure, and integrations.',
      deployments: 'Production websites',
      deploymentsIntro:
        'Client launches and published work where I contributed through frontend implementation, hierarchy, and usable delivery.',
      principles: 'Principles',
      principlesIntro:
        'The criteria I use when shaping maintainable interfaces, UX decisions, and frontend systems that need to hold up in real use.',
      timeline: 'Professional experience',
      timelineIntro:
        'Experience building interfaces, integrations, and frontend systems across real products and operational environments.',
      about: 'About',
    },
    featuredProjects: [
      {
        name: 'FitLog',
        summary:
          'A mobile-first nutrition app focused on daily food logging, local state and simple everyday use.',
        problem:
          'Daily food logging with search, barcode and manual entry in a UI built for frequent use.',
        role: 'Shows frontend work with React, TypeScript, local state and a mobile-first UI for real use.',
        architecture:
          'React + TypeScript with product UI, local state and separate flows for each type of input.',
        decisions: [
          'React + TypeScript product UI',
          'Mobile-first responsive interface',
          'Local state for daily logging',
          'Search, barcode and manual entry flows',
        ],
        impact:
          'Shows a frontend app centered on local state, responsive UI and frequent-use flows.',
        stack: ['React', 'TypeScript', 'Vite', 'Local state'],
        links: {
          preview: '#',
          code: '#',
        },
        accent: 'emerald',
      },
      {
        name: 'Dashboard Assistant',
        summary:
          'An embedded dashboard assistant built with Vue 3 and TypeScript, using messages, reusable widgets and a clear separation between UI and logic.',
        problem:
          'Integrate an assistant into a dashboard without breaking the layout or reading flow.',
        role: 'Shows work with Vue 3, TypeScript, conversational UI and reusable component composition.',
        architecture:
          'Vue 3 + TypeScript with typed messages, reusable widgets and a clear split between UI and logic.',
        decisions: [
          'Vue 3 Composition API',
          'Typed message models',
          'Reusable component composition',
          'Conversational UI patterns',
        ],
        impact:
          'Shows experience with message-driven interfaces, reusable widgets and clear UI/logic separation.',
        stack: ['Vue 3', 'TypeScript', 'Vite', 'Composition API'],
        links: {
          preview: 'https://dashboard-assistant-chi.vercel.app/',
          code: 'https://github.com/alanortiz-dev/dashboard-assistant',
        },
        accent: 'slate',
      },
      {
        name: 'Kalanban',
        summary:
          'A kanban-style interface built with React and TypeScript, focused on UI states, quick actions and simple task management.',
        problem:
          'Handle multiple UI states and quick interactions for everyday task management.',
        role: 'Shows local state handling, React component structure and practical UX decisions.',
        architecture:
          'React + TypeScript with components, modals and interaction states for fast task handling.',
        decisions: [
          'React component structure',
          'Local state',
          'Modals and interaction states',
          'Practical UX decisions',
        ],
        impact:
          'Shows frontend work centered on interaction, local state and a simple task UI.',
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Local state'],
        links: {
          preview: 'https://kalanban.vercel.app/',
          code: 'https://github.com/alanortiz-dev/kalanban',
        },
        accent: 'blue',
      },
    ],
    deployments: [
      {
        name: 'Tatuajes en Valencia',
        url: 'https://tatuajesenvalencia.com/',
        summary: 'A production site built for local visibility and service conversion.',
        focus: ['Responsive execution', 'commercial clarity', 'baseline SEO', 'usable delivery'],
      },
      {
        name: 'Hivora Clothes',
        url: 'https://hivoraclothes.com/',
        summary: 'Visual and product implementation for a brand-focused web presence.',
        focus: ['Brand presentation', 'responsive UI', 'clear navigation', 'client delivery'],
      },
      {
        name: 'Spark Creative House',
        url: 'https://www.sparkcreativehouse.com/',
        summary: 'Professional web presence for a creative studio with a clear information structure.',
        focus: ['Information hierarchy', 'responsive build', 'business positioning', 'launch quality'],
      },
      {
        name: 'Pia Maria Coaching',
        url: 'https://www.pia-maria-coaching.com/',
        summary: 'A coaching site designed to improve clarity, trust, and lead generation.',
        focus: ['Lead capture', 'trust-building UX', 'clean responsive delivery', 'content clarity'],
      },
    ],
    principles: [
      {
        title: 'Interfaces that survive releases',
        body: 'I prefer UI systems with reusable parts, clear contracts, and understandable integrations. Shipping fast matters, but being able to iterate without breaking critical flows matters more.',
      },
      {
        title: 'UX as engineering, not decoration',
        body: 'Performance, accessibility, hierarchy, and consistent behavior are part of system design. Good UX also reduces support load, mistakes, and operational friction.',
      },
      {
        title: 'Frontend connected to business workflows',
        body: 'I think in terms of forms, automations, CMS flows, operational handoffs, testing, and stability. Frontend is not isolated; it supports real processes.',
      },
      {
        title: 'Scale with judgment, not free complexity',
        body: 'I separate UI, logic, types, and data when it creates real maintainability. The goal is not over-architecture, but a foundation that can grow without constant rewrites.',
      },
    ],
    experiences: [
      {
        period: '06/2025 – Present',
        role: 'Independent Product / Frontend Engineer',
        company: 'Independent Professional',
        location: 'Spain · Austria',
        link: 'https://alanortizconsulting.com/',
        defaultOpen: true,
        stack: ['JavaScript', 'TypeScript', 'Vue.js', 'Forms', 'CMS', 'Make', 'n8n'],
        summary:
          'Independent work focused on frontend improvements, forms, client websites, and automation integrations.',
        highlights: [
          'Delivered improvements to production interfaces, forms, and user flows using JavaScript and TypeScript.',
          'Built a modular conversational interface in Vue.js and TypeScript with clear separation between UI, logic, and types.',
          'Connected forms, CMS content, and automations to improve lead capture and handoffs.',
        ],
        technicalDetails: [
          'Worked with responsive UI, form behavior, and CMS integrations.',
          'Used Make and n8n to reduce manual steps in customer-facing processes.',
        ],
      },
      {
        period: '02/2023 – 06/2025',
        role: 'Fullstack Developer',
        company: 'IT Globers',
        location: 'Valencia, Spain',
        defaultOpen: true,
        stack: ['React', 'TypeScript', 'VTEX IO', 'REST APIs', 'GraphQL', 'Playwright'],
        summary:
          'Built VTEX IO storefronts for high-traffic e-commerce using React, TypeScript, and API integrations.',
        highlights: [
          'Developed customer-facing storefront features in production with React and TypeScript.',
          'Integrated REST and GraphQL services into login, checkout, and order management flows.',
          'Maintained Playwright E2E coverage for purchasing and order-management journeys.',
        ],
        technicalDetails: [
          'Worked on responsive UI, accessibility, and release stability inside VTEX IO.',
          'Handled production issues and interface fixes to improve consistency and performance.',
        ],
        link: 'https://www.itglobers.com/',
      },
      {
        period: '08/2022 – 02/2023',
        role: 'Frontend Developer',
        company: 'Grupo Salinas',
        location: 'Mexico City, Mexico',
        defaultOpen: true,
        stack: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Responsive UI', 'Accessibility'],
        summary:
          'Frontend development for Elektra using React, JavaScript, and Tailwind CSS across high-traffic interfaces.',
        highlights: [
          'Built high-traffic interfaces connected to APIs for shopping and navigation flows.',
          'Turned Figma designs into accessible, responsive, production-ready screens.',
          'Created reusable components and shared patterns to speed up interface changes.',
        ],
        technicalDetails: [
          'Worked on performance, mobile responsiveness, and accessibility.',
          'Contributed to frontend modules focused on visual consistency and maintainability.',
        ],
        link: 'https://www.gruposalinas.com/',
      },
      {
        period: '05/2021 – 04/2022',
        role: 'Fullstack Developer',
        company: 'Layer 7',
        location: 'Mexico City, Mexico',
        defaultOpen: false,
        stack: ['PHP', 'Laravel', 'Symfony', 'SQL', 'REST APIs', 'PHPUnit'],
        summary:
          'Fullstack development for microservices, internal dashboards, and operational processing with PHP, Laravel, Symfony, and SQL.',
        highlights: [
          'Built PHP, Laravel, and Symfony microservices routing 400M+ calls per month.',
          'Optimized SQL queries and internal dashboards for monitoring and processing.',
          'Integrated REST services with authentication and encryption.',
        ],
        technicalDetails: [
          'Worked with Laravel, Symfony, SQL, and automated testing with PHPUnit.',
          'Contributed to internal tools focused on monitoring, security, and operations.',
        ],
        link: 'https://www.layer7.mx/',
      },
      {
        period: '10/2018 – 02/2021',
        role: 'Fullstack Developer',
        company: 'Blumonpay',
        location: 'Mexico City, Mexico',
        link: 'https://www.blumonpay.com/',
        defaultOpen: false,
        stack: ['Vue.js', 'JavaScript', 'REST APIs', 'Dashboards', 'Selenium', 'POS'],
        summary:
          'Built internal dashboards and web applications for POS and banking-related processes.',
        highlights: [
          'Built internal dashboards and web apps for monitoring and operational support.',
          'Developed Vue.js and JavaScript interfaces connected to REST services.',
          'Implemented real-time monitoring views and KPI dashboards for process tracking.',
        ],
        technicalDetails: [
          'Worked with dashboards, forms, and internal processes related to POS and banking.',
          'Automated functional testing with Selenium.',
        ],
      },
    ],
    about: [
      'I am a frontend/product engineer with experience building interfaces for e-commerce, fintech, and digital operations. I am especially interested in the space where product, UX, and engineering meet: clear flows, maintainable systems, and software that genuinely helps teams operate better.',
      'Right now I am focusing my profile toward frontend systems, automation, and applied AI interfaces.',
    ],
    labels: {
      problem: 'Problem',
      role: 'Role',
      architecture: 'Architecture',
      decisions: 'Key decisions',
      impact: 'Why it matters',
      stack: 'Stack',
      code: 'Code',
      preview: 'Live project',
      visitSite: 'Visit site',
      basedIn: 'Based in',
    },
  },
};
