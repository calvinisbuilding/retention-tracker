import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: 'Retention Tracker',
  description: 'Track where customers drop off and fix retention bottlenecks.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="sticky top-0 z-40 border-b bg-white/75 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="group inline-flex items-center gap-2 text-lg font-semibold">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-sm">
                <RocketLaunchIcon className="h-5 w-5" />
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:from-indigo-700 group-hover:to-purple-700">
                Retention Tracker
              </span>
            </Link>
            <nav className="flex items-center gap-1 text-sm">
              <Link href="/" className="rounded-md px-3 py-2 hover:bg-gray-100">Home</Link>
              <Link href="/dashboard" className="rounded-md px-3 py-2 hover:bg-gray-100">Dashboard</Link>
              <Link href="/tracker" className="rounded-md px-3 py-2 hover:bg-gray-100">Tracker Test</Link>
              <a
                href="https://vercel.com/" target="_blank" rel="noreferrer"
                className="ml-2 rounded-md bg-gray-900 px-3 py-2 font-medium text-white hover:bg-black"
              >Deploy</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-10">{children}</main>
        <footer className="border-t bg-white/60">
          <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-gray-600 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Retention Tracker</p>
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="hover:text-indigo-600">Get Started</Link>
              <a href="/track.js" className="hover:text-indigo-600">Embed Script</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
