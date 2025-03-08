"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="pixel-navbar fixed top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-pixel">CBTproduction</div>
        <div className="flex space-x-6">
          <Link 
            href="/"
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/games"
            className={`nav-link ${pathname === '/games' || pathname.startsWith('/games/') ? 'active' : ''}`}
          >
            Games
          </Link>
          <Link 
            href="/about"
            className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}