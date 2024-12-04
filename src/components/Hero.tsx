import React from 'react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1607988795691-3d0147b43231?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/70 via-amber-900/60 to-amber-950/80" />
      </div>
      
      <div className="relative text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-amber-100 mb-6">
          Allastilia
        </h1>
        <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-2xl mx-auto">
          Погрузитесь в мир технологий и магии с модом Create
        </p>
        <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-amber-100 px-8 py-3 rounded-lg font-serif text-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg">
          Начать игру
        </button>
      </div>
    </section>
  );
}