# HookHub Feature Specification

## Overview

HookHub is a Next.js 16 application that showcases a curated collection of Claude Code hooks - open-source GitHub repositories that extend and customize Claude Code's behavior. The MVP focuses on displaying hooks in an elegant, responsive grid layout with category organization and essential metadata.

## Objectives

1. **Discovery**: Help developers discover useful Claude Code hooks from the community
2. **Organization**: Categorize hooks by functionality (Security, Observability, Productivity, etc.)
3. **Accessibility**: Provide quick access to hook repositories with clear descriptions
4. **User Experience**: Deliver a fast, beautiful, and accessible interface with dark mode support

## Technical Stack

- **Framework**: Next.js 16.0.6 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x (strict mode enabled)
- **Styling**: Tailwind CSS v4 (PostCSS plugin)
- **Fonts**: Geist Sans and Geist Mono
- **Deployment**: Vercel (recommended)

## Architecture

### Component Structure

```
app/
├── components/
│   ├── HookCard.tsx         (Client Component - interactive card)
│   ├── HookGrid.tsx         (Server Component - grid layout)
│   ├── CategoryBadge.tsx    (Server Component - category tag)
│   └── HookStats.tsx        (Server Component - stats display)
├── lib/
│   ├── types.ts             (TypeScript interfaces and enums)
│   ├── hooks-data.ts        (Static hook data source)
│   └── github-api.ts        (Future: GitHub API integration)
├── constants/
│   └── categories.ts        (Category configurations)
├── page.tsx                 (Main page - Server Component)
└── layout.tsx               (Root layout with metadata)
```

### Server vs Client Components

**Server Components** (Static, SEO-friendly):
- `HookGrid` - Grid container
- `CategoryBadge` - Category pills
- `HookStats` - Stars and date display
- `page.tsx` - Main page

**Client Components** (Interactive):
- `HookCard` - Hover effects, click handling, keyboard navigation

This separation minimizes JavaScript bundle size while maintaining interactivity.

## Data Model

### TypeScript Interfaces

**Location**: [app/lib/types.ts](../app/lib/types.ts)

```typescript
export interface Hook {
  id: string;              // Unique identifier (slug from repo)
  name: string;            // Display name
  category: HookCategory;  // Primary category
  description: string;     // Short description (2-3 sentences)
  link: string;            // Full GitHub repository URL
  stars?: number;          // GitHub stars count (optional)
  lastUpdated?: string;    // ISO date string (optional)
  author?: string;         // GitHub username (optional)
  tags?: string[];         // Additional tags for future search (optional)
}

export enum HookCategory {
  Security = 'security',
  Observability = 'observability',
  Productivity = 'productivity',
  Validation = 'validation',
  Testing = 'testing',
  Documentation = 'documentation',
  AI = 'ai',
  DevOps = 'devops',
  Utilities = 'utilities'
}

export interface CategoryConfig {
  label: string;           // Display name
  color: string;           // Tailwind text color class
  bgColor: string;         // Tailwind background color class
  borderColor: string;     // Tailwind border color class
  description: string;     // Category description
}
```

### Category Taxonomy

**Location**: [app/constants/categories.ts](../app/constants/categories.ts)

| Category | Description | Color Scheme |
|----------|-------------|--------------|
| **Security** | Security scanning, vulnerability detection, code safety | Red |
| **Observability** | Monitoring, logging, debugging agent behavior | Blue |
| **Productivity** | Workflow automation, developer efficiency tools | Green |
| **Validation** | Code quality checks, validation rules | Purple |
| **Testing** | Testing utilities, test automation | Orange |
| **Documentation** | Documentation generation, guides, resources | Cyan |
| **AI** | AI-powered tools, model integration | Pink |
| **DevOps** | CI/CD, deployment, infrastructure | Indigo |
| **Utilities** | General-purpose helpers, utilities | Gray |

Each category includes dark mode support via Tailwind's `dark:` variant.

## User Interface

### Layout Specifications

**Grid System**:
- **Mobile** (< 640px): 1 column
- **Tablet** (640px - 1024px): 2 columns
- **Desktop** (1024px - 1280px): 3 columns
- **Large Desktop** (> 1280px): 4 columns

**Tailwind Classes**: `grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`

**Container**:
- Max width: `max-w-7xl` (1280px)
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Vertical padding: `py-12 lg:py-16`
- Centering: `mx-auto`

### HookCard Component

**Visual Design**:
```
┌─────────────────────────────────┐
│ [Category Badge]                │
│                                 │
│ Hook Name                       │
│                                 │
│ Short description of the hook   │
│ that spans 2-3 lines max with   │
│ proper truncation...            │
│                                 │
│ ─────────────────────────────── │
│ ⭐ 150  •  Updated: Jan 2025    │
└─────────────────────────────────┘
```

**Styling**:
- Border: `border border-gray-200 dark:border-gray-800`
- Border radius: `rounded-lg`
- Background: `bg-white dark:bg-gray-900`
- Padding: `p-6`
- Shadow: `shadow-sm hover:shadow-md`
- Transition: `transition-all duration-200`

**Hover State**:
- Transform: `hover:-translate-y-1`
- Border: `hover:border-blue-400 dark:hover:border-blue-600`
- Shadow: Enhanced shadow on hover

**Interactive States**:
- Cursor: `cursor-pointer`
- Focus: `focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`
- Active: `active:translate-y-0`

**Content Structure**:
1. **Category Badge** (top-left)
2. **Hook Name** (h3, font-semibold, text-lg)
3. **Description** (p, text-gray-600 dark:text-gray-400, line-clamp-3)
4. **Divider** (subtle horizontal line)
5. **Footer** (stars, last updated, author)

**Behavior**:
- Click anywhere on card → Open GitHub repo in new tab
- Keyboard: Enter/Space → Trigger click
- Accessible: Proper ARIA labels and semantic HTML

### CategoryBadge Component

**Design**:
- Shape: Pill (fully rounded)
- Size: Small, compact
- Typography: `text-xs font-medium uppercase tracking-wide`
- Padding: `px-3 py-1`

**Color System** (example for Security):
```typescript
text-red-700 dark:text-red-400
bg-red-50 dark:bg-red-950
border border-red-200 dark:border-red-800
```

### HookStats Component

**Layout**:
```
⭐ 150  •  Updated: Jan 2025  •  @author
```

**Styling**:
- Font size: `text-sm`
- Color: `text-gray-500 dark:text-gray-400`
- Items separated by bullet: `•`
- Flex layout: `flex items-center gap-2`

**Icons**:
- Star icon for stars count
- Calendar/clock icon for last updated (optional)
- GitHub icon at end

## Data Management

### Phase 1: Static Data (MVP)

**Location**: [app/lib/hooks-data.ts](../app/lib/hooks-data.ts)

**Implementation**:
```typescript
import { Hook, HookCategory } from './types';

export const hooks: Hook[] = [
  {
    id: 'claude-code-hooks-mastery',
    name: 'Claude Code Hooks Mastery',
    category: HookCategory.Documentation,
    description: 'Comprehensive resource for mastering Claude Code hooks with all 8 hook events including UserPromptSubmit, PreToolUse, PostToolUse and more. Features prompt validation, security filtering, and TTS playback.',
    link: 'https://github.com/disler/claude-code-hooks-mastery',
    stars: 150,
    lastUpdated: '2024-12-01',
    author: 'disler'
  },
  // ... 9-14 more hooks
];

export function getAllHooks(): Hook[] {
  return hooks;
}

export function getHooksByCategory(category: HookCategory): Hook[] {
  return hooks.filter(hook => hook.category === category);
}
```

### Initial Hook Dataset

Based on research from GitHub, the initial dataset includes:

1. **claude-code-hooks-mastery** (disler)
   - Category: Documentation
   - Comprehensive hooks resource with examples

2. **claude-hooks** (johnlindquist)
   - Category: Utilities
   - TypeScript-powered hooks with full type safety

3. **claude-code-hooks-multi-agent-observability** (disler)
   - Category: Observability
   - Real-time monitoring dashboard for Claude Code agents

4. **claudekit** (carlrannaberg)
   - Category: Productivity
   - Toolkit of custom commands, hooks, and utilities

5. **awesome-claude-code** (hesreallyhim)
   - Category: Documentation
   - Curated list of awesome commands and workflows

6-15. Additional hooks discovered via GitHub search for "claude-code-hooks" and "claude-hooks" topics

### Phase 2: GitHub API Integration (Future)

**Location**: [app/lib/github-api.ts](../app/lib/github-api.ts)

**Strategy**:
- Use Octokit GitHub API client
- Implement ISR (Incremental Static Regeneration)
- Revalidate every 1 hour: `{ next: { revalidate: 3600 } }`
- Fetch real-time stars, last updated, description
- Graceful fallback to static data on API failures
- Rate limit handling

**Environment Variables**:
```bash
GITHUB_TOKEN=ghp_xxxxx  # Optional, for higher rate limits
```

## Page Structure

### Main Page ([app/page.tsx](../app/page.tsx))

```typescript
import { getAllHooks } from '@/app/lib/hooks-data';
import HookGrid from '@/app/components/HookGrid';

export default function Home() {
  const hooks = getAllHooks();

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            HookHub
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover curated Claude Code hooks to enhance your development workflow
          </p>
        </header>

        <HookGrid hooks={hooks} />
      </div>
    </main>
  );
}
```

### Metadata ([app/layout.tsx](../app/layout.tsx))

```typescript
export const metadata: Metadata = {
  title: "HookHub - Discover Claude Code Hooks",
  description: "A curated collection of open-source Claude Code hooks for security, observability, productivity, and more.",
};
```

## Accessibility

### WCAG 2.1 AA Compliance

**Semantic HTML**:
- Use `<article>` for HookCard
- Use `<h1>` for page title, `<h3>` for hook names
- Use `<main>`, `<header>`, `<section>` appropriately

**Keyboard Navigation**:
- All interactive elements accessible via Tab
- Enter/Space to activate cards
- Focus visible states: `focus:ring-2 focus:ring-blue-500`

**Screen Readers**:
- ARIA labels for icon-only elements
- Alt text for any images/icons
- Proper heading hierarchy

**Color Contrast**:
- Text on background: minimum 4.5:1 ratio
- Category badges: ensure contrast in both light and dark modes
- Test with Chrome DevTools Accessibility panel

**Focus Management**:
- Visible focus indicators
- Logical tab order
- Skip links (future enhancement)

## Performance

### Optimization Strategies

**Static Generation**:
- All pages generated at build time
- Zero client-side data fetching in MVP
- Fast First Contentful Paint (FCP < 1s)

**Component Optimization**:
- Server Components for static content
- Minimal JavaScript bundle (only HookCard is client-side)
- No external dependencies beyond Next.js and Tailwind

**Image Optimization**:
- Use `next/image` for any logos/icons (future)
- Lazy loading for below-fold content (future)

**CSS Optimization**:
- Tailwind CSS purges unused styles
- Critical CSS inlined automatically by Next.js
- Dark mode via CSS variables (no JavaScript toggle needed)

### Performance Targets

| Metric | Target |
|--------|--------|
| **Lighthouse Performance** | > 90 |
| **First Contentful Paint** | < 1.0s |
| **Largest Contentful Paint** | < 2.5s |
| **Time to Interactive** | < 2.0s |
| **Total Blocking Time** | < 200ms |
| **Cumulative Layout Shift** | < 0.1 |

## Testing

### Manual Testing Checklist

**Functionality**:
- [ ] All hooks display correctly in grid
- [ ] Category badges show correct colors
- [ ] Clicking cards opens GitHub repos in new tabs
- [ ] Keyboard navigation works (Tab, Enter)
- [ ] Stats display correctly (stars, dates)

**Responsive Design**:
- [ ] Mobile (375px): 1 column, readable text
- [ ] Tablet (768px): 2 columns, proper spacing
- [ ] Desktop (1024px): 3 columns, balanced layout
- [ ] Large desktop (1440px): 4 columns, not too wide

**Dark Mode**:
- [ ] Category colors work in both modes
- [ ] Text readable in both modes
- [ ] Hover states visible in both modes
- [ ] Proper contrast ratios maintained

**Cross-Browser**:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS/iOS)

**Accessibility**:
- [ ] Lighthouse Accessibility score > 90
- [ ] Screen reader navigation (VoiceOver/NVDA)
- [ ] Keyboard-only navigation
- [ ] Color contrast verification

### TypeScript & Linting

```bash
# Type checking
npm run build  # Will fail on type errors

# Linting
npm run lint   # ESLint checks
```

## Deployment

### Vercel Deployment

**Recommended Platform**: Vercel (Next.js creators)

**Setup**:
1. Connect GitHub repository
2. Auto-deploy on push to `main` branch
3. Preview deployments for PRs
4. Environment variables (for Phase 2 GitHub API)

**Build Command**: `npm run build`

**Output Directory**: `.next`

**Environment Variables** (Phase 2):
```
GITHUB_TOKEN=ghp_xxxxx  # Optional
```

### Alternative: Self-Hosted

```bash
npm run build
npm start
```

Requires Node.js 18.x or later.

## Future Enhancements

### Phase 2 Features (Post-MVP)

1. **Search Functionality**
   - Full-text search across hook names and descriptions
   - Real-time filtering as user types
   - Keyboard shortcuts (⌘K or Ctrl+K)

2. **Category Filtering**
   - Filter by one or multiple categories
   - URL state for shareable filtered views
   - "Clear filters" button

3. **Sorting Options**
   - Sort by: Most stars, Recently updated, Alphabetical
   - Toggle ascending/descending
   - Persist sort preference in localStorage

4. **GitHub API Integration**
   - Real-time stars count
   - Automatic updates every hour (ISR)
   - Repository topics as additional tags
   - Fork count, contributor count

5. **Hook Submission**
   - Community submission form
   - GitHub OAuth for authentication
   - Admin approval workflow
   - Automated validation

6. **Enhanced Metadata**
   - Hook compatibility (Claude Code version)
   - Installation instructions preview
   - Screenshot/demo GIF support
   - Usage statistics

7. **Advanced Features**
   - User accounts and favorites
   - Trending hooks (weekly/monthly)
   - Hook collections/playlists
   - RSS/Atom feed for new hooks
   - Analytics (view count, click-through rate)

### Technical Debt & Improvements

1. **Testing**
   - Unit tests (Jest + React Testing Library)
   - E2E tests (Playwright)
   - Visual regression tests (Chromatic)

2. **Performance**
   - Image CDN for hook logos
   - Virtual scrolling for 100+ hooks
   - Service Worker for offline support

3. **SEO**
   - Individual hook detail pages
   - OpenGraph meta tags
   - Sitemap generation
   - Structured data (Schema.org)

4. **Developer Experience**
   - Storybook for component development
   - Husky pre-commit hooks
   - Prettier for code formatting
   - Conventional commits

## Success Metrics

### MVP Launch Goals

**Technical**:
- ✅ Zero TypeScript errors
- ✅ ESLint clean (no warnings)
- ✅ Lighthouse Performance > 90
- ✅ Lighthouse Accessibility > 90
- ✅ Build time < 30 seconds

**User Experience**:
- ✅ 10-15 curated hooks displayed
- ✅ All categories represented
- ✅ Full mobile responsiveness
- ✅ Dark mode support
- ✅ < 1s page load time

**Content**:
- ✅ Accurate hook descriptions
- ✅ Working GitHub links
- ✅ Current stars/update data
- ✅ Proper categorization

## Appendix

### File Paths Reference

```
/Users/manjunathac/Documents/source-code/claude-code/hookhub/
├── app/
│   ├── components/
│   │   ├── HookCard.tsx
│   │   ├── HookGrid.tsx
│   │   ├── CategoryBadge.tsx
│   │   └── HookStats.tsx
│   ├── lib/
│   │   ├── types.ts
│   │   ├── hooks-data.ts
│   │   └── github-api.ts
│   ├── constants/
│   │   └── categories.ts
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── spec/
│   └── CLAUDE.md
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

### Color Palette

**Light Mode**:
- Background: `#ffffff`
- Foreground: `#171717`
- Muted: `#f5f5f5`
- Border: `#e5e5e5`

**Dark Mode**:
- Background: `#0a0a0a`
- Foreground: `#ededed`
- Muted: `#1a1a1a`
- Border: `#262626`

### Resources

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Claude Code Documentation](https://docs.anthropic.com/claude-code)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Document Version**: 1.0
**Last Updated**: December 2024
**Author**: HookHub Development Team
