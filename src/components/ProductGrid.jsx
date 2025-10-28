import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Aura Tee",
    price: 48,
    color: "Bone",
    image:
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Flow Pants",
    price: 96,
    color: "Charcoal",
    image:
      "https://images.unsplash.com/photo-1520975922203-bc4d9a1f4a6f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Studio Hoodie",
    price: 118,
    color: "Oat",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Balance Crew",
    price: 78,
    color: "Slate",
    image:
      "https://images.unsplash.com/photo-1525521321663-e95c31b9ff58?q=80&w=1936&auto=format&fit=crop",
  },
];

export default function ProductGrid() {
  const [bag, setBag] = useState([]);

  const addToBag = (product) => {
    setBag((prev) => [...prev, product.id]);
  };

  return (
    <section id="new" className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
              New arrivals
            </h2>
            <p className="mt-2 text-zinc-600">Curated pieces for the season.</p>
          </div>
          <div className="text-sm text-zinc-500">Bag: {bag.length}</div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-medium text-zinc-900">{p.name}</h3>
                    <p className="text-sm text-zinc-500">{p.color}</p>
                  </div>
                  <p className="font-medium text-zinc-900">${p.price}</p>
                </div>
                <button
                  onClick={() => addToBag(p)}
                  className="mt-4 w-full rounded-lg bg-zinc-900 text-white py-2 text-sm hover:bg-zinc-800 transition-colors"
                >
                  Add to bag
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
