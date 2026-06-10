"use client";

import { useActionState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { submitContact, type FormState } from "@/app/actions";

const initialState: FormState = { success: false };

export function Contact() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );

  return (
    <section
      id="contact"
      className="relative px-6 border-b border-[var(--border)]"
      style={{ paddingTop: 'var(--space-section-sm)', paddingBottom: 'var(--space-section-sm)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--max-width-content)' }}>
        {/* Section header */}
        <div className="mb-10 animate-fade-in-up">
          <h2 className="font-serif text-3xl font-bold tracking-tight heading-underline sm:text-4xl">
            Contacto
          </h2>
          <p
            className="mt-6 text-sm sm:text-base leading-[1.8]"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Si tenés un proyecto donde el rendimiento o la seguridad importan,
            este es el lugar correcto para empezar.
          </p>
        </div>

        {state.success ? (
          <div
            className="flex flex-col items-center gap-4 rounded-xl p-8 text-center bg-[var(--muted)] border border-[var(--accent)] animate-scale-in"
            role="status"
          >
            <CheckCircle className="h-8 w-8 text-[var(--accent)]" />
            <p className="font-serif text-lg font-medium text-white">
              Recibido — gracias
            </p>
            <p className="text-sm text-[var(--muted-foreground)]">
              Leo todos los mensajes personalmente. Te respondo apenas termine
              lo que tengo entre manos.
            </p>
          </div>
        ) : (
          <form action={formAction} className="space-y-6 animate-fade-in-up delay-2" noValidate>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-[10px] font-mono tracking-[0.15em] uppercase text-[var(--muted-foreground)]"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                minLength={2}
                maxLength={100}
                placeholder="Cómo te llamás"
                className="w-full rounded-lg px-4 py-2.5 text-sm font-mono transition-all duration-200 placeholder:opacity-35 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] bg-[var(--muted)] border border-[var(--border)] text-white"
                aria-describedby={
                  state.errors?.name ? "name-error" : undefined
                }
                aria-invalid={!!state.errors?.name}
              />
              {state.errors?.name && (
                <p
                  id="name-error"
                  className="mt-1.5 text-xs text-red-400 font-mono"
                  role="alert"
                >
                  {state.errors.name[0]}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[10px] font-mono tracking-[0.15em] uppercase text-[var(--muted-foreground)]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="tu@email.com"
                className="w-full rounded-lg px-4 py-2.5 text-sm font-mono transition-all duration-200 placeholder:opacity-35 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] bg-[var(--muted)] border border-[var(--border)] text-white"
                aria-describedby={
                  state.errors?.email ? "email-error" : undefined
                }
                aria-invalid={!!state.errors?.email}
              />
              {state.errors?.email && (
                <p
                  id="email-error"
                  className="mt-1.5 text-xs text-red-400 font-mono"
                  role="alert"
                >
                  {state.errors.email[0]}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[10px] font-mono tracking-[0.15em] uppercase text-[var(--muted-foreground)]"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={1000}
                rows={5}
                placeholder="Contame qué estás construyendo y cómo puedo ayudar..."
                className="w-full resize-y rounded-lg px-4 py-2.5 text-sm font-mono transition-all duration-200 placeholder:opacity-35 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] bg-[var(--muted)] border border-[var(--border)] text-white"
                aria-describedby={
                  state.errors?.message ? "message-error" : undefined
                }
                aria-invalid={!!state.errors?.message}
              />
              {state.errors?.message && (
                <p
                  id="message-error"
                  className="mt-1.5 text-xs text-red-400 font-mono"
                  role="alert"
                >
                  {state.errors.message[0]}
                </p>
              )}
            </div>

            {state.errors?._form && (
              <p className="text-sm text-red-400 font-mono" role="alert">
                {state.errors._form[0]}
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,255,102,0.45)] hover:opacity-90 active:scale-[0.98] focus:outline-none disabled:cursor-not-allowed disabled:opacity-40 bg-[var(--accent)] text-[var(--background)]"
            >
              {isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensaje
                  <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}