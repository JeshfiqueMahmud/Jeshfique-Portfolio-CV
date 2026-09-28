# Jeshfique Mahmud — Personal Portfolio & Curriculum Vitae

A modern, responsive, and interactive engineering portfolio showcasing low-level Bitcoin Core interpreter architecture, multimodal deep learning models, AI automation projects, and distributed network systems.

Live Demo & GitHub: [github.com/JeshfiqueMahmud](https://github.com/JeshfiqueMahmud)

---

## Key Features

- **Interactive 3D Fluid Canvas**: Background fluid dynamic simulation driven by `three.js` and `three-fluid-fx`.
- **Interactive 360° Profile Avatar**: Smooth spring-based physics for 3D gesture tracking, swipe tilt, and full 360-degree rotation.
- **Bitcoin Core Opcode Sandbox**: In-browser CLI sandbox simulating Bitcoin Core `EvalScript` opcode execution (`OP_DUP`, `OP_HASH256`, `OP_EQUALVERIFY`, `OP_CHECKSIG`).
- **Complete Technical Arsenal**: Interactive skill categories spanning Blockchain & Systems, AI & LLM Tools, Machine Learning, APIs & Integrations, Databases, and Programming Languages.
- **Filterable Engineering Projects**: Deep inspector modals with architecture pipeline diagrams and repository links.
- **Printable Curriculum Vitae**: Clean, dedicated printable/PDF resume view matching industry resume standards.

---

## Tech Stack

- **Framework**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, Motion (Framer Motion v12)
- **3D & Graphics**: Three.js, three-fluid-fx, Canvas Confetti
- **Icons**: Lucide React

---

## Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+ recommended) and **npm** installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/JeshfiqueMahmud/Jeshfique-Portfolio-CV.git

# Navigate into the project directory
cd Jeshfique-Portfolio-CV

# Install dependencies
npm install
```

### Development

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```text
├── src/
│   ├── assets/          # Images, avatars, and static media
│   ├── components/      # UI components (Navbar, InteractiveAvatar, FluidBackground, OpcodeTerminal, ResumeModal, etc.)
│   ├── data/            # Single typed source of truth (portfolioData.ts)
│   ├── pages/           # Page routes (HomePage, SkillsPage, ProjectsPage, ExperiencePage)
│   ├── types.ts         # TypeScript definitions
│   ├── App.tsx          # App shell and modal orchestration
│   ├── main.tsx         # Entry point
│   └── index.css        # Core styles
├── index.html           # Document HTML template with SEO tags
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

---

## License

MIT License. Designed and engineered by [Jeshfique Mahmud](https://github.com/JeshfiqueMahmud).
