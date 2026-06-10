import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";
import { Companion } from "./companion";

export function Hero() {
  return (
    <header className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Top Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-mono text-sm font-bold tracking-tight text-[var(--accent)] hover:opacity-80">
            josue.dev | Systems & Low-Level
          </Link>
        </div>
        
        <div className="flex items-center gap-6 font-mono text-xs text-[var(--muted-foreground)]">
          <a href="#about" className="hover:text-white transition-colors">sobre mí</a>
          <a href="#tech-stack" className="hover:text-white transition-colors">tecnologías</a>
          <a href="#projects" className="hover:text-white transition-colors">proyectos</a>
          <a href="#contact" className="hover:text-white transition-colors">contacto</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://github.com/vxie705"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[var(--accent)]"
            style={{ color: 'var(--muted-foreground)' }}
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/josue-andres-812866332/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[var(--accent)]"
            style={{ color: 'var(--muted-foreground)' }}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
        </div>
      </nav>

      {/* Main Grid Content */}
      <div className="relative z-10 w-full max-w-[var(--max-width-wide)] grid gap-12 md:grid-cols-12 items-center text-left pt-28 pb-12">
        {/* Left Column: Bio / Pitch */}
        <div className="md:col-span-7 space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[var(--border)] bg-[var(--muted)] font-mono text-xs text-[var(--accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Ingeniero de Software · Sistemas · Seguridad
          </div>
          
          <h1 className="font-serif text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-none">
            Josué
          </h1>
          
          <p className="text-sm font-mono tracking-[0.1em] text-[var(--accent-secondary)] uppercase">
            Tengo 21 años y construyo desde el kernel hasta la nube.
          </p>

          <p className="max-w-lg text-sm sm:text-base leading-[1.8] text-[var(--muted-foreground)]">
            Me apasiona el código limpio, los sistemas concurrentes de alto rendimiento,
            la seguridad ofensiva/defensiva y el diseño de arquitecturas resilientes. Escribo 
            software que funciona bajo presión y escala sin fricciones.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider rounded-lg transition-all duration-200 bg-[var(--accent)] text-[var(--background)] hover:shadow-[0_0_15px_rgba(0,255,102,0.4)]"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider rounded-lg transition-all duration-200 border border-[var(--border)] text-[var(--muted-foreground)] hover:text-white hover:border-white bg-[var(--muted)]"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Right Column: Virtual Companion Window */}
        <div className="md:col-span-5 flex justify-center animate-fade-in-up delay-2">
          <Companion />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in delay-4 pt-8 pb-4">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 transition-colors duration-200 hover:text-[var(--accent)]"
          style={{ color: 'var(--muted-foreground)' }}
          aria-label="Ver más abajo"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-mono">
            Explorar
          </span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}