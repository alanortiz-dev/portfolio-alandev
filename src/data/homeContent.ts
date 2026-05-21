export type Locale = 'es' | 'en';

export interface HeroMetric {
  label: string;
  value: string;
}

export interface FeaturedProject {
  name: string;
  type: string;
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
        type: 'Nutrition tracker',
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
      {
        name: 'Tatuajes en Valencia',
        url: 'https://tatuajesenvalencia.com/',
        summary: 'Sitio orientado a conversión y visibilidad local para servicio real.',
        focus: ['Ejecución responsive', 'claridad comercial', 'SEO base', 'entrega usable'],
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
        type: 'Nutrition tracker',
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
      {
        name: 'Tatuajes en Valencia',
        url: 'https://tatuajesenvalencia.com/',
        summary: 'A production site built for local visibility and service conversion.',
        focus: ['Responsive execution', 'commercial clarity', 'baseline SEO', 'usable delivery'],
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
