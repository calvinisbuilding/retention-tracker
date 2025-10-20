"use client";

import { useMemo, useState } from 'react';

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
      <section className="rounded-xl bg-white p-6 shadow">
        <h1 className="text-2xl font-semibold">Creator Dashboard</h1>
        <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_auto] items-center">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product/Course name"
            className="w-full rounded border px-3 py-2"
          />
          <input
            type="number"
            min={1}
            max={50}
            value={modules}
            onChange={(e) => setModules(parseInt(e.target.value || '1'))}
            className="w-24 rounded border px-3 py-2"
          />
          <button onClick={addProduct} className="rounded bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">
            Add
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-600">The most recently added product will be used in the embed code preview.</p>
      </section>

      <section className="rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold">Your Products</h2>
        {products.length === 0 ? (
          <p className="mt-2 text-gray-600">No products yet. Add one above to get started.</p>
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

      <section className="rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold">Embed Snippet</h2>
        {!embedCode ? (
          <p className="mt-2 text-gray-600">Add a product to see the embed snippet.</p>
        ) : (
          <div className="mt-3">
            <pre className="overflow-auto rounded-md bg-gray-900 p-4 text-sm text-emerald-200"><code>{embedCode}</code></pre>
            <p className="mt-2 text-sm text-gray-600">Paste this into your site where you want to track events.</p>
          </div>
        )}
      </section>
    </div>
  );
}
