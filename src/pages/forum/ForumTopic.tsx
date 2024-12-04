import React from 'react';
import { useParams } from 'react-router-dom';
import { User, Clock, ThumbsUp, Reply } from 'lucide-react';
import { useForumTopic } from '../../hooks/useForumTopic';

export function ForumTopic() {
  const { id } = useParams<{ id: string }>();
  const { topic, replies } = useForumTopic(id);

  if (!topic) {
    return <div>Тема не найдена</div>;
  }

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-violet-100 mb-4">{topic.title}</h1>
          <div className="flex items-center gap-4 text-violet-400 text-sm">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {topic.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {new Date(topic.date).toLocaleDateString('ru-RU')}
            </span>
          </div>
        </div>

        <div className="bg-indigo-900/30 rounded-lg p-6 border border-violet-800/20 mb-8">
          <div className="prose prose-invert max-w-none">
            {topic.content}
          </div>
        </div>

        <div className="space-y-6">
          {replies.map((reply) => (
            <div
              key={reply.id}
              className="bg-indigo-900/30 rounded-lg p-6 border border-violet-800/20"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-violet-800 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-violet-200" />
                  </div>
                  <div>
                    <div className="font-semibold text-violet-200">{reply.author}</div>
                    <div className="text-sm text-violet-400">
                      {new Date(reply.date).toLocaleDateString('ru-RU')}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="text-violet-400 hover:text-violet-300 p-2">
                    <ThumbsUp className="w-5 h-5" />
                  </button>
                  <button className="text-violet-400 hover:text-violet-300 p-2">
                    <Reply className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="text-violet-200">{reply.content}</div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-violet-100 mb-4">Ответить</h3>
          <textarea
            className="w-full bg-indigo-900/30 border border-violet-800/20 rounded-lg p-4 text-violet-100 focus:outline-none focus:border-violet-700"
            rows={4}
            placeholder="Ваш ответ..."
          />
          <button className="mt-4 bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg">
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}