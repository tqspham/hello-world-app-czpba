'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme-provider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="fixed top-5 right-5 p-2 rounded-lg bg-(--color-surface) text-(--color-text) border border-(--color-border) hover:bg-(--color-accent) hover:text-white transition-all duration-200 z-50 flex items-center justify-center"
    >
      {theme === 'light' ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
    </button>
  );
}
