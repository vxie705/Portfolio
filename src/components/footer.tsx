import { ArrowUp } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative px-6 py-8">
      <div
        className="mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-between font-mono text-[11px] text-[var(--muted-foreground)]"
        style={{ maxWidth: 'var(--max-width-wide)' }}
      >
        <div>
          &copy; {year} Josué. Built with Next.js and Tailwind CSS.
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-[var(--accent)]"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-3.5 w-3.5" />
          volver arriba
        </a>
      </div>
    </footer>
  );
}