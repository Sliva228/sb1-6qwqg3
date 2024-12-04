import React from 'react';
import { Users, Server, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getServerStats } from '../../services/api';
import type { ServerStats as ServerStatsType } from '../../types';

export function ServerStats() {
  const [stats, setStats] = useState<ServerStatsType>({
    onlinePlayers: 0,
    maxPlayers: 50,
    uptime: '99.9%',
    tps: 20,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getServerStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch server stats:', error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-indigo-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={<Users className="w-8 h-8" />}
            label="Игроков онлайн"
            value={`${stats.onlinePlayers}/${stats.maxPlayers}`}
            subtext={`${(stats.onlinePlayers / stats.maxPlayers * 100).toFixed(1)}% заполненности`}
          />
          <StatCard
            icon={<Server className="w-8 h-8" />}
            label="Производительность"
            value={`${stats.tps} TPS`}
            subtext="Стабильная работа"
          />
          <StatCard
            icon={<Clock className="w-8 h-8" />}
            label="Аптайм"
            value={stats.uptime}
            subtext="За последние 30 дней"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, label, value, subtext }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  subtext: string;
}) {
  return (
    <div className="bg-indigo-800/30 rounded-lg p-6 border border-violet-700/20">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-violet-600/20 rounded-lg text-violet-400">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium text-violet-200">{label}</h3>
          <p className="text-2xl font-bold text-violet-100">{value}</p>
        </div>
      </div>
      <p className="text-sm text-violet-300">{subtext}</p>
    </div>
  );
}