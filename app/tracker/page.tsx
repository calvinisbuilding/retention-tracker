"use client";

import { useState } from 'react';
import { BoltIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

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
      <h1 className="text-2xl font-semibold">Tracker playground</h1>
      <p className="text-gray-600">Use these buttons to simulate events your embed will send.</p>
      <div className="flex flex-wrap gap-3">
        <button onClick={() => push('view')} className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
          <BoltIcon className="h-5 w-5"/> View
        </button>
        <button onClick={() => push('progress')} className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          <BoltIcon className="h-5 w-5"/> Progress
        </button>
        <button onClick={() => push('complete')} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
          <CheckCircleIcon className="h-5 w-5"/> Complete
        </button>
        <button onClick={() => push('dropout')} className="inline-flex items-center gap-2 rounded-md bg-rose-600 px-4 py-2 text-white hover:bg-rose-700">
          <XMarkIcon className="h-5 w-5"/> Dropout
        </button>
      </div>
      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <h2 className="font-medium">Recent events</h2>
        {events.length === 0 ? (
          <p className="mt-2 text-sm text-gray-600">No events yet. Click a button above to send one.</p>
        ) : (
          <ul className="mt-3 space-y-2 text-sm">
            {events.map(e => (
              <li key={e.id} className="flex items-center justify-between rounded-md border bg-gray-50 px-3 py-2">
                <span className="font-semibold">{e.action}</span>
                <span className="text-gray-600">{e.ts}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
