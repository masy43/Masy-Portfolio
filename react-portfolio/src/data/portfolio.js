export const skills = [
  {
    name: "React",
    category: "frontend",
    icon: "/icons/Icons8/icons8-react-50.png",
    desc: "Build fast, interactive UIs with reusable components — your app stays snappy at any scale.",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "/icons/Icons8/icons8-typescript.svg",
    desc: "Catch bugs before they ship — type safety means fewer errors and faster development.",
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: "/icons/Icons8/icons8-html-5-50.svg",
    desc: "Semantic, accessible markup that search engines love — boosting your SEO from the ground up.",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: "/icons/Icons8/icons8-css3-50.svg",
    desc: "Pixel-perfect layouts with smooth animations — your site looks polished on every device.",
  },
  {
    name: "Tailwind",
    category: "frontend",
    icon: "/icons/Icons8/icons8-tailwindcss.svg",
    desc: "Rapid UI development with utility-first classes — consistent design, zero bloat.",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    icon: "/icons/Icons8/icons8-bootstrap.svg",
    desc: "Production-ready, responsive components — launch faster with a proven design system.",
  },
  {
    name: "Node.js",
    category: "backend",
    icon: "/icons/Icons8/icons8-node-js-50.png",
    desc: "JavaScript everywhere — one language for frontend and backend means faster delivery and lower costs.",
  },
  {
    name: "NestJS",
    category: "backend",
    icon: "/icons/Icons8/icons8-nestjs.svg",
    desc: "Enterprise-grade architecture out of the box — scalable, maintainable APIs that grow with your business.",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: "/icons/Icons8/icons8-express-js.svg",
    desc: "Lightweight and blazing fast — ideal for RESTful APIs and microservices that need to perform.",
  },
  {
    name: "Python",
    category: "backend",
    icon: "/icons/Icons8/icons8-python.svg",
    desc: "Versatile scripting and automation — from data processing to backend logic, it handles it all.",
  },
  {
    name: "PostgreSQL",
    category: "database",
    icon: "/icons/Icons8/icons8-postgresql.svg",
    desc: "Rock-solid relational database — handles complex queries and massive datasets with ease.",
  },
  {
    name: "SQL",
    category: "database",
    icon: "/icons/Icons8/icons8-sql-50.png",
    desc: "Efficient data retrieval and manipulation — optimized queries keep your app lightning fast.",
  },
  {
    name: "Prisma",
    category: "database",
    icon: "/icons/Icons8/icons8-prisma-orm-50.png",
    desc: "Type-safe database access with auto-generated queries — fewer bugs, faster development cycles.",
  },
  {
    name: "Git",
    category: "tools",
    icon: "/icons/Icons8/icons8-git.svg",
    desc: "Version control that keeps your codebase safe — track changes, collaborate, and roll back with confidence.",
  },
  {
    name: "Docker",
    category: "tools",
    icon: "/icons/Icons8/icons8-docker.svg",
    desc: "Containerized deployments — your app runs identically everywhere, from dev to production.",
  },
];

export const services = [
  {
    num: "01",
    icon: "fa-solid fa-code",
    title: "Full Stack Web Development",
    desc: "Building complete, scalable, and secure web applications using modern technologies with clean architecture and best practices.",
    featured: true,
  },
  {
    num: "02",
    icon: "fa-brands fa-react",
    title: "Frontend Development",
    desc: "Creating modern, fast, and responsive user interfaces with smooth UX and optimized performance.",
  },
  {
    num: "03",
    icon: "fa-solid fa-server",
    title: "Backend & API Development",
    desc: "Developing secure RESTful APIs, authentication systems, and powerful server-side logic.",
  },
  {
    num: "04",
    icon: "fa-solid fa-database",
    title: "Database Design",
    desc: "Designing optimized databases using MongoDB, MySQL, or PostgreSQL with high performance.",
  },
  {
    num: "05",
    icon: "fa-solid fa-user-shield",
    title: "Auth & Security Systems",
    desc: "Implementing secure login systems using JWT, OAuth, and role-based access control.",
  },
  {
    num: "06",
    icon: "fa-solid fa-gauge-high",
    title: "Performance & SEO",
    desc: "Improving website speed, loading time, and search engine visibility for better ranking and user experience.",
    featured: true,
  },
  {
    num: "07",
    icon: "fa-solid fa-cloud-arrow-up",
    title: "Deployment & Hosting",
    desc: "Deploying applications on cloud platforms with proper configuration and monitoring.",
  },
];

export const projects = [
  {
    title: "Sleek Weather",
    badge: "Frontend",
    image: "/images/sleek-weather/mockup.png",
    tags: ["HTML", "CSS", "JavaScript", "Leaflet.js"],
    desc: "A modern weather dashboard for tracking real-time conditions, forecasts, and air quality with an interactive map and theme switching.",
    live: "https://weather-app-ten-fawn-48.vercel.app/",
    github: "https://github.com/masy43/Weather-App",
    features:
      "Real-time weather data with OpenWeatherMap API integration,Interactive Leaflet.js map with location search and geolocation,7-day forecast with hourly breakdown and air quality index,Calendar view with historical weather data,Dark/light theme switching with localStorage persistence",
  },
  {
    title: "SmartHome",
    badge: "Backend",
    image: "/images/smart-home/mockup.webp",
    tags: ["NestJS", "TypeScript", "Node.js"],
    desc: "Backend services for a smart home platform, exposing device control, scheduling, and telemetry endpoints.",
    github: "https://github.com/masy43/SmartHome-Backend-nestjs",
    features:
      "Reduced API latency by ~30% via Redis caching and optimized data access paths,Improved reliability with queue-based task processing and request validation guards,Added observability (structured logging + health checks) to speed up issue triage",
  },
  {
    title: "BeautyMate",
    badge: "Backend",
    image: "/images/beauty-mate/mockup.webp",
    tags: ["Node.js", "Express.js", "TypeScript"],
    desc: "Built RESTful services for Beauty Mate to manage users, bookings, catalog data, and recommendations.",
    github: "https://github.com/masy43/GRADUATION-PROJECT-NODEJS",
    features:
      "Streamlined booking flow and reduced manual scheduling conflicts,Added centralized auth and rate limiting to stabilize public endpoints,Documented REST APIs for faster onboarding and front-end integration",
  },
  {
    title: "StudentHub",
    badge: "Frontend",
    image: "/images/student-hub/mockup.png",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "A sleek student management system with a real-time dashboard, live stats, theme switching, and a fully responsive mobile-first design.",
    live: "https://student-management-system-inky-two.vercel.app/",
    github: "https://github.com/masy43/Student-Management-System",
    features:
      "Real-time dashboard with live statistics and student counts,Search and sort/filter students by name or department,Toast notifications for all CRUD operations,Dark/light theme switching with smooth transitions,Fully responsive mobile-first layout",
  },
  {
    title: "TaskFlow",
    badge: "Frontend",
    image: "/images/taskflow/mockup.png",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "A cinematic task manager with priorities, due dates, categories, subtasks, keyboard shortcuts, and JSON export — zero dependencies.",
    live: "https://to-do-list-omega-neon-30.vercel.app/",
    github: "https://github.com/masy43/to-do-list",
    features:
      "Priority levels and due dates with overdue tracking,Categories and subtasks for organized task management,Keyboard shortcuts for power-user productivity,Dark/light theme with cinematic red and black aesthetic,JSON export and import for data portability",
  },
  {
    title: "BankSys",
    badge: "Full Stack",
    image: "/images/banksys/mockup.png",
    tags: ["JavaScript", "Node.js", "HTML", "CSS"],
    desc: "A full-featured banking dashboard with account management, transactions, security controls, and real-time activity monitoring — no frameworks.",
    live: "https://banking-system-js.vercel.app/",
    github: "https://github.com/masy43/Banking-System-JS",
    features:
      "10 banking functions including deposits and transfers and interest calculation,Interactive Silver/Platinum themed dashboard with live stats,Security controls — freeze/unfreeze accounts and daily limits and suspicious activity detection,Modular architecture with clean separation into validators and models and services,Zero external dependencies — pure vanilla JavaScript frontend and backend",
  },
];

export const testimonials = [
  {
    initials: "SJ",
    name: "Sarah Johnson",
    role: "Product Manager, TechCorp",
    platform: "fa-brands fa-linkedin-in",
    text: '"Working with Masy was an absolute pleasure. He delivered a pixel-perfect, high-performance web application that exceeded our expectations. His clean code architecture and attention to detail made future updates seamless."',
  },
  {
    initials: "MC",
    name: "Michael Chen",
    role: "CTO, ShopHub",
    platform: "fa-brands fa-upwork",
    text: '"Masy transformed our backend infrastructure with his expertise in Node.js, NestJS, and TypeScript. The API performance improvements were remarkable — response times dropped by 40%."',
  },
  {
    initials: "ER",
    name: "Emily Rodriguez",
    role: "Design Lead, CreativeStudio",
    platform: "fa-brands fa-linkedin-in",
    text: '"Professional, responsive, and highly skilled. Masy turned our complex Figma designs into a stunning, fully responsive web application with smooth animations. Highly recommended!"',
  },
];

export const education = [
  {
    year: "2020 – 2024",
    icon: "fa-solid fa-university",
    title: "B.Sc. Computer Science",
    org: "October 6 University",
    detail: "GPA: 3.56 / 4.0 (Distinction)",
    detailIcon: "fa-solid fa-star",
  },
  {
    year: "2023",
    icon: "fa-solid fa-certificate",
    title: "HCIA-AI – Huawei",
    org: "Certification",
  },
  {
    year: "2024",
    icon: "fa-solid fa-robot",
    title: "Introduction to AI & Machine Learning",
    org: "The British University in Egypt | Certification",
  },
];

export const experience = [
  {
    icon: "fa-solid fa-code",
    title: "Frontend Trainee",
    org: "DEPI",
    detail:
      "Building responsive, accessible web interfaces using HTML, CSS, JavaScript, and React — with a focus on modern UI patterns and performance optimization.",
    current: true,
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Data Analyst Intern",
    org: "NTI",
    detail:
      "Focused on ETL pipelines, Power BI dashboards, and business intelligence.",
  },
  {
    icon: "fa-solid fa-database",
    title: "Data Analyst Intern",
    org: "El-Araby Group",
    detail:
      "Streamlined sales reporting and improved data retrieval efficiency by 30%.",
  },
];
