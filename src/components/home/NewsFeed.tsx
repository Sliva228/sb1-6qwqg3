import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

// MOCK DATA
const news = [
  {
    id: 1,
    title: 'Открытие сервера',
    date: '2024-03-20',
    excerpt: 'Мы рады объявить об официальном открытии сервера Allastilia!',
    category: 'Анонс',
  },
  {
    id: 2,
    title: 'Обновление модпака',
    date: '2024-03-18',
    excerpt: 'Добавлены новые моды и улучшена производительность',
    category: 'Обновление',
  },
];

export function NewsFeed() {
  return (
    <section className="py-16 bg-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-violet-100 mb-8">Последние новости</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-indigo-900/30 rounded-lg p-6 border border-violet-800/20 hover:border-violet-700/40 transition-colors"
            >
              <div className="flex items-center gap-2 text-violet-400 text-sm mb-4">
                <Calendar className="w-4 h-4" />
                <time dateTime={item.date}>
                  {new Date(item.date).toLocaleDateString('ru-RU')}
                </time>
                <span className="px-2 py-1 bg-violet-800/30 rounded text-xs">
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-violet-100 mb-2">
                {item.title}
              </h3>
              <p className="text-violet-300 mb-4">{item.excerpt}</p>
              <button className="text-violet-400 hover:text-violet-300 flex items-center gap-2 group">
                Читать далее
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}