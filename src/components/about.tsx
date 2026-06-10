import { Cpu, Lock, Network, Terminal } from "lucide-react";

const highlights = [
  {
    icon: <Cpu className="h-5 w-5" />,
    label: "Bajo nivel",
    value:
      "Escribo C y Rust para entender cómo funciona realmente la máquina. Me importa la memoria, los ciclos y el diseño de sistemas operativos.",
  },
  {
    icon: <Lock className="h-5 w-5" />,
    label: "Seguridad",
    value:
      "Exploro el lado ofensivo y defensivo. Creo que la seguridad no se añade al final — se diseña desde la primera línea de código.",
  },
  {
    icon: <Network className="h-5 w-5" />,
    label: "Arquitectura",
    value:
      "Diseño sistemas modulares que escalan. Me obsesiona la claridad en los contratos entre componentes y la trazabilidad de los datos.",
  },
  {
    icon: <Terminal className="h-5 w-5" />,
    label: "Web & IA",
    value:
      "Construyo con Next.js, TypeScript y PostgreSQL. Integro modelos de lenguaje como herramientas de productividad, no como cajas negras.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative px-6 border-b border-[var(--border)]"
      style={{ paddingTop: 'var(--space-section-sm)', paddingBottom: 'var(--space-section-sm)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--max-width-wide)' }}>
        <div className="grid gap-12 md:grid-cols-12 items-start">
          {/* Left Column: Text & Highlights */}
          <div className="md:col-span-7 space-y-8">
            <div>
              <h2 className="animate-fade-in-up font-serif text-3xl font-bold tracking-tight heading-underline sm:text-4xl">
                Sobre mí
              </h2>
              <p
                className="animate-fade-in-up delay-1 mt-6 text-sm sm:text-base leading-[1.8]"
                style={{ color: 'var(--muted-foreground)' }}
              >
                No me considero solo un desarrollador. Me defino como alguien que
                entiende el sistema completo — desde cómo el procesador ejecuta una
                instrucción hasta cómo un usuario experimenta una interfaz.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className={`animate-fade-in-up delay-${i + 2} flex gap-4`}
                >
                  <span
                    className="mt-0.5 shrink-0"
                    style={{ color: 'var(--accent)' }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide">
                      {item.label}
                    </h3>
                    <p
                      className="mt-1.5 text-xs sm:text-sm leading-[1.7]"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Terminal mock with about.json */}
          <div className="md:col-span-5 w-full">
            <div className="terminal-window w-full font-mono text-xs text-left animate-scale-in">
              <div className="terminal-header">
                <div className="terminal-dots flex gap-1.5">
                  <div className="terminal-dot bg-[#ef4444]" />
                  <div className="terminal-dot bg-[#eab308]" />
                  <div className="terminal-dot bg-[#22c55e]" />
                </div>
                <div className="terminal-title">about.json</div>
                <div className="w-10" />
              </div>
              <div className="p-5 bg-[var(--muted)] text-[#a9b2c3] leading-relaxed overflow-x-auto">
                <pre className="text-[11px] sm:text-xs">
                  <code>
                    <span className="text-[#6366f1]">{'{'}</span>
                    {"\n  "}
                    <span className="text-[#ef4444]">"nombre"</span>: <span className="text-[var(--accent)]">"Josué"</span>,
                    {"\n  "}
                    <span className="text-[#ef4444]">"edad"</span>: <span className="text-[#eab308]">21</span>,
                    {"\n  "}
                    <span className="text-[#ef4444]">"rol"</span>: <span className="text-[var(--accent)]">"Software Engineer"</span>,
                    {"\n  "}
                    <span className="text-[#ef4444]">"enfoque"</span>: <span className="text-[#6366f1]">[</span>
                    {"\n    "}
                    <span className="text-[var(--accent)]">"Sistemas"</span>,
                    {"\n    "}
                    <span className="text-[var(--accent)]">"Seguridad"</span>
                    {"\n  "}
                    <span className="text-[#6366f1]">]</span>,
                    {"\n  "}
                    <span className="text-[#ef4444]">"intereses"</span>: <span className="text-[#6366f1]">[</span>
                    {"\n    "}
                    <span className="text-[var(--accent)]">"Bajo nivel"</span>,
                    {"\n    "}
                    <span className="text-[var(--accent)]">"Criptografía"</span>,
                    {"\n    "}
                    <span className="text-[var(--accent)]">"IA integrada"</span>
                    {"\n  "}
                    <span className="text-[#6366f1]">]</span>,
                    {"\n  "}
                    <span className="text-[#ef4444]">"entornos"</span>: <span className="text-[#6366f1]">{'{'}</span>
                    {"\n    "}
                    <span className="text-[#ef4444]">"host"</span>: <span className="text-[var(--accent)]">"Linux / Windows"</span>,
                    {"\n    "}
                    <span className="text-[#ef4444]">"kernel"</span>: <span className="text-[var(--accent)]">"C / Rust"</span>
                    {"\n  "}
                    <span className="text-[#6366f1]">{'}'}</span>
                    {"\n"}
                    <span className="text-[#6366f1]">{'}'}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
