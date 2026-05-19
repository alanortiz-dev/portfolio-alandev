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
      label: 'Prueba de trabajo real',
      items: ['6+ años construyendo software para producción', 'Experiencia en e-commerce, fintech y automatización', 'Sistemas frontend con React, Vue.js y TypeScript', 'Enfoque en testing, performance y accesibilidad'],
    },
    nav: {
      featured: 'Proyectos',
      experience: 'Experiencia',
      principles: 'Principios',
      timeline: 'Sobre mí',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'Frontend Engineer · React, Vue.js y TypeScript · Producto digital',
      title: 'Construyo interfaces de producción que escalan y resuelven flujos críticos de negocio.',
      description:
        'Trabajo entre frontend, producto y operaciones, creando experiencias con React, Vue.js y TypeScript para e-commerce, fintech, automatización y productos de alto tráfico.',
      location: 'Ciudad de México, México',
      status: 'Disponible para roles frontend remotos e internacionales',
      primaryCta: 'Ver trabajo en producción',
      secondaryCta: 'Descargar CV',
      metrics: [
        { value: '6+ años', label: 'construyendo software para producción' },
        { value: 'E-commerce · Fintech', label: 'dominios principales' },
        { value: 'React · Vue · TS', label: 'sistemas frontend de producto' },
        { value: 'Testing · Performance', label: 'calidad y estabilidad de release' },
      ],
    },
    sectionTitles: {
      featured: 'Ingeniería de producto destacada',
      featuredIntro:
        'No son solo demos. Son ejemplos de cómo pienso arquitectura frontend, UX de producto, modularidad y flujos mantenibles.',
      production: 'Experiencia profesional',
      productionIntro:
        'Recorrido profesional construyendo interfaces, integraciones y flujos de negocio en equipos y productos reales.',
      deployments: 'Despliegues para clientes y producción',
      deploymentsIntro:
        'Sitios y experiencias publicadas con foco en claridad comercial, ejecución frontend y entregables utilizables en negocio.',
      principles: 'Principios de ingeniería',
      principlesIntro:
        'Así tomo decisiones cuando el objetivo no es solo sacar pantallas, sino sostener producto en producción.',
      timeline: 'Trayectoria',
      timelineIntro:
        'Trayectoria enfocada en producto, frontend systems, integraciones y estabilidad operativa.',
      about: 'Sobre mí',
    },
    featuredProjects: [
      {
        name: 'FitLog',
        summary:
          'App mobile-first de nutrición actualmente en desarrollo, enfocada en logging diario, estructura de producto clara y una UX pensada para hábito.',
        problem:
          'Diseñar un MVP donde el centro fuera el flujo de logging diario y no una feature aislada como el escaneo.',
        role: 'Product engineering end-to-end: UX, arquitectura frontend, flujos de entrada, estado local y sistema visual.',
        architecture:
          'Arquitectura modular con Today screen como núcleo del producto, flujos separados para búsqueda, barcode y custom food, y capa local-first preparada para evolucionar a backend.',
        decisions: [
          'Priorizar la pantalla Today como centro del sistema para reforzar hábito y claridad de producto.',
          'Separar persistencia y UI para poder migrar luego a Supabase sin reescribir la app.',
          'Mantener un lenguaje visual sobrio y creíble, más wellness product que template de frontend.',
        ],
        impact:
          'Muestra cómo diseño un producto real desde frontend, arquitectura y experiencia de uso, con una base lista para iterar y crecer.',
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
          'Interfaz de asistente embebido para dashboards con arquitectura modular, widgets reutilizables y patrones de UX conversacional.',
        problem:
          'Crear una experiencia de asistente que pudiera convivir con un dashboard real sin sentirse como overlay improvisado.',
        role: 'Diseño e implementación del sistema de UI, composición de widgets, estado y estructura reusable.',
        architecture:
          'Vue 3 + TypeScript con composables, separación de rendering y lógica conversacional, historial simulado y UI preparada para escalar tipos de respuesta.',
        decisions: [
          'Separar mensajes y widgets para evitar acoplar el flujo conversacional al rendering.',
          'Diseñar una estructura reutilizable que permita crecer el sistema sin rehacer el shell.',
          'Mantener la interfaz clara y product-oriented, sin caer en una demo visual ruidosa.',
        ],
        impact:
          'Refuerza narrativa de systems thinking, frontend architecture y AI-oriented UX sin vender humo.',
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
          'Sistema de interacción para gestión tipo kanban con foco en estados de UI, acciones rápidas y una experiencia ágil.',
        problem:
          'Resolver una interfaz con múltiples estados, edición rápida y control de interacción sin volverla torpe ni frágil.',
        role: 'Diseño e implementación frontend con foco en ergonomía de uso, estructura reusable y manejo de estado local.',
        architecture:
          'React + TypeScript con componentes reutilizables, modales consistentes y flujos preparados para interacción frecuente.',
        decisions: [
          'Enfatizar claridad de interacción antes que decoraciones visuales.',
          'Mantener la UI flexible para futuras mejoras como keyboard UX y más capas de productividad.',
          'Resolver el estado local de forma simple y mantenible para no sobrediseñar el MVP.',
        ],
        impact:
          'Ayuda a posicionar criterio de UX engineering y capacidad para diseñar interfaces donde el comportamiento importa tanto como el look.',
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
      'Soy un frontend/product engineer que disfruta convertir flujos complejos en interfaces claras, confiables y mantenibles.',
      'Me muevo bien entre producto, diseño, frontend, integraciones y automatización. Me importa que lo que construyo funcione bien hoy, pero también que se pueda sostener mañana.',
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
      label: 'Proof of real work',
      items: ['6+ years building production software', 'Experience across e-commerce, fintech, and automation', 'Frontend systems with React, Vue.js, and TypeScript', 'Strong focus on testing, performance, and accessibility'],
    },
    nav: {
      featured: 'Work',
      experience: 'Experience',
      principles: 'Principles',
      timeline: 'About',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Frontend Engineer · React, Vue.js and TypeScript · Digital product',
      title: 'I build production interfaces that scale and solve critical business flows.',
      description:
        'I work across frontend, product, and operations, building React, Vue.js, and TypeScript experiences for e-commerce, fintech, automation, and high-traffic products.',
      location: 'Mexico City, Mexico',
      status: 'Available for remote and international frontend roles',
      primaryCta: 'View production work',
      secondaryCta: 'Download resume',
      metrics: [
        { value: '6+ years', label: 'building production software' },
        { value: 'E-commerce · Fintech', label: 'core domains' },
        { value: 'React · Vue · TS', label: 'frontend product systems' },
        { value: 'Testing · Performance', label: 'quality and release reliability' },
      ],
    },
    sectionTitles: {
      featured: 'Featured product engineering',
      featuredIntro:
        'Not just polished demos. These projects show how I think about frontend architecture, reusable UI systems, product UX, and maintainability.',
      production: 'Professional experience',
      productionIntro:
        'Professional experience building interfaces, integrations, and business flows across real teams and production products.',
      deployments: 'Client / production deployments',
      deploymentsIntro:
        'Published websites and launches focused on commercial clarity, frontend execution, and usable delivery for real business needs.',
      principles: 'Engineering principles',
      principlesIntro:
        'How I make decisions when the goal is not only to ship screens, but to sustain product quality in production.',
      timeline: 'Experience timeline',
      timelineIntro:
        'A track record shaped by product delivery, frontend systems, integrations, and operational reliability.',
      about: 'About',
    },
    featuredProjects: [
      {
        name: 'FitLog',
        summary:
          'A mobile-first nutrition product currently in development, built around daily logging, strong product structure, and habit-friendly UX.',
        problem:
          'Design an MVP where the center of the experience was consistent daily food logging rather than an isolated feature like barcode scanning.',
        role: 'End-to-end product engineering across UX, frontend architecture, input flows, local state, and visual system direction.',
        architecture:
          'Modular frontend architecture with the Today screen as the core product surface, separate flows for search, barcode, and custom foods, plus a local-first persistence layer prepared for backend evolution.',
        decisions: [
          'Make the Today screen the center of the system to reinforce habit and product clarity.',
          'Separate persistence from UI so the app can later migrate to Supabase without rewriting the experience.',
          'Keep the visual language credible and restrained, closer to a wellness product than a generic frontend template.',
        ],
        impact:
          'Shows how I shape a real product from frontend architecture, UX, and iterative product thinking with room to keep growing it.',
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
          'An embedded assistant experience for dashboards built around modular widget architecture and reusable conversational UI patterns.',
        problem:
          'Create an assistant experience that could live inside a real dashboard without feeling bolted on or visually noisy.',
        role: 'Designed and implemented the UI system, widget composition model, state structure, and reusable shell.',
        architecture:
          'Vue 3 + TypeScript using composables, clear separation between conversational logic and rendering, mocked history loading, and scalable response patterns.',
        decisions: [
          'Separate messages from widgets so interaction logic is not tightly coupled to rendering.',
          'Build a reusable structure that can scale without rewriting the shell.',
          'Keep the experience product-oriented rather than over-designed as a showcase demo.',
        ],
        impact:
          'Strengthens the story around systems thinking, frontend architecture, and AI-oriented UX without inflated claims.',
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
          'An interaction-heavy task management interface focused on UI state handling, fast actions, and ergonomic UX.',
        problem:
          'Solve a UI with multiple states, quick editing, and frequent interaction without making it fragile or visually overwhelming.',
        role: 'Frontend design and implementation focused on usability, reusable structure, and maintainable local state.',
        architecture:
          'React + TypeScript with reusable components, consistent modal patterns, and a structure ready for frequent interaction.',
        decisions: [
          'Prioritize interaction clarity over visual decoration.',
          'Keep the interface flexible for future enhancements such as stronger keyboard UX.',
          'Solve state management in a simple and maintainable way instead of overengineering the MVP.',
        ],
        impact:
          'Supports a stronger UX engineering narrative where behavior matters as much as visuals.',
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
      'I enjoy turning complex workflows into interfaces that feel clear, reliable, and maintainable.',
      'I work comfortably across product, design, frontend, integrations, and automation. I care about shipping useful systems that work well today and remain adaptable tomorrow.',
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
