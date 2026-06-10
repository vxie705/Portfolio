import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
}

const projects: Project[] = [
  {
    title: "Workflow Engine",
    description:
      "Workflow Engine is a C++20 framework for orchestrating multi-step data processing pipelines. Define your business logic as a sequence of independent, injectable Commands (filters), wire them together in a JSON configuration file, and let the engine execute them in order — with full observability, resilience, and zero coupling between steps.",
    tags: ["C++20", "CMake", "JSON"],
    href: "https://github.com/vxie705/WorkflowEngine",
  },
  {
    title: "Advanced Rootkit & Memory Detector",
    description:
      "MEMORY es una herramienta de monitoreo y detección de amenazas a nivel de kernel y memoria para sistemas Windows. Está diseñada para identificar procesos ocultos, inyecciones de código (shellcode) y comportamientos anómalos que los antivirus convencionales suelen pasar por alto.",
    tags: ["C", "Windows Kernel", "Security"],
    href: "https://github.com/vxie705/Memory-",
  },
  {
    title: "Source Engine Metadata & NetVar Diagnostic Tool",
    description:
      "Herramienta de diagnóstico de bajo nivel desarrollada en C para la extracción automatizada de metadatos del motor Source (Valve). Esta utilidad permite la inspección profunda de estructuras de datos en tiempo real (NetVars) mediante el recorrido programático de la lista enlazada ClientClass.",
    tags: ["C", "Source Engine", "Reverse Engineering"],
    href: "https://github.com/vxie705/Source-Engine-Metadata-NetVar-Research-Tool",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 border-b border-[var(--border)] animate-fade-in-up"
      style={{ paddingTop: 'var(--space-section-sm)', paddingBottom: 'var(--space-section-sm)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--max-width-wide)' }}>
        {/* Section header */}
        <div className="mb-12" style={{ maxWidth: 'var(--max-width-content)' }}>
          <h2 className="font-serif text-3xl font-bold tracking-tight heading-underline sm:text-4xl">
            Proyectos
          </h2>
          <p
            className="mt-6 text-sm sm:text-base leading-[1.8]"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Cada proyecto cuenta una historia. Acá hay tres que me enseñaron
            algo que ningún tutorial podía explicar.
          </p>
        </div>

        {/* Projects grid — 2 columns */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`animate-fade-in-up delay-${i + 2} terminal-window project-card flex flex-col`}
            >
              {/* Terminal folder header */}
              <div className="terminal-header">
                <div className="terminal-dots flex gap-1.5">
                  <div className="terminal-dot bg-[#ef4444]" />
                  <div className="terminal-dot bg-[#eab308]" />
                  <div className="terminal-dot bg-[#22c55e]" />
                </div>
                <div className="terminal-title font-mono text-[10px]">project.exe</div>
                <div className="w-10" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col bg-[var(--muted)]">
                <h3 className="font-serif text-lg font-semibold tracking-wide text-white">
                  {project.title}
                </h3>

                <p
                  className="mt-3 flex-1 text-xs sm:text-sm leading-[1.7]"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded px-2 py-0.5 font-mono text-[10px] tracking-wider border border-[var(--border)] bg-[var(--muted)] text-[var(--accent-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
                  <Link
                    href={project.href}
                    className="link-accent inline-flex items-center gap-1.5 text-xs font-mono font-medium"
                    aria-label={`Ver proyecto: ${project.title}`}
                  >
                    Explorar
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  
                  <div className="flex items-center gap-3">
                    <Link
                      href={project.href}
                      className="transition-colors duration-200 hover:text-[var(--accent)]"
                      style={{ color: 'var(--muted-foreground)' }}
                      aria-label={`GitHub: ${project.title}`}
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                    <Link
                      href={project.href}
                      className="transition-colors duration-200 hover:text-[var(--accent)]"
                      style={{ color: 'var(--muted-foreground)' }}
                      aria-label={`Demo: ${project.title}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}