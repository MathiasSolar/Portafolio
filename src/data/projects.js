export const PROJECTS_DATA = [
  {
    slug: 'neoroute',
    title: 'NeoRoute',
    subtitle: 'Sistema de gestión logística y optimización de rutas',
    type: 'Proyecto académico',
    statusLabel: 'Prototipo de software',
    statusType: 'prototype',
    summary: 'Proyecto académico orientado a centralizar y optimizar el abastecimiento de comedores solidarios mediante gestión de solicitudes, planificación de rutas y seguimiento de entregas.',
    problem: 'La ausencia de una plataforma digital centralizada dificultaba la comunicación, la asignación de pedidos, la planificación de rutas y el seguimiento de los camiones encargados de abastecer comedores solidarios.',
    participationRole: 'Desarrollador web',
    participationText: 'Participación como desarrollador web, trabajando en la interfaz administrativa y en funcionalidades relacionadas con la gestión, planificación y visualización del proceso logístico.',
    scope: [
      'Gestión centralizada de solicitudes',
      'Planificación y recomendación de rutas',
      'Asignación de pedidos a conductores',
      'Visualización de comedores y vehículos en mapa',
      'Seguimiento del estado de entregas',
      'Apoyo web para administradores y móvil para conductores'
    ],
    stack: ['Desarrollo web', 'TMS', 'Logística', 'Scrum', 'Planificación de rutas'],
    image: '/projects/neoroute-logo-rectangular.webp',
    imageAlt: 'Logo de NeoRoute',
    imageFit: 'cover',
    imagePosition: 'center',
    themeKey: 'primary',
    links: { 
      github: 'https://github.com/MathiasSolar/Proyectodesoftware',
      live: null 
    },
    featured: true
  },
  {
    slug: 'portal-gore-aysen',
    title: 'Gobierno Regional de Aysén',
    subtitle: 'Plataforma web institucional en producción',
    type: 'Plataforma institucional',
    statusLabel: 'En producción',
    statusType: 'production',
    summary: 'Administración, mantenimiento y evolución de la plataforma web institucional del Gobierno Regional de Aysén para facilitar el acceso ciudadano a información, noticias, concursos, licitaciones, documentación y servicios regionales.',
    participationText: 'Responsable de apoyar la administración y evolución continua del sitio, implementando contenidos, secciones, formularios y mejoras técnicas para mantener una plataforma institucional accesible, segura y actualizada.',
    responsibilities: [
      'Administración y actualización de WordPress',
      'Creación y mantenimiento de secciones institucionales',
      'Publicación de noticias, concursos, licitaciones y documentación',
      'Implementación y mantenimiento de formularios digitales',
      'Mejoras de navegación, accesibilidad y experiencia de usuario',
      'Respaldos, seguridad y resolución de incidentes',
      'Pruebas en entornos locales y de QA',
      'Analítica web y seguimiento de disponibilidad'
    ],
    stack: ['WordPress', 'Gestión web', 'Accesibilidad', 'Seguridad', 'Analítica web'],
    image: '/projects/goreaysen-preview.webp',
    imageAlt: 'Previsualización del sitio institucional del Gobierno Regional de Aysén',
    imageFit: 'cover',
    imagePosition: 'top',
    themeKey: 'secondary',
    links: { 
      github: null,
      live: 'https://www.goreaysen.cl/' 
    },
    featured: true
  }
];
