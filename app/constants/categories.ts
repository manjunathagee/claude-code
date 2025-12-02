import { HookCategory, CategoryConfig } from '@/app/lib/types';

export const CATEGORY_CONFIGS: Record<HookCategory, CategoryConfig> = {
  [HookCategory.Security]: {
    label: 'Security',
    color: 'text-red-700 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-950',
    borderColor: 'border-red-200 dark:border-red-800',
    description: 'Security scanning, vulnerability detection, and code safety'
  },
  [HookCategory.Observability]: {
    label: 'Observability',
    color: 'text-blue-700 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    borderColor: 'border-blue-200 dark:border-blue-800',
    description: 'Monitoring, logging, and debugging agent behavior'
  },
  [HookCategory.Productivity]: {
    label: 'Productivity',
    color: 'text-green-700 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-950',
    borderColor: 'border-green-200 dark:border-green-800',
    description: 'Workflow automation and developer efficiency tools'
  },
  [HookCategory.Validation]: {
    label: 'Validation',
    color: 'text-purple-700 dark:text-purple-400',
    bgColor: 'bg-purple-50 dark:bg-purple-950',
    borderColor: 'border-purple-200 dark:border-purple-800',
    description: 'Code quality checks and validation rules'
  },
  [HookCategory.Testing]: {
    label: 'Testing',
    color: 'text-orange-700 dark:text-orange-400',
    bgColor: 'bg-orange-50 dark:bg-orange-950',
    borderColor: 'border-orange-200 dark:border-orange-800',
    description: 'Testing utilities and test automation'
  },
  [HookCategory.Documentation]: {
    label: 'Documentation',
    color: 'text-cyan-700 dark:text-cyan-400',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950',
    borderColor: 'border-cyan-200 dark:border-cyan-800',
    description: 'Documentation generation, guides, and resources'
  },
  [HookCategory.AI]: {
    label: 'AI/ML',
    color: 'text-pink-700 dark:text-pink-400',
    bgColor: 'bg-pink-50 dark:bg-pink-950',
    borderColor: 'border-pink-200 dark:border-pink-800',
    description: 'AI-powered tools and model integration'
  },
  [HookCategory.DevOps]: {
    label: 'DevOps',
    color: 'text-indigo-700 dark:text-indigo-400',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950',
    borderColor: 'border-indigo-200 dark:border-indigo-800',
    description: 'CI/CD, deployment, and infrastructure'
  },
  [HookCategory.Utilities]: {
    label: 'Utilities',
    color: 'text-gray-700 dark:text-gray-400',
    bgColor: 'bg-gray-50 dark:bg-gray-950',
    borderColor: 'border-gray-200 dark:border-gray-800',
    description: 'General-purpose helpers and utilities'
  }
};
