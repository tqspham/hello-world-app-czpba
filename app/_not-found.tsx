'use client';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-(--color-background) text-(--color-text)">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-(--color-primary) mb-4">404</h1>
        <p className="text-xl text-(--color-muted-text)">Page not found</p>
      </div>
    </div>
  );
}
