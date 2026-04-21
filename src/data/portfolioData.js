import { Code, Briefcase, User, Mail, Home, BookOpen, Layers } from "lucide-react";

export const siteContent = {
  hero: {
    greeting: "Hi, I am",
    name: "Steve Anterson.T",
    role: "Full Stack Developer",
    description: "I build premium, aesthetic, and highly performant web applications with a focus on seamless user experiences and modern glassmorphism design.",
  },
  about: {
    title: "About Me",
    text: "With a passion for pristine code and cutting-edge design, I thrive at the intersection of engineering and art. My expertise lies in architecting robust frontend applications while ensuring the visual fidelity is nothing short of exceptional."
  },
  contact: {
    title: "Get In Touch",
    email: "steveanterson1@gmail.com",
    address: "Near the church, Chinnathurai"
  }
};

export const skillsData = [
  { name: "React", level: 95 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Framer Motion", level: 88 },
  { name: "Vite", level: 90 },
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "TypeScript", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "Node.js", level: 78 },
];

export const projectsData = [
  {
    id: 1,
    title: "URL Shortener",
    description: "A futuristic url shortener.",
    tech: ["React", "Tailwind CSS", "Recharts"],
    link: "https://zingy-praline-9cd8ff.netlify.app/",
    github: "#"
  },
  {
    id: 2,
    title: "E-Commerce",
    description: "A seamless shopping experience with headless CMS and glowing UI elements.",
    tech: ["Next.js", "Framer Motion", "Stripe"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Quantum Chat",
    description: "Real-time communication platform with a sleek dark mode.",
    tech: ["Vite React", "Firebase", "Redux"],
    link: "#",
    github: "#"
  }
];

export const experienceData = [
  {
    year: "2024 - Present",
    role: "Frontend Engineer",
    description: "Leading the development of a flagship SaaS product using React and Tailwind CSS. Implementing complex animations and data visualizations."
  },
  {
    year: "2024 - Present",
    role: "UI/UX Developer",
    description: "Designed and implemented interactive web experiences for premium clients focusing on conversion optimization and aesthetics."
  },
  {
    year: "2024 - Present",
    role: "Web Developer",
    description: "Built custom websites, portfolios, and e-commerce platforms for various businesses globally."
  }
];

export const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: BookOpen },
  { name: "Projects", href: "#projects", icon: Layers },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];
