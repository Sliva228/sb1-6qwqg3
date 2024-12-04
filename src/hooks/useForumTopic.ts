import { useState, useEffect } from 'react';

interface TopicReply {
  id: string;
  author: string;
  content: string;
  date: string;
  likes: number;
}

interface Topic {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

export function useForumTopic(topicId: string | undefined) {
  const [topic, setTopic] = useState<Topic | null>(null);
  const [replies, setReplies] = useState<TopicReply[]>([]);

  useEffect(() => {
    if (!topicId) return;

    // Имитация загрузки данных
    setTopic({
      id: topicId,
      title: 'Важное объявление о работе сервера',
      content: 'Уважаемые игроки! Сообщаем о предстоящих технических работах на сервере. В среду, 20 марта, с 3:00 до 5:00 по МСК сервер будет недоступен в связи с обновлением системы и установкой нового контента. После обновления вас ждут новые механизмы и улучшенная производительность!',
      author: 'Admin',
      date: '2024-03-20T10:00:00Z',
    });

    setReplies([
      {
        id: '1',
        author: 'TechMaster',
        content: 'Отлично! Давно ждали обновления. Надеюсь, появятся новые интересные механизмы.',
        date: '2024-03-20T10:15:00Z',
        likes: 5,
      },
      {
        id: '2',
        author: 'RedstoneWizard',
        content: 'А можно поподробнее узнать, какие именно механизмы будут добавлены?',
        date: '2024-03-20T10:30:00Z',
        likes: 3,
      },
    ]);
  }, [topicId]);

  return { topic, replies };
}