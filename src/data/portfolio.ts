export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  email: string;
  github: string;
  linkedin: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Fakhri Aditia Rahman",
  role: "Software Developer",
  about: "I am a passionate software developer with a strong focus on building scalable web applications. With expertise in modern JavaScript frameworks like Next.js and React, I enjoy solving complex problems and delivering high-quality user experiences. I am always eager to learn new technologies and improve my craft.",
  email: "fakhri.aditia@example.com", // Placeholder
  github: "https://github.com/fakhri", // Placeholder
  linkedin: "https://linkedin.com/in/fakhri", // Placeholder
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST API"]
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "Docker", "VS Code", "Vercel", "Linux"]
    }
  ],
  experience: [
    {
      company: "Tech Solutions Inc.",
      position: "Frontend Developer",
      period: "2022 - Present",
      description: "Developing responsive web applications using Next.js and TypeScript. Collaborating with UI/UX designers to implement pixel-perfect designs. Optimizing application performance and SEO."
    },
    {
      company: "Creative Studio",
      position: "Junior Web Developer",
      period: "2020 - 2022",
      description: "Built static websites and landing pages for various clients. Assisted in migrating legacy codebases to modern React applications. Maintained and updated existing client websites."
    }
  ],
  projects: [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order tracking.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool tailored for remote teams, with features like drag-and-drop kanban boards and team chat.",
      tech: ["React", "Redux", "Node.js", "Socket.io"],
      link: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website built to showcase my projects and skills. Designed with a clean and modern aesthetic.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      link: "#",
      github: "#"
    }
  ]
};
