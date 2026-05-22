export type Locale = 'es' | 'en';

export interface HeroMetric {
  label: string;
  value: string;
}

export interface FeaturedProject {
  name: string;
  type: string;
  status?: string;
  summary: string;
  problem: string;
  role: string;
  architecture: string;
  decisions: string[];
  detail: {
    context: string;
    frontendArchitecture: string;
    stateManagement: string;
    componentDesign: string;
    uxDecisions: string;
    improvementsNext: string;
  };
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
  category?: string;
  summary: string;
  description?: string;
  focus: string[];
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
    timeline: string;
    timelineIntro: string;
    about: string;
  };
  featuredProjects: FeaturedProject[];
  deployments: DeploymentItem[];
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
      deployments: 'Sitios web para clientes reales',
      deploymentsIntro:
        'Una selección de sitios web que he creado para negocios reales, combinando diseño responsive, arquitectura de información y enfoque comercial para comunicar mejor su propuesta y convertir visitas en oportunidades.',
      timeline: 'Experiencia profesional',
      timelineIntro:
        'Experiencia construyendo interfaces, integraciones y sistemas frontend para productos y operaciones reales.',
      about: 'Sobre mí',
    },
    featuredProjects: [
      {
        name: 'FitLog',
        type: 'Nutrition tracker',
        status: 'En desarrollo',
        summary:
          'Tracker de nutrición mobile-first centrado en registro diario, objetivos de macros y flujos de producto de baja fricción.',
        problem:
          'Registrar comida es una acción repetida todos los días, así que la UI debe ser rápida, clara y fácil de usar en móvil.',
        role: 'Demuestra UI de producto con React + TypeScript, estado global con AppContext, onboarding, registro diario, alimentos personalizados y resúmenes de macros.',
        architecture:
          'App con rutas para landing, login, signup, onboarding, Today, agregar comida, escaneo de código de barras, búsqueda, creación de alimento personalizado, confirmación, historial y perfil.',
        decisions: [
          'Estado global con AppContext para sesión, registro diario, alimentos personalizados y objetivos de macros.',
          'Flujos separados para agregar comida, escanear, buscar, crear alimentos personalizados y confirmar entradas.',
          'Pantalla Today con resumen diario, metas de macros y navegación pensada para uso frecuente.',
          'Modo demo, onboarding y rutas de historial y perfil para que la experiencia funcione como app, no como demo estática.',
        ],
        detail: {
          context:
            'Producto mobile-first para registrar comida, consultar progreso diario y trabajar con objetivos de macros sin fricción en sesiones rápidas.',
          frontendArchitecture:
            'La app está organizada por rutas de producto: landing, auth, onboarding, Today, agregar comida, búsqueda, alimento personalizado, historial y perfil.',
          stateManagement:
            'AppContext centraliza sesión, entradas del diario, alimentos personalizados y metas de macros para mantener un flujo consistente entre pantallas.',
          componentDesign:
            'Los componentes separan acciones frecuentes, resumen de macros, búsqueda y confirmación para que cada pantalla pueda iterar sin romper el flujo completo.',
          uxDecisions:
            'Prioricé navegación corta, modo demo, onboarding y una pantalla Today enfocada en la acción principal: registrar y revisar progreso.',
          improvementsNext:
            'Conectaría una API real de alimentos, añadiría edición avanzada de entradas y reforzaría pruebas sobre onboarding, logging y cálculo de macros.',
        },
        impact:
          'Importa porque muestra una experiencia funcional de producto, no solo pantallas sueltas: entrada, onboarding, logging, resumen diario y rutas conectadas.',
        stack: ['React', 'TypeScript', 'Vite', 'AppContext', 'Mobile-first UI'],
        links: {
          preview: 'https://fitlog-nutrition-tracker.vercel.app/',
          code: 'https://github.com/alanortiz-dev/fitlog-nutrition-tracker',
        },
        accent: 'emerald',
      },
      {
        name: 'Dashboard Assistant',
        type: 'Conversational UI',
        summary:
          'Asistente embebido para dashboard, sin backend a propósito, enfocado en mensajes tipados y widgets reutilizables.',
        problem:
          'Integrar un asistente dentro de un dashboard exige límites claros entre componentes, estado predecible y tipos de mensaje extensibles.',
        role: 'Demuestra Vue 3 Composition API, uniones discriminadas en TypeScript, estado en un composable y renderizado polimórfico de mensajes.',
        architecture:
          'useChat centraliza carga, typing, historial simulado, envío de mensajes y canje de recompensas; MessageItem decide qué renderizar según message.type.',
        decisions: [
          'Componentes pequeños y enfocados: ChatFabButton, ChatWindow, MessageList, MessageBubble, MessageItem y RewardCard.',
          'useChat funciona como fuente única de verdad para historial, carga, typing y envío de mensajes.',
          'TextMessage, RewardMessage y ChatMessage usan uniones discriminadas para renderizado con tipado seguro.',
          'RewardCard entra como widget interactivo dentro del flujo de mensajes, no como UI aislada.',
        ],
        detail: {
          context:
            'Asistente conversacional embebido dentro de un dashboard, pensado para demostrar cómo una UI de chat puede convivir con widgets accionables.',
          frontendArchitecture:
            'La interfaz separa disparador, ventana, lista de mensajes, burbujas, renderizado por tipo y tarjetas interactivas para mantener límites claros.',
          stateManagement:
            'useChat funciona como fuente única de verdad para historial, carga inicial, estado de typing, envío de mensajes y canje de recompensas.',
          componentDesign:
            'MessageItem usa uniones discriminadas para decidir si renderiza texto o un widget, evitando condicionales débiles repartidos por la UI.',
          uxDecisions:
            'El asistente aparece como capa secundaria del dashboard, con feedback de typing y respuestas simuladas para comunicar flujo sin depender de backend.',
          improvementsNext:
            'Añadiría streaming real, persistencia de conversación, manejo de errores de API y pruebas de accesibilidad para foco, teclado y anuncios de estado.',
        },
        impact:
          'Importa porque enseña arquitectura de UI y tipado para interfaces conversacionales, no solo un chat bonito.',
        stack: ['Vue 3', 'TypeScript', 'Vite', 'Composition API', 'Discriminated unions'],
        links: {
          preview: 'https://dashboard-assistant-chi.vercel.app/',
          code: 'https://github.com/alanortiz-dev/dashboard-assistant',
        },
        accent: 'slate',
      },
      {
        name: 'Kalanban',
        type: 'Kanban app',
        summary:
          'Interfaz tipo kanban que usa un patrón conocido para demostrar pulido de UX, persistencia local y microinteracciones.',
        problem:
          'En un tablero kanban el valor no está en la idea, sino en la ejecución: drag and drop, persistencia, modales, onboarding, tooltips y modo claro/oscuro.',
        role: 'Demuestra estados de UI en React + TypeScript, persistencia con localStorage, drag and drop y patrones reutilizables de interacción.',
        architecture:
          'Board gestiona columnas y tareas; useLocalStorage conserva el estado; el onboarding, los modales y las animaciones refuerzan la experiencia.',
        decisions: [
          'Persistencia con un hook useLocalStorage para conservar columnas y tareas entre recargas.',
          'Drag and drop con Pragmatic Drag and Drop para mover tareas entre columnas.',
          'Onboarding inicial, tutorial y modal de confirmación reutilizable para acciones destructivas.',
          'Animaciones con Framer Motion, tooltips personalizados y soporte para modo claro/oscuro.',
        ],
        detail: {
          context:
            'Tablero kanban construido sobre un patrón conocido para centrar la evaluación en calidad de interacción, persistencia y claridad visual.',
          frontendArchitecture:
            'Board coordina columnas y tareas, mientras hooks y componentes de interacción mantienen separado el estado persistido, modales y onboarding.',
          stateManagement:
            'useLocalStorage conserva columnas y tareas entre recargas; el estado del tablero permanece local para demostrar un producto usable sin backend.',
          componentDesign:
            'Columnas, tarjetas, modales, tooltips y confirmaciones están modelados como piezas reutilizables para sostener acciones repetidas del tablero.',
          uxDecisions:
            'Incluí drag and drop, onboarding, tutorial, confirmaciones, microinteracciones y soporte claro/oscuro porque en un kanban el detalle de uso define la calidad.',
          improvementsNext:
            'El siguiente paso sería agregar sincronización multiusuario, historial de cambios, filtros y pruebas E2E sobre drag and drop y acciones destructivas.',
        },
        impact:
          'Importa porque convierte un patrón familiar en una muestra clara de calidad de ejecución frontend y diseño de interacción.',
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Pragmatic DnD', 'localStorage', 'Framer Motion'],
        links: {
          preview: 'https://kalanban.vercel.app/',
          code: 'https://github.com/alanortiz-dev/kalanban',
        },
        accent: 'blue',
      },
    ],
    deployments: [
      {
        name: 'Hivora Clothes',
        url: 'https://hivoraclothes.com/',
        category: 'E-commerce / marca de ropa personalizada',
        summary:
          'Sitio web para una marca de ropa y productos personalizados, pensado para presentar colecciones, destacar productos y facilitar la navegación hacia la compra o solicitud de piezas personalizadas.',
        description:
          'El enfoque estuvo en construir una experiencia visual clara, moderna y responsive, con una estructura orientada a producto y llamadas a la acción visibles.',
        focus: ['E-commerce', 'Presentación de producto', 'Diseño responsive', 'Estructura comercial'],
      },
      {
        name: 'Spark Creative House',
        url: 'https://www.sparkcreativehouse.com/',
        category: 'Sitio corporativo para agencia creativa y de marketing',
        summary:
          'Sitio web para una agencia creativa enfocado en comunicar sus servicios, áreas de especialización y propuesta de valor de forma clara y profesional.',
        description:
          'La estructura está pensada para reforzar credibilidad, ordenar la información comercial y guiar a potenciales clientes hacia el contacto.',
        focus: ['Sitio corporativo', 'Arquitectura de información', 'Comunicación de servicios', 'Generación de leads'],
      },
      {
        name: 'Pia Maria Coaching',
        url: 'https://www.pia-maria-coaching.com/',
        category: 'Sitio web para servicios de coaching',
        summary:
          'Sitio web para una práctica de coaching personal y profesional, diseñado para transmitir confianza, claridad y cercanía desde el primer contacto.',
        description:
          'La experiencia organiza servicios, recursos gratuitos y rutas de reserva para que los visitantes puedan entender la propuesta y agendar una primera conversación con menor fricción.',
        focus: ['Servicios profesionales', 'Confianza de marca', 'Conversión a llamada', 'Experiencia responsive'],
      },
      {
        name: 'Tatuajes en Valencia',
        url: 'https://tatuajesenvalencia.com/',
        category: 'Sitio local para artista/taller de tatuajes',
        summary:
          'Sitio web orientado a posicionamiento local y conversión, creado para presentar el trabajo artístico, explicar los servicios y facilitar el contacto de personas interesadas en tatuarse en Valencia.',
        description:
          'La estructura combina contenido visual, información práctica, galería, secciones de servicio y rutas directas hacia consulta o contacto.',
        focus: ['SEO local', 'Presentación visual', 'Contacto directo', 'Sitio responsive'],
      },
    ],
    experiences: [
      {
        period: '06/2025 – Actualidad',
        role: 'Frontend Developer / Consultor técnico',
        company: 'Profesional independiente',
        location: 'España · Austria',
        link: 'https://alanortizconsulting.com/',
        defaultOpen: false,
        stack: ['JavaScript', 'TypeScript', 'Vue.js', 'CMS', 'Formularios', 'Make', 'n8n', 'Automatización', 'UX operativa'],
        summary:
          'Trabajo en proyectos frontend, sitios para clientes y automatizaciones donde la prioridad es que la experiencia sea clara, funcional y útil para el negocio. Me enfoco en mejorar interfaces reales, formularios, flujos de usuario y procesos operativos conectando frontend, CMS, automatización y herramientas de comunicación.',
        highlights: [
          'Mejoré interfaces, formularios y flujos web en entornos reales usando JavaScript y TypeScript.',
          'Construí una interfaz conversacional modular con Vue.js y TypeScript, separando UI, lógica y tipos para facilitar mantenimiento y crecimiento.',
          'Conecté formularios, CMS y herramientas de automatización para mejorar captación de leads, comunicación y seguimiento operativo.',
          'Implementé flujos con Make y n8n para reducir tareas manuales en procesos de atención, seguimiento y operación diaria.',
        ],
      },
      {
        period: '02/2023 – 06/2025',
        role: 'Fullstack Developer',
        company: 'IT Globers',
        location: 'Valencia, España',
        defaultOpen: false,
        stack: ['VTEX IO', 'React', 'TypeScript', 'REST APIs', 'GraphQL', 'Playwright', 'E-commerce', 'Testing', 'Producción', 'Colaboración internacional'],
        summary:
          'Trabajé en proyectos internacionales de e-commerce sobre VTEX IO, colaborando con equipos distribuidos y con el equipo de VTEX Rumanía en iniciativas para mercados como Alemania, Reino Unido, Italia, Francia y España. Mi trabajo se enfocó en construir y mantener storefronts de alto tráfico con React y TypeScript, integrando APIs, cuidando flujos críticos y mejorando estabilidad en producción.',
        highlights: [
          'Construí y mantuve funcionalidades para storefronts de e-commerce en VTEX IO usando React y TypeScript.',
          'Colaboré en proyectos internacionales con equipos de VTEX y clientes en distintos mercados europeos.',
          'Integré servicios REST y GraphQL en flujos orientados al cliente, manteniendo consistencia entre releases.',
          'Protegí recorridos críticos como login, checkout y gestión de pedidos con pruebas end-to-end usando Playwright.',
          'Atendí incidencias de producción y apliqué mejoras puntuales en responsividad, accesibilidad y estabilidad de despliegues.',
        ],
        link: 'https://www.itglobers.com/',
      },
      {
        period: '08/2022 – 02/2023',
        role: 'Frontend Developer',
        company: 'Grupo Salinas',
        location: 'Ciudad de México, México',
        defaultOpen: false,
        stack: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Figma to UI', 'Responsive design', 'Accesibilidad', 'Performance'],
        summary:
          'Trabajé en interfaces de alto tráfico para Elektra, convirtiendo diseños en pantallas reales, responsivas y listas para producción. El foco estuvo en construir una experiencia consistente para usuarios finales, conectando frontend con APIs y cuidando accesibilidad, rendimiento y comportamiento móvil.',
        highlights: [
          'Desarrollé interfaces para Elektra con React, JavaScript y Tailwind CSS.',
          'Integré servicios backend mediante APIs REST en flujos orientados al cliente.',
          'Convertí diseños de Figma en pantallas responsivas, accesibles y listas para producción.',
          'Construí módulos reutilizables para acelerar entregas y mantener consistencia visual entre secciones.',
          'Mejoré accesibilidad, experiencia móvil y tiempos de carga en flujos clave.',
        ],
        link: 'https://www.gruposalinas.com/',
      },
      {
        period: '05/2021 – 04/2022',
        role: 'Fullstack Developer',
        company: 'Layer 7',
        location: 'Ciudad de México, México',
        defaultOpen: false,
        stack: ['PHP', 'Laravel', 'Symfony', 'SQL', 'REST APIs', 'Dashboards', 'Autenticación', 'Cifrado', 'PHPUnit', 'Sistemas críticos'],
        summary:
          'Trabajé en sistemas operativos de gran escala, combinando backend, microservicios, dashboards y procesamiento de datos. Fue una experiencia fuerte en entornos críticos, donde el rendimiento, la seguridad y la confiabilidad no eran "nice to have", eran parte central del producto.',
        highlights: [
          'Desarrollé microservicios con PHP, Laravel y Symfony para gestionar colas de campañas y enrutar más de 400M de llamadas mensuales.',
          'Diseñé y optimicé consultas SQL para procesamiento de datos a gran escala.',
          'Construí dashboards operativos para visualizar información crítica y apoyar la toma de decisiones.',
          'Integré servicios REST y reforcé seguridad mediante autenticación y cifrado.',
          'Implementé pruebas automatizadas con PHPUnit para mejorar la confiabilidad del sistema.',
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
        stack: ['Vue.js', 'JavaScript', 'REST APIs', 'Dashboards', 'Fintech', 'POS', 'Monitoreo', 'KPIs', 'Selenium', 'Procesos bancarios'],
        summary:
          'Trabajé en productos internos para fintech, operaciones POS y procesos bancarios, construyendo dashboards, servicios e interfaces enfocadas en claridad, estabilidad y monitoreo operativo. Fue una etapa clave para entender cómo se construyen herramientas donde la información debe ser confiable y fácil de leer.',
        highlights: [
          'Desarrollé aplicaciones web y dashboards internos para operaciones POS y procesos bancarios.',
          'Construí interfaces con Vue.js y JavaScript conectadas a servicios REST.',
          'Creé vistas de monitoreo en tiempo real y dashboards de KPIs para mejorar visibilidad operativa.',
          'Participé en el mantenimiento de servicios backend y mejoras de confiabilidad del sistema.',
          'Automaticé pruebas funcionales con Selenium para reducir riesgo de regresión en formularios y dashboards sensibles.',
        ],
      },
    ],
    about: [
      'Mi nombre es Alan Ortiz, tengo 30 años. Empecé en el mundo de la programación porque desde niño me gustaban mucho los videojuegos. Siempre me daba mucha curiosidad entender cómo algo en una pantalla podía moverse, responder y convertirse en una experiencia real para una persona.',
      'Posteriormente descubrí que quizás el desarrollo de videojuegos no sería mi campo profesional, porque descubrí la programación web y eso terminó llevándome al frontend. Hoy trabajo principalmente con React, Vue.js y TypeScript. Siempre me gusta poner mucha pasión en la construcción de interfaces y en la experiencia de usuario para productos reales.',
      'En 2023 me mudé a España para trabajar con equipos internacionales en proyectos de e-commerce para distintos mercados europeos. Esa experiencia me ayudó a ver el frontend no solo como código, sino como una mezcla de producto, negocio, usuarios y colaboración.',
      'Hoy me gusta construir cosas que se sientan simples para quien las usa, aunque por detrás tengan lógica sumamente compleja.',
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
      timeline: 'Professional experience',
      timelineIntro:
        'Experience building interfaces, integrations, and frontend systems across real products and operational environments.',
      about: 'About',
    },
    featuredProjects: [
      {
        name: 'FitLog',
        type: 'Nutrition tracker',
        status: 'In development',
        summary:
          'Functional mobile-first nutrition tracker focused on daily food logging, macro targets, and low-friction product flows.',
        problem:
          'Food logging is a repeated daily action, so the UI needs to be fast, clear, and easy to use on mobile.',
        role: 'Shows React + TypeScript product UI, AppContext state, onboarding, diary entries, custom foods, and macro summaries.',
        architecture:
          'The app includes landing, login, signup, onboarding, Today, add-food, barcode, search, custom-food, confirm-entry, history, and profile routes.',
        decisions: [
          'AppContext handles session state, diary entries, custom foods, and macro targets across the app.',
          'Separate routes support add-food, barcode scan, search, custom food creation, and confirm-entry flows.',
          'The Today dashboard keeps daily macro progress and logging actions one tap away.',
          'Demo mode, onboarding, history, and profile routes make the product flow feel functional rather than static.',
        ],
        detail: {
          context:
            'A mobile-first product for food logging, daily progress, and macro goals, designed around quick repeated sessions.',
          frontendArchitecture:
            'The app is organized around product routes: landing, auth, onboarding, Today, add food, search, custom food, history, and profile.',
          stateManagement:
            'AppContext centralizes session state, diary entries, custom foods, and macro targets so the flow stays consistent across screens.',
          componentDesign:
            'Components separate frequent actions, macro summaries, search, and confirmation so each screen can evolve without breaking the full flow.',
          uxDecisions:
            'I prioritized short navigation, demo mode, onboarding, and a Today screen focused on the primary action: log food and review progress.',
          improvementsNext:
            'I would connect a real food API, add richer entry editing, and strengthen tests around onboarding, logging, and macro calculations.',
        },
        impact:
          'It matters because it shows a working product flow, not just isolated screens: entry, onboarding, logging, daily summaries, and connected routes.',
        stack: ['React', 'TypeScript', 'Vite', 'AppContext', 'Mobile-first UI'],
        links: {
          preview: 'https://fitlog-nutrition-tracker.vercel.app/',
          code: 'https://github.com/alanortiz-dev/fitlog-nutrition-tracker',
        },
        accent: 'emerald',
      },
      {
        name: 'Dashboard Assistant',
        type: 'Conversational UI',
        summary:
          'Dashboard-embedded assistant built without a backend on purpose, focused on typed messages and reusable widget rendering.',
        problem:
          'Embedding an assistant into a dashboard requires clear component boundaries, predictable state, and extensible message types.',
        role: 'Shows Vue 3 Composition API, TypeScript discriminated unions, composable state management, and polymorphic message rendering.',
        architecture:
          'useChat owns loading, typing, mocked history, send-message flow, and reward redemption; MessageItem renders by message.type.',
        decisions: [
          'Small focused components: ChatFabButton, ChatWindow, MessageList, MessageBubble, MessageItem, and RewardCard.',
          'useChat acts as the single source of truth for history loading, typing state, and user actions.',
          'TextMessage, RewardMessage, and ChatMessage use discriminated unions for type-safe rendering.',
          'RewardCard works as an interactive widget inside the conversation instead of a separate UI block.',
        ],
        detail: {
          context:
            'A conversational assistant embedded inside a dashboard, built to show how chat UI can coexist with actionable widgets.',
          frontendArchitecture:
            'The interface separates trigger, window, message list, bubbles, type-based rendering, and interactive cards to keep boundaries clear.',
          stateManagement:
            'useChat acts as the single source of truth for initial history, loading, typing state, message sending, and reward redemption.',
          componentDesign:
            'MessageItem uses discriminated unions to render text or widgets without spreading fragile conditional logic across the UI.',
          uxDecisions:
            'The assistant works as a secondary dashboard layer, with typing feedback and mocked responses to communicate flow without depending on a backend.',
          improvementsNext:
            'I would add real streaming, conversation persistence, API error states, and accessibility tests for focus, keyboard use, and status announcements.',
        },
        impact:
          'It matters because it shows frontend architecture and typed conversational UI, not just a chat-looking widget.',
        stack: ['Vue 3', 'TypeScript', 'Vite', 'Composition API', 'Discriminated unions'],
        links: {
          preview: 'https://dashboard-assistant-chi.vercel.app/',
          code: 'https://github.com/alanortiz-dev/dashboard-assistant',
        },
        accent: 'slate',
      },
      {
        name: 'Kalanban',
        type: 'Kanban app',
        summary:
          'A familiar Kanban interface rebuilt to show UX polish, local persistence, and frontend microinteractions.',
        problem:
          'Kanban boards are common, so the value is not originality. The value is execution quality: drag and drop, persistence, modals, onboarding, tooltips, and theme support.',
        role: 'Shows React + TypeScript UI states, localStorage persistence, drag and drop, and reusable interaction patterns.',
        architecture:
          'Board manages columns and tasks, useLocalStorage keeps state between reloads, and onboarding plus modals support the interaction flow.',
        decisions: [
          'A dedicated useLocalStorage hook keeps tasks and columns persisted without a backend.',
          'Pragmatic Drag and Drop handles task movement between columns.',
          'Onboarding, guided tour, and a reusable confirmation modal make the UI easier to learn and safer to use.',
          'Framer Motion animations, custom tooltips, and light/dark mode improve interaction feedback.',
        ],
        detail: {
          context:
            'A kanban board built around a familiar pattern so the evaluation centers on interaction quality, persistence, and visual clarity.',
          frontendArchitecture:
            'Board coordinates columns and tasks, while hooks and interaction components keep persisted state, modals, and onboarding separated.',
          stateManagement:
            'useLocalStorage preserves columns and tasks between reloads; board state stays local to demonstrate a usable product without a backend.',
          componentDesign:
            'Columns, cards, modals, tooltips, and confirmations are modeled as reusable pieces for repeated board actions.',
          uxDecisions:
            'I included drag and drop, onboarding, guided help, confirmations, microinteractions, and theme support because usability details define a kanban app.',
          improvementsNext:
            'Next I would add multi-user sync, change history, filters, and E2E tests around drag and drop plus destructive actions.',
        },
        impact:
          'It matters because it turns a familiar pattern into a clear example of frontend execution quality and interaction design.',
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Pragmatic DnD', 'localStorage', 'Framer Motion'],
        links: {
          preview: 'https://kalanban.vercel.app/',
          code: 'https://github.com/alanortiz-dev/kalanban',
        },
        accent: 'blue',
      },
    ],
    deployments: [
      {
        name: 'Hivora Clothes',
        url: 'https://hivoraclothes.com/',
        category: 'E-commerce / Custom apparel brand',
        summary:
          'Website for a custom clothing and product brand, built to showcase collections, highlight products, and make it easy for users to explore items or request personalized pieces.',
        description:
          'The focus was on creating a clear, modern, and responsive experience with product-oriented structure and visible calls to action.',
        focus: ['E-commerce', 'Product presentation', 'Responsive design', 'Commercial structure'],
      },
      {
        name: 'Spark Creative House',
        url: 'https://www.sparkcreativehouse.com/',
        category: 'Corporate website for a creative and marketing agency',
        summary:
          'Website for a creative agency, structured to communicate its services, areas of expertise, and value proposition in a clear and professional way.',
        description:
          'The experience is designed to strengthen credibility, organize commercial information, and guide potential clients toward getting in touch.',
        focus: ['Corporate website', 'Information architecture', 'Service communication', 'Lead generation'],
      },
      {
        name: 'Pia Maria Coaching',
        url: 'https://www.pia-maria-coaching.com/',
        category: 'Website for coaching services',
        summary:
          'Website for a personal and professional coaching practice, designed to communicate trust, clarity, and warmth from the first interaction.',
        description:
          'The experience organizes services, free resources, and booking paths so visitors can understand the offer and schedule a first conversation with less friction.',
        focus: ['Professional services', 'Brand trust', 'Booking conversion', 'Responsive experience'],
      },
      {
        name: 'Tatuajes en Valencia',
        url: 'https://tatuajesenvalencia.com/',
        category: 'Local website for a tattoo artist / studio',
        summary:
          'Local website focused on visibility and conversion, created to showcase the artist’s work, explain the services, and make it easy for people interested in getting tattooed in Valencia to get in touch.',
        description:
          'The structure combines visual content, practical information, gallery sections, service pages, and direct contact paths.',
        focus: ['Local SEO', 'Visual presentation', 'Direct contact', 'Responsive website'],
      },
    ],
    experiences: [
      {
        period: '06/2025 – Present',
        role: 'Frontend Developer / Technical Consultant',
        company: 'Independent Professional',
        location: 'Spain · Austria',
        link: 'https://alanortizconsulting.com/',
        defaultOpen: false,
        stack: ['JavaScript', 'TypeScript', 'Vue.js', 'CMS', 'forms', 'Make', 'n8n', 'automation', 'operational UX'],
        summary:
          'I work on frontend projects, client websites, and automation flows where the priority is making the experience clear, functional, and useful for the business. My focus is on improving real interfaces, forms, user flows, and operational processes by connecting frontend work with CMS platforms, automation tools, and communication workflows.',
        highlights: [
          'Improved production web interfaces, forms, and user flows using JavaScript and TypeScript.',
          'Built a modular conversational interface with Vue.js and TypeScript, keeping UI, logic, and types clearly separated.',
          'Connected forms, CMS tools, and automation platforms to improve lead capture, communication, and follow-up processes.',
          'Created Make and n8n workflows to reduce manual work in customer-facing and operational tasks.',
        ],
      },
      {
        period: '02/2023 – 06/2025',
        role: 'Fullstack Developer',
        company: 'IT Globers',
        location: 'Valencia, Spain',
        defaultOpen: false,
        stack: ['VTEX IO', 'React', 'TypeScript', 'REST APIs', 'GraphQL', 'Playwright', 'e-commerce', 'testing', 'production support', 'international collaboration'],
        summary:
          'I worked on international e-commerce projects built on VTEX IO, collaborating with distributed teams and with the VTEX Romania team on projects for Germany, the UK, Italy, France, and Spain. My work focused on building and maintaining high-traffic storefronts with React and TypeScript, integrating APIs, protecting critical user flows, and improving production stability.',
        highlights: [
          'Built and maintained VTEX IO storefront features using React and TypeScript for high-traffic e-commerce environments.',
          'Collaborated with international teams across European markets, including projects connected to Germany, the UK, Italy, France, and Spain.',
          'Integrated REST and GraphQL services into customer-facing flows to keep the frontend consistent across releases.',
          'Protected critical journeys such as login, checkout, and order management with Playwright end-to-end tests.',
          'Fixed production issues and improved responsiveness, accessibility, and release stability through targeted frontend work.',
        ],
        link: 'https://www.itglobers.com/',
      },
      {
        period: '08/2022 – 02/2023',
        role: 'Frontend Developer',
        company: 'Grupo Salinas',
        location: 'Mexico City, Mexico',
        defaultOpen: false,
        stack: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Figma to UI', 'responsive design', 'accessibility', 'performance'],
        summary:
          'I worked on high-traffic interfaces for Elektra, turning product designs into responsive, accessible, production-ready screens. The work was focused on building a consistent customer experience, connecting frontend flows with APIs, and improving usability, mobile behavior, and performance.',
        highlights: [
          'Built customer-facing interfaces for Elektra using React, JavaScript, and Tailwind CSS.',
          'Integrated backend services through REST APIs in user-facing flows.',
          'Translated Figma designs into responsive, accessible, production-ready screens.',
          'Created reusable modules and shared UI patterns to speed up delivery and keep the experience consistent.',
          'Improved accessibility, mobile responsiveness, and load performance across key frontend flows.',
        ],
        link: 'https://www.gruposalinas.com/',
      },
      {
        period: '05/2021 – 04/2022',
        role: 'Fullstack Developer',
        company: 'Layer 7',
        location: 'Mexico City, Mexico',
        defaultOpen: false,
        stack: ['PHP', 'Laravel', 'Symfony', 'SQL', 'REST APIs', 'dashboards', 'authentication', 'encryption', 'PHPUnit', 'critical systems'],
        summary:
          'I worked on large-scale operational systems, combining backend services, microservices, dashboards, and data processing. This was a strong experience in critical environments where performance, security, and reliability were not optional, they were part of the product.',
        highlights: [
          'Built PHP, Laravel, and Symfony microservices to manage campaign queues and route more than 400M calls per month.',
          'Designed and optimized SQL queries for large-scale data processing.',
          'Created operational dashboards to visualize critical information and support business decisions.',
          'Integrated REST services and strengthened security through authentication and encryption.',
          'Added PHPUnit tests to improve reliability in critical software environments.',
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
        stack: ['Vue.js', 'JavaScript', 'REST APIs', 'dashboards', 'fintech', 'POS', 'monitoring', 'KPIs', 'Selenium', 'banking-related processes'],
        summary:
          'I worked on internal fintech products for POS operations and banking-related processes, building dashboards, services, and interfaces focused on clarity, stability, and operational monitoring. This experience helped me understand how to build tools where information needs to be reliable, easy to read, and useful for daily business decisions.',
        highlights: [
          'Built internal web applications and dashboards for POS operations and banking-related processes.',
          'Developed Vue.js and JavaScript interfaces connected to REST services.',
          'Created real-time monitoring views and KPI dashboards to improve operational visibility.',
          'Contributed to backend maintenance and reliability improvements.',
          'Automated functional tests with Selenium to reduce regression risk in sensitive forms and dashboards.',
        ],
      },
    ],
    about: [
      'My name is Alan Ortiz, and I’m 30 years old. I first got into programming because I loved videogames as a kid. I was always curious about how something on a screen could move, react, and turn into a real experience for someone.',
      'Later on, I realized that game development might not be the professional path for me. Then I discovered web development, and that eventually led me to frontend. Today, I mainly work with React, Vue.js, and TypeScript. I care a lot about building interfaces with intention and creating user experiences that feel useful, clear, and real.',
      'In 2023, I moved to Spain to work with international teams on e-commerce projects for different European markets. That experience changed the way I see frontend. For me, it is not just about code anymore, but about product, business, users, and collaboration.',
      'Today, I enjoy building things that feel simple for the people using them, even when there is a lot of complex logic behind the scenes.',
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
