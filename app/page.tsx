"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#tech", label: "Tech" },
  { href: "#contact", label: "Contact" },
];

const STATS = [
  "7+ Years Experience",
  "5,000+ Users Served",
  "$2M+ NFT Revenue Generated",
  "3 Products Shipped to Production",
];

const EXPERIENCE = [
  {
    period: "2024 -- Present",
    title: "Tech Lead",
    company: "Fokuslah",
    description:
      "Leading engineering for an AI-powered SPM Math platform. Built the product from the ground up -- Next.js, PostgreSQL, FastAPI, LLM integration. 5,000+ users, 100-250 DAU.",
  },
  {
    period: "Previous",
    title: "Principal Engineer",
    company: "Tatsu / Tatsumeeko",
    description:
      "Built dashboard and web experiences for Tatsu bot ecosystem serving 1.4M+ Discord servers. Led frontend architecture.",
  },
  {
    period: "Previous",
    title: "Fullstack Engineer",
    company: "Meekolony NFT",
    description:
      "Architected and deployed Solana NFT collection -- smart contracts, minting frontend, marketplace integration. ~$2-4M in primary sales.",
  },
  {
    period: "Earlier",
    title: "Various Roles",
    company: "",
    description:
      "Fullstack development, mobile engineering (React Native), and database administration.",
  },
];

const PROJECTS = [
  {
    title: "Fokuslah.com",
    description:
      "AI-powered education platform serving 5,000+ SPM Math students across Malaysia",
    tags: ["Next.js", "PostgreSQL", "FastAPI", "AI/LLM"],
    url: "https://fokuslah.com",
  },
  {
    title: "Tatsu.gg",
    description:
      "Dashboard powering community management for 1.4M+ Discord servers",
    tags: ["React", "Next.js", "GraphQL"],
    url: "https://tatsu.gg",
  },
  {
    title: "Meekolony NFT",
    description: "Solana NFT collection generating ~$2M+ in primary sales",
    tags: ["Solana", "Web3", "React"],
    url: "https://apps.meekolony.com",
  },
  {
    title: "Isometric Map Builder",
    description:
      "Interactive prototype for placing and layering isometric props",
    tags: ["React", "Pixi.js", "Zustand"],
    url: "https://isometric-map-builder.vercel.app",
  },
];

const TECH_GROUPS = [
  { category: "Frontend", items: "React, Next.js, TypeScript" },
  { category: "Backend", items: "Node.js, Go, Rust, Python / FastAPI" },
  {
    category: "Data & Infra",
    items: "PostgreSQL, Docker, Kubernetes, AWS, Linux",
  },
  { category: "Other", items: "Solana, Ethereum, React Native" },
];

// Reusable scroll-triggered section with numbered header
function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} ref={ref} className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <span className="text-sm font-mono text-neutral-500">{number}</span>
          <div className="h-px bg-neutral-800 w-12" />
          <h2 className="text-sm font-mono uppercase tracking-widest text-neutral-500">
            {title}
          </h2>
        </div>
        {children}
      </motion.div>
    </section>
  );
}

// Reusable fade-in-up animation wrapper
function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-neutral-800/50 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold text-lg tracking-tight">
            kafin.dev
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/kfnx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/kafinsalim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:kafinsalim@gmail.com"
              className="text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center relative px-6">
          <div className="max-w-6xl mx-auto w-full pt-16">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Kafin Salim
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              Tech Lead & Fullstack Engineer · Building AI-powered education for
              5,000+ students · 7+ years shipping products
            </motion.p>

            <motion.div
              className="mt-8 flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              <Link
                href="https://github.com/kfnx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/kafinsalim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:kafinsalim@gmail.com"
                className="text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link href="#about">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="h-6 w-6 text-neutral-500" />
              </motion.div>
            </Link>
          </motion.div>
        </section>

        {/* Stats Ticker */}
        <div className="border-y border-neutral-800/50 py-5 overflow-hidden">
          <div className="marquee-track">
            {[0, 1].map((setIndex) => (
              <div key={setIndex} className="flex shrink-0">
                {STATS.map((stat, i) => (
                  <div key={i} className="flex items-center">
                    <span className="text-sm font-mono uppercase tracking-wider text-neutral-300 whitespace-nowrap px-8">
                      {stat}
                    </span>
                    <span className="text-neutral-700">/</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="max-w-5xl mx-auto px-6">
          {/* 01 / About */}
          <Section id="about" number="01" title="About">
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl leading-relaxed text-neutral-300 mb-6">
                I&apos;m a Tech Lead and Fullstack Engineer with 7+ years of
                experience building products that people actually use. Currently
                leading engineering at fokuslah.com -- an AI-powered education
                platform helping Malaysian students ace SPM Math.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-neutral-400">
                My career has spanned fullstack development, blockchain, mobile,
                and infrastructure -- from scaling Discord bots serving 1.4M+
                servers to deploying NFT collections that generated millions in
                primary sales. I care about shipping fast, building with real
                users in mind, and making pragmatic technical decisions.
              </p>
            </div>
          </Section>

          {/* 02 / Experience */}
          <Section id="experience" number="02" title="Experience">
            <div className="space-y-12">
              {EXPERIENCE.map((exp, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-8">
                    <div className="text-sm font-mono text-neutral-500">
                      {exp.period}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-100">
                        {exp.title}
                        {exp.company && (
                          <span className="text-neutral-400 font-normal">
                            {" "}
                            @ {exp.company}
                          </span>
                        )}
                      </h3>
                      <p className="mt-2 text-neutral-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </Section>

          {/* 03 / Projects */}
          <Section id="projects" number="03" title="Projects">
            <div className="grid md:grid-cols-2 gap-6">
              {PROJECTS.map((project, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 border border-neutral-800 rounded-lg hover:border-neutral-700 hover:bg-neutral-900/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="h-4 w-4 text-neutral-600 group-hover:text-neutral-400 transition-colors flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-1 bg-neutral-800/80 text-neutral-500 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </Section>

          {/* 04 / Tech */}
          <Section id="tech" number="04" title="Tech">
            <div className="space-y-6">
              {TECH_GROUPS.map((group, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-8">
                    <span className="text-sm font-mono text-neutral-500">
                      {group.category}
                    </span>
                    <span className="text-neutral-300">{group.items}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </Section>

          {/* 05 / Contact */}
          <Section id="contact" number="05" title="Contact">
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl leading-relaxed text-neutral-300 mb-8">
                I&apos;m open to new opportunities and interesting
                conversations. Let&apos;s connect.
              </p>
              <div className="space-y-4">
                <Link
                  href="mailto:kafinsalim@gmail.com"
                  className="flex items-center gap-3 text-neutral-300 hover:text-neutral-100 transition-colors group"
                >
                  <Mail className="h-5 w-5 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
                  kafinsalim@gmail.com
                </Link>
                <Link
                  href="https://linkedin.com/in/kafinsalim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-300 hover:text-neutral-100 transition-colors group"
                >
                  <Linkedin className="h-5 w-5 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
                  linkedin.com/in/kafinsalim
                </Link>
                <Link
                  href="https://github.com/kfnx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-300 hover:text-neutral-100 transition-colors group"
                >
                  <Github className="h-5 w-5 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
                  github.com/kfnx
                </Link>
              </div>
            </div>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800/50 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-neutral-500">
            {new Date().getFullYear()} Kafin Salim
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/kfnx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://linkedin.com/in/kafinsalim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="mailto:kafinsalim@gmail.com"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>

      <ScrollProgress className="top-[64px]" />
    </div>
  );
}
