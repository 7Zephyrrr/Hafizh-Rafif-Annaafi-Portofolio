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
  Mail 
} from "lucide-react";

const PROJECTS = [
  {
    title: "Nexus Analytics Dashboard",
    description: "A high-performance real-time data visualization platform for global retail chains, processing over 1M events daily.",
    tags: ["React", "Node.js"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAupzUvbD0kILADZ4UahcHP2E6YSbvEL_rZjvds3tWUtFOHN7o5b-vRjz3E9whA9oRyoNiU8uqzqMC6rNJAmjPkdDvehkD9Ef0Tdr0ytcI4aF8LgNQz5sZzSVcQJW4_D2vhr-yqcSSqAUolZStFLM-eJzLnhk4hej90PR8_vS5ipyy9pBwqp8_labLTliEYIhZn3Br1HaUyi6S_IcF6FS3hAL8bWBEB4AllEaA6Gu-tDtPW-pqHCB8RjvU8mI2vEsSP-0uEY1bR8erd",
    link: "#"
  },
  {
    title: "FinVault Mobile Banking",
    description: "Redesigning the mobile banking experience with a focus on accessibility and intuitive financial management for Gen-Z.",
    tags: ["UI/UX Design", "Figma"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAus4_KoPZTdBpMLnTEX9TiGpU6ayla68_KTx13g1sQQDaO5dh3clR4HWobQYOh63o7mb3fpACFZqhSHK2ulh-ldBGrjpNqvz4pDPfaYqGOatPddtnxE3etgcLcp7jDq9RDNSoenK6GfsaWxn0f2F_TWJCp_ktjGIk8d5t7UOKZNjxUZC9sDmDOlKAVBx72ByUlFNlcPtThXZkFTUO23N4BbWkSJPBu3H9KYX78GQbAfMSayfWxWaOTI7rTf6xZ0GwXTded6k6U-YDw",
    link: "#"
  }
];

const BLOG_POSTS = [
  {
    date: "Oct 24, 2023",
    readTime: "8 min read",
    title: "Why TypeScript is non-negotiable in 2024",
    excerpt: "Exploring the long-term benefits of static typing in modern web development architectures.",
    link: "#"
  },
  {
    date: "Sep 12, 2023",
    readTime: "5 min read",
    title: "The balance between aesthetics and utility",
    excerpt: "Finding the sweet spot where beautiful UI meets exceptional UX through user testing.",
    link: "#"
  },
  {
    date: "Aug 05, 2023",
    readTime: "12 min read",
    title: "Mastering Tailwind CSS layouts",
    excerpt: "A deep dive into complex grid and flexbox patterns using only utility classes.",
    link: "#"
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
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#blog">Blog</a>
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
        {/* Hero Section */}
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
              A multi-disciplinary developer and designer focused on building functional, beautiful, and human-centered web solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="bg-primary hover:bg-primary/90 text-background-dark px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-2" href="#projects">
                View Projects
                <ArrowRight className="size-4" />
              </a>
              <a className="bg-transparent border border-slate-300 dark:border-border-dark hover:border-primary/50 text-slate-900 dark:text-white px-8 py-4 rounded-lg font-bold transition-all" href="#blog">
                Read Blog
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

        {/* Showcase Section (Projects) */}
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
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <a className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all" href={project.link}>
                    Case Study <ArrowRight className="size-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="my-32" id="blog">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Latest Thoughts</h2>
            <p className="text-slate-600 dark:text-slate-400">Insights into development, design, and digital life.</p>
          </div>
          <div className="flex flex-col border-t border-slate-200 dark:border-border-dark">
            {BLOG_POSTS.map((post, idx) => (
              <motion.a 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group py-10 flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 dark:border-border-dark hover:bg-slate-50 dark:hover:bg-card-dark/30 transition-all px-4" 
                href={post.link}
              >
                <div className="flex flex-col gap-2 max-w-2xl">
                  <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-500 mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="mt-6 md:mt-0">
                  <ChevronRight className="text-slate-300 dark:text-slate-600 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                </div>
              </motion.a>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="bg-slate-900 dark:bg-white text-white dark:text-background-dark px-10 py-4 rounded-lg font-bold hover:bg-primary dark:hover:bg-primary transition-all cursor-pointer">
              Browse All Articles
            </button>
          </div>
        </section>

        {/* CTA / Contact Section */}
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
                <a className="size-12 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-border-dark flex items-center justify-center hover:text-primary transition-colors" href="#">
                  <LucideLink className="size-5" />
                </a>
                <a className="size-12 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-border-dark flex items-center justify-center hover:text-primary transition-colors" href="#">
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
