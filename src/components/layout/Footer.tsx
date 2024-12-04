import React from 'react';
import { Github, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-indigo-900/50 border-t border-violet-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-violet-100 mb-4">Allastilia</h3>
            <p className="text-violet-300">
              Инновационный Minecraft сервер с модом Create и уникальной механикой
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-violet-200 mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/launcher" className="text-violet-300 hover:text-violet-200">
                  Начать игру
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-violet-300 hover:text-violet-200">
                  Магазин
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-violet-300 hover:text-violet-200">
                  Правила
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-violet-200 mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/support" className="text-violet-300 hover:text-violet-200">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="text-violet-300 hover:text-violet-200">
                  Discord
                </a>
              </li>
              <li>
                <Link to="/support" className="text-violet-300 hover:text-violet-200">
                  Обратная связь
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-violet-200 mb-4">Соцсети</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-violet-400 hover:text-violet-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-violet-400 hover:text-violet-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="mailto:support@allastilia.com"
                className="text-violet-400 hover:text-violet-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-violet-800/20 text-center text-violet-400">
          <p>&copy; {new Date().getFullYear()} Allastilia. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}