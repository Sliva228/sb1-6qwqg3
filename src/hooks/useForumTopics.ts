import { useState } from 'react';

interface ForumCategory {
  id: string;
  name: string;
}

interface ForumTopic {
  id: string;
  categoryId: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  lastActivity: string;
  replies: number;
  views: number;
}

const mockCategories: ForumCategory[] = [
  { id: '1', name: 'Новости и объявления' },
  { id: '2', name: 'Общие вопросы' },
  { id: '3', name: 'Механизмы и автоматизация' },
];

const mockTopics: ForumTopic[] = [
  {
    id: '1',
    categoryId: '1',
    title: 'Важное объявление о работе сервера',
    excerpt: 'Информация о предстоящих технических работах и обновлениях.',
    content: 'Полный текст объявления...',
    author: 'Admin',
    date: '2024-03-20T10:00:00Z',
    lastActivity: '2024-03-20T15:30:00Z',
    replies: 15,
    views: 234,
  },
  {
    id: '2',
    categoryId: '3',
    title: 'Гайд по созданию автоматической фермы',
    excerpt: 'Подробное руководство по автоматизации фермы с использованием мода Create.',
    content: 'Полный текст гайда...',
    author: 'TechMaster',
    date: '2024-03-19T08:00:00Z',
    lastActivity: '2024-03-20T12:45:00Z',
    replies: 28,
    views: 567,
  },
];

export function useForumTopics() {
  const [topics] = useState<ForumTopic[]>(mockTopics);
  const [categories] = useState<ForumCategory[]>(mockCategories);

  return {
    topics,
    categories,
  };
}