import React from 'react';
import { ChevronRight, Download } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-indigo-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(121,40,202,0.2),rgba(0,0,0,0)_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 text-transparent bg-clip-text">
          Allastilia
        </h1>
        <p className="text-xl md:text-2xl text-violet-200 mb-12 max-w-2xl mx-auto">
          Инновационный Minecraft сервер с модом Create и уникальной механикой
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-md flex items-center justify-center gap-2 transition-all">
            <Download className="w-5 h-5" />
            Скачать лаунчер
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-violet-600/10 rotate-12 transform-gpu" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-600/10 -rotate-12 transform-gpu" />
      </div>
    </section>
  );
}