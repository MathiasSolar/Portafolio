// Diccionario base de traducciones
const baseTranslations = {
  es: {
    skipLink: "Saltar al contenido principal",
    breadcrumbs: { navLabel: "Migas de pan", home: "Inicio" },
    nav: {
      profile: "Perfil",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contactar",
      menu: "MENÚ",
      home: "Inicio",
      aboutMe: "Más sobre mí",
      selectLanguage: "Seleccionar idioma",
      closeMenu: "Cerrar menú",
      openMenu: "Abrir menú",
      themeLight: "Cambiar a modo claro",
      themeDark: "Cambiar a modo oscuro",
      themeLabel: "Tema",
      mainNavigationLabel: "Navegación principal"
    },
    footer: {
      role: "Ingeniero en Informática",
      rights: "© 2026 Mathias Solar.",
      home: "Inicio",
      projects: "Proyectos",
      contact: "Contacto",
      linkedinAria: "Abrir perfil de Mathias Solar en LinkedIn",
      githubAria: "Abrir perfil de Mathias Solar en GitHub",
      spotifyAria: "Abrir perfil de Mathias Solar en Spotify",
      secondaryNavigationLabel: "Navegación secundaria",
      socialNetworksLabel: "Redes sociales"
    },
    hero: {
      subtitle: "Ingeniero en Informática",
      desc: "Transformando la complejidad en soluciones digitales elegantes. Especialista en desarrollo de software y modernización institucional.",
      btn: "Ver Proyectos",
      scrollAria: "Desplazarse hacia abajo"
    },
    about: {
      title: "Visión & Perfil",
      subtitle: "Conoce mi enfoque profesional, stack tecnológico, competencias y formación académica.",
      categories: {
        thinking: "Pensamiento",
        capabilities: "Capacidades",
        tools: "Herramientas",
        education: "Formación"
      },
      thinking: {
        title: "Pensamiento",
        steps: [
          { num: "01", shortTitle: "Comprender", title: "Comprender antes de construir", text: "Analizo el contexto, las necesidades de las personas y las restricciones del entorno antes de proponer una solución.", criteriaLabel: "Criterio", criteria: "El problema técnico no siempre es el problema real." },
          { num: "02", shortTitle: "Ordenar", title: "Convertir complejidad en prioridades", text: "Organizo requerimientos, dependencias y riesgos para distinguir lo importante de lo urgente y establecer un camino de trabajo claro.", criteriaLabel: "Criterio", criteria: "Una solución comienza cuando el problema puede explicarse con claridad." },
          { num: "03", shortTitle: "Diseñar", title: "Definir una solución viable", text: "Evalúo alternativas y estructuro una solución equilibrando experiencia de usuario, mantenibilidad, seguridad y recursos disponibles.", criteriaLabel: "Criterio", criteria: "La mejor arquitectura no es la más compleja, sino la que responde correctamente al contexto." },
          { num: "04", shortTitle: "Implementar", title: "Construir con orden y trazabilidad", text: "Transformo las decisiones en componentes, procesos y entregables verificables, priorizando una implementación progresiva y sostenible.", criteriaLabel: "Criterio", criteria: "El código es una parte de la solución, no la solución completa." },
          { num: "05", shortTitle: "Validar", title: "Comprobar antes de asumir", text: "Reviso funcionamiento, accesibilidad, rendimiento y comportamiento en escenarios reales antes de considerar terminado un trabajo.", criteriaLabel: "Criterio", criteria: "Una solución que no puede validarse tampoco puede mejorarse con confianza." },
          { num: "06", shortTitle: "Mejorar", title: "Aprender y evolucionar", text: "Documento lo realizado, observo resultados y utilizo la retroalimentación para corregir, simplificar y fortalecer la solución con el tiempo.", criteriaLabel: "Criterio", criteria: "La mejora continua convierte una entrega en una solución sostenible." }
        ],
        moreAboutMe: "Conocer más sobre mí"
      },
      capabilities: {
        title: "Capacidades",
        items: [
          { num: "01", shortTitle: "Ingeniería de software", title: "Construcción de soluciones sostenibles", text: "Diseño y desarrollo soluciones web considerando estructura, mantenibilidad, integración de datos y evolución futura.", aporteLabel: "Aporte", aporte: "Traducir necesidades complejas en componentes, sistemas y procesos claros." },
          { num: "02", shortTitle: "Transformación digital", title: "Modernización con propósito", text: "Analizo procesos y servicios para identificar oportunidades de mejora, digitalización y simplificación.", aporteLabel: "Aporte", aporte: "Conectar tecnología, personas y organización para generar cambios útiles y viables." },
          { num: "03", shortTitle: "Plataformas institucionales", title: "Continuidad y mejora de servicios digitales", text: "Administro, mantengo y optimizo plataformas institucionales, considerando disponibilidad, contenido, seguridad y experiencia de uso.", aporteLabel: "Aporte", aporte: "Asegurar que los servicios digitales funcionen de forma estable y comprensible." },
          { num: "04", shortTitle: "Datos e infraestructura", title: "Base técnica para decisiones confiables", text: "Trabajo con bases de datos, servidores, analítica y despliegues para sostener soluciones seguras y observables.", aporteLabel: "Aporte", aporte: "Convertir información y operación técnica en una base confiable para mejorar." },
          { num: "05", shortTitle: "UX y accesibilidad", title: "Tecnología comprensible para las personas", text: "Evalúo navegación, formularios, estructura visual y accesibilidad para reducir fricción y mejorar la interacción.", aporteLabel: "Aporte", aporte: "Diseñar soluciones que puedan ser utilizadas con claridad por distintos usuarios." }
        ],
        viewMore: "Ver capacidades y herramientas"
      },
      tools: {
        title: "Herramientas",
        categories: {
          software: "Desarrollo de software",
          data: "Datos y analítica",
          infra: "Plataformas e infraestructura"
        },
        viewMore: "Ver capacidades y herramientas"
      },
      education: {
        title: "Formación",
        labels: {
          degree: "Título profesional",
          diploma: "Diplomado",
          ongoing: "Formación continua"
        },
        items: [
          { title: "Universidad Técnica Federico Santa María", desc: "Ingeniería en Informática", details: "Formación integral en desarrollo de software, bases de datos y tecnologías web." },
          { title: "Universidad de Santiago de Chile", desc: "Diplomado en Transformación Digital", details: "Especialización en modernización de servicios y procesos institucionales." },
          { title: "Cursos de Udemy", desc: "Especialización", details: "Dominio de frameworks modernos y buenas prácticas." }
        ],
        viewMore: "Ver formación y credenciales"
      }
    },
    experience: {
      title: "Trayectoria.",
      subtitle: "Experiencia aplicada en tecnología, servicios digitales y modernización institucional.",
      summaryLabel: "Resumen",
      showDetails: "Ver responsabilidades y aportes",
      hideDetails: "Ocultar responsabilidades y aportes",
      showPast: "Ver experiencias anteriores",
      hidePast: "Ocultar experiencias anteriores",
      jobs: [
        {
          id: "gore-aysen",
          organization: "Gobierno Regional de Aysén",
          role: "Soporte Informático y Gestión Digital",
          period: "2025 — Actualidad",
          location: "Coyhaique, Región de Aysén",
          summary: "Trabajo en la administración, mejora y continuidad de plataformas digitales institucionales, integrando soporte técnico, experiencia de usuario, seguridad, analítica y modernización de servicios.",
          details: [
            {
              title: "Plataformas Institucionales",
              items: [
                "Administración, mantenimiento y optimización de sitios y servicios digitales.",
                "Gestión de contenidos, formularios y mejoras continuas de plataformas web."
              ]
            },
            {
              title: "Continuidad y Soporte",
              items: [
                "Resolución de incidencias y apoyo técnico a usuarios y áreas internas.",
                "Gestión de respaldos, ambientes de prueba y continuidad operacional."
              ]
            },
            {
              title: "Experiencia de Usuario y Accesibilidad",
              items: [
                "Mejoras de navegación, estructura visual, formularios y experiencia de uso.",
                "Revisión y aplicación de criterios de accesibilidad en servicios digitales."
              ]
            },
            {
              title: "Transformación Digital y Datos",
              items: [
                "Implementación y revisión de analítica digital mediante GA4.",
                "Apoyo a iniciativas de modernización, digitalización y mejora de procesos."
              ]
            }
          ]
        }
      ]
    },
    projects: {
      title: "Proyectos Destacados.",
      subtitle: "Selección de soluciones de desarrollo de software y plataformas digitales institucionales.",
      viewAll: "Ver todos los proyectos",
      detailsLabel: "Ver más detalles",
      challengeLabel: "Desafío / Problema:",
      participationLabel: "Participación Personal:",
      scopeLabel: "Alcance y Funcionalidades:",
      responsibilitiesLabel: "Responsabilidades Principales:",
      viewRepo: "Ver repositorio",
      viewLive: "Ver sitio en producción",
      typeLabels: {
        academic: "Proyecto académico",
        institutional: "Plataforma institucional"
      },
      statusLabels: {
        prototype: "Prototipo de software",
        production: "En producción"
      },
      items: [
        {
          slug: "neoroute",
          title: "NeoRoute",
          type: "Proyecto académico",
          statusLabel: "Prototipo de software",
          subtitle: "Sistema de gestión logística y optimización de rutas",
          summary: "Proyecto académico orientado a centralizar y optimizar el abastecimiento de comedores solidarios mediante gestión de solicitudes, planificación de rutas y seguimiento de entregas.",
          problem: "La ausencia de una plataforma digital centralizada dificultaba la comunicación, la asignación de pedidos, la planificación de rutas y el seguimiento de los camiones encargados de abastecer comedores solidarios.",
          participationText: "Participación como desarrollador web, trabajando en la interfaz administrativa y en funcionalidades relacionadas con la gestión, planificación y visualización del proceso logístico.",
          scope: [
            "Gestión centralizada de solicitudes",
            "Planificación y recomendación de rutas",
            "Asignación de pedidos a conductores",
            "Visualización de comedores y vehículos en mapa",
            "Seguimiento del estado de entregas",
            "Apoyo web para administradores y móvil para conductores"
          ],
          stack: ["Desarrollo web", "TMS", "Logística", "Scrum", "Planificación de rutas"],
          imageAlt: "Logo de NeoRoute"
        },
        {
          slug: "portal-gore-aysen",
          title: "Gobierno Regional de Aysén",
          type: "Plataforma institucional",
          statusLabel: "En producción",
          subtitle: "Plataforma web institucional en producción",
          summary: "Administración, mantenimiento y evolución de la plataforma web institucional del Gobierno Regional de Aysén para facilitar el acceso ciudadano a información, noticias, concursos, licitaciones, documentación y servicios regionales.",
          participationText: "Responsable de apoyar la administración y evolución continua del sitio, implementando contenidos, secciones, formularios y mejoras técnicas para mantener una plataforma institucional accesible, segura y actualizada.",
          responsibilities: [
            "Administración y actualización de WordPress",
            "Creación y mantenimiento de secciones institucionales",
            "Publicación de noticias, concursos, licitaciones y documentación",
            "Implementación y mantenimiento de formularios digitales",
            "Mejoras de navegación, accesibilidad y experiencia de usuario",
            "Respaldos, seguridad y resolución de incidentes",
            "Pruebas en entornos locales y de QA",
            "Analítica web y seguimiento de disponibilidad"
          ],
          stack: ["WordPress", "Gestión web", "Accesibilidad", "Seguridad", "Analítica web"],
          imageAlt: "Previsualización del sitio institucional del Gobierno Regional de Aysén"
        }
      ]
    },
    contactCta: {
      title: "Hablemos.",
      subtitle: "Estoy disponible para colaborar en proyectos de software, servicios digitales y transformación institucional.",
      contactBtn: "Contactarme",
      cvBtn: "Ver currículum",
      cvAria: "Vista previa del currículum profesional de Mathias Solar"
    },
    contact: {
      title: "Contacto.",
      subtitle: "Envíame un mensaje",
      desc: "Responderé a tu correo lo antes posible.",
      name: "Nombre",
      nameHolder: "Tu nombre",
      email: "Correo Electrónico",
      msg: "Mensaje",
      msgHolder: "Escribe tu mensaje...",
      bot: "No soy un robot",
      btn: "Enviar Mensaje",
      role: "Ingeniero en Informática",
      download: "Descargar CV"
    },
    aboutPage: {
      metaTitle: "Sobre mí | Mathias Solar",
      metaDesc: "Conoce los intereses, experiencias, motivaciones y entorno que influyen en la forma de crear y trabajar de Mathias Solar.",
      badge: "MÁS ALLÁ DEL CÓDIGO",
      title: "Sobre mí",
      lead: "Mi forma de crear está influida por el lugar donde vivo, la curiosidad por la tecnología y una búsqueda constante por comprender cómo funcionan las cosas.",
      locationBadge: "COYHAIQUE, REGIÓN DE AYSÉN · CHILE",
      mainPara1: "Construyo software desde una perspectiva analítica y pragmática, priorizando la claridad structural, el valor funcional y la durabilidad de cada plataforma.",
      mainPara2: "Entender el entorno donde se aplican las soluciones es clave para lograr productos significativos. La tecnología es un medio para resolver problemas concretos, conectar servicios e impulsar la autonomía de personas y organizaciones.",
      coordsLabel: "Coordenadas:",
      zoneLabel: "Zona:",
      zoneValue: "Patagonia Chilena",
      profileBadge: "PERFIL PATAGÓNICO",
      altitudeLabel: "ALTITUD: 210M",
      officialTimeLabel: "HORA OFICIAL: UTC-3",
      fromAysenLabel: "Desde Aysén",
      fromAysenTitle: "Entorno, territorio y templanza",
      fromAysenDesc: "Vivir en Coyhaique ha marcado mi relación con la naturaleza, las distancias y la tecnología. Ese contexto influye en mi interés por construir soluciones claras, útiles y capaces de funcionar en realidades diversas.",
      seasonsBadge: "Estaciones & Ambientes",
      seasonsSubdesc: "Cada estación cambia la forma de habitar y observar el entorno austral.",
      seasons: [
        { name: "Invierno", desc: "Nieve, frío intempestivo y luz tenue.", meaning: "Introspección, resistencia y calma interior." },
        { name: "Primavera", desc: "Descongelamiento y brote austral.", meaning: "Renovación, apertura y esperanza." },
        { name: "Verano", desc: "Días extensos y vistas despejadas.", meaning: "Vitalidad, expansión y libertad." },
        { name: "Otoño", desc: "Colores intensos y viento patagónico.", meaning: "Madurez, transición y profundidad." }
      ],
      interestsLabel: "Intereses & Exploración",
      interests: [
        { num: "01", title: "Naturaleza y territorio", description: "Paisajes, montañas, clima austral y espacios naturales que enseñan perspectiva, calma y resistencia." },
        { num: "02", title: "Espacio y exploración", description: "Planetas, astronomía, mapas y la escala del universo como fuente constante de curiosidad e inspiración." },
        { num: "03", title: "Historia y culturas", description: "Procesos históricos, países, territorios y distintas formas de comprender la evolución del mundo y sus instituciones." },
        { num: "04", title: "Tecnología y videojuegos", description: "Desarrollo, computadores, videojuegos competitivos y experiencias digitales. Me interesan la estrategia, la adaptación y el aprendizaje constante." },
        { num: "05", title: "Música", description: "Música ambiental, clásica, rock, metal y estilos electrónicos intensos para distintos momentos de concentración, energía y trabajo profundo." },
        { num: "06", title: "Símbolo & Perspectiva", description: "El águila representa perspectiva, enfoque y libertad para observar el conjunto antes de actuar." },
        { num: "07", title: "Ejercicio y bienestar", description: "El ejercicio me ayuda a mantener constancia, energía y equilibrio entre el trabajo mental y el bienestar físico." },
        { num: "08", title: "Aprendizaje continuo", description: "Me gusta aprender constantemente y explorar nuevas herramientas, ideas y perspectivas. Lo aprendido siempre puede profundizarse y complementarse." }
      ],
      personal: {
        sports: {
          badge: "PASIÓN POR EL DEPORTE",
          title: "Rendimiento & Estrategia",
          lead: "Me atraen las disciplinas donde la estrategia, la preparación, el talento y la capacidad de responder bajo presión pueden cambiar completamente un resultado.",
          footballTitle: "FÚTBOL",
          footballTeamsLabel: "Equipos",
          mmaTitle: "MMA / UFC",
          mmaRefLabel: "Referencia",
          mmaRef: "Peleadores del Cáucaso",
          racingTitle: "AUTOMOVILISMO",
          racingTeamLabel: "Equipo"
        },
        lol: {
          badge: "COMPETENCIA Y ESTRATEGIA · LEAGUE OF LEGENDS / AZIR",
          title: "Control territorial y exigencia mecánica",
          lead: "League of Legends ha sido uno de mis principales espacios competitivos. Azir es mi campeón principal y el personaje con el que más he desarrollado mi estilo de juego. La exigencia mecánica, la toma de decisiones y el control estratégico que requiere representan gran parte de lo que disfruto de la competencia.",
          mainChampDesc: "Campeón principal",
          globalRankLabel: "#13 MUNDIAL",
          globalRankDesc: "Mejor posición alcanzada",
          masterRankLabel: "MASTER · 200 LP",
          masterRankDesc: "Nivel competitivo sostenido",
          lasRankLabel: "#1 LAS",
          lasRankDesc: "Servidor latinoamericano sur"
        },
        rituals: {
          badge: "RITUALES COTIDIANOS",
          title: "Momentos & Pausas",
          lead: "Algunas bebidas también acompañan distintos momentos de conversación, concentración y descanso.",
          mateTitle: "MATE",
          mateDesc: "Pausa, conversación y calma.",
          coffeeTitle: "CAFÉ",
          coffeeDesc: "Rutina y concentración.",
          redbullTitle: "RED BULL",
          redbullDesc: "Una bebida que disfruto ocasionalmente por su sabor y energía."
        },
        travel: {
          badge: "UN MUNDO POR RECORRER",
          title: "Historia, culturas y nuevos horizontes",
          lead: "Me gustaría recorrer distintos países para conocer su historia, comprender otras culturas y descubrir su gastronomía. Viajar representa una forma de ampliar la perspectiva y aprender directamente de otros territorios y formas de vida.",
          tags: "Historia · Culturas · Gastronomía · Arquitectura · Territorios · Paisajes",
          coords: "45°34′S 72°04′O",
          mapLinkText: "MAPA ABIERTO"
        }
      },
      music: {
        badge: "MÚSICA & ESTADOS",
        title: "La música que acompaña mis momentos",
        lead: "No escucho siempre lo mismo. Cada playlist acompaña una forma distinta de concentrarme, liberar tensión, disfrutar o recuperar energía.",
        featuredBadge: "PLAYLIST DESTACADA",
        listenButton: "Escuchar en Spotify",
        listenAria: "Escuchar la playlist {name} en Spotify",
        oliseCategory: "RAP & TRAP FRANCÉS",
        oliseTitle: "Michael Olise",
        oliseDesc: "Michael Olise es mi jugador favorito y, a través de esa admiración, nació también mi interés por el rap y el trap francés.",
        chillCategory: "CALMA & CLARIDAD",
        chillTitle: "Chill",
        chillDesc: "Una selección para liberar tensión y recuperar claridad mental. Predominan la música clásica, los sonidos naturales, las aves y los ambientes tranquilos.",
        vibeCategory: "BUEN ÁNIMO",
        vibeTitle: "Vibe",
        vibeDesc: "Música actual, generalmente alegre, para levantar el ánimo, disfrutar el momento y pasar un buen rato.",
        madnessCategory: "INTENSIDAD & TRYHARD",
        madnessTitle: "Madness",
        madnessDesc: "Frenchcore para sesiones intensas, momentos de tryhard y situaciones en las que necesito mantener el cerebro al máximo.",
        rageCategory: "ROCK & METAL",
        rageTitle: "Rage",
        rageDesc: "Metal y rock para activar la energía, encender el ánimo y acompañar momentos más casuales o intensos."
      },
      ctaText: "Conoce más sobre la infraestructura, tecnologías y metodología de trabajo técnico que aplico en cada proyecto.",
      ctaButton: "Ver capacidades y herramientas",
      backHome: "Volver al inicio"
    },
    capabilitiesPage: {
      metaTitle: "Capacidades y herramientas | Mathias Solar",
      metaDesc: "Desarrollo web y backend, plataformas institucionales, infraestructura, bases de datos, transformación digital y entorno de trabajo técnico.",
      badge: "PERFIL TÉCNICO",
      title: "Capacidades & Herramientas",
      lead: "Combino desarrollo de software, administración de plataformas, infraestructura y transformación digital para construir soluciones útiles, mantenibles y alineadas con las necesidades de cada organización.",
      indexLabel: "Índice de áreas",
      relatedTechLabel: "Tecnologías relacionadas",
      keyConceptsLabel: "Conceptos clave",
      toolsSection: {
        badge: "HERRAMIENTAS DE TRABAJO",
        toolsIndexLabel: "Herramientas de trabajo",
        devTitle: "DESARROLLO",
        designTitle: "DISEÑO Y CONTENIDO",
        mgmtTitle: "GESTIÓN Y COLABORACIÓN",
        analyticsTitle: "ANALÍTICA Y MONITOREO",
        availabilityMonitoring: "Monitoreo de disponibilidad"
      },
      workspace: {
        badge: "MI ENTORNO DE DESARROLLO",
        title: "Mi entorno de desarrollo",
        lead: "Configuración, temas de color y extensiones que optimizan mi flujo de trabajo diario en VS Code.",
        colorThemeBadge: "Tema de color",
        iconThemeBadge: "Tema de iconos",
        formatterBadge: "Formato automático",
        errorLensBadge: "Errores en línea",
        indentBadge: "Lectura estructural",
        pokemonBadge: "Personalización",
        pokemonSecondaryBadge: "Personalización secundaria",
        pokemonDesc: "Detalle personal en la barra de estado del editor."
      },
      items: [
        {
          title: "Desarrollo frontend y web",
          description: "Construcción de interfaces web modernas, responsivas y mantenibles, orientadas a una experiencia clara y a necesidades funcionales reales.",
          levelMap: { React: "Uso profesional", Astro: "Experiencia aplicada" }
        },
        {
          title: "Backend y APIs",
          description: "Desarrollo de lógica de servidor, aplicaciones web, integración con bases de datos y construcción de servicios para conectar interfaces, sistemas y procesos."
        },
        {
          title: "Plataformas institucionales",
          description: "Administración, mantenimiento y modernización de sitios institucionales, gestión de contenidos, formularios, accesibilidad, analítica y seguridad web.",
          levelMap: { WordPress: "Uso profesional" }
        },
        {
          title: "Infraestructura y despliegue",
          description: "Configuración de entornos, respaldos, resolución de incidencias, despliegues y administración técnica en ambientes locales, QA y producción."
        },
        {
          title: "Datos y bases de datos",
          description: "Trabajo con bases de datos relacionales, modelado, consultas y preparación de arquitecturas orientadas a integración y explotación de información.",
          levelMap: { PostgreSQL: "En desarrollo", "Data Lake": "Aprendizaje actual" }
        },
        {
          title: "Transformación digital",
          description: "Análisis y modernización de procesos, servicios digitales, interoperabilidad, experiencia usuaria y adopción tecnológica en organizaciones públicas.",
          concepts: ["Interoperabilidad", "Servicios digitales", "Modernización institucional", "Gestión del cambio", "Seguridad y Zero Trust", "Indicadores y mejora continua"]
        }
      ],
      ctaText: "Estas capacidades se reflejan en proyectos de desarrollo, modernización institucional y gestión de plataformas digitales.",
      ctaButton: "Ver proyectos",
      backHome: "Volver al inicio"
    },
    educationPage: {
      metaTitle: "Formación y credenciales | Mathias Solar",
      metaDesc: "Formación profesional, títulos universitarios y acreditaciones continuas de Mathias Solar en informática y gestión pública.",
      badge: "PERFIL ACADÉMICO Y CREDENCIALES",
      title: "Formación & Credenciales",
      lead: "Base sólida en ingeniería informática complementada con certificaciones oficiales e inducción al sector público.",
      sectionCredentials: "Títulos y Certificados Verificados",
      sectionOther: "Especializaciones en Curso",
      sectionProtection: "Protección & Verificación",
      privacyTitle: "Privacidad y Protección de Datos",
      privacyDesc: "Por motivos de seguridad y resguardo de datos personales, las vistas previas publicadas omiten RUT, códigos de verificación y firmas digitales. Los documentos originales se presentan únicamente en procesos de validación profesional.",
      backHome: "Volver al inicio",
      credentials: [
        {
          title: "Ingeniero Informático",
          institution: "Universidad Técnica Federico Santa María",
          type: "Título Profesional",
          btnText: "Ver certificado de título",
          imgAlt: "Vista previa del certificado de título de Ingeniero Informático"
        },
        {
          title: "Licenciado en Ingeniería Informática",
          institution: "Universidad Técnica Federico Santa María",
          type: "Grado Académico",
          btnText: "Ver certificado de licenciatura",
          imgAlt: "Vista previa del certificado de Licenciado en Ingeniería Informática"
        },
        {
          title: "Inducción General a la Administración del Estado",
          institution: "Centro de Estudios de la Administración del Estado — Contraloría General de la República de Chile",
          duration: "30 horas cronológicas",
          scoreLabel: "Calificación",
          type: "Curso de Especialización",
          btnText: "Ver certificado",
          imgAlt: "Vista previa del certificado de aprobación del curso de Inducción General a la Administración del Estado"
        }
      ],
      otherStudies: [
        {
          title: "Diplomado en Transformación Digital",
          institution: "Universidad de Santiago de Chile",
          status: "En curso",
          description: "Especialización orientada a transformación organizacional, servicios digitales, interoperabilidad, datos, innovación y modernización del sector público."
        }
      ]
    },
    projectsPage: {
      metaTitle: "Proyectos | Mathias Solar",
      metaDesc: "Selección de proyectos de desarrollo de software, plataformas institucionales y soluciones digitales creadas por Mathias Solar.",
      badge: "PORTAFOLIO DE INGENIERÍA",
      title: "Proyectos",
      lead: "Una selección de casos de estudio detallando desafíos, arquitectura técnica y soluciones implementadas.",
      detailsLabel: "Ver más detalles",
      challengeLabel: "Desafío / Problema:",
      participationLabel: "Participación Personal:",
      scopeLabel: "Alcance y Funcionalidades:",
      responsibilitiesLabel: "Responsabilidades Principales:",
      viewRepo: "Ver repositorio",
      viewLive: "Ver sitio en producción",
      backHome: "Volver al inicio"
    },
    contactPage: {
      metaTitle: "Contacto | Mathias Solar",
      metaDesc: "Contacta a Mathias Solar para conversar sobre desarrollo, tecnología, colaboración y proyectos digitales.",
      badge: "CANALES Y FORMULARIO",
      title: "Contacto",
      lead: "Cuéntame sobre el proyecto, desafío o colaboración que tienes en mente.",
      profilesTitle: "Perfiles Profesionales",
      linkedinDesc: "Conectemos profesionalmente.",
      linkedinAria: "Visitar el perfil de Mathias Solar en LinkedIn",
      githubDesc: "Explora mis proyectos y código.",
      githubAria: "Visitar el perfil de Mathias Solar en GitHub",
      discordTag: "solaaaar",
      discordDesc: "Canal adicional de contacto.",
      discordAria: "Contactar a Mathias Solar por Discord",
      cvBtn: "Ver currículum",
      cvAria: "Vista previa del currículum profesional de Mathias Solar",
      location: "Coyhaique, Región de Aysén",
      availabilityText: "Actualmente disponible para participar en proyectos que busquen modernizar procesos y crear plataformas escalables.",
      backHome: "Volver al inicio",
      form: {
        nameLabel: "Tu Nombre",
        namePlaceholder: "Ej. Constanza Silva",
        emailLabel: "Correo Electrónico",
        emailPlaceholder: "tu.correo@ejemplo.com",
        messageLabel: "Mensaje",
        messagePlaceholder: "Describe el proyecto o consulta...",
        submitBtn: "Enviar mensaje",
        sendingBtn: "Enviando…",
        privacyText: "Tus datos se utilizarán únicamente para responder a tu mensaje.",
        successMsg: "Mensaje enviado correctamente. Me pondré en contacto a la brevedad.",
        errorMsg: "No fue posible enviar el mensaje. Por favor, inténtalo nuevamente.",
        requiredMsg: "Campo obligatorio",
        emailInvalidMsg: "Ingresa un correo electrónico válido",
        messageLengthMsg: "Escribe un mensaje con suficiente información"
      }
    },
    notFoundPage: {
      metaTitle: "Página no encontrada | Mathias Solar",
      metaDesc: "La página solicitada no existe, fue movida o la dirección ingresada no es correcta.",
      badge: "PÁGINA NO ENCONTRADA",
      code: "404",
      title: "Esta ruta se perdió en el espacio.",
      description: "La página que buscas no existe, fue movida o la dirección ingresada no es correcta.",
      requestedPathLabel: "Ruta solicitada:",
      homeButton: "Volver al inicio",
      projectsButton: "Ver proyectos",
      homeHref: "/",
      projectsHref: "/proyectos"
    },
    documentViewer: {
      closeAria: "Cerrar visor de documento",
      closeBtn: "Cerrar",
      openTab: "Abrir en otra pestaña",
      downloadCv: "Descargar CV",
      downloadDoc: "Descargar",
      openBtn: "Abrir",
      zoomOut: "Alejar documento",
      zoomIn: "Acercar documento",
      zoomReset: "Restablecer escala a 100%",
      zoomLabel: "ESCALA DE LECTURA",
      certInfo: "Información del certificado",
      viewDetails: "Ver detalles ▼",
      cvCategory: "CURRÍCULUM VITAE",
      cvTitle: "Currículum — Mathias Solar",
      cvDesc: "Ingeniero en Informática con experiencia en desarrollo web, plataformas digitales y transformación institucional.",
      certDisclaimer: "Vista previa del certificado. Los datos de verificación han sido protegidos.",
      spanishNote: "",
      pdfFallback: "Tu navegador no puede mostrar esta vista previa. Puedes abrir o descargar el currículum mediante los botones disponibles."
    }
  },

  en: {
    skipLink: "Skip to main content",
    breadcrumbs: { navLabel: "Breadcrumbs", home: "Home" },
    nav: {
      profile: "Profile",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      menu: "MENU",
      home: "Home",
      aboutMe: "More about me",
      selectLanguage: "Select language",
      closeMenu: "Close menu",
      openMenu: "Open menu",
      themeLight: "Switch to light mode",
      themeDark: "Switch to dark mode",
      themeLabel: "Theme",
      mainNavigationLabel: "Main navigation"
    },
    footer: {
      role: "Computer Engineer",
      rights: "© 2026 Mathias Solar.",
      home: "Home",
      projects: "Projects",
      contact: "Contact",
      linkedinAria: "Open Mathias Solar's LinkedIn profile",
      githubAria: "Open Mathias Solar's GitHub profile",
      spotifyAria: "Open Mathias Solar's Spotify profile",
      secondaryNavigationLabel: "Secondary navigation",
      socialNetworksLabel: "Social links"
    },
    hero: {
      subtitle: "Computer Engineer",
      desc: "Transforming complexity into elegant digital solutions. Specialist in software development and institutional modernization.",
      btn: "View Projects",
      scrollAria: "Scroll down"
    },
    about: {
      title: "Vision & Profile",
      subtitle: "Learn about my engineering methodology, technology stack, core competencies, and academic background.",
      categories: {
        thinking: "Mindset",
        capabilities: "Capabilities",
        tools: "Tools",
        education: "Education"
      },
      thinking: {
        title: "Mindset",
        steps: [
          { num: "01", shortTitle: "Understand", title: "Understand before building", text: "I analyze the context, human needs, and environment constraints before proposing a solution.", criteriaLabel: "Principle", criteria: "The technical issue is not always the real problem." },
          { num: "02", shortTitle: "Prioritize", title: "Turn complexity into clear priorities", text: "I organize requirements, dependencies, and risks to distinguish the essential from the urgent and establish a clear roadmap.", criteriaLabel: "Principle", criteria: "A solution begins when the problem can be explained with clarity." },
          { num: "03", shortTitle: "Design", title: "Define a sustainable architecture", text: "I evaluate alternatives and structure a solution balancing user experience, maintainability, security, and available resources.", criteriaLabel: "Principle", criteria: "The best architecture is not the most complex one, but the one that fits the context correctly." },
          { num: "04", shortTitle: "Implement", title: "Build with order and traceability", text: "I transform technical decisions into verifiable components, workflows, and deliverables, prioritizing progressive implementation.", criteriaLabel: "Principle", criteria: "Code is one component of a solution, not the whole solution." },
          { num: "05", shortTitle: "Validate", title: "Verify before assuming", text: "I review functionality, accessibility, performance, and real-world behavior before considering a project complete.", criteriaLabel: "Principle", criteria: "A solution that cannot be validated cannot be improved with confidence." },
          { num: "06", shortTitle: "Evolve", title: "Learn and continuously improve", text: "I document work, track metrics, and use feedback loops to refine, simplify, and strengthen the software over time.", criteriaLabel: "Principle", criteria: "Continuous improvement turns a delivery into a long-term sustainable solution." }
        ],
        moreAboutMe: "Learn more about me"
      },
      capabilities: {
        title: "Capabilities",
        items: [
          { num: "01", shortTitle: "Software Engineering", title: "Building sustainable software solutions", text: "I design and build web solutions focusing on structure, maintainability, data integration, and future scalability.", aporteLabel: "Impact", aporte: "Translating complex requirements into clear components, systems, and processes." },
          { num: "02", shortTitle: "Digital Transformation", title: "Purposeful modernization", text: "I analyze organizational processes and digital services to identify opportunities for streamlining and modernization.", aporteLabel: "Impact", aporte: "Connecting technology, people, and processes to drive effective digital adoption." },
          { num: "03", shortTitle: "Institutional Platforms", title: "Continuity and enhancement of digital services", text: "I manage, maintain, and optimize institutional platforms, focusing on uptime, content management, security, and usability.", aporteLabel: "Impact", aporte: "Ensuring public digital services remain stable, accessible, and user-friendly." },
          { num: "04", shortTitle: "Data & Infrastructure", title: "Technical foundation for reliable decisions", text: "I work with databases, web servers, analytics, and deployments to maintain secure and observable software environments.", aporteLabel: "Impact", aporte: "Turning technical telemetry and operational data into a dependable baseline for decision-making." },
          { num: "05", shortTitle: "UX & Accessibility", title: "Human-centered digital technology", text: "I evaluate navigation, form design, visual hierarchy, and web accessibility standards to minimize friction.", aporteLabel: "Impact", aporte: "Designing clear, inclusive digital experiences accessible to diverse user groups." }
        ],
        viewMore: "View capabilities & tools"
      },
      tools: {
        title: "Tools",
        categories: {
          software: "Software Development",
          data: "Data & Analytics",
          infra: "Platforms & Infrastructure"
        },
        viewMore: "View capabilities & tools"
      },
      education: {
        title: "Education",
        labels: {
          degree: "Professional Degree",
          diploma: "Postgraduate Diploma",
          ongoing: "Continuous Learning"
        },
        items: [
          { title: "Universidad Técnica Federico Santa María", desc: "Computer Engineer", details: "Comprehensive education in software engineering, database architectures, and web technologies." },
          { title: "Universidad de Santiago de Chile", desc: "Postgraduate Diploma in Digital Transformation", details: "Specialized training in public sector digital service modernization, governance, and process optimization." },
          { title: "Udemy Professional Certifications", desc: "Specialized Studies", details: "Applied mastery of modern frameworks, cloud tools, and software engineering best practices." }
        ],
        viewMore: "View education & credentials"
      }
    },
    experience: {
      title: "Experience.",
      subtitle: "Applied experience in software development, digital services, and public sector modernization.",
      summaryLabel: "Summary",
      showDetails: "View responsibilities & contributions",
      hideDetails: "Hide responsibilities & contributions",
      showPast: "View previous roles",
      hidePast: "Hide previous roles",
      jobs: [
        {
          id: "gore-aysen",
          organization: "Gobierno Regional de Aysén",
          role: "IT Support & Digital Service Management Specialist",
          period: "2025 — Present",
          location: "Coyhaique, Aysén Region · Chile",
          summary: "I work on the management, enhancement, and operational continuity of institutional digital platforms, integrating technical support, user experience, security, web analytics, and service modernization.",
          details: [
            {
              title: "Institutional Platforms",
              items: [
                "Administration, maintenance, and performance optimization of public portals and digital services.",
                "Content management, interactive web forms, and continuous platform enhancements."
              ]
            },
            {
              title: "Operational Continuity & Technical Support",
              items: [
                "Technical incident resolution and specialized support for internal staff and end users.",
                "Backup management, staging environment administration, and operational continuity protocols."
              ]
            },
            {
              title: "User Experience & Accessibility",
              items: [
                "Improvements to site navigation, visual hierarchy, digital form UX, and overall usability.",
                "Review and implementation of web accessibility (WCAG) standards across digital services."
              ]
            },
            {
              title: "Digital Transformation & Data",
              items: [
                "Implementation and monitoring of digital web analytics using Google Analytics 4.",
                "Technical support for public digital transformation initiatives and process digitalization."
              ]
            }
          ]
        }
      ]
    },
    projects: {
      title: "Featured Projects.",
      subtitle: "A selection of software engineering solutions and institutional digital platforms.",
      viewAll: "View all projects",
      detailsLabel: "View technical details",
      challengeLabel: "Challenge / Problem:",
      participationLabel: "Personal Contribution:",
      scopeLabel: "Scope & Features:",
      responsibilitiesLabel: "Key Responsibilities:",
      viewRepo: "View repository",
      viewLive: "View live website",
      typeLabels: {
        academic: "Academic Project",
        institutional: "Institutional Platform"
      },
      statusLabels: {
        prototype: "Software Prototype",
        production: "In Production"
      },
      items: [
        {
          slug: "neoroute",
          title: "NeoRoute",
          type: "Academic Project",
          statusLabel: "Software Prototype",
          subtitle: "Logistics management and route optimization system",
          summary: "Academic project designed to centralize and optimize supply distribution for community soup kitchens through request management, route planning, and delivery tracking.",
          problem: "The lack of a centralized digital platform complicated communication, order allocation, route planning, and vehicle tracking for supply distribution to community kitchens.",
          participationText: "Contributed as a web developer, focusing on the administrative dashboard and feature development for logistics management, route planning, and mapping visualization.",
          scope: [
            "Centralized request management",
            "Route planning and optimization recommendations",
            "Driver order allocation",
            "Map visualization of kitchens and vehicles",
            "Delivery status tracking",
            "Web platform for administrators and mobile support for drivers"
          ],
          stack: ["Web development", "TMS", "Logistics", "Scrum", "Route planning"],
          imageAlt: "NeoRoute logo"
        },
        {
          slug: "portal-gore-aysen",
          title: "Gobierno Regional de Aysén",
          type: "Institutional Platform",
          statusLabel: "In Production",
          subtitle: "Live institutional website in production",
          summary: "Administration, technical maintenance, and evolution of the official portal for Gobierno Regional de Aysén, facilitating public access to regional news, public tenders, documentation, and digital services.",
          participationText: "Responsible for supporting the administration and ongoing enhancement of the portal, building content sections, digital web forms, and technical improvements to ensure a secure, accessible, and updated platform.",
          responsibilities: [
            "WordPress administration and core updates",
            "Creation and maintenance of institutional content sections",
            "Publishing news, public tenders, announcements, and official documentation",
            "Implementation and maintenance of digital web forms",
            "Enhancements to navigation, web accessibility (WCAG), and user experience",
            "Backups, security maintenance, and technical incident resolution",
            "Testing across local and QA staging environments",
            "Web analytics setup (GA4) and uptime monitoring"
          ],
          stack: ["WordPress", "Web management", "Accessibility", "Security", "Web analytics"],
          imageAlt: "Preview of Gobierno Regional de Aysén institutional website"
        }
      ]
    },
    contactCta: {
      title: "Let's connect.",
      subtitle: "Available to collaborate on software projects, public digital services, and institutional transformation.",
      contactBtn: "Get in touch",
      cvBtn: "View résumé",
      cvAria: "Preview Mathias Solar's professional CV"
    },
    contact: {
      title: "Contact.",
      subtitle: "Send me a message",
      desc: "I'll reply to your email as soon as possible.",
      name: "Name",
      nameHolder: "Your name",
      email: "Email",
      msg: "Message",
      msgHolder: "Write your message...",
      bot: "I'm not a robot",
      btn: "Send Message",
      role: "Computer Engineer",
      download: "Download CV"
    },
    aboutPage: {
      metaTitle: "About me | Mathias Solar",
      metaDesc: "Discover the interests, background, motivation, and environment that shape Mathias Solar's approach to software engineering.",
      badge: "BEYOND THE CODE",
      title: "About me",
      lead: "My approach to engineering is shaped by where I live, a deep curiosity for technology, and a constant drive to understand how things work.",
      locationBadge: "COYHAIQUE, AYSÉN REGION · CHILE",
      mainPara1: "I build software from an analytical and pragmatic perspective, prioritizing structural clarity, functional value, and long-term maintainability.",
      mainPara2: "Understanding the environment where software is applied is essential to creating meaningful products. Technology is a means to solve concrete problems, connect services, and empower people and organizations.",
      coordsLabel: "Coordinates:",
      zoneLabel: "Zone:",
      zoneValue: "Chilean Patagonia",
      profileBadge: "PATAGONIAN PROFILE",
      altitudeLabel: "ALTITUDE: 210M",
      officialTimeLabel: "OFFICIAL TIME: UTC-3",
      fromAysenLabel: "Perspective from Aysén",
      fromAysenTitle: "Environment, territory, and resilience",
      fromAysenDesc: "Living in Coyhaique has shaped my relationship with nature, distance, and technology. This context fuels my commitment to building clear, reliable solutions capable of operating effectively across diverse settings.",
      seasonsBadge: "Seasons & Environment",
      seasonsSubdesc: "Each season alters the way one inhabits and observes the southern landscape.",
      seasons: [
        { name: "Winter", desc: "Snow, sudden cold, and soft light.", meaning: "Introspection, resilience, and inner calm." },
        { name: "Spring", desc: "Thawing and southern blooms.", meaning: "Renewal, openness, and hope." },
        { name: "Summer", desc: "Long days and open horizons.", meaning: "Vitality, expansion, and freedom." },
        { name: "Autumn", desc: "Vibrant colors and Patagonian winds.", meaning: "Maturity, transition, and depth." }
      ],
      interestsLabel: "Interests & Exploration",
      interests: [
        { num: "01", title: "Nature & Territory", description: "Landscapes, mountains, southern climate, and natural spaces that teach perspective, calm, and resilience." },
        { num: "02", title: "Space & Exploration", description: "Planets, astronomy, maps, and cosmic scales as a constant source of curiosity and inspiration." },
        { num: "03", title: "History & Cultures", description: "Historical events, countries, territories, and diverse perspectives on global evolution and institutions." },
        { num: "04", title: "Technology & Gaming", description: "Software development, hardware, competitive gaming, and digital experiences. Focused on strategy, adaptation, and continuous learning." },
        { num: "05", title: "Music", description: "Ambient, classical, rock, metal, and intense electronic music tailored for focus, energy, and deep work." },
        { num: "06", title: "Symbol & Perspective", description: "The eagle represents perspective, focus, and the freedom to observe the whole system before taking action." },
        { num: "07", title: "Fitness & Well-being", description: "Physical training helps me maintain consistency, energy, and balance between mental work and physical well-being." },
        { num: "08", title: "Continuous Learning", description: "I enjoy continuous learning and exploring new tools, ideas, and perspectives. Knowledge can always be deepened and expanded." }
      ],
      personal: {
        sports: {
          badge: "PASSION FOR SPORTS",
          title: "Performance & Strategy",
          lead: "I am drawn to disciplines where strategy, preparation, talent, and the ability to perform under pressure can completely change a result.",
          footballTitle: "FOOTBALL",
          footballTeamsLabel: "Teams",
          mmaTitle: "MMA / UFC",
          mmaRefLabel: "Reference",
          mmaRef: "Caucasian fighters",
          racingTitle: "MOTORSPORT",
          racingTeamLabel: "Team"
        },
        lol: {
          badge: "COMPETITION AND STRATEGY · LEAGUE OF LEGENDS / AZIR",
          title: "Territorial control and mechanical demand",
          lead: "League of Legends has been one of my main competitive arenas. Azir is my main champion and the character with whom I have developed my playstyle the most. The mechanical demand, decision-making, and strategic control it requires represent much of what I enjoy about competing.",
          mainChampDesc: "Main champion",
          globalRankLabel: "#13 GLOBAL",
          globalRankDesc: "Peak global position",
          masterRankLabel: "MASTER · 200 LP",
          masterRankDesc: "Sustained competitive level",
          lasRankLabel: "#1 LAS",
          lasRankDesc: "Latin America South server"
        },
        rituals: {
          badge: "DAILY RITUALS",
          title: "Moments & Pauses",
          lead: "Certain beverages also accompany different moments of conversation, focus, and rest.",
          mateTitle: "MATE",
          mateDesc: "Pause, conversation, and calm.",
          coffeeTitle: "COFFEE",
          coffeeDesc: "Routine and focus.",
          redbullTitle: "RED BULL",
          redbullDesc: "A drink I enjoy occasionally for its flavour and energy."
        },
        travel: {
          badge: "A WORLD TO EXPLORE",
          title: "History, cultures and new horizons",
          lead: "I would like to travel to different countries to discover their history, understand other cultures, and explore their gastronomy. Travelling represents a way to broaden perspective and learn directly from other territories and ways of life.",
          tags: "History · Cultures · Gastronomy · Architecture · Territories · Landscapes",
          coords: "45°34′S 72°04′W",
          mapLinkText: "OPEN MAP"
        }
      },
      music: {
        badge: "MUSIC & STATES",
        title: "Music that accompanies my moments",
        lead: "I don't always listen to the same thing. Each playlist accompanies a different way of focusing, releasing tension, enjoying, or regaining energy.",
        featuredBadge: "FEATURED PLAYLIST",
        listenButton: "Listen on Spotify",
        listenAria: "Listen to the {name} playlist on Spotify",
        oliseCategory: "FRENCH RAP & TRAP",
        oliseTitle: "Michael Olise",
        oliseDesc: "Michael Olise is my favorite player, and through that admiration, my interest in French rap and trap was born.",
        chillCategory: "CALM & CLARITY",
        chillTitle: "Chill",
        chillDesc: "A selection to release tension and recover mental clarity. Classical music, natural sounds, birds, and calm environments predominate.",
        vibeCategory: "GOOD VIBES",
        vibeTitle: "Vibe",
        vibeDesc: "Current, generally cheerful music to lift spirits, enjoy the moment, and have a good time.",
        madnessCategory: "INTENSITY & TRYHARD",
        madnessTitle: "Madness",
        madnessDesc: "Frenchcore for intense sessions, tryhard moments, and situations where I need to keep my brain at maximum capacity.",
        rageCategory: "ROCK & METAL",
        rageTitle: "Rage",
        rageDesc: "Metal and rock to boost energy, ignite spirits, and accompany casual or intense moments."
      },
      ctaText: "Learn more about the infrastructure, technologies, and technical methodology I apply in every project.",
      ctaButton: "View capabilities & tools",
      backHome: "Back to home"
    },
    capabilitiesPage: {
      metaTitle: "Capabilities & tools | Mathias Solar",
      metaDesc: "Frontend and backend web development, institutional platforms, infrastructure, databases, digital transformation, and technical workflow.",
      badge: "TECHNICAL PROFILE",
      title: "Capabilities & Tools",
      lead: "I combine software development, platform management, infrastructure, and digital transformation to build useful, maintainable solutions aligned with organizational needs.",
      indexLabel: "Area Index",
      relatedTechLabel: "Related technologies",
      keyConceptsLabel: "Key concepts",
      toolsSection: {
        badge: "WORK TOOLS",
        toolsIndexLabel: "Work tools",
        devTitle: "DEVELOPMENT",
        designTitle: "DESIGN AND CONTENT",
        mgmtTitle: "MANAGEMENT AND COLLABORATION",
        analyticsTitle: "ANALYTICS AND MONITORING",
        availabilityMonitoring: "Availability monitoring"
      },
      workspace: {
        badge: "MY DEVELOPMENT ENVIRONMENT",
        title: "My development environment",
        lead: "Configuration, colour themes and extensions that optimise my daily workflow in VS Code.",
        colorThemeBadge: "Colour theme",
        iconThemeBadge: "Icon theme",
        formatterBadge: "Automatic formatting",
        errorLensBadge: "Inline errors",
        indentBadge: "Structural readability",
        pokemonSecondaryBadge: "Secondary customisation",
        pokemonDesc: "A personal detail in the editor status bar."
      },
      items: [
        {
          title: "Frontend & Web Development",
          description: "Building modern, responsive, and maintainable web interfaces focused on clear user experience and real functional requirements.",
          levelMap: { React: "Professional experience", Astro: "Applied experience" }
        },
        {
          title: "Backend & APIs",
          description: "Server-side development, web applications, database integration, and building services to connect interfaces, systems, and processes."
        },
        {
          title: "Institutional Platforms",
          description: "Administration, maintenance, and modernization of institutional sites, content management, web forms, accessibility, analytics, and web security.",
          levelMap: { WordPress: "Professional experience" }
        },
        {
          title: "Infrastructure & Deployment",
          description: "Environment configuration, backups, incident resolution, deployments, and technical administration across local, QA, and production environments."
        },
        {
          title: "Data & Databases",
          description: "Working with relational databases, data modeling, queries, and structuring architectures for data integration and telemetry.",
          levelMap: { PostgreSQL: "Ongoing development", "Data Lake": "Active study" }
        },
        {
          title: "Digital Transformation",
          description: "Process analysis and modernization, digital services, interoperability, user experience, and technology adoption in public organizations.",
          concepts: ["Interoperability", "Digital services", "Institutional modernization", "Change management", "Security & Zero Trust", "Metrics & continuous improvement"]
        }
      ],
      ctaText: "These capabilities are reflected in software development projects, institutional modernization, and digital platform management.",
      ctaButton: "View projects",
      backHome: "Back to home"
    },
    educationPage: {
      metaTitle: "Education & credentials | Mathias Solar",
      metaDesc: "Professional degree, university education, and continuous credentials of Mathias Solar in computer engineering and public management.",
      badge: "ACADEMIC PROFILE & CREDENTIALS",
      title: "Education & Credentials",
      lead: "Solid baseline in computer engineering complemented with official credentials and public sector induction training.",
      sectionCredentials: "Verified Degrees & Certificates",
      sectionOther: "Ongoing Postgraduate Studies",
      sectionProtection: "Protection & Verification",
      privacyTitle: "Privacy & Data Protection",
      privacyDesc: "For privacy and personal data protection reasons, published previews omit national IDs, verification hashes, and digital signatures. Original documents are presented strictly during professional verification procedures.",
      backHome: "Back to home",
      credentials: [
        {
          title: "Computer Engineer",
          institution: "Universidad Técnica Federico Santa María",
          type: "Professional Degree",
          btnText: "View degree certificate",
          imgAlt: "Preview of Computer Engineer degree certificate"
        },
        {
          title: "Bachelor's Degree in Computer Engineering",
          institution: "Universidad Técnica Federico Santa María",
          type: "Academic Degree",
          btnText: "View bachelor's degree certificate",
          imgAlt: "Preview of Bachelor's Degree in Computer Engineering certificate"
        },
        {
          title: "General Induction to Public Administration",
          institution: "Centro de Estudios de la Administración del Estado — Contraloría General de la República de Chile",
          duration: "30 chronological hours",
          scoreLabel: "Final Grade",
          type: "Specialization Course",
          btnText: "View certificate",
          imgAlt: "Preview of course completion certificate for General Induction to Public Administration"
        }
      ],
      otherStudies: [
        {
          title: "Postgraduate Diploma in Digital Transformation",
          institution: "Universidad de Santiago de Chile",
          status: "In progress",
          description: "Specialized training focused on organizational transformation, digital public services, interoperability, data governance, and public sector modernization."
        }
      ]
    },
    projectsPage: {
      metaTitle: "Projects | Mathias Solar",
      metaDesc: "Selection of software engineering projects, institutional platforms, and digital solutions created by Mathias Solar.",
      badge: "ENGINEERING PORTFOLIO",
      title: "Projects",
      lead: "A selection of case studies detailing technical challenges, architecture, and implemented solutions.",
      detailsLabel: "View technical details",
      challengeLabel: "Challenge / Problem:",
      participationLabel: "Personal Contribution:",
      scopeLabel: "Scope & Features:",
      responsibilitiesLabel: "Key Responsibilities:",
      viewRepo: "View repository",
      viewLive: "View live website",
      backHome: "Back to home"
    },
    contactPage: {
      metaTitle: "Contact | Mathias Solar",
      metaDesc: "Get in touch with Mathias Solar to discuss software development, technology, collaborations, and digital projects.",
      badge: "CHANNELS & CONTACT FORM",
      title: "Contact",
      lead: "Tell me about the project, challenge, or collaboration you have in mind.",
      profilesTitle: "Professional Profiles",
      linkedinDesc: "Let's connect professionally.",
      linkedinAria: "Visit Mathias Solar's LinkedIn profile",
      githubDesc: "Explore my projects and repositories.",
      githubAria: "Visit Mathias Solar's GitHub profile",
      discordTag: "solaaaar",
      discordDesc: "Additional contact channel.",
      discordAria: "Contact Mathias Solar via Discord",
      cvBtn: "View résumé",
      cvAria: "Preview Mathias Solar's professional résumé",
      location: "Coyhaique, Aysén Region · Chile",
      availabilityText: "Currently available for projects focused on process modernization and building scalable digital platforms.",
      backHome: "Back to home",
      form: {
        nameLabel: "Name",
        namePlaceholder: "e.g. Constanza Silva",
        emailLabel: "Email address",
        emailPlaceholder: "your.email@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell me briefly about your project or enquiry...",
        submitBtn: "Send message",
        sendingBtn: "Sending…",
        privacyText: "Your details will only be used to respond to your message.",
        successMsg: "Message sent successfully. I will get back to you as soon as possible.",
        errorMsg: "The message could not be sent. Please try again.",
        requiredMsg: "Required field",
        emailInvalidMsg: "Enter a valid email address",
        messageLengthMsg: "Please provide a more detailed message"
      }
    },
    notFoundPage: {
      metaTitle: "Page not found | Mathias Solar",
      metaDesc: "The page you are looking for does not exist, may have been moved, or the address is incorrect.",
      badge: "PAGE NOT FOUND",
      code: "404",
      title: "This route was lost in space.",
      description: "The page you are looking for does not exist, may have been moved, or the address is incorrect.",
      requestedPathLabel: "Requested path:",
      homeButton: "Back to home",
      projectsButton: "View projects",
      homeHref: "/en/",
      projectsHref: "/en/proyectos"
    },
    documentViewer: {
      closeAria: "Close document viewer",
      closeBtn: "Close",
      openTab: "Open in new tab",
      downloadCv: "Download CV",
      downloadDoc: "Download",
      openBtn: "Open",
      zoomOut: "Zoom out document",
      zoomIn: "Zoom in document",
      zoomReset: "Reset zoom to 100%",
      zoomLabel: "READING SCALE",
      certInfo: "Certificate information",
      viewDetails: "View details ▼",
      cvCategory: "RÉSUMÉ / CV",
      cvTitle: "Résumé — Mathias Solar",
      cvDesc: "Computer Engineer with experience in web development, digital platforms, and institutional transformation.",
      certDisclaimer: "Certificate preview. Verification details have been protected.",
      spanishNote: "Original document issued in Spanish.",
      pdfFallback: "Your browser cannot display this preview. You can open or download the résumé using the available buttons."
    }
  },

  fr: {
    skipLink: "Aller au contenu principal",
    breadcrumbs: { navLabel: "Fil d'Ariane", home: "Accueil" },
    nav: {
      profile: "Profil",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contacter",
      menu: "MENU",
      home: "Accueil",
      aboutMe: "En savoir plus",
      selectLanguage: "Choisir la langue",
      closeMenu: "Fermer le menu",
      openMenu: "Ouvrir le menu",
      themeLight: "Passer au mode clair",
      themeDark: "Passer au mode sombre",
      themeLabel: "Thème",
      mainNavigationLabel: "Navigation principale"
    },
    footer: {
      role: "Ingénieur en informatique",
      rights: "© 2026 Mathias Solar.",
      home: "Accueil",
      projects: "Projets",
      contact: "Contact",
      linkedinAria: "Ouvrir le profil LinkedIn de Mathias Solar",
      githubAria: "Ouvrir le profil GitHub de Mathias Solar",
      spotifyAria: "Ouvrir le profil Spotify de Mathias Solar",
      secondaryNavigationLabel: "Navigation secondaire",
      socialNetworksLabel: "Réseaux sociaux"
    },
    hero: {
      subtitle: "Ingénieur en informatique",
      desc: "Transformer la complexité en solutions numériques élégantes. Spécialiste en développement logiciel et modernisation institutionnelle.",
      btn: "Voir les projets",
      scrollAria: "Défiler vers le bas"
    },
    about: {
      title: "Vision & Profil",
      subtitle: "Découvrez mon approche professionnelle, mon empilement technologique, mes compétences et mon parcours académique.",
      categories: {
        thinking: "Démarche",
        capabilities: "Compétences",
        tools: "Outils",
        education: "Formation"
      },
      thinking: {
        title: "Démarche",
        steps: [
          { num: "01", shortTitle: "Comprendre", title: "Comprendre avant de concevoir", text: "J'analyse le contexte, les besoins des utilisateurs et les contraintes de l'environnement avant de proposer une solution.", criteriaLabel: "Principe", criteria: "Le problème technique n'est pas toujours le véritable problème." },
          { num: "02", shortTitle: "Ordonner", title: "Transformer la complexité en priorités", text: "J'organise les exigences, les dépendances et les risques afin de distinguer l'essentiel de l'urgent et fixer une feuille de route claire.", criteriaLabel: "Principe", criteria: "Une solution débute lorsque le problème peut être expliqué clairement." },
          { num: "03", shortTitle: "Concevoir", title: "Définir une architecture pérenne", text: "J'évalue les alternatives et structure une solution équilibrant expérience utilisateur, maintenabilité, sécurité et ressources disponibles.", criteriaLabel: "Principe", criteria: "La meilleure architecture n'est pas la plus complexe, mais celle qui s'adapte au contexte." },
          { num: "04", shortTitle: "Mettre en œuvre", title: "Construire avec méthode et traçabilité", text: "Je traduis les choix techniques en composants, processus et livrables vérifiables en privilégiant un déploiement progressif.", criteriaLabel: "Principe", criteria: "Le code est un élément de la solution, pas la solution complète." },
          { num: "05", shortTitle: "Valider", title: "Vérifier avant d'avancer", text: "Je contrôle le fonctionnement, l'accessibilité, les performances et le comportement réel avant de valider un projet.", criteriaLabel: "Principe", criteria: "Une solution non mesurable ne peut pas être améliorée en toute confiance." },
          { num: "06", shortTitle: "Faire évoluer", title: "Apprendre et perfectionner", text: "Je documente le travail réalisé, observe les résultats et utilise les retours pour corriger, simplifier et consolider le système.", criteriaLabel: "Principe", criteria: "L'amélioration continue transforme une livraison en une solution durable." }
        ],
        moreAboutMe: "En savoir plus sur mon parcours"
      },
      capabilities: {
        title: "Compétences",
        items: [
          { num: "01", shortTitle: "Ingénierie logicielle", title: "Conception de solutions web pérennes", text: "Je conçois et développe des applications web axées sur la structure, la maintenabilité, l'intégration des données et l'évolutivité.", aporteLabel: "Valeur", aporte: "Traduire des exigences complexes en systèmes, composants et processus clairs." },
          { num: "02", shortTitle: "Transformation numérique", title: "Modernisation ciblée", text: "J'analyse les processus organisationnels et les services numériques pour identifier les opportunités de simplification et de modernisation.", aporteLabel: "Valeur", aporte: "Associer technologie, usagers et organisation pour conduire un changement durable." },
          { num: "03", shortTitle: "Plateformes institutionnelles", title: "Continuité et optimisation des services", text: "J'administre, maintiens et optimise les portails institutionnels en garantissant disponibilité, sécurité et facilité d'usage.", aporteLabel: "Valeur", aporte: "Garantir un fonctionnement stable, sécurisé et compréhensible des services publics." },
          { num: "04", shortTitle: "Données & Infrastructure", title: "Socle technique pour des décisions fiables", text: "Je travaille sur les bases de données, les serveurs, les outils d'analyse et les déploiements pour assurer des environnements stables.", aporteLabel: "Valeur", aporte: "Transformer l'exploitation technique en socle de confiance pour piloter les choix." },
          { num: "05", shortTitle: "UX & Accessibilité", title: "Des technologies accessibles à tous", text: "J'évalue la navigation, les formulaires, l'organisation visuelle et l'accessibilité web afin de réduire les frictions.", aporteLabel: "Valeur", aporte: "Concevoir des interfaces claires et inclusives adaptées à tous les profils." }
        ],
        viewMore: "Voir compétences et outils"
      },
      tools: {
        title: "Outils",
        categories: {
          software: "Développement logiciel",
          data: "Données & Analyse",
          infra: "Plateformes & Infrastructure"
        },
        viewMore: "Voir compétences et outils"
      },
      education: {
        title: "Formation",
        labels: {
          degree: "Diplôme d'Ingénieur",
          diploma: "Diplôme Universitaire",
          ongoing: "Formation continue"
        },
        items: [
          { title: "Universidad Técnica Federico Santa María", desc: "Ingénieur en informatique", details: "Formation complète en ingénierie logicielle, bases de données et technologies web." },
          { title: "Universidad de Santiago de Chile", desc: "Diplôme en Transformation Numérique", details: "Spécialisation en modernisation des services publics, gouvernance numérique et gestion du changement." },
          { title: "Certifications Udemy", desc: "Spécialisation continue", details: "Maîtrise des frameworks modernes et des meilleures pratiques de développement." }
        ],
        viewMore: "Voir formation et diplômes"
      }
    },
    experience: {
      title: "Parcours.",
      subtitle: "Expérience appliquée en ingénierie informatique, services numériques et modernisation publique.",
      summaryLabel: "Résumé",
      showDetails: "Voir les responsabilités et contributions",
      hideDetails: "Masquer les responsabilités et contributions",
      showPast: "Voir les expériences précédentes",
      hidePast: "Masquer les expériences précédentes",
      jobs: [
        {
          id: "gore-aysen",
          organization: "Gobierno Regional de Aysén",
          role: "Support Informatique & Gestion des Services Numériques",
          period: "2025 — Présent",
          location: "Coyhaique, Région d'Aysén · Chili",
          summary: "Je gère la maintenance, l'amélioration et la continuité opérationnelle des plateformes numériques institutionnelles, en intégrant support technique, ergonomie, sécurité, analyse web et modernisation des services.",
          details: [
            {
              title: "Plateformes Institutionnelles",
              items: [
                "Administration, maintenance et optimisation des performances des portails et services publics.",
                "Gestion des contenus, formulaires web et améliorations continues."
              ]
            },
            {
              title: "Continuité Opérationnelle & Support",
              items: [
                "Résolution d'incidents informatiques et assistance technique aux équipes et usagers.",
                "Gestion des sauvegardes, environnements de recette et suivi de continuité."
              ]
            },
            {
              title: "Expérience Utilisateur & Accessibilité",
              items: [
                "Amélioration de l'ergonomie, de la structure visuelle et de l'accessibilité des services.",
                "Application des directives d'accessibilité numérique (RGAA / WCAG)."
              ]
            },
            {
              title: "Transformation Numérique & Données",
              items: [
                "Mise en place et suivi de la mesure d'audience numérique via GA4.",
                "Support aux projets de dématérialisation et d'optimisation des processus."
              ]
            }
          ]
        }
      ]
    },
    projects: {
      title: "Projets à la Une.",
      subtitle: "Sélection de réalisations en développement logiciel et plateformes numériques institutionnelles.",
      viewAll: "Voir tous les projets",
      detailsLabel: "Voir les détails techniques",
      challengeLabel: "Défi / Problématique :",
      participationLabel: "Contribution personnelle :",
      scopeLabel: "Périmètre & Fonctionnalités :",
      responsibilitiesLabel: "Responsabilités principales :",
      viewRepo: "Voir le dépôt GitHub",
      viewLive: "Voir le site en production",
      typeLabels: {
        academic: "Projet académique",
        institutional: "Plateforme institutionnelle"
      },
      statusLabels: {
        prototype: "Prototype logiciel",
        production: "En production"
      },
      items: [
        {
          slug: "neoroute",
          title: "NeoRoute",
          type: "Projet académique",
          statusLabel: "Prototype logiciel",
          subtitle: "Système de gestion logistique et d'optimisation d'itinéraires",
          summary: "Projet académique visant à centraliser et optimiser l'approvisionnement des cantines solidaires grâce à la gestion des demandes, la planification d'itinéraires et le suivi des livraisons.",
          problem: "L'absence de plateforme numérique centralisée compliquait la communication, l'attribution des commandes, la planification des trajets et le suivi des véhicules d'approvisionnement.",
          participationText: "Participation en tant que développeur web, travaillant sur l'interface administrative et les fonctionnalités de gestion, planification et cartographie logistique.",
          scope: [
            "Gestion centralisée des demandes",
            "Planification et recommandation d'itinéraires",
            "Attribution des commandes aux chauffeurs",
            "Visualisation cartographique des cantines et des véhicules",
            "Suivi en temps réel des livraisons",
            "Interface web pour les administrateurs et support mobile pour les chauffeurs"
          ],
          stack: ["Développement web", "TMS", "Logistique", "Scrum", "Planification d'itinéraires"],
          imageAlt: "Logo de NeoRoute"
        },
        {
          slug: "portal-gore-aysen",
          title: "Gobierno Regional de Aysén",
          type: "Plateforme institutionnelle",
          statusLabel: "En production",
          subtitle: "Site web institutionnel en production",
          summary: "Administration, maintenance et évolution du portail web officiel du Gobierno Regional de Aysén afin de faciliter l'accès des citoyens aux actualités, appels d'offres, documents et services régionaux.",
          participationText: "Chargé d'apporter un soutien à l'administration et à l'évolution continue du site, avec le déploiement de contenus, formulaires et améliorations techniques pour garantir une plateforme accessible et sécurisée.",
          responsibilities: [
            "Administration et mise à jour de WordPress",
            "Création et maintenance des rubriques institutionnelles",
            "Publication des actualités, appels d'offres et documents officiels",
            "Mise en place et maintenance de formulaires numériques",
            "Améliorations de l'ergonomie, de l'accessibilité web et de l'expérience utilisateur",
            "Sauvegardes, sécurité et résolution d'incidents techniques",
            "Tests en environnements locaux et de recette (QA)",
            "Analyse d'audience web (GA4) et suivi de disponibilité"
          ],
          stack: ["WordPress", "Gestion web", "Accessibilité", "Sécurité", "Analyse web"],
          imageAlt: "Aperçu du site institutionnel du Gobierno Regional de Aysén"
        }
      ]
    },
    contactCta: {
      title: "Échangeons.",
      subtitle: "Disponible pour collaborer sur vos projets logiciels, services numériques et projets de modernisation.",
      contactBtn: "Me contacter",
      cvBtn: "Voir le CV",
      cvAria: "Aperçu du CV professionnel de Mathias Solar"
    },
    contact: {
      title: "Contact.",
      subtitle: "Envoyez-moi un message",
      desc: "Je répondrai à votre courriel dans les plus brefs délais.",
      name: "Nom",
      nameHolder: "Votre nom",
      email: "Courriel",
      msg: "Message",
      msgHolder: "Écrivez votre message...",
      bot: "Je ne suis pas un robot",
      btn: "Envoyer le message",
      role: "Ingénieur en informatique",
      download: "Télécharger le CV"
    },
    aboutPage: {
      metaTitle: "À propos de moi | Mathias Solar",
      metaDesc: "Découvrez les centres d'intérêt, l'expérience et l'environnement qui façonnent la démarche d'ingénierie de Mathias Solar.",
      badge: "AU-DELÀ DU CODE",
      title: "À propos de moi",
      lead: "Ma démarche d'ingénierie est façonnée par mon cadre de vie, une grande curiosité pour la technologie et le désir constant de comprendre le fonctionnement des systèmes.",
      locationBadge: "COYHAIQUE, RÉGION D'AYSÉN · CHILI",
      mainPara1: "Je conçois des logiciels avec une approche analytique et pragmatique, en privilégiant la clarté structurelle, la valeur fonctionnelle et la pérennité de chaque plateforme.",
      mainPara2: "Comprendre l'environnement dans lequel s'appliquent les solutions est essentiel pour créer des produits pertinents. La technologie est un moyen de résoudre des problèmes concrets, de connecter des services et d'encourager l'autonomie des usagers et des organisations.",
      coordsLabel: "Coordonnées :",
      zoneLabel: "Zone :",
      zoneValue: "Patagonie chilienne",
      profileBadge: "PROFIL PATAGONIEN",
      altitudeLabel: "ALTITUDE : 210M",
      officialTimeLabel: "HEURE OFFICIELLE : UTC-3",
      fromAysenLabel: "Regard depuis Aysén",
      fromAysenTitle: "Cadre de vie, territoire et sérénité",
      fromAysenDesc: "Vivre à Coyhaique a façonné mon rapport à la nature, aux distances et à la technologie. Ce contexte nourrit mon engagement à concevoir des solutions claires, utiles et capables de fonctionner dans des réalités variées.",
      seasonsBadge: "Saisons & Ambiances",
      seasonsSubdesc: "Chaque saison transforme la façon d'habiter et d'observer le territoire austral.",
      seasons: [
        { name: "Hiver", desc: "Neige, froid vif et lumière tamisée.", meaning: "Introspection, résilience et calme intérieur." },
        { name: "Printemps", desc: "Dégel et renouveau austral.", meaning: "Renouveau, ouverture et espérance." },
        { name: "Été", desc: "Longues journées et horizons dégagés.", meaning: "Vitalité, expansion et liberté." },
        { name: "Automne", desc: "Couleurs intenses et vent patagonien.", meaning: "Maturité, transition et profondeur." }
      ],
      interestsLabel: "Centres d'intérêt & Exploration",
      interests: [
        { num: "01", title: "Nature & Territoire", description: "Paysages, montagnes, climat austral et grands espaces qui enseignent la perspective, le calme et la résilience." },
        { num: "02", title: "Espace & Exploration", description: "Planètes, astronomie, cartes et l'échelle de l'univers comme source constante de curiosité et d'inspiration." },
        { num: "03", title: "Histoire & Cultures", description: "Processus historiques, nations, territoires et différentes façons de comprendre l'évolution du monde et des institutions." },
        { num: "04", title: "Technologie & Jeux vidéo", description: "Développement, matériel, jeux vidéo compétitifs et expériences numériques. Passionné par la stratégie, l'adaptation et l'apprentissage continu." },
        { num: "05", title: "Musique", description: "Musique ambiante, classique, rock, metal et styles électroniques intenses adaptés à la concentration, l'énergie et le travail profond." },
        { num: "06", title: "Symbole & Perspective", description: "L'aigle représente la perspective, le focus et la liberté d'observer l'ensemble avant d'agir." },
        { num: "07", title: "Exercice & Bien-être", description: "L'entraînement physique m'aide à maintenir la constance, l'énergie et l'équilibre entre effort mental et bien-être physique." },
        { num: "08", title: "Apprentissage continu", description: "J'aime apprendre continuellement et explorer de nouveaux outils, idées et perspectives. Les connaissances peuvent toujours être approfondies et enrichies." }
      ],
      personal: {
        sports: {
          badge: "PASSION POUR LE SPORT",
          title: "Performance & Stratégie",
          lead: "Je suis attiré par les disciplines où la stratégie, la préparation, le talent et la capacité à répondre sous pression peuvent inverser un résultat.",
          footballTitle: "FOOTBALL",
          footballTeamsLabel: "Équipes",
          mmaTitle: "MMA / UFC",
          mmaRefLabel: "Référence",
          mmaRef: "Combattants du Caucase",
          racingTitle: "SPORT AUTOMOBILE",
          racingTeamLabel: "Équipe"
        },
        lol: {
          badge: "COMPÉTITION ET STRATÉGIE · LEAGUE OF LEGENDS / AZIR",
          title: "Contrôle territorial et exigence mécanique",
          lead: "League of Legends a été l'un de mes principaux espaces compétitifs. Azir est mon champion principal et le personnage avec lequel j'ai le plus développé mon style de jeu. L'exigence mécanique, la prise de décision et le contrôle stratégique qu'il requiert représentent ce que j'aime dans la compétition.",
          mainChampDesc: "Champion principal",
          globalRankLabel: "#13 MONDIAL",
          globalRankDesc: "Meilleure position atteinte",
          masterRankLabel: "MASTER · 200 LP",
          masterRankDesc: "Niveau compétitif maintenu",
          lasRankLabel: "#1 LAS",
          lasRankDesc: "Serveur Amérique du Sud"
        },
        rituals: {
          badge: "RITUELS QUOTIDIENS",
          title: "Moments & Pauses",
          lead: "Certaines boissons accompagnent également différents moments de conversation, de concentration et de repos.",
          mateTitle: "MATÉ",
          mateDesc: "Pause, conversation et calme.",
          coffeeTitle: "CAFÉ",
          coffeeDesc: "Routine et concentration.",
          redbullTitle: "RED BULL",
          redbullDesc: "Une boisson que j'apprécie occasionnellement pour son goût et son énergie."
        },
        travel: {
          badge: "UN MONDE À PARCOURIR",
          title: "Histoire, cultures et nouveaux horizons",
          lead: "J'aimerais parcourir différents pays pour connaître leur histoire, comprendre d'autres cultures et découvrir leur gastronomie. Voyager représente un moyen d'élargir ses perspectives et d'apprendre directement d'autres territoires et modes de vie.",
          tags: "Histoire · Cultures · Gastronomie · Architecture · Territoires · Paysages",
          coords: "45°34′S 72°04′O",
          mapLinkText: "OUVRIR LA CARTE"
        }
      },
      music: {
        badge: "MUSIQUE & ÉTATS",
        title: "La musique qui accompagne mes moments",
        lead: "Je n'écoute pas toujours la même chose. Chaque playlist accompagne une manière différente de me concentrer, d'évacuer la tension, de profiter ou de retrouver de l'énergie.",
        featuredBadge: "PLAYLIST EN VEDETTE",
        listenButton: "Écouter sur Spotify",
        listenAria: "Écouter la playlist {name} sur Spotify",
        oliseCategory: "RAP & TRAP FRANÇAIS",
        oliseTitle: "Michael Olise",
        oliseDesc: "Michael Olise est mon joueur préféré et, à travers cette admiration, est né mon intérêt pour le rap et la trap français.",
        chillCategory: "CALME & CLARTÉ",
        chillTitle: "Chill",
        chillDesc: "Une sélection pour évacuer la tension et retrouver une clarté mentale. La musique classique, les sons naturels, les oiseaux et les ambiances calmes prédominent.",
        vibeCategory: "BONNE HUMEUR",
        vibeTitle: "Vibe",
        vibeDesc: "Musique actuelle, généralement joyeuse, pour remonter le moral, profiter du moment et passer un bon moment.",
        madnessCategory: "INTENSITÉ & TRYHARD",
        madnessTitle: "Madness",
        madnessDesc: "Frenchcore pour les sessions intenses, les moments de tryhard et les situations où j'ai besoin de garder mon cerveau au maximum.",
        rageCategory: "ROCK & METAL",
        rageTitle: "Rage",
        rageDesc: "Metal et rock pour stimuler l'énergie, enflammer les esprits et accompagner des moments occasionnels ou intenses."
      },
      ctaText: "Découvrez l'infrastructure, les technologies et la méthodologie technique que j'applique dans chaque projet.",
      ctaButton: "Voir compétences et outils",
      backHome: "Retour à l'accueil"
    },
    capabilitiesPage: {
      metaTitle: "Compétences et outils | Mathias Solar",
      metaDesc: "Développement web frontend et backend, plateformes institutionnelles, infrastructure, bases de données, transformation numérique et environnement technique.",
      badge: "PROFIL TECHNIQUE",
      title: "Compétences & Outils",
      lead: "J'associe développement logiciel, gestion de plateformes, infrastructure et transformation numérique pour concevoir des solutions utiles, pérennes et adaptées aux enjeux de chaque organisation.",
      indexLabel: "Sommaire des domaines",
      relatedTechLabel: "Technologies associées",
      keyConceptsLabel: "Concepts clés",
      toolsSection: {
        badge: "OUTILS DE TRAVAIL",
        toolsIndexLabel: "Outils de travail",
        devTitle: "DÉVELOPPEMENT",
        designTitle: "DESIGN ET CONTENU",
        mgmtTitle: "GESTION ET COLLABORATION",
        analyticsTitle: "ANALYSE ET SUIVI",
        availabilityMonitoring: "Suivi de disponibilité"
      },
      workspace: {
        badge: "MON ENVIRONNEMENT DE DÉVELOPPEMENT",
        title: "Mon environnement de développement",
        lead: "Configuration, thèmes de couleurs et extensions qui optimisent mon flux de travail quotidien dans VS Code.",
        colorThemeBadge: "Thème de couleurs",
        iconThemeBadge: "Thème d’icônes",
        formatterBadge: "Formatage automatique",
        errorLensBadge: "Erreurs en ligne",
        indentBadge: "Lecture structurelle",
        pokemonSecondaryBadge: "Personnalisation secondaire",
        pokemonDesc: "Un détail personnel dans la barre d’état de l’éditeur."
      },
      items: [
        {
          title: "Développement frontend & web",
          description: "Conception d'interfaces web modernes, réactives et maintenables, axées sur une expérience utilisateur claire et des besoins fonctionnels réels.",
          levelMap: { React: "Usage professionnel", Astro: "Expérience appliquée" }
        },
        {
          title: "Backend & APIs",
          description: "Développement de la logique serveur, applications web, intégration de bases de données et création de services pour connecter interfaces, systèmes et processus."
        },
        {
          title: "Plateformes institutionnelles",
          description: "Gestion, maintenance et modernisation de sites institutionnels, gestion de contenus, formulaires, accessibilité, mesure d'audience et sécurité web.",
          levelMap: { WordPress: "Usage professionnel" }
        },
        {
          title: "Infrastructure & Déploiement",
          description: "Configuration d'environnements, sauvegardes, résolution d'incidents, déploiements et administration technique en environnements locaux, recette et production."
        },
        {
          title: "Données & Bases de données",
          description: "Conception et gestion de bases de données relationnelles, modélisation, requêtes et préparation d'architectures d'intégration de données.",
          levelMap: { PostgreSQL: "En perfectionnement", "Data Lake": "Apprentissage actuel" }
        },
        {
          title: "Transformation numérique",
          description: "Analyse et modernisation des processus, services numériques, interopérabilité, expérience utilisateur et adoption technologique dans les organisations publiques.",
          concepts: ["Interopérabilité", "Services numériques", "Modernisation institutionnelle", "Conduite du changement", "Sécurité & Zero Trust", "Indicateurs & amélioration continue"]
        }
      ],
      ctaText: "Ces compétences se traduisent dans des projets de développement, de modernisation institutionnelle et de gestion de plateformes numériques.",
      ctaButton: "Voir les projets",
      backHome: "Retour à l'accueil"
    },
    educationPage: {
      metaTitle: "Formation et diplômes | Mathias Solar",
      metaDesc: "Formation académique, diplômes d'ingénieur et accréditations continues de Mathias Solar en informatique et gestion publique.",
      badge: "PARCOURS ACADÉMIQUE ET ATTESTATIONS",
      title: "Formation & Diplômes",
      lead: "Socle solide en ingénierie informatique complété par des attestations officielles et une préparation au secteur public.",
      sectionCredentials: "Diplômes et Attestations Vérifiés",
      sectionOther: "Spécialisations en Cours",
      sectionProtection: "Protection & Vérification",
      privacyTitle: "Confidentialité et Protection des Données",
      privacyDesc: "Pour des raisons de sécurité et de protection des données personnelles, les aperçus publiés masquent les identifiants nationaux, codes de vérification et signatures numériques. Les documents originaux sont présentés exclusivement lors des démarches de validation professionnelle.",
      backHome: "Retour à l'accueil",
      credentials: [
        {
          title: "Ingénieur en informatique",
          institution: "Universidad Técnica Federico Santa María",
          type: "Diplôme d'Ingénieur",
          btnText: "Voir le certificat de diplôme",
          imgAlt: "Aperçu du certificat de diplôme d'Ingénieur en informatique"
        },
        {
          title: "Licence en ingénierie informatique",
          institution: "Universidad Técnica Federico Santa María",
          type: "Grade Académique",
          btnText: "Voir le certificat de licence",
          imgAlt: "Aperçu du certificat de Licence en ingénierie informatique"
        },
        {
          title: "Induction générale à l'administration de l'État",
          institution: "Centro de Estudios de la Administración del Estado — Contraloría General de la República de Chile",
          duration: "30 heures chronologiques",
          scoreLabel: "Note finale",
          type: "Cours de Spécialisation",
          btnText: "Voir le certificat",
          imgAlt: "Aperçu du certificat de réussite du cours d'Induction générale à l'administration de l'État"
        }
      ],
      otherStudies: [
        {
          title: "Diplôme en Transformation Numérique",
          institution: "Universidad de Santiago de Chile",
          status: "En cours",
          description: "Spécialisation axée sur la transformation organisationnelle, les services numériques publics, l'interopérabilité, la gouvernance des données et la modernisation publique."
        }
      ]
    },
    projectsPage: {
      metaTitle: "Projets | Mathias Solar",
      metaDesc: "Sélection de projets de développement logiciel, plateformes institutionnelles et solutions numériques créés par Mathias Solar.",
      badge: "PORTFOLIO D'INGÉNIERIE",
      title: "Projets",
      lead: "Une sélection d'études de cas détaillant les défis techniques, l'architecture et les solutions mises en œuvre.",
      detailsLabel: "Voir les détails techniques",
      challengeLabel: "Défi / Problématique :",
      participationLabel: "Contribution personnelle :",
      scopeLabel: "Périmètre & Fonctionnalités :",
      responsibilitiesLabel: "Responsabilités principales :",
      viewRepo: "Voir le dépôt GitHub",
      viewLive: "Voir le site en production",
      backHome: "Retour à l'accueil"
    },
    contactPage: {
      metaTitle: "Contact | Mathias Solar",
      metaDesc: "Contactez Mathias Solar pour échanger sur le développement logiciel, la technologie, les collaborations et projets numériques.",
      badge: "CANAUX & FORMULAIRE",
      title: "Contact",
      lead: "Présentez-moi le projet, le défi ou la collaboration que vous envisagez.",
      profilesTitle: "Profils professionnels",
      linkedinDesc: "Restons en contact.",
      linkedinAria: "Visiter le profil LinkedIn de Mathias Solar",
      githubDesc: "Découvrez mes projets et mon code.",
      githubAria: "Visiter le profil GitHub de Mathias Solar",
      discordTag: "solaaaar",
      discordDesc: "Canal de contact complémentaire.",
      discordAria: "Contacter Mathias Solar sur Discord",
      cvBtn: "Voir le CV",
      cvAria: "Aperçu du CV professionnel de Mathias Solar",
      location: "Coyhaique, Région d'Aysén · Chili",
      availabilityText: "Actuellement disponible pour collaborer sur des projets de modernisation des processus et de création de plateformes évolutives.",
      backHome: "Retour à l'accueil",
      form: {
        nameLabel: "Nom",
        namePlaceholder: "Ex. Constanza Silva",
        emailLabel: "Adresse e-mail",
        emailPlaceholder: "votre.email@exemple.com",
        messageLabel: "Message",
        messagePlaceholder: "Présentez brièvement votre projet ou votre demande...",
        submitBtn: "Envoyer le message",
        sendingBtn: "Envoi en cours…",
        privacyText: "Vos informations seront utilisées uniquement pour répondre à votre message.",
        successMsg: "Message envoyé avec succès. Je vous répondrai dans les plus brefs délais.",
        errorMsg: "Le message n'a pas pu être envoyé. Veuillez réessayer.",
        requiredMsg: "Champ obligatoire",
        emailInvalidMsg: "Saisissez une adresse e-mail valide",
        messageLengthMsg: "Veuillez fournir un message plus détaillé"
      }
    },
    notFoundPage: {
      metaTitle: "Page introuvable | Mathias Solar",
      metaDesc: "La page que vous recherchez n’existe pas, a peut-être été déplacée ou l’adresse saisie est incorrecte.",
      badge: "PAGE INTROUVABLE",
      code: "404",
      title: "Cette route s’est perdue dans l’espace.",
      description: "La page que vous recherchez n’existe pas, a peut-être été déplacée ou l’adresse saisie est incorrecte.",
      requestedPathLabel: "Chemin demandé :",
      homeButton: "Retour à l’accueil",
      projectsButton: "Voir les projets",
      homeHref: "/fr/",
      projectsHref: "/fr/proyectos"
    },
    documentViewer: {
      closeAria: "Fermer le visualiseur de document",
      closeBtn: "Fermer",
      openTab: "Ouvrir dans un nouvel onglet",
      downloadCv: "Télécharger le CV",
      downloadDoc: "Télécharger",
      openBtn: "Ouvrir",
      zoomOut: "Zoom arrière",
      zoomIn: "Zoom avant",
      zoomReset: "Réinitialiser le zoom à 100%",
      zoomLabel: "ÉCHELLE DE LECTURE",
      certInfo: "Informations sur le certificat",
      viewDetails: "Voir les détails ▼",
      cvCategory: "CURRICULUM VITAE",
      cvTitle: "CV — Mathias Solar",
      cvDesc: "Ingénieur en informatique avec expérience en développement web, plateformes numériques et modernisation institutionnelle.",
      certDisclaimer: "Aperçu du certificat. Les données de vérification ont été protégées.",
      spanishNote: "Le document est disponible en espagnol.",
      pdfFallback: "Votre navigateur ne peut pas afficher cet aperçu. Vous pouvez ouvrir ou télécharger le CV via les boutons disponibles."
    }
  },

  pt: {
    skipLink: "Pular para o conteúdo principal",
    breadcrumbs: { navLabel: "Trilha de navegação", home: "Início" },
    nav: {
      profile: "Perfil",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
      menu: "MENU",
      home: "Início",
      aboutMe: "Sobre mim",
      selectLanguage: "Selecionar idioma",
      closeMenu: "Fechar menu",
      openMenu: "Abrir menu",
      themeLight: "Alternar para modo claro",
      themeDark: "Alternar para modo escuro",
      themeLabel: "Tema",
      mainNavigationLabel: "Navegação principal"
    },
    footer: {
      role: "Engenheiro de Computação",
      rights: "© 2026 Mathias Solar.",
      home: "Início",
      projects: "Projetos",
      contact: "Contato",
      linkedinAria: "Abrir perfil de Mathias Solar no LinkedIn",
      githubAria: "Abrir perfil de Mathias Solar no GitHub",
      spotifyAria: "Abrir perfil de Mathias Solar no Spotify",
      secondaryNavigationLabel: "Navegação secundária",
      socialNetworksLabel: "Redes sociais"
    },
    hero: {
      subtitle: "Engenheiro de Computação",
      desc: "Transformando a complexidade em soluções digitais elegantes. Especialista em desenvolvimento de software e modernização institucional.",
      btn: "Ver Projetos",
      scrollAria: "Rolar para baixo"
    },
    about: {
      title: "Visão & Perfil",
      subtitle: "Conheça minha metodologia de engenharia, conjunto de tecnologias, competências e formação acadêmica.",
      categories: {
        thinking: "Método",
        capabilities: "Capacidades",
        tools: "Ferramentas",
        education: "Formação"
      },
      thinking: {
        title: "Método",
        steps: [
          { num: "01", shortTitle: "Compreender", title: "Compreender antes de construir", text: "Analiso o contexto, as necessidades dos usuários e as restrições do ambiente antes de propor uma solução.", criteriaLabel: "Princípio", criteria: "O problema técnico nem sempre é o problema real." },
          { num: "02", shortTitle: "Organizar", title: "Transformar complexidade em prioridades", text: "Organizo requisitos, dependências e riscos para separar o essencial do urgente e definir um plano de trabalho claro.", criteriaLabel: "Princípio", criteria: "Uma solução começa quando o problema pode ser explicado com clareza." },
          { num: "03", shortTitle: "Projetar", title: "Definir uma arquitetura sustentável", text: "Avalio alternativas e estruturo uma solução equilibrando experiência do usuário, manutenibilidade, segurança e recursos.", criteriaLabel: "Princípio", criteria: "A melhor arquitetura não é a mais complexa, mas a que responde perfeitamente ao contexto." },
          { num: "04", shortTitle: "Implementar", title: "Construir com ordem e rastreabilidade", text: "Transformo decisões em componentes, processos e entregáveis verificáveis, priorizando uma implementação progressiva.", criteriaLabel: "Princípio", criteria: "O código é parte da solução, não a solução completa." },
          { num: "05", shortTitle: "Validar", title: "Verificar antes de assumir", text: "Reviso funcionamento, acessibilidade, desempenho e comportamento real antes de dar um trabalho como concluído.", criteriaLabel: "Princípio", criteria: "Uma solução que não pode ser validada também não pode ser aprimorada com confiança." },
          { num: "06", shortTitle: "Evoluir", title: "Aprender e aperfeiçoar", text: "Documento o trabalho, observo resultados e uso feedbacks para corrigir, simplificar e fortalecer o sistema ao longo do tempo.", criteriaLabel: "Princípio", criteria: "A melhoria contínua transforma uma entrega em uma solução sustentável." }
        ],
        moreAboutMe: "Saber mais sobre mim"
      },
      capabilities: {
        title: "Capacidades",
        items: [
          { num: "01", shortTitle: "Engenharia de Software", title: "Construção de soluções web sustentáveis", text: "Projeto e desenvolvo soluções web focadas em estrutura, manutenibilidade, integração de dados e escalabilidade futura.", aporteLabel: "Impacto", aporte: "Traduzir requisitos complexos em componentes, sistemas e processos claros." },
          { num: "02", shortTitle: "Transformação Digital", title: "Modernização com propósito", text: "Analiso processos e serviços para identificar oportunidades de otimização, digitalização e simplificação.", aporteLabel: "Impacto", aporte: "Conectar tecnologia, pessoas e processos para promover uma transformação viável." },
          { num: "03", shortTitle: "Plataformas Institucionais", title: "Continuidade e melhoria de serviços públicos", text: "Gerencio, mantenho e otimizo plataformas institucionais, garantindo disponibilidade, segurança e usabilidade.", aporteLabel: "Impacto", aporte: "Garantir que os serviços digitais funcionem de maneira estável, segura e acessível." },
          { num: "04", shortTitle: "Dados e Infraestrutura", title: "Base técnica para decisões confiáveis", text: "Trabalho com bancos de dados, servidores, métricas e implantações para sustentar ambientes seguros e observáveis.", aporteLabel: "Impacto", aporte: "Transformar a operação técnica em uma base confiável para fundamentar decisões." },
          { num: "05", shortTitle: "UX e Acessibilidade", title: "Tecnologia acessível para as pessoas", text: "Avalio navegação, formulários, hierarquia visual e acessibilidade para reduzir atritos na interação digital.", aporteLabel: "Impacto", aporte: "Projetar interfaces claras e inclusivas para diferentes perfis de usuários." }
        ],
        viewMore: "Ver capacidades e ferramentas"
      },
      tools: {
        title: "Ferramentas",
        categories: {
          software: "Desenvolvimento de Software",
          data: "Dados e Métricas",
          infra: "Plataformas e Infraestrutura"
        },
        viewMore: "Ver capacidades e ferramentas"
      },
      education: {
        title: "Formação",
        labels: {
          degree: "Título Profissional",
          diploma: "Pós-graduação / Especialização",
          ongoing: "Formação Contínua"
        },
        items: [
          { title: "Universidad Técnica Federico Santa María", desc: "Engenheiro de Computação", details: "Formação sólida em desenvolvimento de software, arquitetura de dados e engenharia web." },
          { title: "Universidad de Santiago de Chile", desc: "Pós-graduação em Transformação Digital", details: "Especialização em modernização de serviços públicos, governança digital e otimização de processos." },
          { title: "Certificações Udemy", desc: "Formação Técnica Contínua", details: "Domínio de frameworks modernos, ferramentas em nuvem e boas práticas de desenvolvimento." }
        ],
        viewMore: "Ver formação e credenciais"
      }
    },
    experience: {
      title: "Trajetória.",
      subtitle: "Experiência aplicada em engenharia de software, serviços digitais e modernização pública.",
      summaryLabel: "Resumo",
      showDetails: "Ver responsabilidades e contribuições",
      hideDetails: "Ocultar responsabilidades e contribuições",
      showPast: "Ver experiências anteriores",
      hidePast: "Ocultar experiências anteriores",
      jobs: [
        {
          id: "gore-aysen",
          organization: "Gobierno Regional de Aysén",
          role: "Suporte Técnico e Gestão de Serviços Digitais",
          period: "2025 — Atualidade",
          location: "Coyhaique, Região de Aysén · Chile",
          summary: "Atuo na gestão, manutenção e continuidade operacional das plataformas digitais institucionais, integrando suporte técnico, experiência do usuário, segurança, métricas web e modernização de serviços.",
          details: [
            {
              title: "Plataformas Institucionais",
              items: [
                "Administração, manutenção e otimização do desempenho de portais e serviços públicos.",
                "Gestão de conteúdo, formulários digitais e melhorias contínuas em plataformas web."
              ]
            },
            {
              title: "Continuidade Operacional e Suporte",
              items: [
                "Resolução de incidentes técnicos e suporte a usuários internos e cidadãos.",
                "Gestão de backups, ambientes de homologação e protocolos de continuidade."
              ]
            },
            {
              title: "Experiência do Usuário e Acessibilidade",
              items: [
                "Aprimoramento da navegação, estrutura visual, formulários e acessibilidade web.",
                "Aplicação das diretrizes de acessibilidade (WCAG) nos serviços institucionais."
              ]
            },
            {
              title: "Transformação Digital e Dados",
              items: [
                "Implementação e monitoramento de métricas digitais via Google Analytics 4.",
                "Apoio a iniciativas públicas de digitalização e otimização de processos."
              ]
            }
          ]
        }
      ]
    },
    projects: {
      title: "Projetos em Destaque.",
      subtitle: "Seleção de soluções de desenvolvimento de software e plataformas digitais institucionais.",
      viewAll: "Ver todos os projetos",
      detailsLabel: "Ver detalhes técnicos",
      challengeLabel: "Desafio / Problema:",
      participationLabel: "Contribuição Pessoal:",
      scopeLabel: "Escopo e Funcionalidades:",
      responsibilitiesLabel: "Principais Responsabilidades:",
      viewRepo: "Ver repositório",
      viewLive: "Ver site em produção",
      typeLabels: {
        academic: "Projeto acadêmico",
        institutional: "Plataforma institucional"
      },
      statusLabels: {
        prototype: "Protótipo de software",
        production: "Em produção"
      },
      items: [
        {
          slug: "neoroute",
          title: "NeoRoute",
          type: "Projeto acadêmico",
          statusLabel: "Protótipo de software",
          subtitle: "Sistema de gestão logística e otimização de rotas",
          summary: "Projeto acadêmico orientado a centralizar e otimizar o abastecimento de cozinhas comunitárias mediante gestão de solicitações, planejamento de rotas e rastreamento de entregas.",
          problem: "A ausência de uma plataforma digital centralizada dificultava a comunicação, a atribuição de pedidos, o planejamento de rotas e o acompanhamento dos veículos de abastecimento.",
          participationText: "Atuação como desenvolvedor web, trabalhando na interface administrativa e em funcionalidades relacionadas à gestão, planejamento e visualização do processo logístico.",
          scope: [
            "Gestão centralizada de solicitações",
            "Planejamento e recomendação de rotas",
            "Atribuição de pedidos aos motoristas",
            "Visualização de cozinhas e veículos em mapa",
            "Acompanhamento do status das entregas",
            "Painel web para administradores e suporte móvel para motoristas"
          ],
          stack: ["Desenvolvimento web", "TMS", "Logística", "Scrum", "Planejamento de rotas"],
          imageAlt: "Logo do NeoRoute"
        },
        {
          slug: "portal-gore-aysen",
          title: "Gobierno Regional de Aysén",
          type: "Plataforma institucional",
          statusLabel: "Em produção",
          subtitle: "Plataforma web institucional em produção",
          summary: "Administração, manutenção e evolução da plataforma web institucional do Gobierno Regional de Aysén para facilitar o acesso público a notícias, licitações, documentos e serviços regionais.",
          participationText: "Responsável por apoiar a administração e evolução contínua do portal, implementando conteúdos, seções, formulários e melhorias técnicas para manter uma plataforma acessível, segura e atualizada.",
          responsibilities: [
            "Administração e atualização do WordPress",
            "Criação e manutenção de seções institucionais",
            "Publicação de notícias, licitações e documentação oficial",
            "Implementação e manutenção de formulários digitais",
            "Melhorias de navegação, acessibilidade web e experiência do usuário",
            "Backups, manutenção de segurança e resolução de incidentes",
            "Testes em ambientes locais e de homologação (QA)",
            "Análise de métricas web (GA4) e monitoramento de disponibilidade"
          ],
          stack: ["WordPress", "Gestão web", "Acessibilidade", "Segurança", "Métricas web"],
          imageAlt: "Pré-visualização do site institucional do Gobierno Regional de Aysén"
        }
      ]
    },
    contactCta: {
      title: "Vamos conversar.",
      subtitle: "Disponível para colaborar em projetos de software, serviços digitais e transformação institucional.",
      contactBtn: "Entrar em contato",
      cvBtn: "Ver currículo",
      cvAria: "Visualização do currículo profissional de Mathias Solar"
    },
    contact: {
      title: "Contato.",
      subtitle: "Envie-me uma mensagem",
      desc: "Responderei ao seu e-mail o mais breve possível.",
      name: "Nome",
      nameHolder: "Seu nome",
      email: "E-mail",
      msg: "Mensagem",
      msgHolder: "Escreva sua mensagem...",
      bot: "Não sou um robô",
      btn: "Enviar Mensagem",
      role: "Engenheiro de Computação",
      download: "Baixar CV"
    },
    aboutPage: {
      metaTitle: "Sobre mim | Mathias Solar",
      metaDesc: "Conheça os interesses, experiências, motivações e o ambiente que influenciam a forma de criar e trabalhar de Mathias Solar.",
      badge: "ALÉM DO CÓDIGO",
      title: "Sobre mim",
      lead: "Minha forma de criar é influenciada pelo lugar onde vivo, pela curiosidade por tecnologia e pela busca constante em compreender como as coisas funcionam.",
      locationBadge: "COYHAIQUE, REGIÓN DE AYSÉN · CHILE",
      mainPara1: "Construo software a partir de uma perspectiva analítica e pragmática, priorizando a clareza estrutural, o valor funcional e a durabilidade de cada plataforma.",
      mainPara2: "Entender o ambiente onde as soluções são aplicadas é fundamental para construir produtos significativos. A tecnologia é um meio para resolver problemas concretos, conectar serviços e impulsionar a autonomia de pessoas e organizações.",
      coordsLabel: "Coordenadas:",
      zoneLabel: "Zona:",
      zoneValue: "Patagônia Chilena",
      profileBadge: "PERFIL PATAGÔNICO",
      altitudeLabel: "ALTITUDE: 210M",
      officialTimeLabel: "HORA OFICIAL: UTC-3",
      fromAysenLabel: "Perspectiva de Aysén",
      fromAysenTitle: "Ambiente, território e resiliência",
      fromAysenDesc: "Viver em Coyhaique moldou minha relação com a natureza, as distâncias e a tecnologia. Esse contexto influencia meu interesse em construir soluções claras, úteis e capazes de funcionar em realidades diversas.",
      seasonsBadge: "Estações & Ambientes",
      seasonsSubdesc: "Cada estação transforma a forma de vivenciar e observar o ambiente austral.",
      seasons: [
        { name: "Inverno", desc: "Neve, frio intempestivo e luz tênue.", meaning: "Introspecção, resistência e calma interior." },
        { name: "Primavera", desc: "Degelo e brotar austral.", meaning: "Renovação, abertura e esperança." },
        { name: "Verão", desc: "Dias longos e horizontes abertos.", meaning: "Vitalidade, expansão e liberdade." },
        { name: "Outono", desc: "Cores intensas e vento patagônico.", meaning: "Maturidade, transição e profundidade." }
      ],
      interestsLabel: "Interesses & Exploração",
      interests: [
        { num: "01", title: "Natureza & Território", description: "Paisagens, montanhas, clima austral e espaços naturais que ensinam perspectiva, calma e resistência." },
        { num: "02", title: "Espaço & Exploração", description: "Planetas, astronomia, mapas e a escala do universo como fonte constante de curiosidade e inspiração." },
        { num: "03", title: "História & Culturas", description: "Processos históricos, países, territórios e diferentes formas de compreender a evolução do mundo e suas instituições." },
        { num: "04", title: "Tecnologia & Videogames", description: "Desenvolvimento, computadores, videogames competitivos e experiências digitais. Foco em estratégia, adaptação e aprendizado contínuo." },
        { num: "05", title: "Música", description: "Música ambiental, clássica, rock, metal e estilos eletrônicos intensos para diferentes momentos de concentração, energia e trabalho profundo." },
        { num: "06", title: "Símbolo & Perspectiva", description: "A águia representa perspectiva, foco e a liberdade de observar o todo antes de agir." },
        { num: "07", title: "Exercício & Bem-estar", description: "O exercício físico me ajuda a manter constância, energia e equilíbrio entre o trabalho mental e o bem-estar físico." },
        { num: "08", title: "Aprendizado Contínuo", description: "Gosto de aprender continuamente e explorar novas ferramentas, ideias e perspectivas. O conhecimento sempre pode ser aprofundado e expandido." }
      ],
      personal: {
        sports: {
          badge: "PAIXÃO PELO ESPORTE",
          title: "Desempenho & Estratégia",
          lead: "Me atraem as disciplinas onde a estratégia, a preparação, o talento e a capacidade de responder sob pressão podem mudar completamente um resultado.",
          footballTitle: "FUTEBOL",
          footballTeamsLabel: "Equipes",
          mmaTitle: "MMA / UFC",
          mmaRefLabel: "Referência",
          mmaRef: "Lutadores do Cáucaso",
          racingTitle: "AUTOMOBILISMO",
          racingTeamLabel: "Equipe"
        },
        lol: {
          badge: "COMPETIÇÃO E ESTRATÉGIA · LEAGUE OF LEGENDS / AZIR",
          title: "Controle territorial e exigência mecânica",
          lead: "League of Legends tem sido um dos meus principais espaços competitivos. Azir é meu campeão principal e o personagem com o qual mais desenvolvi meu estilo de jogo. A exigência mecânica, a tomada de decisões e o controle estratégico que exige representam grande parte do que aprecio na competição.",
          mainChampDesc: "Campeão principal",
          globalRankLabel: "#13 MUNDIAL",
          globalRankDesc: "Melhor posição alcançada",
          masterRankLabel: "MASTER · 200 LP",
          masterRankDesc: "Nível competitivo sustentado",
          lasRankLabel: "#1 LAS",
          lasRankDesc: "Servidor América do Sul"
        },
        rituals: {
          badge: "RITUAIS DIÁRIOS",
          title: "Momentos & Pausas",
          lead: "Algumas bebidas também acompanham diferentes momentos de conversa, concentração e descanso.",
          mateTitle: "MATE",
          mateDesc: "Pausa, conversa e calma.",
          coffeeTitle: "CAFÉ",
          coffeeDesc: "Rotina e concentração.",
          redbullTitle: "RED BULL",
          redbullDesc: "Uma bebida que aprecio ocasionalmente por seu sabor e energia."
        },
        travel: {
          badge: "UM MUNDO PARA EXPLORAR",
          title: "História, culturas e novos horizontes",
          lead: "Gostaria de percorrer diferentes países para conhecer sua história, compreender outras culturas e descobrir sua gastronomia. Viajar representa uma forma de ampliar a perspectiva e aprender diretamente de outros territórios e formas de vida.",
          tags: "História · Culturas · Gastronomia · Arquitetura · Territórios · Paisagens",
          coords: "45°34′S 72°04′O",
          mapLinkText: "ABRIR MAPA"
        }
      },
      music: {
        badge: "MÚSICA & ESTADOS",
        title: "A música que acompanha meus momentos",
        lead: "Não escuto sempre a mesma coisa. Cada playlist acompanha uma forma diferente de me concentrar, liberar tensão, desfrutar ou recuperar energia.",
        featuredBadge: "PLAYLIST EM DESTAQUE",
        listenButton: "Ouvir no Spotify",
        listenAria: "Ouvir a playlist {name} no Spotify",
        oliseCategory: "RAP & TRAP FRANCÊS",
        oliseTitle: "Michael Olise",
        oliseDesc: "Michael Olise é meu jogador favorito e, através dessa admiração, nasceu também meu interesse pelo rap e trap francês.",
        chillCategory: "CALMA & CLARIDADE",
        chillTitle: "Chill",
        chillDesc: "Uma seleção para liberar tensão e recuperar claridade mental. Predominam música clássica, sons naturais, pássaros e ambientes tranquilos.",
        vibeCategory: "BOM ÂNIMO",
        vibeTitle: "Vibe",
        vibeDesc: "Música atual, geralmente alegre, para levantar o ânimo, aproveitar o momento e ter um bom momento.",
        madnessCategory: "INTENSIDADE & TRYHARD",
        madnessTitle: "Madness",
        madnessDesc: "Frenchcore para sessões intensas, momentos de tryhard e situações em que preciso manter o cérebro no máximo.",
        rageCategory: "ROCK & METAL",
        rageTitle: "Rage",
        rageDesc: "Metal e rock para ativar a energia, acender o ânimo e acompanhar momentos casuais ou intensos."
      },
      ctaText: "Conheça mais sobre a infraestrutura, tecnologias e metodologia de trabalho técnico que aplico em cada projeto.",
      ctaButton: "Ver capacidades e ferramentas",
      backHome: "Voltar ao início"
    },
    capabilitiesPage: {
      metaTitle: "Capacidades e ferramentas | Mathias Solar",
      metaDesc: "Desenvolvimento web frontend e backend, plataformas institucionais, infraestrutura, bancos de dados, transformação digital e ambiente de trabalho técnico.",
      badge: "PERFIL TÉCNICO",
      title: "Capacidades & Herramientas",
      lead: "Combino desenvolvimento de software, administração de plataformas, infraestrutura e transformação digital para construir soluções úteis, sustentáveis e alinhadas às necessidades de cada organização.",
      indexLabel: "Índice de áreas",
      relatedTechLabel: "Tecnologias relacionadas",
      keyConceptsLabel: "Conceitos-chave",
      toolsSection: {
        badge: "FERRAMENTAS DE TRABALHO",
        toolsIndexLabel: "Ferramentas de trabalho",
        devTitle: "DESENVOLVIMENTO",
        designTitle: "DESIGN E CONTEÚDO",
        mgmtTitle: "GESTÃO E COLABORAÇÃO",
        analyticsTitle: "ANÁLISE E MONITORAMENTO",
        availabilityMonitoring: "Monitoramento de disponibilidade"
      },
      workspace: {
        badge: "MEU AMBIENTE DE DESENVOLVIMENTO",
        title: "Meu ambiente de desenvolvimento",
        lead: "Configuração, temas de cores e extensões que otimizam meu fluxo de trabalho diário no VS Code.",
        colorThemeBadge: "Tema de cores",
        iconThemeBadge: "Tema de ícones",
        formatterBadge: "Formatação automática",
        errorLensBadge: "Erros em linha",
        indentBadge: "Leitura estrutural",
        pokemonSecondaryBadge: "Personalização secundária",
        pokemonDesc: "Um detalhe pessoal na barra de status do editor."
      },
      items: [
        {
          title: "Desenvolvimento frontend e web",
          description: "Construção de interfaces web modernas, responsivas e manuteníveis, orientadas a uma experiência clara e necessidades funcionais reais.",
          levelMap: { React: "Uso profissional", Astro: "Experiência aplicada" }
        },
        {
          title: "Backend e APIs",
          description: "Desenvolvimento de lógica de servidor, aplicações web, integração com bancos de dados e construção de serviços para conectar interfaces, sistemas e processos."
        },
        {
          title: "Plataformas Institucionais",
          description: "Administração, manutenção e modernização de portais institucionais, gestão de conteúdo, formulários, acessibilidade, métricas e segurança web.",
          levelMap: { WordPress: "Uso profissional" }
        },
        {
          title: "Infraestrutura e Implantação",
          description: "Configuração de ambientes, backups, resolução de incidentes, implantações e administração técnica em ambientes locais, homologação e produção."
        },
        {
          title: "Dados e Bancos de Dados",
          description: "Trabalho com bancos de dados relacionais, modelagem, consultas e estruturação de arquiteturas orientadas à integração de dados.",
          levelMap: { PostgreSQL: "Em desenvolvimento", "Data Lake": "Aprendizado atual" }
        },
        {
          title: "Transformação Digital",
          description: "Análise e modernização de processos, serviços digitais, interoperabilidade, experiência do usuário e adoção tecnológica em organizações públicas.",
          concepts: ["Interoperabilidade", "Serviços digitais", "Modernização institucional", "Gestão de mudanças", "Segurança e Zero Trust", "Indicadores e melhoria contínua"]
        }
      ],
      ctaText: "Essas capacidades se refletem em projetos de desenvolvimento, modernização institucional e gestão de plataformas digitais.",
      ctaButton: "Ver projetos",
      backHome: "Voltar ao início"
    },
    educationPage: {
      metaTitle: "Formación e credenciais | Mathias Solar",
      metaDesc: "Formación profesional, diplomas universitários e acreditações contínuas de Mathias Solar em engenharia de computação e gestão pública.",
      badge: "PERFIL ACADÊMICO E CREDENCIAIS",
      title: "Formação & Credenciais",
      lead: "Base sólida em engenharia de computação complementada por certificações oficiais e formação para o setor público.",
      sectionCredentials: "Diplomas e Certificados Verificados",
      sectionOther: "Especializações em Andamento",
      sectionProtection: "Proteção & Verificação",
      privacyTitle: "Privacidade e Proteção de Dados",
      privacyDesc: "Por motivos de segurança e proteção de dados pessoais, as pré-visualizações publicadas omitem documentos de identidade, códigos de verificação e assinaturas digitais. Os documentos originais são apresentados exclusivamente em processos formais de validação profissional.",
      backHome: "Voltar ao início",
      credentials: [
        {
          title: "Engenheiro de Computação",
          institution: "Universidad Técnica Federico Santa María",
          type: "Título Profissional",
          btnText: "Ver certificado de graduação",
          imgAlt: "Pré-visualização do certificado de diploma de Engenheiro de Computação"
        },
        {
          title: "Licenciado em Engenharia de Computação",
          institution: "Universidad Técnica Federico Santa María",
          type: "Grau Académico",
          btnText: "Ver certificado de licenciatura",
          imgAlt: "Pré-visualização do certificado de Licenciado em Engenharia de Computação"
        },
        {
          title: "Indução Geral à Administração do Estado",
          institution: "Centro de Estudios de la Administración del Estado — Contraloría General de la República de Chile",
          duration: "30 horas cronológicas",
          scoreLabel: "Nota final",
          type: "Curso de Especialização",
          btnText: "Ver certificado",
          imgAlt: "Pré-visualização do certificado de aprovação do curso de Indução Geral à Administração do Estado"
        }
      ],
      otherStudies: [
        {
          title: "Pós-graduação em Transformação Digital",
          institution: "Universidad de Santiago de Chile",
          status: "Em andamento",
          description: "Especialização voltada para transformação organizacional, serviços digitais públicos, interoperabilidade, governança de dados e modernização do setor público."
        }
      ]
    },
    projectsPage: {
      metaTitle: "Projetos | Mathias Solar",
      metaDesc: "Seleção de projetos de desenvolvimento de software, plataformas institucionais e soluções digitais criadas por Mathias Solar.",
      badge: "PORTFÓLIO DE ENGENHARIA",
      title: "Projetos",
      lead: "Uma seleção de estudos de caso detalhando desafios técnicos, arquitetura e soluções implementadas.",
      detailsLabel: "Ver detalhes técnicos",
      challengeLabel: "Desafio / Problema:",
      participationLabel: "Contribuição Pessoal:",
      scopeLabel: "Escopo e Funcionalidades:",
      responsibilitiesLabel: "Principais Responsabilidades:",
      viewRepo: "Ver repositório",
      viewLive: "Ver site em produção",
      backHome: "Voltar ao início"
    },
    contactPage: {
      metaTitle: "Contato | Mathias Solar",
      metaDesc: "Entre em contato com Mathias Solar para conversar sobre desenvolvimento de software, tecnologia e projetos digitais.",
      badge: "CANAIS E FORMULÁRIO",
      title: "Contato",
      lead: "Conte-me sobre o projeto, desafio ou colaboração que você tem em mente.",
      profilesTitle: "Perfis Profissionais",
      linkedinDesc: "Vamos nos conectar.",
      linkedinAria: "Visitar o perfil de Mathias Solar no LinkedIn",
      githubDesc: "Explore meus projetos e repositórios.",
      githubAria: "Visitar o perfil de Mathias Solar no GitHub",
      discordTag: "solaaaar",
      discordDesc: "Canal adicional de contato.",
      discordAria: "Entrar em contato com Mathias Solar pelo Discord",
      cvBtn: "Ver currículo",
      cvAria: "Visualização do currículo profissional de Mathias Solar",
      location: "Coyhaique, Região de Aysén · Chile",
      availabilityText: "Atualmente disponível para colaborar em projetos de modernização de processos e criação de plataformas escaláveis.",
      backHome: "Voltar ao início",
      form: {
        nameLabel: "Nome",
        namePlaceholder: "Ex. Constanza Silva",
        emailLabel: "Endereço de e-mail",
        emailPlaceholder: "seu.email@exemplo.com",
        messageLabel: "Mensagem",
        messagePlaceholder: "Conte brevemente sobre seu projeto ou sua solicitação...",
        submitBtn: "Enviar mensagem",
        sendingBtn: "Enviando…",
        privacyText: "Seus dados serão utilizados apenas para responder à sua mensagem.",
        successMsg: "Mensagem enviada com sucesso. Responderei o mais breve possível.",
        errorMsg: "Não foi possível enviar a mensagem. Tente novamente.",
        requiredMsg: "Campo obrigatório",
        emailInvalidMsg: "Insira um endereço de e-mail válido",
        messageLengthMsg: "Escreva uma mensagem com mais detalhes"
      }
    },
    notFoundPage: {
      metaTitle: "Página não encontrada | Mathias Solar",
      metaDesc: "A página que você procura não existe, pode ter sido movida ou o endereço informado está incorreto.",
      badge: "PÁGINA NÃO ENCONTRADA",
      code: "404",
      title: "Esta rota se perdeu no espaço.",
      description: "A página que você procura não existe, pode ter sido movida ou o endereço informado está incorreto.",
      requestedPathLabel: "Caminho solicitado:",
      homeButton: "Voltar ao início",
      projectsButton: "Ver projetos",
      homeHref: "/pt/",
      projectsHref: "/pt/proyectos"
    },
    documentViewer: {
      closeAria: "Fechar visualizador de documento",
      closeBtn: "Fechar",
      openTab: "Abrir em outra aba",
      downloadCv: "Baixar CV",
      downloadDoc: "Baixar",
      openBtn: "Abrir",
      zoomOut: "Reduzir zoom",
      zoomIn: "Ampliar zoom",
      zoomReset: "Redefinir zoom para 100%",
      zoomLabel: "ESCALA DE LEITURA",
      certInfo: "Informações do certificado",
      viewDetails: "Ver detalhes ▼",
      cvCategory: "CURRÍCULUM VITAE",
      cvTitle: "Currículo — Mathias Solar",
      cvDesc: "Engenheiro de Computação com experiência em desenvolvimento web, plataformas digitais e transformação institucional.",
      certDisclaimer: "Pré-visualização do certificado. Os dados de verificação foram protegidos.",
      spanishNote: "O documento está disponível em espanhol.",
      pdfFallback: "Seu navegador não pode exibir esta visualização. Você pode abrir ou baixar o currículo usando os botões disponíveis."
    }
  },

  'zh-CN': {
    skipLink: "跳至主要内容",
    breadcrumbs: { navLabel: "面包屑导航", home: "首页" },
    nav: {
      profile: "个人简介",
      experience: "工作经历",
      projects: "项目展示",
      contact: "联系我",
      menu: "菜单",
      home: "首页",
      aboutMe: "了解更多",
      selectLanguage: "选择语言",
      closeMenu: "关闭菜单",
      openMenu: "打开菜单",
      themeLight: "切换至浅色模式",
      themeDark: "切换至深色模式",
      themeLabel: "主题",
      mainNavigationLabel: "主导航"
    },
    footer: {
      role: "计算机工程师",
      rights: "© 2026 Mathias Solar.",
      home: "首页",
      projects: "项目展示",
      contact: "联系方式",
      linkedinAria: "在 LinkedIn 上打开 Mathias Solar 的个人资料",
      githubAria: "在 GitHub 上打开 Mathias Solar 的个人资料",
      spotifyAria: "在 Spotify 上打开 Mathias Solar 的个人资料",
      secondaryNavigationLabel: "辅助导航",
      socialNetworksLabel: "社交媒体"
    },
    hero: {
      subtitle: "计算机工程师",
      desc: "将复杂性转化为优雅的数字解决方案。专注于软件开发与机构数字化转型。",
      btn: "查看项目",
      scrollAria: "向下滚动"
    },
    about: {
      title: "愿景与简介",
      subtitle: "了解我的工程理念、技术栈、核心能力及学术背景。",
      categories: {
        thinking: "工程思维",
        capabilities: "专业能力",
        tools: "技术工具",
        education: "教育背景"
      },
      thinking: {
        title: "工程思维",
        steps: [
          { num: "01", shortTitle: "理解需求", title: "建构之前，先深入理解", text: "在提出任何技术方案前，我首先分析实际业务场景、用户诉求与环境约束。", criteriaLabel: "工程准则", criteria: "技术表面问题并不总是根本矛盾。" },
          { num: "02", shortTitle: "梳理优先", title: "化繁为简，厘清优先级", text: "梳理系统需求、依赖关系与潜在风险，区分关键路径与紧急任务，制定清晰落地路线。", criteriaLabel: "工程准则", criteria: "当问题能被清晰阐述时，解决方案才真正开始。" },
          { num: "03", shortTitle: "架构设计", title: "定义可持续的系统架构", text: "评估可行替代方案，在用户体验、可维护性、安全性与现有资源之间取得平衡。", criteriaLabel: "工程准则", criteria: "优秀的架构并非最复杂，而是最贴合实际场景。" },
          { num: "04", shortTitle: "规范交付", title: "有序推进与过程可追溯", text: "将决策转化为模块化组件与可验证流程，坚持渐进式、高可靠的工程交付。", criteriaLabel: "工程准则", criteria: "代码是解决方案的一部分，而非全部。" },
          { num: "05", shortTitle: "全面验证", title: "注重实测，拒绝凭空假设", text: "在项目交付前，全面测试功能完备性、无障碍访问、系统性能与真实场景表现。", criteriaLabel: "工程准则", criteria: "无法被客观验证的方案，也无法被安全持续迭代。" },
          { num: "06", shortTitle: "持续演进", title: "总结反馈，长久演化", text: "沉淀工程文档，监测上线指标，根据真实反馈不断优化、简化并巩固系统架构。", criteriaLabel: "工程准则", criteria: "持续改进才能将一次交付转变为长期可持续的优质服务。" }
        ],
        moreAboutMe: "了解更多关于我的信息"
      },
      capabilities: {
        title: "专业能力",
        items: [
          { num: "01", shortTitle: "软件工程", title: "构建可持续的 Web 解决方案", text: "注重系统结构、可维护性、数据集成与长远扩展，设计并开发现代化 Web 系统。", aporteLabel: "价值体现", aporte: "将复杂业务需求转化为清晰的代码组件、系统与流程。" },
          { num: "02", shortTitle: "数字化转型", title: "务实的公共服务现代化", text: "分析业务流程与数字服务，识别优化、数字化与简化交互的操作空间。", aporteLabel: "价值体现", aporte: "连接技术、人员与组织，推动高效可行的数字化变革。" },
          { num: "03", shortTitle: "机构平台", title: "保障公共数字服务稳定运行", text: "管理、维护并优化机构公共平台，保障高可用性、内容管理、信息安全与良好体验。", aporteLabel: "价值体现", aporte: "确保公共数字服务持续稳定、安全易用。" },
          { num: "04", shortTitle: "数据与基础设施", title: "支撑可靠决策的技术基石", text: "熟练运用数据库、服务器、数据分析与自动化部署，保障系统安全透明运行。", aporteLabel: "价值体现", aporte: "将技术运行数据转化为可靠的决策与持续改进依据。" },
          { num: "05", shortTitle: "UX 与无障碍", title: "以人为本的包容性技术", text: "评估交互导航、表单设计、视觉层级与无障碍规范，降低用户使用门槛。", aporteLabel: "价值体现", aporte: "设计清晰、包容、适合多样化群体的优质数字体验。" }
        ],
        viewMore: "查看能力与工具详情"
      },
      tools: {
        title: "技术工具",
        categories: {
          software: "软件开发",
          data: "数据与分析",
          infra: "平台与基础设施"
        },
        viewMore: "查看能力与工具详情"
      },
      education: {
        title: "教育背景",
        labels: {
          degree: "计算机工程师",
          diploma: "研究生文凭",
          ongoing: "持续专业培训"
        },
        items: [
          { title: "Universidad Técnica Federico Santa María", desc: "计算机工程师", details: "在软件工程、数据库架构与 Web 技术领域接受了全面扎实的工程教育。" },
          { title: "Universidad de Santiago de Chile", desc: "数字化转型研究生文凭", details: "专注于公共部门数字服务现代化、治理与业务流程优化。" },
          { title: "Udemy 专业技术认证", desc: "持续工程培训", details: "掌握现代化技术框架、云端工具与敏捷软件开发最佳实践。" }
        ],
        viewMore: "查看教育与资质证书"
      }
    },
    experience: {
      title: "工作经历",
      subtitle: "在软件工程、数字服务与公共部门现代化领域的实战经验。",
      summaryLabel: "职责概述",
      showDetails: "查看核心职责与成果",
      hideDetails: "隐藏核心职责与成果",
      showPast: "查看早期工作经历",
      hidePast: "隐藏早期工作经历",
      jobs: [
        {
          id: "gore-aysen",
          organization: "Gobierno Regional de Aysén",
          role: "IT 支持与数字服务管理专家",
          period: "2025 年 — 至今",
          location: "智利 · 艾森大区科伊艾克",
          summary: "负责机构数字平台的运维、优化与持续运行，融合技术支持、用户体验、信息安全、Web 分析与服务现代化。",
          details: [
            {
              title: "机构平台运维",
              items: [
                "公共门户与数字服务系统的日常管理、技术维护与性能优化。",
                "内容发布管理、交互表单维护及 Web 平台持续改进。"
              ]
            },
            {
              title: "业务连续性与技术支持",
              items: [
                "快速解决技术故障，为内部团队及公众用户提供专业支持。",
                "管理数据备份、测试环境配置与业务连续性预案。"
              ]
            },
            {
              title: "用户体验与无障碍规范",
              items: [
                "持续优化系统导航、视觉结构、在线表单与交互体验。",
                "审查并落实数字服务无障碍访问（WCAG）标准。"
              ]
            },
            {
              title: "数字化转型与数据分析",
              items: [
                "基于 Google Analytics 4 部署与分析 Web 数字数据。",
                "协助推进公共服务数字化转型与流程优化项目。"
              ]
            }
          ]
        }
      ]
    },
    projects: {
      title: "精选项目",
      subtitle: "精选软件工程解决方案与机构数字平台展示。",
      viewAll: "查看全部项目",
      detailsLabel: "查看技术细节",
      challengeLabel: "核心挑战 / 问题：",
      participationLabel: "个人主要贡献：",
      scopeLabel: "项目范围与功能：",
      responsibilitiesLabel: "主要工程职责：",
      viewRepo: "查看 GitHub 仓库",
      viewLive: "访问线上生产站点",
      typeLabels: {
        academic: "学术工程项目",
        institutional: "机构公共平台"
      },
      statusLabels: {
        prototype: "软件原型",
        production: "线上运行中"
      },
      items: [
        {
          slug: "neoroute",
          title: "NeoRoute",
          type: "学术工程项目",
          statusLabel: "软件原型",
          subtitle: "物流调度管理与路径优化系统",
          summary: "旨在通过需求申请管理、路线规划与配送状态跟踪，集中并优化社区公益食堂物资供应的学术工程项目。",
          problem: "缺乏集中化的数字平台，导致公益食堂物资供应过程中的沟通协调、订单派送、路线规划与运输车辆追踪存在困难。",
          participationText: "担任 Web 开发人员，主要负责后台管理界面的构建，以及物流管理、路线规划与地图可视化相关功能的开发。",
          scope: [
            "物资申请集中化管理",
            "路径规划与最佳路线推荐",
            "司机配送订单调度",
            "公益食堂与运输车辆地图可视化",
            "物资配送状态全程跟踪",
            "管理员 Web 控制台与司机移动端支持"
          ],
          stack: ["Web 开发", "TMS", "物流管理", "Scrum", "路径规划"],
          imageAlt: "NeoRoute 标志"
        },
        {
          slug: "portal-gore-aysen",
          title: "Gobierno Regional de Aysén",
          type: "机构公共平台",
          statusLabel: "线上运行中",
          subtitle: "智利艾森大区政府官方 Web 门户",
          summary: "智利艾森大区政府 (Gobierno Regional de Aysén) 官方 Web 门户网站的管理、技术运维与持续演进，便利公众获取政务新闻、公共招标、官方文档与数字公共服务。",
          participationText: "负责协助官方门户网站的日常管理与持续技术优化，开发内容专区、在线表单及技术升级，确保机构公共平台安全、无障碍且及时更新。",
          responsibilities: [
            "WordPress 网站后台管理与内核更新",
            "机构政务专区的内容搭建与技术维护",
            "政务新闻、公共招标公告及官方文档发布",
            "在线数字交互表单的部署与维护",
            "网站导航结构、无障碍访问 (WCAG) 与用户体验优化",
            "数据定时备份、安全防护与技术故障排除",
            "在本地及测试 (QA) 环境中实施功能验证",
            "Web 流量数据分析 (GA4) 与系统可用性监测"
          ],
          stack: ["WordPress", "Web 门户管理", "无障碍规范", "信息安全", "Web 数据分析"],
          imageAlt: "Gobierno Regional de Aysén 官方门户网站预览"
        }
      ]
    },
    contactCta: {
      title: "保持联系",
      subtitle: "随时欢迎就软件开发、数字服务及机构数字化转型项目展开合作。",
      contactBtn: "发送消息",
      cvBtn: "查看个人简历",
      cvAria: "预览 Mathias Solar 的专业简历"
    },
    contact: {
      title: "联系方式",
      subtitle: "发送消息",
      desc: "我会尽快回复您的邮件。",
      name: "姓名",
      nameHolder: "您的姓名",
      email: "电子邮箱",
      msg: "留言内容",
      msgHolder: "请输入您的留言...",
      bot: "我不是机器人",
      btn: "发送消息",
      role: "计算机工程师",
      download: "下载简历"
    },
    aboutPage: {
      metaTitle: "关于我 | Mathias Solar",
      metaDesc: "了解塑造 Mathias Solar 软件工程理念的兴趣、工作背景、核心动力与生活环境。",
      badge: "代码之外",
      title: "关于我",
      lead: "我的工程思维受常居之地、对技术的深沉好奇心以及探究事物底层运作规律的追求所塑造。",
      locationBadge: "COYHAIQUE, REGIÓN DE AYSÉN · CHILE",
      mainPara1: "我以分析性与务实视角构建软件，将结构清晰度、实际功能价值与系统的长期可维护性置于首位。",
      mainPara2: "深刻理解软件应用的具体环境是打造有价值产品的关键。技术是解决具体问题、连接多元服务并赋能个人与机构的工具。",
      coordsLabel: "地理坐标：",
      zoneLabel: "所属区域：",
      zoneValue: "智利巴塔哥尼亚",
      profileBadge: "巴塔哥尼亚视角",
      altitudeLabel: "海拔：210米",
      officialTimeLabel: "官方时间：UTC-3",
      fromAysenLabel: "源自艾森",
      fromAysenTitle: "自然环境、地域与沉稳心态",
      fromAysenDesc: "常年居于科伊艾克深刻影响着我对自然、空间距离与数字技术的理解。这种环境塑造了我构建清晰可靠、适应多样现实场景的软件解决方案的决心。",
      seasonsBadge: "四季与自然环境",
      seasonsSubdesc: "每一个季节都在重塑栖居与观察这片南方大地的方式。",
      seasons: [
        { name: "冬季", desc: "降雪、凛冽寒风与沉静微光。", meaning: "内省、沉稳韧性与内在平静。" },
        { name: "春季", desc: "冰雪消融与南方新芽。", meaning: "万物复苏、开放包容与希望。" },
        { name: "夏季", desc: "漫长白昼与开阔视野。", meaning: "Vitality, expansion, and freedom." },
        { name: "秋季", desc: "浓郁秋色与巴塔哥尼亚强风。", meaning: "沉淀成熟、过渡转型与深度。" }
      ],
      interestsLabel: "兴趣与探索",
      interests: [
        { num: "01", title: "自然与地理", description: "壮丽山川、南方气候与自然天地，赋予我宏观视角、沉静与韧性。" },
        { num: "02", title: "太空与探索", description: "行星、天文学、地图与宇宙尺度，是我源源不断的好奇心与工程灵感来源。" },
        { num: "03", title: "历史与文明", description: "历史演变、国家地理与人类制度文明演化的多样视角。" },
        { num: "04", title: "技术与电子竞技", description: "软件开发、计算机硬件、竞技电子竞技与数字体验。专注于战略规划、快速适应与持续学习。" },
        { num: "05", title: "音乐", description: "环境音乐、古典乐、摇滚、重金属与电子乐，匹配深度专注、能量激活与高效工作状态。" },
        { num: "06", title: "象征与远瞻视角", description: "雄鹰象征着高瞻远瞩的全局视野、专注力以及在采取行动前洞察系统整体的自由。" },
        { num: "07", title: "体育锻炼与身心健康", description: "体育锻炼助我保持坚韧毅力、充沛精力以及思维劳动与身体健康之间的良好平衡。" },
        { num: "08", title: "终身学习", description: "我热爱终身学习，持续探索新工具、新思想与新视角。所学知识总能进一步深化与互补。" }
      ],
      personal: {
        sports: {
          badge: "热爱体育",
          title: "竞技表现 & 战术策略",
          lead: "我深受那些依靠战术、准备、天赋以及高压下应变能力来扭转局势的体育项目所吸引。",
          footballTitle: "足球",
          footballTeamsLabel: "球队",
          mmaTitle: "MMA / UFC",
          mmaRefLabel: "参考",
          mmaRef: "高加索地区选手",
          racingTitle: "赛车运动",
          racingTeamLabel: "车队"
        },
        lol: {
          badge: "竞技与策略 · 英雄联盟 / 阿兹尔",
          title: "领地控制 & 机械操作要求",
          lead: "《英雄联盟》是我最主要的竞技赛场之一。沙漠皇帝·阿兹尔（Azir）是我的核心招牌英雄，也是我形成自身游戏风格的基石。其极高的操作要求、战术决策与领地控制力，体现了我对电子竞技的核心热忱。",
          mainChampDesc: "招牌英雄",
          globalRankLabel: "全球第 13 名",
          globalRankDesc: "历史最高排名",
          masterRankLabel: "大师 200 LP",
          masterRankDesc: "长效维持竞技水准",
          lasRankLabel: "南美服第 1 名",
          lasRankDesc: "南美服务器第一"
        },
        rituals: {
          badge: "日常仪式",
          title: "时光 & 沉淀",
          lead: "特调饮品在不同时刻陪伴着我的交流、专注与休整。",
          mateTitle: "马黛茶",
          mateDesc: "小憩、交流与宁静。",
          coffeeTitle: "咖啡",
          coffeeDesc: "日常律动与深度专注。",
          redbullTitle: "红牛",
          redbullDesc: "偶尔享用的能量与风味饮品。"
        },
        travel: {
          badge: "探索广袤世界",
          title: "历史、文化与新视野",
          lead: "我渴望游历不同国家，探索其历史脉络、理解多元文化并品尝当地美食。旅行是开拓视野、直接向不同地域与生活方式学习的重要途径。",
          tags: "历史 · 文化 · 美食 · 建筑 · 地理 · 景观",
          coords: "45°34′S 72°04′W",
          mapLinkText: "打开地图"
        }
      },
      music: {
        badge: "音乐与状态",
        title: "陪伴我每个时刻的音乐",
        lead: "我并不总是听同样的音乐。每张歌单都陪伴着我不同的方式：专注、释放压力、享受生活或恢复精力。",
        featuredBadge: "精选歌单",
        listenButton: "在 Spotify 上收听",
        listenAria: "在 Spotify 上收听 {name} 歌单",
        oliseCategory: "法国说唱与 TRAP",
        oliseTitle: "Michael Olise",
        oliseDesc: "Michael Olise 是我最喜欢的球员，通过对他的喜爱，我也对法国说唱和 Trap 产生了浓厚兴趣。",
        chillCategory: "平静与清晰",
        chillTitle: "Chill",
        chillDesc: "精选舒缓音乐，助你释放紧张、恢复思维清晰。主要是古典音乐、自然之声、鸟鸣和宁静氛围。",
        vibeCategory: "好心情",
        vibeTitle: "Vibe",
        vibeDesc: "流行且欢快的现代音乐，提升情绪，享受当下，开怀欢度。",
        madnessCategory: "高强度与 TRYHARD",
        madnessTitle: "Madness",
        madnessDesc: "适合高强度专注、tryhard 竞技以及需要大脑极限运转时刻的 Frenchcore 音乐。",
        rageCategory: "摇滚与 METAL",
        rageTitle: "Rage",
        rageDesc: "金属与摇滚乐，激发活力、点燃热情，陪伴休闲或激情的时刻。"
      },
      ctaText: "进一步了解我在各个工程项目中应用的底层基础设施、核心技术栈与技术工作 workflow。",
      ctaButton: "查看能力与工具",
      backHome: "返回首页"
    },
    capabilitiesPage: {
      metaTitle: "能力与工具 | Mathias Solar",
      metaDesc: "Web 前端与后端开发、机构公共平台、基础设施、数据库、数字化转型与技术工作 workflow。",
      badge: "技术履历",
      title: "能力 & 工具",
      lead: "融合软件开发、平台管理、基础设施部署与数字化转型，构建实用、可持续维护且精准契合机构需求的软件解决方案。",
      indexLabel: "专业领域索引",
      relatedTechLabel: "相关技术",
      keyConceptsLabel: "核心概念",
      toolsSection: {
        badge: "工作工具",
        toolsIndexLabel: "工作工具",
        devTitle: "开发",
        designTitle: "设计与内容",
        mgmtTitle: "管理与协作",
        analyticsTitle: "分析与监控",
        availabilityMonitoring: "可用性监控"
      },
      workspace: {
        badge: "我的开发环境",
        title: "我的开发环境",
        lead: "通过配置、配色主题和扩展优化我在 VS Code 中的日常工作流程。",
        colorThemeBadge: "配色主题",
        iconThemeBadge: "图标主题",
        formatterBadge: "自动格式化",
        errorLensBadge: "行内错误",
        indentBadge: "结构化阅读",
        pokemonSecondaryBadge: "辅助个性化",
        pokemonDesc: "编辑器状态栏中的个性化细节。"
      },
      items: [
        {
          title: "Web 与前端开发",
          description: "构建现代、响应式且易于维护的 Web 界面，专注于清晰的用户体验与实际业务需求。",
          levelMap: { React: "专业应用", Astro: "实战经验" }
        },
        {
          title: "后端与 API",
          description: "服务端逻辑开发、Web 应用程序、数据库集成以及构建连接前端界面、独立系统与业务流程的服务。"
        },
        {
          title: "机构公共平台",
          description: "机构公共门户网站的管理、技术运维与现代化演进，包括内容管理、在线表单、无障碍规范、数据分析与 Web 安全。",
          levelMap: { WordPress: "专业应用" }
        },
        {
          title: "基础设施与部署",
          description: "环境配置、数据备份、技术故障排除、代码部署以及在本地、测试 (QA) 与生产环境中的技术运维。"
        },
        {
          title: "数据与数据库",
          description: "关系型数据库应用、数据建模、复杂查询以及构建面向数据集成与 telemetry 分析的系统架构。",
          levelMap: { PostgreSQL: "持续提升中", "Data Lake": "正在学习中" }
        },
        {
          title: "数字化转型",
          description: "公共机构业务流程分析与现代化、数字服务、系统互操作性、用户体验与技术落地推进。",
          concepts: ["系统互操作性", "数字公共服务", "机构现代化", "变革管理", "安全与零信任架构", "关键指标与持续改进"]
        }
      ],
      ctaText: "这些能力在软件工程开发、机构公共服务现代化与数字平台运维项目中得到集中体现。",
      ctaButton: "查看项目",
      backHome: "返回首页"
    },
    educationPage: {
      metaTitle: "教育与资质 | Mathias Solar",
      metaDesc: "Mathias Solar 的计算机工程专业学位、大学学历及公共管理领域的持续专业资质展示。",
      badge: "学术履历与资质证书",
      title: "教育 & 资质证书",
      lead: "扎实的计算机软件工程专业底蕴，辅以官方资质认证及公共部门行政导论培训。",
      sectionCredentials: "验证学位与专业证书",
      sectionOther: "在读研究生专业方向",
      sectionProtection: "数据安全与验证说明",
      privacyTitle: "隐私与数据保护",
      privacyDesc: "出于信息安全与个人数据保护考量，公开展示的证书预览件已隐藏身份证号、验证二维码及数字签名。原始证明文件仅在专业资质审查时正式提供。",
      backHome: "返回首页",
      credentials: [
        {
          title: "计算机工程师",
          institution: "Universidad Técnica Federico Santa María",
          type: "专业工程师学位",
          btnText: "查看学位证书",
          imgAlt: "计算机工程师学位证书预览"
        },
        {
          title: "计算机工程学士",
          institution: "Universidad Técnica Federico Santa María",
          type: "学术学位",
          btnText: "查看学士学位证书",
          imgAlt: "计算机工程学士学位证书预览"
        },
        {
          title: "国家行政通用导论",
          institution: "Centro de Estudios de la Administración del Estado — Contraloría General de la República de Chile",
          duration: "30 学时",
          scoreLabel: "考核成绩",
          type: "专业培训课程",
          btnText: "查看证书",
          imgAlt: "国家行政通用导论课程结业证书预览"
        }
      ],
      otherStudies: [
        {
          title: "数字化转型研究生文凭",
          institution: "Universidad de Santiago de Chile",
          status: "在读中",
          description: "专注于机构变革转型、数字公共服务、系统互操作性、数据治理与公共部门现代化的专业深造。"
        }
      ]
    },
    projectsPage: {
      metaTitle: "项目展示 | Mathias Solar",
      metaDesc: "Mathias Solar 开发的精选软件工程项目、机构公共平台与数字解决方案展示。",
      badge: "工程项目集",
      title: "精选项目",
      lead: "精选工程案例研究，详细展示技术挑战、架构设计与落地解决方案。",
      detailsLabel: "查看技术细节",
      challengeLabel: "核心挑战 / 问题：",
      participationLabel: "个人主要贡献：",
      scopeLabel: "项目范围与功能：",
      responsibilitiesLabel: "主要工程职责：",
      viewRepo: "查看 GitHub 仓库",
      viewLive: "访问线上生产站点",
      backHome: "返回首页"
    },
    contactPage: {
      metaTitle: "联系方式 | Mathias Solar",
      metaDesc: "与 Mathias Solar 联系，沟通软件工程开发、技术合作与数字项目。",
      badge: "联系渠道与表单",
      title: "联系方式",
      lead: "请简要说明您构想中的项目、技术挑战或合作意向。",
      profilesTitle: "专业社交履历",
      linkedinDesc: "建立专业职场联系。",
      linkedinAria: "访问 Mathias Solar 的 LinkedIn 个人主页",
      githubDesc: "浏览我的开源项目与代码仓库。",
      githubAria: "访问 Mathias Solar 的 GitHub 个人主页",
      discordTag: "solaaaar",
      discordDesc: "备用即时通讯渠道。",
      discordAria: "通过 Discord 联系 Mathias Solar",
      cvBtn: "查看个人简历",
      cvAria: "预览 Mathias Solar 的专业简历",
      location: "智利 · 艾森大区科伊艾克",
      availabilityText: "目前可承接旨在优化业务流程与搭建高扩展性数字平台的合作项目。",
      backHome: "返回首页",
      form: {
        nameLabel: "姓名",
        namePlaceholder: "例如：Constanza Silva",
        emailLabel: "电子邮箱",
        emailPlaceholder: "your.email@example.com",
        messageLabel: "留言内容",
        messagePlaceholder: "请简要介绍您的项目或咨询内容...",
        submitBtn: "发送留言",
        sendingBtn: "正在发送…",
        privacyText: "您的信息仅用于回复您的留言。",
        successMsg: "留言已成功发送。我会尽快回复您的邮件。",
        errorMsg: "无法发送留言。请重试。",
        requiredMsg: "必填项",
        emailInvalidMsg: "请输入有效的电子邮箱地址",
        messageLengthMsg: "请填写更详细的留言内容"
      }
    },
    notFoundPage: {
      metaTitle: "页面未找到 | Mathias Solar",
      metaDesc: "您访问的页面不存在、可能已被移动，或输入的地址有误。",
      badge: "页面未找到",
      code: "404",
      title: "这条路径迷失在太空中。",
      description: "您访问的页面不存在、可能已被移动，或输入的地址有误。",
      requestedPathLabel: "请求的路径：",
      homeButton: "返回首页",
      projectsButton: "查看项目",
      homeHref: "/zh/",
      projectsHref: "/zh/proyectos"
    },
    documentViewer: {
      closeAria: "关闭文档查看器",
      closeBtn: "关闭",
      openTab: "在新标签页打开",
      downloadCv: "下载简历",
      downloadDoc: "下载",
      openBtn: "打开",
      zoomOut: "缩小文档",
      zoomIn: "放大文档",
      zoomReset: "重置缩放比例至 100%",
      zoomLabel: "阅读比例",
      certInfo: "证书详细信息",
      viewDetails: "查看详情 ▼",
      cvCategory: "个人简历",
      cvTitle: "个人简历 — Mathias Solar",
      cvDesc: "计算机工程师，在 Web 软件开发、公共数字平台及机构数字化转型领域具备丰富经验。",
      certDisclaimer: "证书预览。验证信息已受到保护。",
      spanishNote: "该文件提供西班牙语版本。",
      pdfFallback: "您的浏览器无法直接显示此预览。您可以使用下方按钮打开或下载简历。"
    }
  }
};

// Crear Proxy para fallback automatico a Espanol ('es') cuando falte una traduccion en otro idioma
function createFallbackProxy(target, fallback) {
  return new Proxy(target, {
    get(obj, prop) {
      if (prop in obj && obj[prop] !== undefined) {
        const val = obj[prop];
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          return createFallbackProxy(val, fallback[prop] || {});
        }
        return val;
      }
      return fallback[prop];
    }
  });
}

const localizedTranslations = {
  es: baseTranslations.es,
  en: createFallbackProxy(baseTranslations.en, baseTranslations.es),
  fr: createFallbackProxy(baseTranslations.fr, baseTranslations.es),
  pt: createFallbackProxy(baseTranslations.pt, baseTranslations.es),
  'zh-CN': createFallbackProxy(baseTranslations['zh-CN'], baseTranslations.es)
};

// Aliases retrocompatibles (ES, EN, FR, PT, ZH)
localizedTranslations['ES'] = localizedTranslations.es;
localizedTranslations['EN'] = localizedTranslations.en;
localizedTranslations['FR'] = localizedTranslations.fr;
localizedTranslations['PT'] = localizedTranslations.pt;
localizedTranslations['ZH'] = localizedTranslations['zh-CN'];
localizedTranslations['zh'] = localizedTranslations['zh-CN'];

export const translations = new Proxy(localizedTranslations, {
  get(target, prop) {
    if (prop in target) return target[prop];
    // Fallback a 'es' si la clave de idioma no existe
    return target.es;
  }
});