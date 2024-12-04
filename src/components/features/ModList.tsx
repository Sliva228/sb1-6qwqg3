import React from 'react';
import { Cog, Sparkles, Zap, Wrench } from 'lucide-react';
import type { Mod } from '../../types';

const mods: Mod[] = [
  {
    name: 'Create',
    description: 'Основной технический мод, добавляющий механизмы и автоматизацию',
    category: 'tech',
    required: true
  },
  {
    name: 'Create Additions',
    description: 'Расширение возможностей мода Create',
    category: 'tech',
    required: true
  },
  {
    name: 'Create Crafts & Additions',
    description: 'Дополнительные рецепты и предметы для мода Create',
    category: 'tech',
    required: true
  },
  {
    name: 'Performance Boost',
    description: 'Оптимизация производительности',
    category: 'performance',
    required: true
  }
];

const getCategoryIcon = (category: Mod['category']) => {
  switch (category) {
    case 'tech':
      return <Wrench className="w-6 h-6 text-violet-400" />;
    case 'magic':
      return <Sparkles className="w-6 h-6 text-violet-400" />;
    case 'performance':
      return <Zap className="w-6 h-6 text-violet-400" />;
    default:
      return <Cog className="w-6 h-6 text-violet-400" />;
  }
};

export function ModList() {
  return (
    <section className="py-20 bg-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-violet-200 mb-4">Список модов</h2>
          <p className="text-violet-300">Тщательно подобранная коллекция модов для лучшего игрового опыта</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mods.map((mod, index) => (
            <div
              key={index}
              className="bg-indigo-900/30 backdrop-blur-sm border border-violet-800/20 rounded-lg p-6 hover:border-violet-700/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-violet-900/30 rounded-lg">
                  {getCategoryIcon(mod.category)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-violet-200 mb-2">{mod.name}</h3>
                  <p className="text-violet-300 text-sm">{mod.description}</p>
                  {mod.required && (
                    <span className="inline-block mt-2 text-xs px-2 py-1 bg-violet-900/40 text-violet-300 rounded">
                      Обязательный
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}