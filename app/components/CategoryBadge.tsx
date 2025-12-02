import { HookCategory } from '@/app/lib/types';
import { CATEGORY_CONFIGS } from '@/app/constants/categories';

interface CategoryBadgeProps {
  category: HookCategory;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const config = CATEGORY_CONFIGS[category];

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium uppercase tracking-wide rounded-full border ${config.color} ${config.bgColor} ${config.borderColor}`}
    >
      {config.label}
    </span>
  );
}
