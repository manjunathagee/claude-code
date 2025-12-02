interface HookStatsProps {
  stars?: number;
  lastUpdated?: string;
  author?: string;
}

export default function HookStats({ stars, lastUpdated, author }: HookStatsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
      {stars !== undefined && (
        <>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {stars}
          </span>
          {(lastUpdated || author) && <span>•</span>}
        </>
      )}
      {lastUpdated && (
        <>
          <span>Updated: {formatDate(lastUpdated)}</span>
          {author && <span>•</span>}
        </>
      )}
      {author && <span>@{author}</span>}
    </div>
  );
}
