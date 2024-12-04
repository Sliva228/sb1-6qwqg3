import React from 'react';
import { Cog, Wrench, Wand2 } from 'lucide-react';

export function ModsSection() {
  return (
    <section id="mods" className="py-20 bg-gradient-to-b from-amber-950 to-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-center text-amber-100 mb-12">
          Наши моды
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ModCard
            icon={<Cog className="w-12 h-12" />}
            title="Create"
            description="Основной мод сервера. Создавайте сложные механизмы, автоматизируйте процессы и стройте удивительные машины."
          />
          <ModCard
            icon={<Wrench className="w-12 h-12" />}
            title="Create Additions"
            description="Расширение для мода Create, добавляющее новые механизмы и возможности для автоматизации."
          />
          <ModCard
            icon={<Wand2 className="w-12 h-12" />}
            title="Create Crafts & Additions"
            description="Дополнительные рецепты и предметы, расширяющие возможности базового мода Create."
          />
        </div>
      </div>
    </section>
  );
}

function ModCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gradient-to-br from-amber-800/50 to-amber-900/50 p-6 rounded-lg backdrop-blur-sm border border-amber-700/30">
      <div className="text-amber-200 mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-bold text-amber-100 mb-2">{title}</h3>
      <p className="text-amber-300">{description}</p>
    </div>
  );
}