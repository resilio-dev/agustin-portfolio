import { IUser } from '../models/IUser.model';

export const DEFAULT_USER_DATA: IUser = {
  id: 1,
  name: 'Agustin',
  lastName: 'Collueque Velazquez',
  title: 'Web Developer',
  mainPhrase: 'I like to create robust and scalable web applications with the best user experiences.',
  secondaryPhrase: 'Passionate about constant learning and creative solutions that make a difference.',
  description: 'I enjoy creating web applications that not only work well, but are carefully designed from the inside out. I have a special love for backend development with Java, where I focus on writing clean, maintainable code, good architecture, and proven design patterns. I care about the details, from how data flows to how users feel, combining depth and technique with a human touch.',
  email: 'agustincv1997@gmail.com',
  age: 27,
  urlImg: 'assets/img/perfil-default.jpeg',
  urlCV: 'assets/CV_AGUSTIN.pdf',
  projects: [
    {
      id: 1,
      title: 'Portfolio Web',
      description: 'Personal site to show projects, skills and track record as a web developer, with responsive design and fluid navigation.',
      link: '#',
      urlImg: 'assets/img/projects/portfolio-web.png',
      startDate: '2025-04-20',
      endDate: '2025-07-27',
      tecnologies: [],
    },
    {
      id: 2,
      title: 'Tournament Manager App',
      description: 'Complete application to manage sports tournaments, with team management, fixture, statistics and user control.',
      link: '#',
      urlImg: 'assets/img/projects/tournament-manager.png',
      startDate: '2025-04-20',
      endDate: '2025-08-12',
      tecnologies: [],
    },
  ],
  jobs: [
    {
      id: 1,
      title: 'Gestor de turnos para barbería',
      description: 'Aplicación web para agendar turnos, realizar publicidad, controlar servicios y clientes, con panel de administración.',
      urlImg: 'assets/img/projects/shift-manager.png',
      startDate: '2025-08-12',
      endDate: 'Currently',
      technologies: []
    }
  ],
  formations: [
    {
      id: 1,
      title: 'Web Full Stack Junior',
      description: "Comprehensive training in web development, with a focus on frontend and backend technologies. Practices in responsive design, API consumption, authentication, version control and cloud deployment. Development of a personal portfolio project following agile methodologies.",
      startDate: '2022-11-16',
      endDate: '2023-08-22',
      type: 'CURSO',
      academy: 'National Institute of Industrial Technology',
      skills: []
    },
    {
      id: 2,
      title: 'Technical English for software developers',
      description: "Oral/written comprehension and production in everyday situations. Practice essential vocabulary, simple grammatical structures and communication skills for personal presentations, descriptions, requests and understanding of basic instructions.",
      startDate: '2023-08-25',
      endDate: '2023-10-22',
      type: 'CURSO',
      academy: 'University Language Center',
      skills: []
    },
    {
      id: 3,
      title: "Bachelor's degree in computer science",
      description: "Oral/written comprehension and production in everyday situations. Practice essential vocabulary, simple grammatical structures and communication skills for personal presentations, descriptions, requests and understanding of basic instructions.",
      startDate: '2015-03-08',
      endDate: 'Actually',
      type: 'FORMACION_FORMAL',
      academy: 'National University of Comahue',
      skills: []
    },
  ],
  skills: [
    {
      id: 1,
      name: "HTML5",
      skills: ["Semántica", "Accesibilidad", "Etiquetas multimedia"],
      urlLogo: "assets/img/logos/language/html5.svg",
      isLearning: false,
      type: "LANGUAGE"
    },
    {
      id: 2,
      name: "CSS3",
      skills: ["Flexbox", "Grid", "Responsive Design"],
      urlLogo: "css3-logo.png",
      isLearning: false,
      type: "LANGUAGE"
    },
    {
      id: 3,
      name: "JavaScript",
      skills: ["DOM Manipulation", "Eventos", "Funciones de orden superior"],
      urlLogo: "javascript-logo.png",
      isLearning: false,
      type: "LANGUAGE"
    },
    {
      id: 4,
      name: "TypeScript",
      skills: ["Tipado estático", "Interfaces", "Decoradores"],
      urlLogo: "typescript-logo.png",
      isLearning: false,
      type: "LANGUAGE"
    },
    {
      id: 5,
      name: "Java",
      skills: ["POO", "Colecciones", "Streams", "Lambdas"],
      urlLogo: "java-logo.png",
      isLearning: false,
      type: "LANGUAGE"
    },
    {
      id: 6,
      name: "JSON",
      skills: ["Formato de intercambio", "APIs REST", "Serialización"],
      urlLogo: "json-logo.png",
      isLearning: false,
      type: "LANGUAGE"
    },
    {
      id: 7,
      name: "Angular",
      skills: ["Componentes", "Servicios", "Rutas", "Standalone Components"],
      urlLogo: "angular-logo.png",
      isLearning: false,
      type: "FRAMEWORK"
    },
    {
      id: 8,
      name: "RxJS",
      skills: ["Observables", "Subjects", "Operators"],
      urlLogo: "rxjs-logo.png",
      isLearning: false,
      type: "LIBRARY"
    },
    {
      id: 9,
      name: "Spring Boot",
      skills: ["REST API", "JPA", "Seguridad", "Inyección de dependencias"],
      urlLogo: "springboot-logo.png",
      isLearning: false,
      type: "FRAMEWORK"
    },
    {
      id: 10,
      name: "Bootstrap",
      skills: ["Componentes UI", "Sistema de rejilla", "Utilidades"],
      urlLogo: "bootstrap-logo.png",
      isLearning: false,
      type: "FRAMEWORK"
    },
    {
      id: 11,
      name: "Tailwind CSS",
      skills: ["Utility-First", "Responsive", "Customización"],
      urlLogo: "tailwind-logo.png",
      isLearning: false,
      type: "FRAMEWORK"
    },
    {
      id: 12,
      name: "Git",
      skills: ["Commits", "Branching", "Merge", "Rebase"],
      urlLogo: "git-logo.png",
      isLearning: false,
      type: "TOOL"
    },
    {
      id: 13,
      name: "GitHub",
      skills: ["Repositorios remotos", "Pull Requests", "Actions"],
      urlLogo: "github-logo.png",
      isLearning: false,
      type: "PLATFORM"
    },
    {
      id: 14,
      name: "PostgreSQL",
      skills: ["Consultas SQL", "Modelado relacional", "Índices"],
      urlLogo: "postgresql-logo.png",
      isLearning: false,
      type: "DATABASE"
    },
    {
      id: 15,
      name: "MySQL",
      skills: ["Consultas SQL", "Stored Procedures", "Integración con JPA"],
      urlLogo: "mysql-logo.png",
      isLearning: false,
      type: "DATABASE"
    },
    {
      id: 16,
      name: "NetBeans",
      skills: ["Desarrollo Java", "Depuración", "Maven"],
      urlLogo: "netbeans-logo.png",
      isLearning: false,
      type: "IDE"
    },
    {
      id: 17,
      name: "VS Code",
      skills: ["Extensiones", "Snippets", "Depuración de código"],
      urlLogo: "vscode-logo.png",
      isLearning: false,
      type: "IDE"
    },
    {
      id: 18,
      name: "Docker",
      skills: ["Imágenes", "Contenedores", "Docker Compose"],
      urlLogo: "docker-logo.png",
      isLearning: false,
      type: "TOOL"
    },
    {
      id: 19,
      name: "npm",
      skills: ["Instalación de paquetes", "Scripts", "Gestión de dependencias"],
      urlLogo: "npm-logo.png",
      isLearning: false,
      type: "TOOL"
    },
    {
      id: 20,
      name: "Swagger",
      skills: ["Documentación de APIs", "OpenAPI", "UI interactiva"],
      urlLogo: "swagger-logo.png",
      isLearning: false,
      type: "TOOL"
    },
    {
      id: 21,
      name: "JWT Token",
      skills: ["Autenticación", "Claims", "Validación de tokens"],
      urlLogo: "jwt-logo.png",
      isLearning: false,
      type: "SECURITY"
    },
    {
      id: 22,
      name: "Auth0",
      skills: ["Gestión de identidad", "OAuth", "Single Sign-On"],
      urlLogo: "auth0-logo.png",
      isLearning: false,
      type: "PLATFORM"
    }
  ],
  yearsXP: 3,
  numberPhone: ''
};
