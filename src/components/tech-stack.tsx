import {
  Code2,
  Database,
  Cloud,
  GitBranch,
  Cpu,
  Globe,
  BrainCircuit,
  Server,
  Terminal,
  Container,
} from "lucide-react";

interface TechGroup {
  category: string;
  items: { name: string; icon: React.ReactNode }[];
}

const groups: TechGroup[] = [
  {
    category: "Lenguajes",
    items: [
      { name: "C", icon: <Terminal className="h-4 w-4" /> },
      { name: "Rust", icon: <Cpu className="h-4 w-4" /> },
      { name: "TypeScript", icon: <Code2 className="h-4 w-4" /> },
    ],
  },
  {
    category: "Backend & Datos",
    items: [
      { name: "PostgreSQL", icon: <Database className="h-4 w-4" /> },
      { name: "Supabase", icon: <Database className="h-4 w-4" /> },
      { name: "Node.js", icon: <Server className="h-4 w-4" /> },
    ],
  },
  {
    category: "Infraestructura",
    items: [
      { name: "Docker", icon: <Container className="h-4 w-4" /> },
      { name: "Linux", icon: <Terminal className="h-4 w-4" /> },
      { name: "Vercel", icon: <Cloud className="h-4 w-4" /> },
    ],
  },
  {
    category: "IA & Herramientas",
    items: [
      { name: "Claude API", icon: <BrainCircuit className="h-4 w-4" /> },
      { name: "Git", icon: <GitBranch className="h-4 w-4" /> },
      { name: "Next.js", icon: <Globe className="h-4 w-4" /> },
    ],
  },
];

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative px-6 border-b border-[var(--border)]"
      style={{ paddingTop: 'var(--space-section-sm)', paddingBottom: 'var(--space-section-sm)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--max-width-wide)' }}>
        {/* Section header */}
        <div className="mb-12" style={{ maxWidth: 'var(--max-width-content)' }}>
          <h2 className="animate-fade-in-up font-serif text-3xl font-bold tracking-tight heading-underline sm:text-4xl">
            Tecnologías
          </h2>
          <p
            className="animate-fade-in-up delay-1 mt-6 text-sm sm:text-base leading-[1.8]"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Estas son las herramientas con las que resuelvo problemas a diario.
            No colecciono tecnologías — cada una tiene un propósito concreto.
          </p>
        </div>

        {/* Tech groups — Grid with 1px border panels */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, gi) => (
            <div
              key={group.category}
              className={`animate-fade-in-up delay-${gi + 2} rounded-xl p-5 border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent-secondary)] transition-all`}
            >
              <h3
                className="mb-4 text-xs font-mono font-semibold tracking-[0.15em] uppercase text-[var(--accent-secondary)]"
              >
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((tech) => (
                  <li
                    key={tech.name}
                    className="group flex items-center gap-3 font-mono"
                  >
                    <span
                      className="transition-colors duration-200 group-hover:text-[var(--accent)] text-[var(--muted-foreground)]"
                    >
                      {tech.icon}
                    </span>
                    <span className="text-xs sm:text-sm transition-colors duration-200 group-hover:text-white text-[var(--muted-foreground)]">
                      {tech.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}