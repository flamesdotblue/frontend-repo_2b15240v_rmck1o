import { Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">aura</h3>
            <p className="mt-3 text-sm text-zinc-600 max-w-xs">
              Thoughtfully designed essentials for a calmer wardrobe.
            </p>
            <div className="mt-4 flex gap-3 text-zinc-700">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-zinc-900">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li><a href="#women" className="hover:text-zinc-900">Women</a></li>
              <li><a href="#men" className="hover:text-zinc-900">Men</a></li>
              <li><a href="#new" className="hover:text-zinc-900">New Arrivals</a></li>
              <li><a href="#stories" className="hover:text-zinc-900">Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-zinc-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li><a href="#" className="hover:text-zinc-900">About</a></li>
              <li><a href="#" className="hover:text-zinc-900">Sustainability</a></li>
              <li><a href="#" className="hover:text-zinc-900">Careers</a></li>
              <li><a href="#" className="hover:text-zinc-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-zinc-900">Get updates</h4>
            <p className="mt-3 text-sm text-zinc-600">Be first to know about new drops and restocks.</p>
            <form className="mt-4 flex items-center gap-2">
              <div className="relative w-full">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-lg border border-zinc-300 bg-white pl-10 pr-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/20"
                />
              </div>
              <button type="submit" className="rounded-lg bg-zinc-900 text-white px-4 py-2 text-sm hover:bg-zinc-800">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Aura Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-700">Privacy</a>
            <a href="#" className="hover:text-zinc-700">Terms</a>
            <a href="#" className="hover:text-zinc-700">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
