import { ShoppingBag, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-2xl font-semibold tracking-tight">
              <span className="text-zinc-900">aura</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
              <a href="#women" className="hover:text-zinc-900 transition-colors">Women</a>
              <a href="#men" className="hover:text-zinc-900 transition-colors">Men</a>
              <a href="#new" className="hover:text-zinc-900 transition-colors">New Arrivals</a>
              <a href="#stories" className="hover:text-zinc-900 transition-colors">Stories</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-zinc-100 text-zinc-700">
              <Search size={20} />
            </button>
            <button aria-label="Account" className="p-2 rounded-full hover:bg-zinc-100 text-zinc-700">
              <User size={20} />
            </button>
            <button aria-label="Bag" className="relative p-2 rounded-full hover:bg-zinc-100 text-zinc-700">
              <ShoppingBag size={20} />
              <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-zinc-900 text-white text-[10px] grid place-items-center">2</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
