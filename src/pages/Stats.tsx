import React from 'react';
import { getOnlinePlayers } from '../services/api';
import { useEffect, useState } from 'react';
import type { Player } from '../types';
import { Trophy, Clock, Calendar } from 'lucide-react';

export function Stats() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await getOnlinePlayers();
        setPlayers(data);
      } catch (error) {
        console.error('Failed to fetch players:', error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-b from-indigo-950 to-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-violet-100 mb-8 text-center">
            Статистика игроков
          </h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {players.map((player, index) => (
              <div
                key={index}
                className="bg-indigo-900/30 rounded-lg p-6 border border-violet-800/20"
              >
                <h3 className="text-xl font-semibold text-violet-100 mb-4">
                  {player.nickname}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-violet-300">
                    <Clock className="w-5 h-5" />
                    <span>Время в игре: {player.playTime} часов</span>
                  </div>
                  <div className="flex items-center gap-2 text-violet-300">
                    <Calendar className="w-5 h-5" />
                    <span>Последний вход: {new Date(player.lastSeen).toLocaleDateString('ru-RU')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-violet-300">
                    <Trophy className="w-5 h-5" />
                    <span>Достижений: {player.achievements.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}