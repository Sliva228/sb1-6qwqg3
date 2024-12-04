import React, { useState } from 'react';
import { Menu, X, Download, ShoppingCart, Book, LifeBuoy, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Лаунчер', path: '/launcher', icon: Download },
    { name: 'Магазин', path: '/shop', icon: ShoppingCart },
    { name: 'Правила', path: '/rules', icon: Book },
    { name: 'Поддержка', path: '/support', icon: LifeBuoy },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-indigo-950/80 backdrop-blur-md border-b border-violet-800/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 text-transparent bg-clip-text">
              Allastilia
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-violet-200 hover:text-violet-100 transition-colors flex items-center gap-2"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 pl-8 border-l border-violet-800/20">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-violet-200 hover:text-violet-100"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-950/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-violet-200 hover:text-violet-100 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}