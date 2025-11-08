import { useState } from 'react';
import { Search, Bell, ChevronDown, User } from 'lucide-react';

function NavLink({ label }) {
  return (
    <a href="#" className="text-sm text-gray-200 hover:text-white transition-colors">
      {label}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add background to navbar
  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setScrolled(window.scrollY > 10);
    };
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60' : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo + Links */}
        <div className="flex items-center gap-8">
          <div className="text-red-600 font-extrabold text-2xl select-none tracking-wider">NETFLIX</div>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink label="Home" />
            <NavLink label="TV Shows" />
            <NavLink label="Movies" />
            <NavLink label="New & Popular" />
            <NavLink label="My List" />
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5 text-gray-200">
          <button aria-label="Search" className="hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button aria-label="Notifications" className="hover:text-white transition-colors hidden sm:inline-flex">
            <Bell size={20} />
          </button>
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="bg-gray-700/60 p-1 rounded-full">
              <User size={18} />
            </div>
            <ChevronDown size={18} className="text-gray-300" />
          </div>
        </div>
      </div>
    </header>
  );
}
