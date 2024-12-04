import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Users, Clock, PlusCircle } from 'lucide-react';
import { useForumTopics } from '../../hooks/useForumTopics';

export function Forum() {
  const { topics, categories } = useForumTopics();

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-violet-100">Форум</h1>
          <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <PlusCircle className="w-5 h-5" />
            Создать тему
          </button>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="mb-8">
            <h2 className="text-xl font-semibold text-violet-100 mb-4">
              {category.name}
            </h2>
            <div className="grid gap-4">
              {topics
                .filter((topic) => topic.categoryId === category.id)
                .map((topic) => (
                  <Link
                    key={topic.id}
                    to={`/forum/topic/${topic.id}`}
                    className="bg-indigo-900/30 rounded-lg p-6 border border-violet-800/20 hover:border-violet-700/40 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-violet-100 mb-2">
                          {topic.title}
                        </h3>
                        <p className="text-violet-300 mb-4">{topic.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-violet-400">
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            {topic.replies} ответов
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {topic.views} просмотров
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {new Date(topic.lastActivity).toLocaleDateString('ru-RU')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}