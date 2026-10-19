<div align="center">

# 📱 Shriram Mange — Personal Portfolio

<p align="center">
  <strong>High-performance, editorial dark-mode portfolio web application built with React 19, TypeScript, Tailwind CSS v4, and Vite 8.</strong>
</p>

[![Website](https://img.shields.io/badge/Live_Demo-shrirammange.me-ff5b1f?style=for-the-badge&logo=googlechrome&logoColor=white)](https://shrirammange.me)
[![Resume](https://img.shields.io/badge/Resume-Download_PDF-E95420?style=for-the-badge&logo=adobeacrobatreader&logoColor=white)](https://shrirammange.me/Shriram_Mange_Resume.pdf)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Shriram_Mange-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/shriram-mange)
[![GitHub](https://img.shields.io/badge/GitHub-Shriram2005-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Shriram2005)

---

[![Vite](https://img.shields.io/badge/Built_With-Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/Framework-React_19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript_5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/Deployed_On-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

[🌐 View Live Site](https://shrirammange.me) • [💼 Explore Work](#-featured-projects) • [🛠️ Tech Stack](#️-tech-stack) • [🚀 Quick Start](#-getting-started) • [📬 Contact](#-connect--contact)

</div>

<br />

## 👨‍💻 About Shriram Mange

I am a passionate **Android Developer** specializing in **Kotlin & Jetpack Compose**, as well as a **Full-Stack Web Developer** based in Nashik, Maharashtra, India. I focus on engineering clean-architected, fluid mobile experiences and modern, scalable full-stack web applications.

- 🎓 **Education:** Pursuing MCA at K.K. Wagh Institute of Engineering Education and Research (8.05 CGPA) | BCA Graduate from Sandip University (8.41 CGPA)
- 💼 **Experience:** Freelance Developer (7+ delivered client apps), Android Intern at S.T.R.E.A.M. Edutech, Full Stack Intern at Wind Hans Technology, Android Developer at Techentrance
- 🏆 **Certifications & Accolades:** GitHub Foundations Certified (82%), 1st Runner Up at LogicHunt 2025, 1st Position at TechTrek 2k24, Hacktoberfest Contributor

---

## ✨ Portfolio Highlights & Features

- 🖤 **Modern Editorial Aesthetic:** High-contrast dark theme (`#0a0a0b`) paired with warm paper typography (`#f4f1ea`) and vibrant signal-orange accents (`#ff5b1f`).
- ⚡ **Zero-Bloat Performance:** Built on **React 19** and **Vite 8** with native CSS nesting via **Tailwind CSS v4** (`@tailwindcss/vite`). Instantaneous hot reloads and tiny production bundle sizes (<250 kB gzip).
- 🗂️ **Interactive Project Deep-Dives:** Slide-over detail drawer showcasing project galleries, problem statements, technical architecture, and direct links.
- 📱 **Adaptive & Responsive:** Meticulously formatted typography scales and grid layouts engineered for screens from 360px mobile viewports to 4K displays.
- 🤖 **First-Class AI Context (`/llms.txt`):** Includes a comprehensive, machine-readable overview designed for LLMs, AI search engines, and automated agents.
- 🔍 **Production SEO & Discovery:** Complete Open Graph metadata, Twitter Cards, Google Site Verification, Schema.org `Person` JSON-LD, `robots.txt`, and `sitemap.xml`.
- 📬 **Direct Contact Affordances:** One-click email copy with clipboard feedback, direct phone links, and deep links to WhatsApp, Telegram, GitHub, and LinkedIn.

---

## 🛠️ Tech Stack

### Core & Framework
| Technology | Description |
| :--- | :--- |
| **[React 19](https://react.dev/)** | State-of-the-art declarative UI library |
| **[TypeScript 5](https://www.typescriptlang.org/)** | Strict type definitions and safe data modeling |
| **[Vite 8](https://vite.dev/)** | Lightning-fast ESM dev server and optimized Rollup bundler |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Next-generation engine with zero-config `@import "tailwindcss";` |

### Architecture & Hosting
| Service / Tool | Description |
| :--- | :--- |
| **[Netlify](https://www.netlify.com/)** | Automated continuous deployment with edge routing via `netlify.toml` |
| **[Firebase](https://firebase.google.com/)** | Configured client SDK (`firebase.ts`) for future database and analytics needs |
| **[Git & GitHub](https://github.com/)** | Version control with semantic commits and branch preservation |

---

## 📂 Project Structure

```plaintext
android-portfolio/
├── public/
│   ├── logos/                     # University and educational institution emblems
│   ├── projects/                  # High-resolution screenshots of featured applications
│   ├── profile-pic.png            # Portrait photograph
│   ├── profile-pic2.png           # Alternate profile avatar / favicon
│   ├── Shriram_Mange_Resume.pdf   # Up-to-date downloadable resume
│   ├── llms.txt                   # Structured AI & LLM context
│   ├── robots.txt                 # Search crawler instructions
│   ├── sitemap.xml                # Search engine index manifest
│   └── _redirects                 # Netlify SPA fallback routing
├── src/
│   ├── App.tsx                    # Main application layout, navigation, sections, and drawer
│   ├── data.ts                    # Central data source for projects, experience, skills, certs
│   ├── firebase.ts                # Firebase client initialization (optional/utility)
│   ├── index.css                  # Tailwind v4 theme definitions and font setups
│   ├── main.tsx                   # React root mount
│   └── vite-env.d.ts              # Vite environment types
├── index.html                     # HTML5 shell, SEO tags, JSON-LD Schema
├── netlify.toml                   # Netlify build and redirect configurations
├── package.json                   # Dependencies and npm scripts
├── postcss.config.js              # Local PostCSS boundary configuration
├── tsconfig.json                  # TypeScript compiler options
└── vite.config.ts                 # Vite bundler configuration
```

---

## ⚡ Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm** (or **pnpm** / **yarn**)
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shriram2005/Portfolio.git
   cd Portfolio/newPortfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📬 Connect & Contact

Let's collaborate or build something amazing together!

- 🌐 **Portfolio:** [shrirammange.me](https://shrirammange.me)
- 📧 **Email:** [mange.shriram@gmail.com](mailto:mange.shriram@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/shriram-mange](https://linkedin.com/in/shriram-mange)
- 🐙 **GitHub:** [github.com/Shriram2005](https://github.com/Shriram2005)
- 💬 **Telegram:** [@Shrirammange](https://t.me/Shrirammange)

---

<div align="center">
  <sub>Designed & Developed with ❤️ by <strong>Shriram Mange</strong> • © 2026 All Rights Reserved</sub>
</div>
