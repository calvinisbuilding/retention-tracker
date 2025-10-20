import Link from 'next/link';
import { CheckCircleIcon, ChartBarIcon, CursorArrowRaysIcon, BoltIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <div className="grid gap-14">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 p-10 text-white shadow-xl">
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-wider text-white/80">For course creators and communities</p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl">
            Fix drop‑offs. Grow retention.
          </h1>
          <p className="mt-3 max-w-2xl text-white/90">
            A tiny embed that shows you exactly where people fall off in your content and funnels. Ship fixes with confidence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/dashboard" className="rounded-md bg-white px-5 py-2.5 text-indigo-700 font-semibold shadow hover:shadow-md">
              Open Creator Dashboard
            </Link>
            <Link href="/tracker" className="rounded-md bg-indigo-900/40 px-5 py-2.5 text-white ring-1 ring-white/20 hover:bg-indigo-900/50">
              Try the tracker
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-white/80">
            <div className="inline-flex items-center gap-2"><CheckCircleIcon className="h-4 w-4"/> One‑line install</div>
            <div className="inline-flex items-center gap-2"><CheckCircleIcon className="h-4 w-4"/> No PII by default</div>
            <div className="inline-flex items-center gap-2"><CheckCircleIcon className="h-4 w-4"/> Works on any site</div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-white/10 blur-3xl"/>
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl"/>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-bold">Why creators use Retention Tracker</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={<ChartBarIcon className="h-6 w-6"/>} title="See where users drop off" desc="Auto‑capture views, progress, completion and dropouts across your content."/>
          <FeatureCard icon={<CursorArrowRaysIcon className="h-6 w-6"/>} title="One‑line embed" desc="Paste a single script tag. No frameworks required."/>
          <FeatureCard icon={<BoltIcon className="h-6 w-6"/>} title="Fast & lightweight" desc="Tiny JS, batched requests, retry logic and offline queueing."/>
        </div>
      </section>

      {/* How it works */}
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
        <h2 className="text-xl font-semibold">How it works</h2>
        <ol className="mt-4 list-decimal pl-6 space-y-2 text-gray-700">
          <li>Open the Dashboard and add your product.</li>
          <li>Copy the embed snippet we generate for you.</li>
          <li>Paste it on your site and watch analytics roll in.</li>
        </ol>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-50 text-indigo-700">
        {icon}
      </div>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-gray-600">{desc}</p>
    </div>
  );
}
