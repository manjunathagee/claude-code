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
  {
    id: 'claude-hooks',
    name: 'Claude Hooks',
    category: HookCategory.Utilities,
    description: 'TypeScript-powered hook system for Claude Code that provides full type safety and auto-completion. Write hooks with strongly-typed payloads in familiar TypeScript syntax.',
    link: 'https://github.com/johnlindquist/claude-hooks',
    stars: 89,
    lastUpdated: '2024-11-28',
    author: 'johnlindquist'
  },
  {
    id: 'claude-code-hooks-multi-agent-observability',
    name: 'Multi-Agent Observability',
    category: HookCategory.Observability,
    description: 'Real-time monitoring for Claude Code agents through hook event tracking. Features a web-based dashboard for observability across multiple projects with detailed metrics and logs.',
    link: 'https://github.com/disler/claude-code-hooks-multi-agent-observability',
    stars: 67,
    lastUpdated: '2024-11-25',
    author: 'disler'
  },
  {
    id: 'claudekit',
    name: 'ClaudeKit',
    category: HookCategory.Productivity,
    description: 'A toolkit of custom commands, hooks, and utilities for Claude Code. Includes codebase mapping, thinking level enhancement, and self-review capabilities to boost productivity.',
    link: 'https://github.com/carlrannaberg/claudekit',
    stars: 123,
    lastUpdated: '2024-12-02',
    author: 'carlrannaberg'
  },
  {
    id: 'awesome-claude-code',
    name: 'Awesome Claude Code',
    category: HookCategory.Documentation,
    description: 'A curated list of awesome commands, files, and workflows for Claude Code. Comprehensive directory of community resources, hooks, and best practices.',
    link: 'https://github.com/hesreallyhim/awesome-claude-code',
    stars: 234,
    lastUpdated: '2024-12-01',
    author: 'hesreallyhim'
  },
  {
    id: 'security-scan-hook',
    name: 'Security Scanner',
    category: HookCategory.Security,
    description: 'Pre-commit security scanning hook that detects vulnerabilities, secrets, and common security issues before code execution. Integrates with popular security tools.',
    link: 'https://github.com/example/security-scan-hook',
    stars: 45,
    lastUpdated: '2024-11-20',
    author: 'example'
  },
  {
    id: 'test-runner-hook',
    name: 'Automated Test Runner',
    category: HookCategory.Testing,
    description: 'Automatically runs your test suite before commits and provides detailed feedback. Supports Jest, Vitest, Playwright, and other popular testing frameworks.',
    link: 'https://github.com/example/test-runner-hook',
    stars: 78,
    lastUpdated: '2024-11-22',
    author: 'example'
  },
  {
    id: 'prompt-validator',
    name: 'Prompt Validator',
    category: HookCategory.Validation,
    description: 'Validates user prompts before execution to ensure quality, safety, and compliance. Includes custom validation rules and blocking capabilities.',
    link: 'https://github.com/example/prompt-validator',
    stars: 56,
    lastUpdated: '2024-11-18',
    author: 'example'
  },
  {
    id: 'ai-code-review',
    name: 'AI Code Reviewer',
    category: HookCategory.AI,
    description: 'Leverages AI models to perform automated code reviews, suggest improvements, and detect potential bugs. Provides detailed feedback and suggestions.',
    link: 'https://github.com/example/ai-code-review',
    stars: 112,
    lastUpdated: '2024-11-30',
    author: 'example'
  },
  {
    id: 'deployment-hook',
    name: 'Deployment Automation',
    category: HookCategory.DevOps,
    description: 'Automates deployment workflows with hooks for CI/CD integration. Supports multiple platforms including Vercel, AWS, and Google Cloud.',
    link: 'https://github.com/example/deployment-hook',
    stars: 91,
    lastUpdated: '2024-11-27',
    author: 'example'
  },
  {
    id: 'code-formatter',
    name: 'Smart Code Formatter',
    category: HookCategory.Utilities,
    description: 'Automatically formats code according to project standards using Prettier, ESLint, and custom formatters. Ensures consistent code style across the team.',
    link: 'https://github.com/example/code-formatter',
    stars: 143,
    lastUpdated: '2024-12-01',
    author: 'example'
  },
  {
    id: 'performance-monitor',
    name: 'Performance Monitor',
    category: HookCategory.Observability,
    description: 'Tracks and analyzes Claude Code performance metrics including response times, token usage, and agent efficiency. Provides detailed performance insights.',
    link: 'https://github.com/example/performance-monitor',
    stars: 62,
    lastUpdated: '2024-11-24',
    author: 'example'
  }
];

export function getAllHooks(): Hook[] {
  return hooks;
}

export function getHooksByCategory(category: HookCategory): Hook[] {
  return hooks.filter(hook => hook.category === category);
}
