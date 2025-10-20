import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="grid gap-8">
      <section className="rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-10 text-white shadow-xl">
        <h1 className="text-3xl font-bold">Retention Tracker</h1>
        <p className="mt-2 text-white/90">Understand where your audience drops off and fix retention bottlenecks.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/dashboard" className="rounded-md bg-white px-4 py-2 text-indigo-700 font-semibold">
            Creator Dashboard
          </Link>
          <Link href="/tracker" className="rounded-md bg-indigo-800/60 px-4 py-2 hover:bg-indigo-800">
            Try Tracker
          </Link>
        </div>
      </section>

      <section className="rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold">How it works</h2>
        <ol className="mt-3 list-decimal pl-6 space-y-2 text-gray-700">
          <li>Create products in the dashboard.</li>
          <li>Copy the embed snippet and paste it on your site.</li>
          <li>See analytics update as users interact.</li>
        </ol>
      </section>
    </div>
  );
}
