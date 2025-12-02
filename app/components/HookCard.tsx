'use client';

import { Hook } from '@/app/lib/types';
import CategoryBadge from './CategoryBadge';
import HookStats from './HookStats';

interface HookCardProps {
  hook: Hook;
}

export default function HookCard({ hook }: HookCardProps) {
  const handleClick = () => {
    window.open(hook.link, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      className="group relative flex flex-col gap-4 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:translate-y-0"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="link"
      aria-label={`Visit ${hook.name} on GitHub`}
    >
      <div className="flex items-start justify-between gap-2">
        <CategoryBadge category={hook.category} />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {hook.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
          {hook.description}
        </p>
      </div>

      <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
        <HookStats
          stars={hook.stars}
          lastUpdated={hook.lastUpdated}
          author={hook.author}
        />
      </div>
    </article>
  );
}
