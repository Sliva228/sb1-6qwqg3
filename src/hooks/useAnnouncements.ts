import { useState } from 'react';

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  comments: number;
}

const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'Технические работы',
    content: 'В среду с 3:00 до 5:00 по МСК будут проводиться технические работы.',
    date: '2024-03-20T10:00:00Z',
    comments: 5,
  },
  {
    id: '2',
    title: 'Новое обновление',
    content: 'Добавлены новые механизмы и улучшена производительность сервера.',
    date: '2024-03-19T15:30:00Z',
    comments: 12,
  },
];

export function useAnnouncements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(mockAnnouncements);

  const createAnnouncement = () => {
    // Implement creation logic
  };

  const deleteAnnouncement = (id: string) => {
    setAnnouncements(announcements.filter(a => a.id !== id));
  };

  return {
    announcements,
    createAnnouncement,
    deleteAnnouncement,
  };
}