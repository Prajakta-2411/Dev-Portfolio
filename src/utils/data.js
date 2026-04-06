import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
  GraduationCapIcon,
} from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1_PORTFOLIO from "../assets/images/portfolio-img.png";
import PROJECT_IMG_2_ECOMMERCE from "../assets/images/e-commerce-img.png";
// import PROJECT_IMG_3 from "../assets/images/project3.png";
// import PROJECT_IMG_4 from "../assets/images/project4.png";
// import PROJECT_IMG_5 from "../assets/images/project5.png";
// import PROJECT_IMG_6 from "../assets/images/project6.png";
// import PROJECT_IMG_7 from "../assets/images/project7.png";

export const SKILLS_CATEGORY = [
  {
    title: "Technologies/Libraries",
    icon: Code2,
    description:
      "Core technologies and tools for building modern web applications",
    skills: [
      { name: "React", level: 80, color: "bg-blue-500" },
      { name: "JavaScript", level: 90, color: "bg-cyan-500" },
      { name: "CSS3", level: 90, color: "bg-pink-500" },
      { name: "HTML5", level: 95, color: "bg-green-600" },
      // { name: "Next.js", level: 88, color: "bg-gray-800" },
      // { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
      // { name: "Material UI", level: 85, color: "bg-pink-500" },
      // { name: "Framer Motion", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    title: "UI Libraries/Frameworks",
    icon: Server,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "Tailwind CSS", level: 90, color: "bg-blue-500" },
      { name: "Material UI", level: 85, color: "bg-cyan-500" },
      { name: "Bootstrap", level: 85, color: "bg-pink-500" },
    ],
  },
  // {
  //   title: "Database",
  //   icon: Database,
  //   description: "Managing and optimizing data storage",
  //   skills: [
  //     { name: "MongoDB", level: 88, color: "bg-green-600" },
  //     { name: "SQL", level: 88, color: "bg-green-600" },
  //   ],
  // },
];

// Tech stack array
export const TECH_STACK = [
  "Context API",
  "Redux",
  "Axios",
  "Fetch",
  "Shadcn",
  "Clerk",
  "Framer Motion",
  // "Sass",
  // "Webpack",
  "Vite",
  "VS code",
  "Git",
  // "Jest",
  // "Cypress",
  // "Figma",
  // "Adobe XD",
  // "Notion",
  // "Slack",
];

// Stats array
export const STATS = [
  { number: "50+", label: "Projects Completed" },
  { number: "5+", label: "Years of Experience" },
  { number: "30+", label: "Happy Clients" },
  { number: "20+", label: "Certifications & Courses" },
];

// Projects array
export const PROJECTS = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and experience.",
    imageUrl: PROJECT_IMG_1_PORTFOLIO,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/username/portfolio",
    featured: true,
    category: "Frontend",
  },
  {
    id: 2,
    title: "E-commerce Shopping Cart Application",
    description:
      "A full-stack e-commerce application with authentication, cart, and payment integration.",
    imageUrl: PROJECT_IMG_2_ECOMMERCE,
    tags: ["React.js", "Tailwind CSS", "Redux", "Clerk"],
    liveUrl: "https://e-commerce-shopping-cart-applicatio.vercel.app/",
    githubUrl:
      "https://github.com/Prajakta-2411/E-commerce-Shopping-Cart-Application-",
    featured: true,
    category: "Frontend",
  },
  // {
  //   id: 3,
  //   title: "Chat Application",
  //   description:
  //     "Real-time chat application with private and group messaging using WebSockets.",
  //   imageUrl: "https://example.com/chatapp.png",
  //   tags: ["React", "Node.js", "Socket.IO"],
  //   liveUrl: "https://example.com/chatapp",
  //   githubUrl: "https://github.com/username/chatapp",
  //   featured: false,
  //   category: "Full Stack",
  // },
  // {
  //   id: 4,
  //   title: "Task Manager",
  //   description:
  //     "Task management app with drag-and-drop features and team collaboration tools.",
  //   imageUrl: "https://example.com/taskmanager.png",
  //   tags: ["React", "Redux", "Tailwind CSS"],
  //   liveUrl: "https://example.com/taskmanager",
  //   githubUrl: "https://github.com/username/taskmanager",
  //   featured: false,
  //   category: "Frontend",
  // },
];

export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started My Journey",
    company: "Self-Learning",
    description:
      "Embarked on my web development journey, learning the basics of HTML, CSS, and JavaScript.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2021-23",
    title: "Junior Software developer",
    company: "Movinture India Pvt. Ltd.",
    description:
      "Worked as a Junior Software Developer where I developed and maintained responsive web applications using React.js and JavaScript. Built reusable components, integrated REST APIs, and collaborated with cross-functional teams to deliver scalable and user-friendly solutions.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2023",
    title: "Software Developer - React JS",
    company: "WovVTech",
    description:
      "Worked as a Software Developer (JavaScript) where I contributed to frontend development using React.js and modern JavaScript. Gained exposure to real-world project workflows and team collaboration before stepping away due to health reasons.",
    icon: Briefcase,
    color: "bg-purple-500",
  },
  {
    year: "2024",
    title: "MSc in Computer Science",
    company: "Savitribai Phule Pune University",
    description:
      "Successfully completed a Master's degree in Computer Science with a focus on software development, data structures, and modern web technologies. Strengthened problem-solving skills and built a solid foundation in application development.",
    icon: GraduationCapIcon,
    color: "bg-blue-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description:
      "Designing intuitive and engaging user experiences that delight users.",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description:
      "Working closely with teams to achieve common goals and deliver excellence.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Committed to lifelong learning and professional growth.",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/Prajakta-2411",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/prajakta-yelgave/",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  // {
  //   name: "Twitter",
  //   icon: FiTwitter,
  //   url: "https://twitter.com",
  //   color: "hover:text-sky-400",
  //   bgColor: "hover:bg-sky-500/10",
  // },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:prajaktayelgave@gmail.com",
    color: "hover:text-red-400",
    bgColor: "hover:bg-red-500/10",
  },
];

export const CONTACT_INFO = [
  { icon: MapPin, label: "Location", value: "Urun-Ishwarpur, Maharashtra" },
  { icon: Phone, label: "Phone", value: "+91 7057318676" },
  { icon: Mail, label: "Email", value: "prajaktayelgave@gmail.com" },
];
