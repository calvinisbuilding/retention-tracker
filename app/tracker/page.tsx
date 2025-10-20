"use client";

import { useState } from 'react';

export default function TrackerTestPage() {
  const [events, setEvents] = useState<{ id: string; action: string; ts: string }[]>([]);

  const push = (action: string) => {
    const e = { id: Math.random().toString(36).slice(2), action, ts: new Date().toLocaleTimeString() };
    setEvents(prev => [e, ...prev]);
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, ts: new Date().toISOString(), origin: 'tester' })
    }).catch(() => {});
  };

  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">Tracker Test</h1>
      <div className="flex flex-wrap gap-3">
        <button onClick={() => push('view')} className="rounded bg-emerald-600 px-4 py-2 text-white">View</button>
        <button onClick={() => push('progress')} className="rounded bg-blue-600 px-4 py-2 text-white">Progress</button>
        <button onClick={() => push('complete')} className="rounded bg-indigo-600 px-4 py-2 text-white">Complete</button>
        <button onClick={() => push('dropout')} className="rounded bg-rose-600 px-4 py-2 text-white">Dropout</button>
      </div>
      <div className="rounded border bg-white p-4">
        <h2 className="font-medium">Recent Events</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {events.map(e => (
            <li key={e.id} className="flex items-center justify-between border-b pb-2 last:border-b-0">
              <span className="font-semibold">{e.action}</span>
              <span className="text-gray-600">{e.ts}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
