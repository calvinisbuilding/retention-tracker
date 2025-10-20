import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retention Tracker',
  description: 'Track where customers drop off and fix retention bottlenecks.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold">Retention Tracker</Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/dashboard" className="hover:text-indigo-600">Dashboard</Link>
              <Link href="/tracker" className="hover:text-indigo-600">Tracker Test</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
