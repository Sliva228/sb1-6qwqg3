import React from 'react';
import { PlusCircle, Edit, Trash2, MessageSquare } from 'lucide-react';
import { useAnnouncements } from '../../hooks/useAnnouncements';

export function AdminDashboard() {
  const { announcements, createAnnouncement, deleteAnnouncement } = useAnnouncements();

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-violet-100">Панель администратора</h1>
          <button
            onClick={() => createAnnouncement()}
            className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <PlusCircle className="w-5 h-5" />
            Новое объявление
          </button>
        </div>

        <div className="grid gap-6">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-indigo-900/30 rounded-lg p-6 border border-violet-800/20"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-violet-100 mb-2">
                    {announcement.title}
                  </h3>
                  <p className="text-violet-300 mb-4">{announcement.content}</p>
                  <div className="flex items-center gap-4 text-sm text-violet-400">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      {announcement.comments} комментариев
                    </span>
                    <span>{new Date(announcement.date).toLocaleDateString('ru-RU')}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="p-2 text-violet-400 hover:text-violet-300 transition-colors"
                    onClick={() => {/* Implement edit */}}
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 text-violet-400 hover:text-red-400 transition-colors"
                    onClick={() => deleteAnnouncement(announcement.id)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}