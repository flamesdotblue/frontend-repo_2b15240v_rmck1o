import { ChevronRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 shadow-sm">
              <Star size={14} className="text-amber-500" />
              New drop: Aura Essentials
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900">
              Find your aura.
            </h1>
            <p className="mt-4 text-zinc-600 text-base sm:text-lg leading-relaxed">
              Elevated essentials designed for movement and everyday comfort.
              Minimal silhouettes, premium fabrics, and timeless palettes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#new" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-white text-sm hover:bg-zinc-800 transition-colors">
                Shop new arrivals <ChevronRight size={18} />
              </a>
              <a href="#stories" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-zinc-800 text-sm hover:bg-zinc-50 transition-colors">
                Explore the story
              </a>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1887&auto=format&fit=crop"
              alt="Aura hero"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs text-zinc-800 shadow-md">
                Shot in Tokyo • Organic cotton • Cruelty-free dyes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
