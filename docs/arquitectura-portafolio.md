# 🏗️ Arquitectura del Portafolio - Next.js 15 + React 19

```mermaid
graph TB
    subgraph "🌐 Cliente"
        BROWSER["Navegador"]
    end

    subgraph "⚡ Next.js 15 App Router"
        direction TB
        NEXT["Next.js 15<br/>React 19 + TypeScript"]
        LAYOUT["📄 layout.tsx<br/>HTML + Metadata"]
        PAGE["🏠 page.tsx<br/>Página Principal"]
        NEXT --> LAYOUT
        LAYOUT --> PAGE
    end

    subgraph "🧩 Componentes"
        HERO["🦸 hero.tsx<br/>Sección Presentación"]
        ABOUT["👤 about.tsx<br/>Sobre Mí"]
        TECH["🛠️ tech-stack.tsx<br/>Tecnologías"]
        PROJ["📁 projects.tsx<br/>Proyectos"]
        CONTACT["📧 contact.tsx<br/>Formulario"]
        FOOTER["📋 footer.tsx<br/>Pie de Página"]
    end

    subgraph "🎨 Estilos"
        TAILWIND["💨 Tailwind CSS 4<br/>Utility-first"]
        POSTCSS["⚙️ PostCSS<br/>Procesador"]
        GLOBALSCSS["📝 globals.css<br/>Estilos Globales"]
        TAILWIND --> POSTCSS
        POSTCSS --> GLOBALSCSS
    end

    subgraph "📦 Dependencias"
        LUCIDE["🔷 lucide-react<br/>Iconos SVG"]
        ZOD["🛡️ zod<br/>Validación"]
    end

    subgraph "🔧 Tooling"
        ESLINT["✅ ESLint 9"]
        TSC["📘 TypeScript 5.7"]
    end

    BROWSER -->|"HTTP / RSC"| NEXT
    PAGE --> HERO
    PAGE --> ABOUT
    PAGE --> TECH
    PAGE --> PROJ
    PAGE --> CONTACT
    PAGE --> FOOTER
    TAILWIND -.->|"Estiliza"| PAGE
    TAILWIND -.->|"Estiliza"| HERO
    TAILWIND -.->|"Estiliza"| ABOUT
    LUCIDE -.->|"Iconos"| PAGE
    TSC -.->|"Type Check"| PAGE
    ESLINT -.->|"Linting"| PAGE

    style BROWSER fill:#dae8fc,stroke:#6c8ebf,color:#000
    style NEXT fill:#d5e8d4,stroke:#82b366,color:#000
    style LAYOUT fill:#fff2cc,stroke:#d6b656,color:#000
    style PAGE fill:#fff2cc,stroke:#d6b656,color:#000
    style HERO fill:#e1d5e7,stroke:#9673a6,color:#000
    style ABOUT fill:#e1d5e7,stroke:#9673a6,color:#000
    style TECH fill:#e1d5e7,stroke:#9673a6,color:#000
    style PROJ fill:#e1d5e7,stroke:#9673a6,color:#000
    style CONTACT fill:#e1d5e7,stroke:#9673a6,color:#000
    style FOOTER fill:#e1d5e7,stroke:#9673a6,color:#000
    style TAILWIND fill:#f8cecc,stroke:#b85450,color:#000
    style POSTCSS fill:#f8cecc,stroke:#b85450,color:#000
    style GLOBALSCSS fill:#f8cecc,stroke:#b85450,color:#000
    style LUCIDE fill:#ffe6cc,stroke:#d79b00,color:#000
    style ZOD fill:#ffe6cc,stroke:#d79b00,color:#000
    style ESLINT fill:#dae8fc,stroke:#6c8ebf,color:#000
    style TSC fill:#dae8fc,stroke:#6c8ebf,color:#000
```

## 📂 Estructura de Archivos

```mermaid
graph LR
    subgraph "📁 Raíz"
        PKG["package.json"]
        TS["tsconfig.json"]
        NEXT_CONFIG["next.config.ts"]
        POSTCSS_CONFIG["postcss.config.mjs"]
    end

    subgraph "📁 src/"
        subgraph "📁 app/"
            LAYOUT2["layout.tsx"]
            PAGE2["page.tsx"]
            CSS["globals.css"]
        end
        subgraph "📁 components/"
            H2["hero.tsx"]
            A2["about.tsx"]
            T2["tech-stack.tsx"]
            P2["projects.tsx"]
            C2["contact.tsx"]
            F2["footer.tsx"]
        end
    end

    PKG --> LAYOUT2
    LAYOUT2 --> PAGE2
    PAGE2 --> H2
    PAGE2 --> A2
    PAGE2 --> T2
    PAGE2 --> P2
    PAGE2 --> C2
    PAGE2 --> F2
    CSS --> LAYOUT2
    CSS --> H2

    style PKG fill:#d5e8d4,stroke:#82b366,color:#000
    style LAYOUT2 fill:#fff2cc,stroke:#d6b656,color:#000
    style PAGE2 fill:#fff2cc,stroke:#d6b656,color:#000
    style CSS fill:#f8cecc,stroke:#b85450,color:#000
    style H2 fill:#e1d5e7,stroke:#9673a6,color:#000
    style A2 fill:#e1d5e7,stroke:#9673a6,color:#000
    style T2 fill:#e1d5e7,stroke:#9673a6,color:#000
    style P2 fill:#e1d5e7,stroke:#9673a6,color:#000
    style C2 fill:#e1d5e7,stroke:#9673a6,color:#000
    style F2 fill:#e1d5e7,stroke:#9673a6,color:#000
```

## 🔄 Flujo de Renderizado

```mermaid
sequenceDiagram
    participant Browser as 🌐 Navegador
    participant Next as ⚡ Next.js Server
    participant Layout as 📄 layout.tsx
    participant Page as 🏠 page.tsx
    participant Comp as 🧩 Componentes
    participant CSS as 🎨 Tailwind CSS

    Browser->>Next: GET /
    Next->>Layout: Render Root Layout
    Layout->>CSS: Aplicar globals.css
    Layout->>Page: Render Children
    Page->>Comp: Montar Hero
    Page->>Comp: Montar About
    Page->>Comp: Montar TechStack
    Page->>Comp: Montar Projects
    Page->>Comp: Montar Contact
    Page->>Comp: Montar Footer
    CSS-->>Comp: Estilos Utility-first
    Comp-->>Page: Componentes renderizados
    Page-->>Layout: Página completa
    Layout-->>Next: HTML + RSC Payload
    Next-->>Browser: Respuesta completa
```

## 📊 Tecnologías Usadas

```mermaid
pie title Stack Tecnológico
    "React 19" : 25
    "Next.js 15" : 25
    "TypeScript" : 20
    "Tailwind CSS 4" : 15
    "Lucide React" : 10
    "Zod" : 5