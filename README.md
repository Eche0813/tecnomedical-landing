# 🏥 TECNOMEDICALS S.A.S. — Landing Page & Catálogo Digital

Página web corporativa y catálogo digital interactivo para **TECNOMEDICALS S.A.S.**, empresa colombiana especializada en soluciones de oxigenoterapia portátil, concentradores de oxígeno y equipos para la terapia del sueño (CPAP/BiPAP).

El proyecto está diseñado bajo una arquitectura **SSR (Server-Side Rendering)** que permite la gestión automatizada de productos e imágenes en tiempo real mediante **Google Sheets** como CMS Headless.

---

## 🚀 Tecnologías Utilizadas

* **Framework:** [Astro v5](https://astro.build/) (Modo Server-Side Rendering)
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (Vite Plugin & Native `@theme`)
* **Hosting & SSR Adapter:** [Vercel](https://vercel.com/) via `@astrojs/vercel`
* **CMS / Base de Datos:** Google Sheets integrado con **Google Apps Script (GAS)**
* **Lenguaje:** JavaScript (ES6+) con documentación **JSDoc** y TypeScript Interfaces

---

## 📋 Arquitectura del Sistema

                    +-----------------------+
                    |  Google Sheets (CMS)  |
                    +-----------+-----------+
                                |
                                | Apps Script (JSON Web App)
                                v
+------------------+    HTTP Fetch (no-store)    +-------------------+
|  Cliente / Web   | <------------------------- | Vercel Serverless |
|  (Astro + Tailwind)|     HTML + Data en Vivo  |   (Astro v5 SSR)  |
+------------------+                            +-------------------+
1. **Gestión de Contenido:** El cliente administra el inventario (títulos, precios, imágenes, categorías y disponibilidad) desde una plantilla en Google Sheets.
2. **API Endpoint:** Un script en Google Apps Script expone los datos de la hoja en formato JSON público.
3. **Renderizado SSR:** En cada petición web, el servidor de Vercel ejecuta `getProducts.js` con `{ cache: 'no-store' }`, garantizando datos e imágenes actualizados de inmediato sin necesidad de reconstruir la aplicación.

---

## 🛠️ Instalación y Configuración Local

### Requisitos Previos

* **Node.js**: v18.17.0 o superior
* **Gestor de paquetes:** `pnpm` (recomendado)

### Pasos de Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/eche0813/tecnomedical-landing.git](https://github.com/eche0813/tecnomedical-landing.git)
   cd tecnomedical-landing
Instalar dependencias:Bashpnpm install
Iniciar el servidor de desarrollo:Bashpnpm run dev
Abre http://localhost:4321 en tu navegador para ver la aplicación en ejecución local.Compilar para producción:Bashpnpm run build
📁 Estructura del Proyecto
tecnomedical-landing/
├── public/                 # Assets estáticos (logos, favicon, og-images)
├── src/
│   ├── components/         # Componentes de UI reutilizables
│   │   ├── Hero.astro
│   │   ├── HowItWorks.astro
│   │   ├── ProductCard.astro
│   │   ├── ProductGrid.astro
│   │   ├── TrustBadges.astro
│   │   └── WhatsappButton.astro
│   ├── layouts/            # Plantillas globales de estructura
│   │   └── Layout.astro
│   ├── pages/              # Rutas y vistas de la aplicación (SSR)
│   │   ├── index.astro
│   │   ├── catalogo.astro
│   │   └── quienes-somos.astro
│   ├── services/           # Integración con APIs externas
│   │   └── getProducts.js
│   └── styles/             # Estilos globales y tokens de diseño
│       └── global.css
├── astro.config.mjs        # Configuración de Astro, Vercel SSR y Vite
├── package.json            # Dependencias del proyecto
└── README.md               # Documentación del repositorio
🎨 Guía de Estilos & Paleta de Colores 
Los estilos están centralizados en src/styles/global.css mediante la directiva @theme de Tailwind v4:ColorHexUso en la AplicaciónAzul Cian (--color-tm-blue)#0082C3Botones de acción, enlaces, acentos y preciosAzul Marino (--color-tm-dark)#003B73Encabezados, tipografía principal, footerTexto Lectura (--color-tm-text)#1A1A1ACuerpo de texto y párrafos de lectura
📄 Licencia 
Este proyecto es de propiedad privada y exclusiva de TECNOMEDICALS S.A.S. Todos los derechos reservados.
