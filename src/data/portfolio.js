export const profile = {
  name: 'Huzaifa Nadeem',
  title: 'Associate Software Engineer',
  tagline: 'MERN Stack Developer',
  location: 'Pakistan',
  phone: '+92 316 0735200',
  phoneHref: '+923160735200',
  email: 'huzaifanadeemtts@gmail.com',
  github: 'https://github.com/Huzaifa-coder01',
  linkedin: 'https://www.linkedin.com/in/huzaifa-nadeem-b591272aa/',
  summary:
    'Software Engineer with hands-on experience in full-stack development, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Skilled in building responsive web applications, developing and integrating RESTful APIs, designing scalable database schemas, and implementing complex, role-based business logic.',
  summaryExtra:
    'Proven track record delivering admin panels, backend services, and production features across multiple live products — from multi-role job & staffing platforms to consumer mobile app backends.',
  stats: [
    { value: '2+', label: 'Years' },
    { value: '12+', label: 'Projects' },
    { value: '3', label: 'Companies' },
    { value: '3.4', label: 'CGPA' },
  ],
}

export const experience = [
  {
    role: 'Jr. Software Engineer',
    company: 'GlowingSoft Technologies',
    period: 'May 2026 – Present',
    current: true,
    points: [
      'Developing and maintaining full-stack applications using the MERN stack, building responsive interfaces, RESTful APIs, and scalable database-driven features.',
      'Delivering backend services and admin-panel frontends across multiple concurrent client projects, implementing role-based access control and multi-party business workflows.',
      'Collaborating with cross-functional teams to design and ship features from requirements through production deployment.',
    ],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MUI', 'REST APIs'],
    shipped: ['Tempy', 'Nom Nom Babies', 'Odd Jobs', 'Spiltz'],
  },
  {
    role: 'Web Developer',
    company: 'Visionoids Solutions',
    period: 'Jul 2025 – Dec 2025',
    points: [
      'Developed responsive, user-friendly websites using modern web technologies, ensuring cross-browser compatibility and performance.',
      'Collaborated with designers and developers, gaining experience in debugging, code optimization, and client-focused delivery.',
    ],
    stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery'],
    shipped: ['RizzUp Media', 'Supreme Ghulaf-e-Kabah', 'Cospectus', 'B Advancy'],
  },
  {
    role: 'Frontend Developer',
    company: 'Aasan Hai',
    period: 'Sep 2024 – Jun 2025',
    points: [
      'Developed responsive, high-performance user interfaces using React and Tailwind CSS.',
      'Implemented core features and collaborated with cross-functional teams to deliver scalable, maintainable solutions.',
    ],
    stack: ['React', 'Tailwind CSS', 'JavaScript', 'REST APIs'],
    shipped: ['Twitter Bot Dashboard', 'Farm Bridge'],
  },
]

export const projects = [
  {
    name: 'Tempy',
    subtitle: 'Multi-Role Job & Staffing Platform',
    role: 'Backend Developer',
    org: 'GlowingSoft Technologies',
    category: 'Full Stack',
    featured: true,
    description:
      'Backend for a platform connecting customers with suppliers, companies, agencies, and nurses across individual and company-based accounts — 7 distinct roles in total.',
    points: [
      'Designed and implemented role-based access control and business logic covering multiple user types and workflows.',
      'Built complex job bidding, assignment, acceptance/rejection, and booking workflows, including customer-to-supplier bidding and nurse-specific direct-booking logic.',
      'Implemented company/agency assignment flows with reassignment of rejected jobs, ensuring bookings are created only after all required approvals.',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'RBAC'],
  },
  {
    name: 'Nom Nom Babies',
    subtitle: 'Baby Diet & Reminder App',
    role: 'Full-Stack Developer',
    org: 'GlowingSoft Technologies',
    category: 'Full Stack',
    featured: true,
    description:
      "Application helping parents track their babies' diets and receive timely reminders, with support for multiple babies per account.",
    points: [
      'Built the admin panel frontend plus backend services for both the admin panel and the mobile application.',
      'Implemented multi-baby account support and an active-baby switching feature on the home screen.',
      'Designed application logic so the entire app dynamically adapts to the currently selected active baby.',
    ],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MUI'],
  },
  {
    name: 'E-Health Care',
    subtitle: 'Final Year Project — Patient, Doctor & Hospital Platform',
    role: 'Full-Stack Developer',
    org: 'Riphah International University',
    category: 'Full Stack',
    featured: true,
    description:
      'A platform connecting patients with doctors and hospitals. Patients describe symptoms to a chatbot, which suggests relevant doctors and temporary-relief medication.',
    points: [
      'Built appointment booking between patients and doctors, with medical document uploads (test reports, X-rays).',
      'Implemented a symptom-driven chatbot flow that recommends doctors and temporary relief guidance.',
      'Developed both frontend and backend in the MERN stack.',
    ],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Chatbot'],
  },
  {
    name: 'Odd Jobs',
    subtitle: 'Service Marketplace App',
    role: 'Frontend Developer',
    org: 'GlowingSoft Technologies',
    category: 'Frontend',
    description:
      'Marketplace connecting users with service professionals such as plumbers, electricians, and painters, hired directly through the app.',
    points: [
      'Built the admin panel frontend with responsive, reusable UI components using React, Vite, and MUI.',
      'Integrated REST APIs and implemented admin features for managing users, service providers, and application data.',
    ],
    stack: ['React', 'Vite', 'MUI', 'REST APIs'],
  },
  {
    name: 'Spiltz',
    subtitle: 'Bill Splitting App',
    role: 'Frontend Developer',
    org: 'GlowingSoft Technologies',
    category: 'Frontend',
    description:
      'App for splitting bills between friends — create a group and split any bill across its members.',
    points: [
      'Built the admin panel frontend using React, Vite, and MUI.',
      'Integrated REST APIs across admin management screens.',
    ],
    stack: ['React', 'Vite', 'MUI', 'REST APIs'],
  },
  {
    name: 'Farm Bridge',
    subtitle: 'Farm-to-Buyer E-Commerce',
    role: 'Frontend Developer',
    org: 'Aasan Hai',
    category: 'Frontend',
    description:
      'E-commerce platform where buyers purchase produce such as wheat directly from farmers.',
    points: [
      'Developed the frontend with React and Tailwind CSS, focused on responsive, high-performance UI.',
    ],
    stack: ['React', 'Tailwind CSS', 'REST APIs'],
  },
  {
    name: 'Twitter Bot Dashboard',
    subtitle: 'Automation Control Panel',
    role: 'Frontend Developer',
    org: 'Aasan Hai',
    category: 'Frontend',
    description:
      'Dashboard frontend for managing and monitoring an automated Twitter bot.',
    points: [
      'Built the dashboard interface using React and Tailwind CSS with reusable, maintainable components.',
    ],
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    name: 'RizzUp Media',
    subtitle: 'Client Website',
    role: 'Web Developer',
    org: 'Visionoids Solutions',
    category: 'Websites',
    description:
      'Responsive client-based website built with a focus on performance and cross-browser compatibility.',
    points: [
      'Developed a responsive website using HTML, Bootstrap, and JavaScript.',
      'Optimized performance and ensured cross-browser compatibility.',
    ],
    stack: ['HTML', 'Bootstrap', 'JavaScript'],
  },
  {
    name: 'Supreme Ghulaf-e-Kabah',
    subtitle: 'Client Website',
    role: 'Web Developer',
    org: 'Visionoids Solutions',
    category: 'Websites',
    description:
      'Responsive website built with a strong focus on load time and smooth functionality across devices.',
    points: [
      'Developed a responsive website using HTML, CSS, and JavaScript.',
      'Optimized load times and ensured smooth functionality across devices.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Cospectus',
    subtitle: 'Client Website',
    role: 'Web Developer',
    org: 'Visionoids Solutions',
    category: 'Websites',
    description:
      'Responsive corporate website focused on clean UI and user experience.',
    points: [
      'Developed a responsive website using HTML, Bootstrap, and JavaScript.',
      'Focused on clean UI, user experience, and cross-browser compatibility.',
    ],
    stack: ['HTML', 'Bootstrap', 'JavaScript'],
  },
  {
    name: 'B Advancy',
    subtitle: 'Client Website',
    role: 'Web Developer',
    org: 'Visionoids Solutions',
    category: 'Websites',
    description:
      'Dynamic, responsive website with interactive features across all device sizes.',
    points: [
      'Developed a dynamic and responsive website using HTML, Bootstrap, and JavaScript.',
      'Implemented interactive features and enhanced user experience across devices.',
    ],
    stack: ['HTML', 'Bootstrap', 'JavaScript'],
  },
  {
    name: 'Gemini Clone',
    subtitle: 'AI Chat Interface',
    role: 'Personal Project',
    org: 'Personal',
    category: 'Personal',
    description:
      'A clone of the Gemini chat interface built to explore AI API integration and streaming-style chat UI.',
    points: [
      'Built the full chat interface in React with API integration and conversation state handling.',
    ],
    stack: ['React', 'JavaScript', 'CSS', 'API Integration'],
  },
  {
    name: 'Landing Page',
    subtitle: 'Responsive Marketing Page',
    role: 'Personal Project',
    org: 'Personal',
    category: 'Personal',
    description:
      'A modern, fully responsive landing page built to practice layout, animation, and design fundamentals.',
    points: ['Built a pixel-focused responsive layout with modern CSS.'],
    stack: ['React', 'CSS', 'Responsive Design'],
  },
  {
    name: 'Portfolio',
    subtitle: 'This Website',
    role: 'Personal Project',
    org: 'Personal',
    category: 'Personal',
    description:
      'The site you are looking at — a fast, responsive single-page portfolio built with React and Vite, deployed on Vercel.',
    points: ['Designed and built from scratch with React, Vite, and vanilla CSS.'],
    stack: ['React', 'Vite', 'CSS'],
    link: 'https://github.com/Huzaifa-coder01',
  },
]

export const skills = [
  {
    group: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript (ES6+)',
      'React JS',
      'Next JS',
      'Tailwind CSS',
      'Bootstrap',
      'MUI',
      'jQuery',
      'Vite',
    ],
  },
  {
    group: 'Backend',
    items: [
      'Node JS',
      'Express JS',
      'PHP',
      'RESTful API Design',
      'Role-Based Access Control',
    ],
  },
  { group: 'Database', items: ['MongoDB', 'MySQL'] },
  { group: 'Tools & Practices', items: ['Git', 'GitHub', 'Agile Collaboration'] },
]

export const education = [
  {
    degree: 'Bachelor of Software Engineering',
    school: 'Riphah International University',
    period: '2022 – 2026',
    result: 'CGPA 3.4',
  },
  {
    degree: 'Intermediate (ICS)',
    school: 'Govt. Graduate College',
    period: '2019 – 2021',
    result: '648/1100 (58.9%)',
  },
  {
    degree: 'Matriculation',
    school: 'Al Ain Public School',
    period: '2016 – 2018',
    result: '717/1100 (65.18%)',
  },
]

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Urdu', level: 'Native' },
]

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]
