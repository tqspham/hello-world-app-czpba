'use client';

import { ThemeToggle } from './theme-toggle';

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeToggle />
      {children}
    </>
  );
}
