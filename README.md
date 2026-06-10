# 🖥️ josue.dev | Systems & Low-Level

<p align="center">
  <em>"Construyendo desde el kernel hasta la nube."</em>
</p>

<p align="center">
  <a href="https://portfolio-git-main-devone-s-projects.vercel.app"><b>🔗 Ver Portafolio en Vivo</b></a>
</p>

---

## 📖 Arquitectura de Autor
Este portafolio no es un template; es un **entorno digital diseñado a medida**. He construido este sistema bajo una premisa clara: **la tecnología debe servir a la intención, no al revés.** Mi enfoque como ingeniero combina la rigurosidad del desarrollo de sistemas de bajo nivel con la agilidad de las arquitecturas web modernas. Aquí no encontrarás "cajas negras", sino un sistema modular, tipado y optimizado.

---

## 🛠️ Stack Tecnológico
Seleccioné cada herramienta por su capacidad de ofrecer un rendimiento predecible y una mantenibilidad a largo plazo:

| Capa | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 | Renderizado optimizado y SEO |
| **Lenguaje** | TypeScript 5.7 | Seguridad en tipos y robustez |
| **Interfaz** | Tailwind CSS 4 | Diseño minimalista y eficiente |
| **Datos** | Zod | Integración y validación estricta |
| **Ecosistema** | React 19 | Arquitectura basada en componentes |

---

## 🚀 Proyectos que definen mi enfoque

* **Workflow Engine:** Un framework C++20 diseñado para orquestar pipelines de datos mediante configuración JSON. Enfocado en observabilidad y bajo acoplamiento.
* **Advanced Rootkit & Memory Detector:** Herramienta de ciberseguridad a nivel kernel en Windows. Identificación de inyecciones de código y procesos anómalos.
* **Source Engine Diagnostic Tool:** Utilidad de bajo nivel en C para la extracción y diagnóstico de estructuras de datos (NetVars) en el motor Source de Valve.

---

## 💡 Filosofía de Desarrollo
1.  **Claridad sobre Complejidad:** La interfaz debe reflejar la lógica del sistema. Sin fricción, sin ruido.
2.  **Trazabilidad:** Cada componente y contrato de datos está diseñado para ser auditable y escalable.
3.  **Identidad Técnica:** Este sitio utiliza una estética inspirada en terminales de sistemas para rendir homenaje a mis raíces en el desarrollo de bajo nivel.

---

## 📂 Arquitectura del Proyecto

La estructura sigue un patrón modular en `src/`, facilitando la escalabilidad y el mantenimiento de componentes independientes:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── design-tokens.css
└── components/
    ├── hero.tsx
    ├── about.tsx
    ├── tech-stack.tsx
    ├── projects.tsx
    ├── contact.tsx
    ├── companion.tsx
    └── footer.tsx
