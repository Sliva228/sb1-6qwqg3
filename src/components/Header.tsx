import React from 'react';
import { Cog, Compass, Users } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-900/90 via-amber-800/90 to-amber-900/90 backdrop-blur-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Cog className="w-8 h-8 text-amber-200 animate-spin-slow" />
            <span className="ml-2 text-2xl font-serif font-bold text-amber-100">Allastilia</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink icon={<Compass />} text="О сервере" href="#about" />
            <NavLink icon={<Cog />} text="Моды" href="#mods" />
            <NavLink icon={<Users />} text="Как начать" href="#getting-started" />
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) {
  return (
    <a
      href={href}
      className="flex items-center space-x-2 text-amber-200 hover:text-amber-100 transition-colors duration-200"
    >
      {icon}
      <span className="font-serif">{text}</span>
    </a>
  );
}