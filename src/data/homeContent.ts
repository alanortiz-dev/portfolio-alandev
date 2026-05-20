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
      title: 'Alan Ortiz · Product Engineer enfocado en frontend y sistemas de producto',
      description:
        'Portfolio de Alan Ortiz: Product Engineer con foco en frontend systems, arquitectura UI, e-commerce, fintech y flujos de producto en producción.',
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
      eyebrow: 'Frontend Engineer · React, Vue.js y TypeScript',
      title: 'Construyo interfaces de producto claras, mantenibles y listas para producción.',
      description:
        'Trabajo en e-commerce, fintech, dashboards y automatización construyendo interfaces donde la UX, la arquitectura frontend y la estabilidad en producción importan de verdad.',
      location: 'Ciudad de México, México',
      status: 'Disponible para roles frontend remotos e internacionales',
      primaryCta: 'Ver proyectos',
      secondaryCta: 'Descargar CV',
      metrics: [
        { value: 'React · Vue.js · TypeScript', label: 'stack principal' },
        { value: 'E-commerce · Fintech · Automation', label: 'áreas de trabajo' },
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
        'Criterios que uso para diseñar interfaces mantenibles, decisiones de UX y arquitectura que sí aguanta cambios reales.',
      timeline: 'Experiencia profesional',
      timelineIntro:
        'Experiencia construyendo interfaces, integraciones y sistemas frontend para productos y operaciones reales.',
      about: 'Sobre mí',
    },
    featuredProjects: [
      {
        name: 'FitLog',
        summary:
          'Producto mobile-first de nutrición centrado en logging diario, estructura modular y una experiencia pensada para hábito.',
        problem:
          'Diseñar un MVP centrado en el registro diario, sin depender de una sola feature como el escaneo.',
        role: 'Diseño y desarrollo frontend del producto: UX, arquitectura UI, estado local y sistema visual.',
        architecture:
          'Arquitectura modular con flujos separados para búsqueda, barcode y custom food, pensada para crecer sin rehacer la base del producto.',
        decisions: [
          'Priorizar la pantalla Today como centro del sistema para reforzar hábito y claridad de producto.',
          'Separar persistencia y UI para poder migrar luego a Supabase sin reescribir la app.',
          'Mantener un lenguaje visual sobrio y creíble, más wellness product que template de frontend.',
        ],
        impact:
          'Muestra cómo abordo un producto desde frontend, estructura y experiencia de uso con una base lista para seguir iterando.',
        stack: ['React', 'TypeScript', 'Vite', 'Local-first state', 'Design system thinking'],
        links: {
          preview: '#',
          code: '#',
        },
        accent: 'emerald',
      },
      {
        name: 'Dashboard Assistant',
        summary:
          'Sistema de asistente embebido para dashboards con widgets reutilizables y una estructura lista para crecer.',
        problem:
          'Diseñar un asistente que encajara de forma natural dentro de un dashboard.',
        role: 'Diseño e implementación del sistema UI, composición de widgets y estructura reutilizable.',
        architecture:
          'Vue 3 + TypeScript con composables, separación entre UI y lógica, y estructura lista para crecer.',
        decisions: [
          'Separar mensajes y widgets para evitar acoplar el flujo conversacional al rendering.',
          'Diseñar una estructura reutilizable que permita crecer el sistema sin rehacer el shell.',
          'Mantener la interfaz clara y product-oriented, sin caer en una demo visual ruidosa.',
        ],
        impact:
          'Refuerza mi experiencia en arquitectura frontend, componentes reutilizables y UX conversacional.',
        stack: ['Vue 3', 'TypeScript', 'Vite', 'Composable architecture'],
        links: {
          preview: 'https://dashboard-assistant-chi.vercel.app/',
          code: 'https://github.com/alanortiz-dev/dashboard-assistant',
        },
        accent: 'slate',
      },
      {
        name: 'Kalanban',
        summary:
          'Sistema tipo kanban enfocado en estados de UI, acciones rápidas y uso frecuente sin fricción.',
        problem:
          'Resolver una interfaz con muchos estados y edición rápida sin volverla frágil.',
        role: 'Diseño e implementación frontend con foco en usabilidad, componentes reutilizables y estado local.',
        architecture:
          'React + TypeScript con componentes reutilizables y flujos pensados para interacción frecuente.',
        decisions: [
          'Enfatizar claridad de interacción antes que decoraciones visuales.',
          'Mantener la UI flexible para futuras mejoras como keyboard UX y más capas de productividad.',
          'Resolver el estado local de forma simple y mantenible para no sobrediseñar el MVP.',
        ],
        impact:
          'Muestra mi enfoque para construir interfaces donde el comportamiento importa tanto como lo visual.',
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
        company: 'Independent Professional',
        location: 'España · Austria',
        summary:
          'Trabajo independiente orientado a mejoras frontend en producción, interfaces conversacionales, automatización y optimización de flujos digitales de cara al usuario.',
        highlights: [
          'Mejoras en interfaces reales, formularios y user flows con JavaScript y TypeScript en entornos vivos.',
          'Interfaz conversacional modular en Vue.js + TypeScript separando UI, lógica y tipos para crecimiento futuro.',
          'Integraciones con CMS, forms y automatizaciones para streamlining de leads y handoffs operativos.',
          'Automatizaciones con Make y n8n para reducir pasos manuales en procesos customer-facing.',
        ],
      },
      {
        period: '02/2023 – 06/2025',
        role: 'Fullstack Developer',
        company: 'IT Globers',
        location: 'Valencia, España',
        summary:
          'Construcción y mantenimiento de features customer-facing en VTEX IO para e-commerce de alto tráfico, con foco en estabilidad, accesibilidad e integraciones mantenibles.',
        highlights: [
          'Features en VTEX IO con React y TypeScript para storefronts de producción.',
          'Integraciones REST y GraphQL en flujos críticos manteniendo consistencia entre releases.',
          'Playwright E2E para login, checkout y order management.',
          'Triage de issues en producción y fixes puntuales para mejorar release stability.',
        ],
        link: 'https://www.itglobers.com/',
      },
      {
        period: '08/2022 – 02/2023',
        role: 'Frontend Developer',
        company: 'Grupo Salinas',
        location: 'Ciudad de México, México',
        summary:
          'Frontend para Elektra en flujos customer-facing de alto tráfico, conectando diseño, APIs y rendimiento de experiencia.',
        highlights: [
          'Interfaces de alto tráfico con React, JavaScript y Tailwind CSS.',
          'Traducción de Figma a pantallas accesibles, responsive y listas para producción.',
          'Módulos reutilizables y patrones compartidos para acelerar delivery.',
          'Mejoras en accesibilidad, mobile responsiveness y tiempos de carga.',
        ],
        link: 'https://www.gruposalinas.com/',
      },
      {
        period: '05/2021 – 04/2022',
        role: 'Fullstack Developer',
        company: 'Layer 7',
        location: 'Ciudad de México, México',
        summary:
          'Trabajo en sistemas operativos de gran escala con microservicios, procesamiento de datos, seguridad e interfaces de soporte al negocio.',
        highlights: [
          'Microservicios con PHP, Laravel y Symfony para campañas que enrutan más de 400M llamadas al mes.',
          'Optimización de SQL y dashboards operativos para procesamiento a gran escala.',
          'REST, autenticación y encriptación en flujos sensibles.',
          'Automated testing con PHPUnit para entornos críticos.',
        ],
        link: 'https://www.layer7.mx/',
      },
      {
        period: '10/2018 – 02/2021',
        role: 'Fullstack Developer',
        company: 'Blumonpay',
        location: 'Ciudad de México, México',
        summary:
          'Dashboards internos y aplicaciones operativas para procesos POS y bancarios con foco en claridad, monitoreo y confiabilidad.',
        highlights: [
          'Dashboards y web apps operativas para monitoreo y procesos internos.',
          'Interfaces en Vue.js y JavaScript conectadas a REST services.',
          'Vistas en tiempo real y KPIs para mejorar visibilidad operativa.',
          'Automatización de pruebas funcionales con Selenium.',
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
      title: 'Alan Ortiz · Product Engineer focused on frontend systems',
      description:
        'Portfolio of Alan Ortiz: Product Engineer focused on frontend systems, UI architecture, e-commerce, fintech, and production product delivery.',
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
      eyebrow: 'Frontend Engineer · React, Vue.js and TypeScript',
      title: 'I build product interfaces that are clear, maintainable, and ready for production.',
      description:
        'I work across e-commerce, fintech, dashboards, and automation building interfaces where UX, frontend architecture, and production stability all matter.',
      location: 'Mexico City, Mexico',
      status: 'Available for remote and international frontend roles',
      primaryCta: 'View projects',
      secondaryCta: 'Download resume',
      metrics: [
        { value: 'React · Vue.js · TypeScript', label: 'core stack' },
        { value: 'E-commerce · Fintech · Automation', label: 'work areas' },
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
          'A mobile-first nutrition product built around daily logging, modular structure, and habit-friendly UX.',
        problem:
          'Design an MVP centered on daily logging instead of depending on one isolated feature like barcode scanning.',
        role: 'Frontend product work across UX, UI architecture, local state, and visual direction.',
        architecture:
          'Modular frontend structure with separate flows for search, barcode, and custom foods, designed to evolve without rebuilding the product base.',
        decisions: [
          'Make the Today screen the center of the system to reinforce habit and product clarity.',
          'Separate persistence from UI so the app can later migrate to Supabase without rewriting the experience.',
          'Keep the visual language credible and restrained, closer to a wellness product than a generic frontend template.',
        ],
        impact:
          'Shows how I approach a product from frontend structure and UX with room to keep iterating.',
        stack: ['React', 'TypeScript', 'Vite', 'Local-first state', 'Design system thinking'],
        links: {
          preview: '#',
          code: '#',
        },
        accent: 'emerald',
      },
      {
        name: 'Dashboard Assistant',
        summary:
          'An embedded dashboard assistant with reusable widgets and a UI system designed to scale cleanly.',
        problem:
          'Design an assistant that could fit naturally inside a dashboard.',
        role: 'Designed and implemented the UI system, widget composition, and reusable structure.',
        architecture:
          'Vue 3 + TypeScript with composables, clear separation between UI and logic, and a structure ready to grow.',
        decisions: [
          'Separate messages from widgets so interaction logic is not tightly coupled to rendering.',
          'Build a reusable structure that can scale without rewriting the shell.',
          'Keep the experience product-oriented rather than over-designed as a showcase demo.',
        ],
        impact:
          'Shows experience in frontend architecture, reusable components, and conversational UX.',
        stack: ['Vue 3', 'TypeScript', 'Vite', 'Composable architecture'],
        links: {
          preview: 'https://dashboard-assistant-chi.vercel.app/',
          code: 'https://github.com/alanortiz-dev/dashboard-assistant',
        },
        accent: 'slate',
      },
      {
        name: 'Kalanban',
        summary:
          'A kanban-style system focused on UI states, fast actions, and everyday usability without friction.',
        problem:
          'Build an interface with multiple states and quick editing without making it fragile.',
        role: 'Frontend design and implementation focused on usability, reusable structure, and local state.',
        architecture:
          'React + TypeScript with reusable components and flows designed for frequent interaction.',
        decisions: [
          'Prioritize interaction clarity over visual decoration.',
          'Keep the interface flexible for future enhancements such as stronger keyboard UX.',
          'Solve state management in a simple and maintainable way instead of overengineering the MVP.',
        ],
        impact:
          'Shows how I build interfaces where behavior matters as much as visuals.',
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
        summary:
          'Independent work focused on production frontend improvements, conversational interfaces, automation, and digital workflow optimization.',
        highlights: [
          'Production improvements across live interfaces, forms, and customer-facing flows using JavaScript and TypeScript.',
          'Built a modular conversational interface in Vue.js + TypeScript with clear separation between UI, logic, and types.',
          'Connected frontend journeys with CMS, forms, and automations to streamline leads and operational handoffs.',
          'Implemented Make and n8n workflows to reduce manual steps tied to customer-facing processes.',
        ],
      },
      {
        period: '02/2023 – 06/2025',
        role: 'Fullstack Developer',
        company: 'IT Globers',
        location: 'Valencia, Spain',
        summary:
          'Built and maintained high-traffic VTEX IO storefront features with a strong focus on release stability, accessibility, and maintainable integrations.',
        highlights: [
          'Customer-facing VTEX IO features using React and TypeScript.',
          'REST and GraphQL integrations across critical user flows.',
          'Playwright E2E coverage for login, checkout, and order management.',
          'Production issue triage and targeted frontend fixes to improve release stability.',
        ],
        link: 'https://www.itglobers.com/',
      },
      {
        period: '08/2022 – 02/2023',
        role: 'Frontend Developer',
        company: 'Grupo Salinas',
        location: 'Mexico City, Mexico',
        summary:
          'High-traffic customer-facing frontend work for Elektra, connecting design execution, APIs, and performance-sensitive UX.',
        highlights: [
          'Built high-traffic interfaces with React, JavaScript, and Tailwind CSS.',
          'Turned Figma designs into accessible, responsive, production-ready screens.',
          'Created reusable modules and shared patterns to keep delivery faster and more consistent.',
          'Improved accessibility, mobile responsiveness, and load performance.',
        ],
        link: 'https://www.gruposalinas.com/',
      },
      {
        period: '05/2021 – 04/2022',
        role: 'Fullstack Developer',
        company: 'Layer 7',
        location: 'Mexico City, Mexico',
        summary:
          'Worked on large-scale operational systems involving microservices, data processing, security, and business-supporting dashboards.',
        highlights: [
          'Built PHP, Laravel, and Symfony microservices routing 400M+ calls per month.',
          'Optimized SQL and operational dashboards for large-scale processing.',
          'Integrated REST services with authentication and encryption in sensitive workflows.',
          'Implemented automated testing with PHPUnit in critical environments.',
        ],
        link: 'https://www.layer7.mx/',
      },
      {
        period: '10/2018 – 02/2021',
        role: 'Fullstack Developer',
        company: 'Blumonpay',
        location: 'Mexico City, Mexico',
        summary:
          'Built internal dashboards and operational web applications for POS and banking-related workflows, with a focus on clarity, monitoring, and reliability.',
        highlights: [
          'Internal dashboards and operational web apps for monitoring and process support.',
          'Vue.js and JavaScript interfaces connected to REST services.',
          'Real-time monitoring views and KPI dashboards for stronger visibility.',
          'Selenium-based functional test automation for sensitive forms and workflows.',
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
