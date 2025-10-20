"use client";

import { useMemo, useState } from 'react';
import { ClipboardIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

type Product = {
  id: string;
  name: string;
  modules: number;
  createdAt: string;
};

export default function DashboardPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState<string>("");
  const [modules, setModules] = useState<number>(3);
  const [copied, setCopied] = useState<boolean>(false);

  const addProduct = () => {
    if (!name.trim()) return;
    const product: Product = {
      id: Math.random().toString(36).slice(2),
      name: name.trim(),
      modules,
      createdAt: new Date().toISOString(),
    };
    setProducts(prev => [product, ...prev]);
    setName("");
    setModules(3);
  };

  const embedCode = useMemo(() => {
    if (products.length === 0) return null;
    const latest = products[0];
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const url = `${origin}/track.js`;
    return `<script src="${url}" data-product-id="${latest.id}" data-product-name="${latest.name}"></script>`;
  }, [products]);

  return (
    <div className="grid gap-8">
      {/* Step 1: Create a product */}
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Create a product</h1>
            <p className="mt-1 text-gray-600">We’ll generate your unique embed for this product.</p>
          </div>
          <PlusCircleIcon className="h-7 w-7 text-indigo-600"/>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_auto] items-center">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Notion Masterclass"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          <input
            type="number"
            min={1}
            max={50}
            value={modules}
            onChange={(e) => setModules(parseInt(e.target.value || '1'))}
            className="w-28 rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          <button onClick={addProduct} className="rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">
            Add product
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-600">Latest product appears first and is used for the embed.</p>
      </section>

      {/* Step 2: Products list */}
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
        <h2 className="text-xl font-semibold">Your products</h2>
        {products.length === 0 ? (
          <p className="mt-2 text-gray-600">No products yet. Create one above to continue.</p>
        ) : (
          <ul className="mt-4 divide-y">
            {products.map(p => (
              <li key={p.id} className="py-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{p.name}</p>
                    <p className="text-sm text-gray-600">{p.modules} modules • Added {new Date(p.createdAt).toLocaleString()}</p>
                  </div>
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">{p.id}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Step 3: Embed snippet */}
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Embed snippet</h2>
            <p className="mt-1 text-gray-600">Paste this on the page you want to track.</p>
          </div>
          {copied ? (
            <span className="inline-flex items-center gap-2 text-emerald-600 text-sm"><CheckCircleIcon className="h-5 w-5"/> Copied</span>
          ) : null}
        </div>
        {!embedCode ? (
          <p className="mt-2 text-gray-600">Add a product to see your embed.</p>
        ) : (
          <div className="mt-3">
            <pre className="overflow-auto rounded-md bg-gray-900 p-4 text-sm text-emerald-200"><code>{embedCode}</code></pre>
            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={() => {
                  if (!embedCode) return;
                  navigator.clipboard.writeText(embedCode).then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  });
                }}
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black"
              >
                <ClipboardIcon className="h-5 w-5"/> Copy
              </button>
              <a href="/track.js" target="_blank" className="text-sm text-indigo-700 hover:underline">Open track.js</a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
