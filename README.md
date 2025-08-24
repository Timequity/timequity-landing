# Timequity Landing Page

Modern landing page for Timequity platform built with the latest web technologies.

## 🚀 Tech Stack

- **Framework**: React 19.0.0
- **Build Tool**: Vite 6.x
- **Language**: TypeScript 5.x (strict mode)
- **Styling**: Tailwind CSS v4 with @tailwindcss/vite plugin
- **Deployment**: Vercel

## 📋 Requirements

- Node.js 20.x LTS or higher
- npm 10.x or higher

## 🛠️ Development

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd timequity-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (Button, Input, etc.)
│   └── sections/     # Landing page sections (Hero, FAQ, etc.)
├── lib/              # Utilities and types
├── assets/           # Static assets (images, icons)
└── styles/           # Global styles
```

## 🎨 Styling

This project uses Tailwind CSS v4 with:
- Dark theme by default
- Custom design tokens for colors and spacing
- Responsive, mobile-first approach
- WCAG AA accessibility compliance

## 📝 Environment Variables

Create a `.env` file with:

```
VITE_WAITLIST_ENDPOINT=your_google_apps_script_endpoint
```

## 🚀 Deployment

Deployed automatically via Vercel:
- Production: Deploys from `main` branch
- Preview: Deploys from pull requests

## 📖 Development Guidelines

See `CLAUDE.md` for detailed development standards and practices.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
