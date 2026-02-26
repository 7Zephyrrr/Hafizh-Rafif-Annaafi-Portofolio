/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Terminal as TerminalIcon, 
  ArrowRight, 
  ExternalLink, 
  ChevronRight, 
  Send as SendIcon, 
  Link as LucideLink, 
  Mail,
  Code2,
  Palette,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Layout,
  FlaskConical,
  GraduationCap,
  User,
  Github,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";

const PROJECTS = [
  {
    title: "Nexus Analytics Dashboard",
    problem: "Global retail chains struggled to visualize massive real-time data streams, leading to delayed decision-making.",
    solution: "Built a high-performance dashboard using React and Node.js that processes over 1M events daily with sub-second latency.",
    tags: ["React", "Node.js", "D3.js"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAupzUvbD0kILADZ4UahcHP2E6YSbvEL_rZjvds3tWUtFOHN7o5b-vRjz3E9whA9oRyoNiU8uqzqMC6rNJAmjPkdDvehkD9Ef0Tdr0ytcI4aF8LgNQz5sZzSVcQJW4_D2vhr-yqcSSqAUolZStFLM-eJzLnhk4hej90PR8_vS5ipyy9pBwqp8_labLTliEYIhZn3Br1HaUyi6S_IcF6FS3hAL8bWBEB4AllEaA6Gu-tDtPW-pqHCB8RjvU8mI2vEsSP-0uEY1bR8erd",
    link: "#"
  },
  {
    title: "FinVault Mobile Banking",
    problem: "Traditional banking apps were too complex for Gen-Z users, lacking intuitive financial management tools.",
    solution: "Redesigned the mobile experience with a focus on accessibility, simplified navigation, and visual goal tracking.",
    tags: ["UI/UX Design", "Figma", "Prototyping"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAus4_KoPZTdBpMLnTEX9TiGpU6ayla68_KTx13g1sQQDaO5dh3clR4HWobQYOh63o7mb3fpACFZqhSHK2ulh-ldBGrjpNqvz4pDPfaYqGOatPddtnxE3etgcLcp7jDq9RDNSoenK6GfsaWxn0f2F_TWJCp_ktjGIk8d5t7UOKZNjxUZC9sDmDOlKAVBx72ByUlFNlcPtThXZkFTUO23N4BbWkSJPBu3H9KYX78GQbAfMSayfWxWaOTI7rTf6xZ0GwXTded6k6U-YDw",
    link: "#"
  },
  {
    title: "EcoTrack Smart Home",
    problem: "Homeowners lacked a unified way to monitor and reduce their carbon footprint from household appliances.",
    solution: "Developed an IoT-integrated platform that provides real-time energy insights and automated saving recommendations.",
    tags: ["TypeScript", "Next.js", "Tailwind"],
    image: "https://picsum.photos/seed/eco/800/600",
    link: "#"
  }
];

const LAB_EXPERIMENTS = [
  {
    title: "Generative Art Engine",
    description: "A small p5.js experiment exploring recursive patterns and color theory.",
    link: "#"
  },
  {
    title: "CSS-Only 3D Engine",
    description: "Pushing the limits of CSS transforms to create a navigable 3D room.",
    link: "#"
  },
  {
    title: "Micro-Interaction Library",
    description: "A collection of reusable Framer Motion components for delightful UIs.",
    link: "#"
  }
];

const SKILLS = [
  { name: "Frontend Dev", icon: <Layout className="size-6" />, tools: ["React", "Next.js", "Tailwind CSS"] },
  { name: "Backend Systems", icon: <Database className="size-6" />, tools: ["Node.js", "Express", "PostgreSQL"] },
  { name: "UI/UX Design", icon: <Palette className="size-6" />, tools: ["Figma", "Adobe XD", "Prototyping"] },
  { name: "Mobile Apps", icon: <Smartphone className="size-6" />, tools: ["React Native", "Expo"] },
  { name: "Core Tech", icon: <Code2 className="size-6" />, tools: ["TypeScript", "JavaScript", "Python"] },
  { name: "DevOps", icon: <Cpu className="size-6" />, tools: ["Docker", "Vercel", "Git"] }
];

const EDUCATION = [
  {
    school: "SMK Negeri 1 (Vocational High School)",
    degree: "Software Engineering Major",
    period: "2021 - Present",
    description: "Focusing on full-stack development, database management, and agile methodologies."
  }
];

export default function App() {
  return (
    <div className="min-h-screen dark">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-border-dark bg-white/80 dark:bg-background-dark/80 glass-nav">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="size-8 bg-primary rounded flex items-center justify-center text-background-dark">
              <TerminalIcon className="size-5 font-bold" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Hafizh Rafif</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#projects">Projects</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#lab">The Lab</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#skills">Skills</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">About</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary hover:bg-primary/90 text-background-dark px-5 py-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105 cursor-pointer">
              Let's Talk
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32">
        {/* 1. Hero Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              Hi, I'm Hafizh Rafif Annaafi. <span className="text-primary">Crafting digital experiences</span> and documenting the journey.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              A multi-disciplinary developer and designer focused on building functional, beautiful, and human-centered web solutions. I bridge the gap between complex code and intuitive design.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="bg-primary hover:bg-primary/90 text-background-dark px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-2" href="#projects">
                View Projects
                <ArrowRight className="size-4" />
              </a>
              <a className="bg-transparent border border-slate-300 dark:border-border-dark hover:border-primary/50 text-slate-900 dark:text-white px-8 py-4 rounded-lg font-bold transition-all" href="#contact">
                Get in Touch
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl border-4 border-white dark:border-border-dark shadow-2xl">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Professional portrait of Hafizh Rafif" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuyG3fOBQC4rD7Ikm26YcFcSELoumugoOcKYzHbu5TXzZZ90f1qc5khHjZ8fM13PsSLoj1xcbm0nKZbab7s2nQWU_MaZjUTH3PQGxhSu8vXt44Lc_ZqL8-TewwX_kylPjJYnrHv2PeRbqtwvKyGtDJQWg9Tf-BLaeA8dgxNn7Scy92F6NGpc2LZa3nbO0uTOMsUL_3fxg50CQfXZzgEPlul9-UVI5nLbo8A2DgTRx7yGeHiTnKEKwWig5TKcCOBQ68U0K5_TL5xkK_"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </section>

        {/* 2. Featured Projects */}
        <section className="my-32" id="projects">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
              <p className="text-slate-600 dark:text-slate-400">A selection of my recent works in development and design.</p>
            </div>
            <a className="text-primary font-semibold flex items-center gap-2 hover:underline" href="#">
              View Archive <ExternalLink className="size-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt={project.title} 
                    src={project.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-primary/20 text-primary border border-primary/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase text-primary mb-1">Problem</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-primary mb-1">Solution</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{project.solution}</p>
                    </div>
                  </div>
                  <a className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all" href={project.link}>
                    Case Study <ArrowRight className="size-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. The Lab / Playground */}
        <section className="my-32" id="lab">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <FlaskConical className="text-primary" /> The Lab
            </h2>
            <p className="text-slate-600 dark:text-slate-400">Small experiments, creative coding, and half-baked ideas.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {LAB_EXPERIMENTS.map((exp, idx) => (
              <motion.a
                key={idx}
                href={exp.link}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-card-dark hover:border-primary/50 transition-all group"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{exp.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{exp.description}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  View Experiment <ArrowRight className="size-3" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* 4. Skills & Tools */}
        <section className="my-32" id="skills">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Skills & Tools</h2>
            <p className="text-slate-600 dark:text-slate-400">The technology stack I use to bring ideas to life.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{skill.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map(tool => (
                    <span key={tool} className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. About & Education */}
        <section className="my-32" id="about">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <User className="text-primary" /> About Me
              </h2>
              <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  I am a passionate Software Engineering student with a deep interest in building scalable web applications and crafting exceptional user experiences. My journey started with a curiosity for how things work on the web, which evolved into a professional pursuit of excellence in both design and development.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or documenting my learning journey through technical writing.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <GraduationCap className="text-primary" /> Education
              </h2>
              <div className="space-y-8">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-primary/30">
                    <div className="absolute left-[-5px] top-0 size-2.5 rounded-full bg-primary" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.school}</h3>
                    <p className="text-primary font-medium text-sm mb-2">{edu.degree} • {edu.period}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Contact Section */}
        <section className="my-32" id="contact">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/10 dark:bg-card-dark rounded-2xl p-8 md:p-16 border border-primary/20 dark:border-border-dark text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <SendIcon className="size-32" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Let's build something great.</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
              Have a project in mind or just want to say hi? My inbox is always open for interesting collaborations and coffee chats.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a className="bg-primary hover:bg-primary/90 text-background-dark px-10 py-4 rounded-lg font-bold transition-all w-full md:w-auto" href="mailto:hello@hafizhrf.com">
                Get in Touch
              </a>
              <div className="flex gap-4">
                <a className="size-12 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-border-dark flex items-center justify-center hover:text-primary transition-colors" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="size-5" />
                </a>
                <a className="size-12 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-border-dark flex items-center justify-center hover:text-primary transition-colors" href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="size-5" />
                </a>
                <a className="size-12 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-border-dark flex items-center justify-center hover:text-primary transition-colors" href="mailto:hello@hafizhrf.com">
                  <Mail className="size-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-border-dark py-12 bg-white dark:bg-background-dark">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="size-6 bg-primary/20 rounded flex items-center justify-center text-primary">
              <TerminalIcon className="size-3 font-bold" />
            </div>
            <span className="text-sm font-bold text-slate-900 dark:text-white">Hafizh Rafif</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © 2024 Hafizh Rafif Annaafi. Built with precision and passion.
          </p>
          <div className="flex items-center gap-6 text-slate-500 dark:text-slate-400">
            <a className="hover:text-primary transition-colors text-xs font-medium" href="#">LinkedIn</a>
            <a className="hover:text-primary transition-colors text-xs font-medium" href="#">GitHub</a>
            <a className="hover:text-primary transition-colors text-xs font-medium" href="#">Twitter</a>
            <a className="hover:text-primary transition-colors text-xs font-medium" href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
