import Link from "next/link";
import {
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollAnimationWrapper } from "@/components/scroll-animation-wrapper";
import { SkillCard } from "@/components/skill-card";
import { ProjectCard } from "@/components/project-card";
import { TypedRole } from "@/components/title";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">kafin.dev</div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/kfnx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/kafinsalim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-10 md:py-16">
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col items-center text-center h-screen relative space-y-4">
          <ScrollAnimationWrapper animation="scale-in" threshold={0.25}>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-6">
              <img
                src="/kafin-ghiblified.png"
                alt="Kafin Salim"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper
            animation="fade-in-up"
            delay={150}
            threshold={0.25}
          >
            <h1 className="text-3xl font-bold tracking-tight">
              Hi, I’m Kafin 👋
            </h1>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper
            animation="fade-in-up"
            delay={150}
            threshold={0.25}
          >
            <TypedRole />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper
            animation="fade-in-up"
            delay={250}
            threshold={0.25}
          >
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View my work</Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper
            animation="fade-in-up"
            delay={250}
            threshold={0.25}
            className="relative"
          >
            <Link
              href="#about"
              className="absolute -bottom-32 left-1/2 -translate-x-1/2"
            >
              <ChevronDown className="h-14 w-14 text-muted-foreground animate-bounce opacity-50" />
            </Link>
          </ScrollAnimationWrapper>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-20">
          <ScrollAnimationWrapper threshold={0.1}>
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 gap-10">
            <ScrollAnimationWrapper
              animation="fade-in-up"
              delay={150}
              threshold={0.1}
            >
              <div>
                <p className="text-muted-foreground mb-4">
                  I'm a Software Engineer with extensive experience in
                  full-stack development. <br />
                  My expertise spans across various technologies, allowing me to
                  build efficient solutions.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper
              animation="fade-in-up"
              delay={200}
              threshold={0.1}
            >
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Throughout my career, I've held roles such as Principal
                  Engineer, Fullstack Engineer, Frontend Engineer, Mobile
                  Engineer and Database Administrator.
                </p>
                <p className="text-muted-foreground">
                  This diverse experience allows me to approach problems from
                  multiple angles and deliver comprehensive solutions that meet
                  both technical requirements and business needs.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-20">
          <ScrollAnimationWrapper threshold={0.1}>
            <h2 className="text-3xl font-bold mb-8">Skills & Experiences</h2>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ScrollAnimationWrapper
              animation="scale-in"
              delay={50}
              threshold={0.1}
            >
              <SkillCard
                title="Frontend"
                skills={["React", "Next.js", "TypeScript", "GraphQL", "Redux"]}
              />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper
              animation="scale-in"
              delay={150}
              threshold={0.1}
            >
              <SkillCard
                title="Backend"
                skills={["Node.js", "Nest.js", "Go", "Rust", "GraphQL"]}
              />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper
              animation="scale-in"
              delay={150}
              threshold={0.1}
            >
              <SkillCard
                title="Database & DevOps"
                skills={["PostgreSQL", "Docker", "Kubernetes", "AWS", "Linux"]}
              />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper
              animation="scale-in"
              delay={200}
              threshold={0.1}
            >
              <SkillCard
                title="Blockchain & Mobile"
                skills={["Solana", "Ethereum", "Web3", "React Native"]}
              />
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20">
          <ScrollAnimationWrapper threshold={0.1}>
            <h2 className="text-3xl font-bold mb-8">Some of my works</h2>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollAnimationWrapper
              animation="fade-in-up"
              delay={100}
              threshold={0.1}
            >
              <ProjectCard
                title="Money Tracker"
                description="An Experiment to see how far a web app can be built with AI tools"
                technologies={["Lovable", "Supabase", "Cursor"]}
                links={[
                  {
                    url: "https://lazy-money-tracker.lovable.app",
                    icon: <ExternalLink className="h-4 w-4" />,
                    label: "Live",
                  },
                ]}
              />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper
              animation="fade-in-up"
              delay={100}
              threshold={0.1}
            >
              <ProjectCard
                title="Tatsu.gg"
                description="Dashboard to build and manage Tatsu community bot that serve more than 1,400,000 Discord servers"
                technologies={["React", "Next.js", "GraphQL"]}
                links={[
                  {
                    url: "https://tatsu.gg",
                    icon: <ExternalLink className="h-4 w-4" />,
                    label: "Live",
                  },
                ]}
              />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper
              animation="fade-in-up"
              delay={50}
              threshold={0.1}
            >
              <ProjectCard
                title="Isometric map builder"
                description="A prototype. features include: placing different types of props with different sizes and levels"
                technologies={["React", "Pixi.js", "Zustand"]}
                links={[
                  {
                    url: "https://isometric-map-builder.vercel.app",
                    icon: <ExternalLink className="h-4 w-4" />,
                    label: "Live",
                  },
                ]}
              />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper
              animation="fade-in-up"
              delay={150}
              threshold={0.1}
            >
              <ProjectCard
                title="Tatsumeeko.com"
                description="Front page of tatsumeeko, modern fantasy idle JRPG-lite that spans across Discord, Web, and Mobile, offering a unique blend of adventure"
                technologies={["React", "Next.js", "Tailwind"]}
                links={[
                  {
                    url: "https://tatsumeeko.com",
                    icon: <ExternalLink className="h-4 w-4" />,
                    label: "Live",
                  },
                ]}
              />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper
              animation="fade-in-up"
              delay={150}
              threshold={0.1}
            >
              <ProjectCard
                title="Meekolony NFT Collection"
                description="Deployed an NFT collection on Solana blockchain, including smart contract development and frontend integration."
                technologies={["Solana", "Web3", "React"]}
                links={[
                  {
                    url: "https://apps.meekolony.com",
                    icon: <ExternalLink className="h-4 w-4" />,
                    label: "Live",
                  },
                  {
                    url: "https://magiceden.io/marketplace/meekolony",
                    icon: <ExternalLink className="h-4 w-4" />,
                    label: "Marketplace",
                  },
                ]}
              />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper
              animation="fade-in-up"
              delay={200}
              threshold={0.1}
            >
              <ProjectCard
                title="Pokedex Pintar"
                description="Pokedex web app using framer motion for the animation"
                technologies={["React", "Framer Motion", "GraphQL"]}
                links={[
                  {
                    url: "https://pokedex-pintar.vercel.app/",
                    icon: <ExternalLink className="h-4 w-4" />,
                    label: "Live",
                  },
                ]}
              />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper
              animation="fade-in-up"
              delay={250}
              threshold={0.1}
            >
              <ProjectCard
                title="Curhat"
                description="Twitter-like clone, using firebase for push notification"
                technologies={["React", "Firebase", "Redux"]}
                links={[
                  {
                    url: "https://generic-2f13b.web.app/",
                    icon: <ExternalLink className="h-4 w-4" />,
                    label: "Live",
                  },
                ]}
              />
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20">
          <ScrollAnimationWrapper threshold={0.1}>
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 gap-10">
            <ScrollAnimationWrapper
              animation="fade-in-up"
              delay={150}
              threshold={0.1}
            >
              <div>
                <p className="text-muted-foreground mb-6">
                  I'm currently open to new opportunities and collaborations.
                  Whether you have a question or just want to say hi, I'll do my
                  best to get back to you!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="mailto:kafinsalim@gmail.com"
                      className="text-primary hover:underline"
                    >
                      kafinsalim@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="https://github.com/kfnx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      github.com/kfnx
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="https://linkedin.com/in/kafinsalim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      linkedin.com/in/kafinsalim
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper
              animation="fade-in-up"
              delay={200}
              threshold={0.1}
            >
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Send me a message
                </h3>
                <p className="text-muted-foreground mb-4">
                  Feel free to reach out through any of the channels on the left
                  or directly via email. I'm always interested in hearing about
                  new projects and opportunities.
                </p>
                <Button className="w-full" asChild>
                  <a href="mailto:kafinsalim@gmail.com">Email Me</a>
                </Button>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Kafin Salim. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/kfnx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/kafinsalim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="mailto:kafinsalim@gmail.com"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
