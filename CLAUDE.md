# CLAUDE.md - Timequity Landing Page

## Project Overview
A modern React 19 + TypeScript + Tailwind CSS v4 landing page for Timequity platform. Focus on simplicity, performance, and accessibility.

## Tech Stack
- **Build**: Vite 6.x
- **Framework**: React 19.0.0
- **Language**: TypeScript 5.x (strict mode)
- **Styling**: Tailwind CSS v4 with @tailwindcss/vite plugin
- **Deployment**: Vercel

## Development Standards

### Code Quality
- Use functional components only
- TypeScript strict mode with proper typing
- Maximum function length: 20 lines
- Single responsibility principle
- Descriptive variable names
- Self-documenting code (comments only for "why", not "what")

### React 19 Specific
- Use new form actions and useActionState for forms
- Leverage React 19's improved TypeScript support
- Use ref callbacks with cleanup functions where needed
- Prefer React 19's built-in optimization features

### Styling Approach
- Tailwind CSS v4 with CSS variables
- Mobile-first responsive design
- Dark theme by default
- Use utility classes directly in JSX
- Avoid custom CSS unless absolutely necessary

### Component Structure
```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   └── sections/     # Landing page sections
├── lib/              # Utilities and types
├── assets/           # Static assets
└── styles/           # Global styles
```

### File Naming
- Components: PascalCase.tsx
- Utilities: camelCase.ts
- Types: types.ts or interfaces.ts

### Performance Requirements
- Lighthouse scores: ≥90 desktop, ≥85 mobile
- WCAG AA accessibility compliance
- Core Web Vitals optimization

## API Integration
- Waitlist form connects to Google Apps Script
- Environment variables for different environments
- Error handling with user-friendly messages

## Deployment
- Vercel for hosting
- Preview deployments for PRs
- Environment-specific configurations

## Content Guidelines
- English copy as specified in TASKS.md
- Professional tone
- Focus on time-as-currency concept
- Clear value propositions for both buyers and sellers