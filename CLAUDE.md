# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HookHub is a Next.js 16 application using React 19, TypeScript, and Tailwind CSS v4. This is a fresh project bootstrapped with `create-next-app` using the App Router architecture.

## Tech Stack

- **Framework**: Next.js 16.0.6 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x with strict mode enabled
- **Styling**: Tailwind CSS v4 (using PostCSS plugin)
- **Fonts**: Geist Sans and Geist Mono (loaded via next/font/google)
- **Linting**: ESLint 9 with Next.js config (core-web-vitals + TypeScript)

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build production bundle
npm run build

# Start production server (run after build)
npm start

# Run linter
npm run lint
```

## Architecture

### App Router Structure
- Uses Next.js App Router (app directory) with file-based routing
- Root layout in [app/layout.tsx](app/layout.tsx) configures fonts and global styles
- Main page at [app/page.tsx](app/page.tsx)
- Global styles in [app/globals.css](app/globals.css)

### TypeScript Configuration
- Path alias `@/*` maps to project root (configured in [tsconfig.json](tsconfig.json))
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler

### Styling System
- Tailwind CSS v4 configured via PostCSS plugin ([@tailwindcss/postcss](postcss.config.mjs))
- Uses `@theme inline` directive in [app/globals.css](app/globals.css) for custom theme tokens
- CSS variables for theming:
  - `--background` and `--foreground` with automatic dark mode support via `prefers-color-scheme`
  - Font variables: `--font-geist-sans` and `--font-geist-mono`
- Dark mode: Automatic system preference detection, use `dark:` class variants for dark mode styles

### Linting
- ESLint configuration in [eslint.config.mjs](eslint.config.mjs)
- Uses Next.js recommended configs for core-web-vitals and TypeScript
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
