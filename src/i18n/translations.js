export const translations = {
  ES: {
    nav: { profile: "Perfil", experience: "Experiencia", projects: "Proyectos", contact: "Contactar", menu: "MENÚ", home: "Inicio", aboutMe: "Más sobre mí" },
    hero: { subtitle: "Ingeniero en Informática", desc: "Transformando la complejidad en soluciones digitales elegantes. Especialista en desarrollo de software y modernización institucional.", btn: "Ver Proyectos" },
    about: {
      title: "Visión & Perfil",
      subtitle: "Conoce mi enfoque profesional, stack tecnológico, competencias y formación académica.",
      greeting: "Hola, soy Mathias 👋",
      p1: "Ingeniero en Informática altamente motivado, impulsado por el diseño de arquitecturas sólidas, el aprendizaje continuo y la creación de experiencias de usuario excepcionales. Me especializo en analizar requerimientos complejos y transformarlos en plataformas eficientes.",
      quote: "\"Creo en la tecnología como el puente principal entre problemas complejos y soluciones simples, eficientes y estéticamente superiores.\"",
      p2: "Actualmente aplico mi conocimiento en el sector público, participando activamente en la administración, mejora y optimización de servicios digitales institucionales. Mi objetivo es aportar en la modernización y digitalización, garantizando siempre sistemas escalables y accesibles para todos los usuarios.",
      techTitle: "Ecosistema Tecnológico",
      techLevel: "Nivel",
      techSpecialties: "Especialidades y Conceptos",
      tabs: [ { id: 'presentacion', label: 'Presentación' }, { id: 'tecnologias', label: 'Tecnologías' }, { id: 'competencias', label: 'Competencias' }, { id: 'estudios', label: 'Estudios' } ],
      techs: {
        react: { level: 'Avanzado', desc: 'Creación de interfaces dinámicas, componentes reutilizables y gestión de estados complejos.', sub: ['Hooks', 'Context API', 'React Router'] },
        js: { level: 'Avanzado', desc: 'El motor principal de mis aplicaciones. Manejo profundo de lógica asíncrona y ES6+.', sub: ['ES6+', 'Async-Await', 'Manipulación DOM'] },
        node: { level: 'Intermedio', desc: 'Desarrollo de servicios backend y creación de APIs RESTful veloces.', sub: ['Express.js', 'JWT', 'Middlewares'] },
        python: { level: 'Intermedio', desc: 'Automatización de procesos y desarrollo de arquitecturas backend.', sub: ['Scripts', 'Web Scraping', 'Backend'] },
        django: { level: 'Intermedio', desc: 'Framework robusto para proyectos complejos. Uso intensivo de su ORM.', sub: ['Django ORM', 'Vistas basadas en clases'] },
        laravel: { level: 'Avanzado', desc: 'Desarrollo PHP con arquitectura MVC.', sub: ['Eloquent ORM', 'Blade Templates'] },
        sql: { level: 'Avanzado', desc: 'Diseño y optimización de esquemas relacionales.', sub: ['PostgreSQL', 'MySQL', 'Normalización'] },
        firebase: { level: 'Intermedio', desc: 'Bases de datos en tiempo real.', sub: ['Firestore', 'Auth', 'Hosting'] },
        wp: { level: 'Avanzado', desc: 'Administración web masiva.', sub: ['Temas', 'CPT', 'Seguridad WP'] },
        docker: { level: 'Básico', desc: 'Contenerización de entornos.', sub: ['Docker Compose', 'Imágenes'] },
        git: { level: 'Avanzado', desc: 'Control de versiones.', sub: ['GitFlow', 'GitHub'] },
        linux: { level: 'Intermedio', desc: 'Administración remota de servidores web.', sub: ['Ubuntu', 'Rocky Linux', 'Bash'] },
        analytics: { level: 'Intermedio', desc: 'Análisis de tráfico y métricas.', sub: ['Google Analytics 4', 'Google Tag Manager', 'Reportes'] },
        astro: { level: 'Intermedio', desc: 'Sitios web estáticos ultrarrápidos (arquitectura de islas).', sub: ['Astro Islands', 'SSG', 'Rutas Dinámicas'] },
        powerbi: { level: 'Intermedio', desc: 'Visualización de datos mediante dashboards interactive y reportes.', sub: ['DAX', 'Modelado de Datos', 'Power Query'] }
      },
      competences: [
        { title: "Metodologías Ágiles", desc: "Gestión con Scrum para valor continuo." },
        { title: "Ofimática y Cloud", desc: "Dominio de Google Workspace y Azure." },
        { title: "Sistemas Operativos", desc: "Entornos Windows y Linux." },
        { title: "Visión e Innovación", desc: "Estrategias aplicadas a la tecnología." }
      ],
      studies: [
        { title: "Universidad Técnica Federico Santa María", desc: "Ingeniería en Informática", details: "Formación integral en desarrollo de software, bases de datos y tecnologías web." },
        { title: "Universidad de Santiago de Chile", desc: "Diplomado en Transformación Digital", details: "Especialización en modernización de servicios y procesos institucionales." },
        { title: "Cursos de Udemy", desc: "Especialización", details: "Dominio de frameworks modernos y buenas prácticas." }
      ]
    },
    experience: {
      title: "Trayectoria.", showMore: "Ver toda la trayectoria", hide: "Ocultar historial",
      jobs: [
        { company: "Gobierno Regional de Aysén", period: "2025 - Actualidad", role: "Soporte Informático y Gestión Digital", tasks: ["Administración avanzada y optimización continua del sitio web institucional.", "Implementación de mejoras a nivel de UI/UX.", "Integración de sistemas de analítica digital (GA4)."] },
        { company: "Empresa de Ejemplo", period: "2023 - 2025", role: "Desarrollador Full Stack", tasks: ["Mantenimiento y optimización de bases de datos relacionales."] }
      ]
    },
    projects: {
      title: "Proyectos Destacados.", showMore: "Ver todos los proyectos", hide: "Ocultar proyectos",
      items: [
        { 
          title: "NeoRoute", 
          cat: "Solución Empresarial", 
          desc: "Sistema TMS diseñado para la optimización logística de vanguardia.", 
          extendedDesc: "NeoRoute es una plataforma integral de gestión de transporte (TMS) que automatiza y optimiza la logística corporativa. Permite trazabilidad en tiempo real, cálculo de rutas eficientes y reportes analíticos avanzados, reduciendo los costos operativos significativamente.",
          techs: ['React', 'Django', 'Firebase', 'PostgreSQL', 'Google Maps API'],
          link: "#",
          github: "#"
        },
        { 
          title: "Portal Web GORE Aysén", 
          cat: "Sector Público", 
          desc: "Creación, administración y optimización del sitio web del GORE.", 
          extendedDesc: "Rediseño y modernización completa del portal web del Gobierno Regional de Aysén. Se implementaron prácticas de accesibilidad, optimización SEO y un CMS a medida para permitir a los funcionarios actualizar contenido de manera ágil y segura.",
          techs: ['WordPress', 'Linux Server', 'UI/UX', 'PHP', 'MySQL'],
          link: "https://goreaysen.cl"
        },
        { 
          title: "Proyecto Futuro", 
          cat: "Desarrollo Personal", 
          desc: "Espacio preparado para tus futuros proyectos.", 
          extendedDesc: "Aplicación conceptual en desarrollo orientada a la gestión y automatización de tareas personales. Implementa las últimas características de React y una arquitectura sin servidor (serverless) para garantizar máxima escalabilidad.",
          techs: ['React', 'Tailwind', 'Node.js', 'AWS'],
          github: "#"
        }
      ]
    },
    contact: { title: "Contacto.", subtitle: "Envíame un mensaje", desc: "Responderé a tu correo lo antes posible.", name: "Nombre", nameHolder: "Tu nombre", email: "Correo Electrónico", msg: "Mensaje", msgHolder: "Escribe tu mensaje...", bot: "No soy un robot", btn: "Enviar Mensaje", role: "Ingeniero en Informática", download: "Descargar CV" },
    more: { 
      title: "Más sobre mí", 
      desc: "Más allá de las pantallas y el código, me apasiona el aprendizaje continuo y por disfrutar de los pequeños detalles. Te comparto un poco de mis intereses y lo que me inspira:", 
      back: "Volver al inicio", 
      hobbies: [ 
        { title: "Deportes y Adrenalina", desc: "Me encanta el fútbol, disfruto de la intensidad táctica de la UFC y soy un apasionado por la velocidad y estrategia de la Fórmula 1." }, 
        { title: "Aprendizaje Constante", desc: "Considero que la tecnología avanza muy rápido. Me gusta estar constantemente estudiando, probando nuevas arquitecturas y ampliando mis conocimientos técnicos." }, 
        { title: "Cine y Hardware", desc: "Disfruto del buen cine de ciencia ficción y tecnología, además de armar, optimizar y probar los últimos componentes de hardware." } 
      ],
      spotifyTitle: "Mi Playlist de Código",
      spotifyDesc: "La música es fundamental en mi día a día. Esta es la selección que uso para entrar en estado de 'flow' mental y máxima concentración mientras diseño arquitecturas o resuelvo algoritmos.",
      lolTitle: "En la Grieta del Invocador",
      // Actualizado con tus rangos basados en tu información
      lolDesc: "Competitividad pura. Como Main Azir (llegando a ser Rank 1 LAS y Rank 13 del Mundo), entiendo que para alcanzar el alto rendimiento se requiere de la misma microgestión, análisis de datos y paciencia que demanda diseñar una plataforma de software escalable. ¡El orden de Shurima!",
      lolRank: "Master",
      lolRankLAS: "Rank 1 LAS (Azir)",
      lolRankWorld: "Rank 13 Mundial",
      lolUser: "Solar#Azir",
      lolPrevSeasonsTitle: "Temporadas Anteriores Master",
      lolPrevSeasonsList: "S2024 Split 1, S2024 Split 2", // Actualizado según tu información
      lolLink: "https://u.gg/lol/profile/las/solar-azir/overview",
      lolUgg: "Ver perfil en U.GG"
    }
  },
  EN: {
    nav: { profile: "Profile", experience: "Experience", projects: "Projects", contact: "Contact", menu: "MENU", home: "Home", aboutMe: "About me" },
    hero: { subtitle: "Software Engineer", desc: "Transforming complexity into elegant digital solutions. Specialist in software development and institutional modernization.", btn: "View Projects" },
    about: {
      title: "Vision & Profile", subtitle: "Discover my professional approach, tech stack, skills, and academic background.", greeting: "Hi, I'm Mathias 👋",
      p1: "Highly motivated Software Engineer, driven by solid architecture design, continuous learning, and creating exceptional user experiences. I specialize in analyzing complex requirements and transforming them into efficient platforms.",
      quote: "\"I believe in technology as the main bridge between complex problems and simple, efficient, and aesthetically superior solutions.\"",
      p2: "Currently applying my knowledge in the public sector, actively participating in the administration, improvement, and optimization of digital institutional services.",
      techTitle: "Tech Ecosystem", techLevel: "Level", techSpecialties: "Specialties & Concepts",
      tabs: [ { id: 'presentacion', label: 'Presentation' }, { id: 'tecnologias', label: 'Technologies' }, { id: 'competencias', label: 'Skills' }, { id: 'estudios', label: 'Education' } ],
      techs: {
        react: { level: 'Advanced', desc: 'Creation of dynamic interfaces, reusable components, and complex state management.', sub: ['Hooks', 'Context API', 'React Router'] },
        js: { level: 'Advanced', desc: 'The core engine of my apps. Deep handling of async logic and ES6+.', sub: ['ES6+', 'Async-Await', 'Manipulación DOM'] },
        node: { level: 'Intermediate', desc: 'Backend services and fast RESTful APIs.', sub: ['Express.js', 'JWT', 'Middlewares'] },
        python: { level: 'Intermediate', desc: 'Process automation and backend architecture.', sub: ['Scripts', 'Web Scraping', 'Backend'] },
        django: { level: 'Intermediate', desc: 'Robust framework for complex projects.', sub: ['Django ORM', 'Class-based Views'] },
        laravel: { level: 'Advanced', desc: 'PHP development with MVC architecture.', sub: ['Eloquent ORM', 'Blade Templates'] },
        sql: { level: 'Advanced', desc: 'Design and optimization of relational schemas.', sub: ['PostgreSQL', 'MySQL', 'Normalización'] },
        firebase: { level: 'Intermediate', desc: 'Real-time databases.', sub: ['Firestore', 'Auth', 'Hosting'] },
        wp: { level: 'Advanced', desc: 'Massive web portal administration.', sub: ['Themes', 'CPT', 'Seguridad WP'] },
        docker: { level: 'Basic', desc: 'Environment containerization.', sub: ['Docker Compose', 'Images'] },
        git: { level: 'Advanced', desc: 'Version control.', sub: ['GitFlow', 'GitHub'] },
        linux: { level: 'Intermediate', desc: 'Remote administration of web servers.', sub: ['Ubuntu', 'Rocky Linux', 'Bash'] },
        analytics: { level: 'Intermediate', desc: 'Metrics and traffic analysis.', sub: ['Google Analytics 4', 'Google Tag Manager', 'Reportes'] },
        astro: { level: 'Intermediate', desc: 'Ultra-fast static websites.', sub: ['Astro Islands', 'SSG', 'Rutas Dinámicas'] },
        powerbi: { level: 'Intermediate', desc: 'Data visualization.', sub: ['DAX', 'Data Modeling', 'Power Query'] }
      },
      competences: [
        { title: "Agile Methodologies", desc: "Project management with Scrum." }, { title: "Office & Cloud", desc: "Proficiency in Google Workspace and Azure." },
        { title: "Operating Systems", desc: "Windows and Linux environments." }, { title: "Vision & Innovation", desc: "Strategies applied to tech." }
      ],
      studies: [
        { title: "Universidad Técnica Federico Santa María", desc: "Software Engineering", details: "Comprehensive training in software development, databases, and web technologies." }, 
        { title: "Universidad de Santiago de Chile", desc: "Diploma in Digital Transformation", details: "Specialization in modernisation of services." },
        { title: "Udemy Courses", desc: "Specialization", details: "Mastery of modern frameworks and best practices." }
      ]
    },
    experience: {
      title: "Experience.", showMore: "View full history", hide: "Hide history",
      jobs: [
        { company: "Gobierno Regional de Aysén", period: "2025 - Present", role: "IT Support and Digital Management", tasks: ["Advanced administration of the institutional website.", "UI/UX improvements.", "Analytics integration (GA4)."] },
        { company: "Example Company", period: "2023 - 2025", role: "Full Stack Developer", tasks: ["Relational database maintenance and optimisation."] }
      ]
    },
    projects: {
      title: "Featured Projects.", showMore: "View all projects", hide: "Hide projects",
      items: [
        { 
          title: "NeoRoute", 
          cat: "Business Solution", 
          desc: "TMS System designed for cutting-edge logistics optimization.",
          extendedDesc: "NeoRoute is a comprehensive Transport Management System (TMS) that automates and optimizes corporate logistics. It enables real-time tracking, efficient route calculation, and advanced analytical reporting, significantly reducing operational costs.",
          techs: ['React', 'Django', 'Firebase', 'PostgreSQL', 'Google Maps API'],
          link: "#",
          github: "#"
        },
        { 
          title: "GORE Aysén Web Portal", 
          cat: "Public Sector", 
          desc: "Creation, administration, and optimisation of the website.",
          extendedDesc: "Complete redesign and modernization of the Aysén Regional Government web portal. Accessibility practices, SEO optimization, and a custom CMS were implemented to allow staff to update content quickly and securely.",
          techs: ['WordPress', 'Linux Server', 'UI/UX', 'PHP', 'MySQL'],
          link: "https://goreaysen.cl"
        },
        { 
          title: "Future Project", 
          cat: "Personal Development", 
          desc: "Space prepared for future projects.",
          extendedDesc: "Conceptual application in development focused on task management and automation. It implements the latest React features and a serverless architecture to ensure maximum scalability.",
          techs: ['React', 'Tailwind', 'Node.js', 'AWS'],
          github: "#"
        }
      ]
    },
    contact: { title: "Contact.", subtitle: "Send me a message", desc: "I'll reply to your email as soon as possible.", name: "Name", nameHolder: "Your name", email: "Email", msg: "Message", msgHolder: "Write your message...", bot: "I'm not a robot", btn: "Send Message", role: "Software Engineer", download: "Download CV" },
    more: { 
      title: "More about me", 
      desc: "Beyond screens and code, I consider myself passionate about continuous learning and enjoying the small details. Here I share a bit of my daily life:", 
      back: "Back to home", 
      hobbies: [ 
        { title: "Sports & Adrenaline", desc: "I love football, I enjoy the tactical intensity of UFC, and I am passionate about the speed and strategy of Formula 1." }, 
        { title: "Continuous Learning", desc: "Technology moves fast. I like to be constantly studying, trying new architectures, and expanding my technical knowledge." }, 
        { title: "Cinema & Hardware", desc: "I enjoy good sci-fi cinema and assembling, optimizing, and benchmarking the latest hardware components." } 
      ],
      spotifyTitle: "Coding Playlist",
      spotifyDesc: "Music is fundamental in my daily routine. This is the selection I use to enter 'flow' state while developing.",
      lolTitle: "On the Summoner's Rift",
      lolDesc: "Pure competitiveness. As an Azir Main (reaching Rank 1 LAS & Rank 13 World), I know reaching Master requires the same macro-management, data analysis, and patience as developing a scalable software architecture. Shurima!",
      lolRank: "Master",
      lolRankLAS: "Rank 1 LAS (Azir)", 
      lolRankWorld: "Rank 13 World",
      lolUser: "Solar#Azir",
      lolPrevSeasonsTitle: "Previous Master Seasons",
      lolPrevSeasonsList: "S2024 Split 1, S2024 Split 2", // Corregido en EN también
      lolLink: "https://u.gg/lol/profile/las/solar-azir/overview",
      lolUgg: "View profile on U.GG"
    }
  }
};