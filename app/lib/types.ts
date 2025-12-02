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
