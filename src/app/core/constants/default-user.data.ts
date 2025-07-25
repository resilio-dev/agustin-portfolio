import { IUser } from '../models/IUser.model';

export const DEFAULT_USER_DATA: IUser = {
  id: 1,
  name: 'Agustin',
  lastName: 'Collueque Velazquez',
  title: 'Web Developer',
  mainPhrase:
    'I like to create robust and scalable web applications with the best user experiences.',
  secondaryPhrase:
    'Passionate about constant learning and creative solutions that make a difference.',
  description:
    'I enjoy creating web applications that not only work well, but are carefully designed from the inside out. I have a special love for backend development with Java, where I focus on writing clean, maintainable code, good architecture, and proven design patterns. I care about the details, from how data flows to how users feel, combining depth and technique with a human touch.',
  email: 'agustincv1997@gmail.com',
  age: 27,
  urlImg: 'assets/img/perfil-default.jpeg',
  urlCV: 'assets/CV_AGUSTIN.pdf',
  projects: [
    {
      id: 1,
      title: 'Portfolio Web',
      description:
        'Personal site to show projects, skills and track record as a web developer, with responsive design and fluid navigation.',
      link: '#',
      urlImg: 'assets/img/projects/portfolio-web.png',
      startDate: '2025-04-20',
      endDate: '2025-07-27',
      tecnologies: [],
    },
    {
      id: 2,
      title: 'Tournament Manager App',
      description:
        'Complete application to manage sports tournaments, with team management, fixture, statistics and user control.',
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
      endDate: 'Actually',
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
      academy: 'Instituto Nacional de Tecnología Industrial',
      skills: []
    },
    {
      id: 2,
      title: 'Technical English for software developers',
      description: "Oral/written comprehension and production in everyday situations. Practice essential vocabulary, simple grammatical structures and communication skills for personal presentations, descriptions, requests and understanding of basic instructions.",
      startDate: '2023-08-25',
      endDate: '2023-10-22',
      type: 'CURSO',
      academy: 'Centro Universitario de Idiomas',
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
      name: 'HTML5',
      description: '',
      urlLogo: 'assets/img/logos/language/html5.svg',
      isLearning: false,
      type: 'LANGUAGE'
    },
    {
      id: 2,
      name: 'CSS3',
      description: '',
      urlLogo: 'assets/img/logos/language/css_old.svg',
      isLearning: false,
      type: 'LANGUAGE'
    },
    {
      id: 3,
      name: 'JS',
      description: '',
      urlLogo: 'assets/img/logos/language/javascript.svg',
      isLearning: false,
      type: 'LANGUAGE'
    },
    {
      id: 4,
      name: 'Java',
      description: '',
      urlLogo: 'assets/img/logos/language/java.svg',
      isLearning: false,
      type: 'LANGUAGE'
    },
    {
      id: 5,
      name: 'Typescript',
      description: '',
      urlLogo: 'assets/img/logos/language/typescript.svg',
      isLearning: false,
      type: 'LANGUAGE'
    },
    {
      id: 6,
      name: 'JSON',
      description: '',
      urlLogo: 'assets/img/logos/language/json.svg',
      isLearning: false,
      type: 'LANGUAGE'
    },
  ],
  yearsXP: 3,
};
