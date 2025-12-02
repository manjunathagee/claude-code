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
