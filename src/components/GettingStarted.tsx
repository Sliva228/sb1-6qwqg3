import React from 'react';
import { Download, Server, Users } from 'lucide-react';

export function GettingStarted() {
  return (
    <section id="getting-started" className="py-20 bg-gradient-to-b from-amber-900 to-amber-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-center text-amber-100 mb-12">
          Как начать играть
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Step
            number="01"
            icon={<Download />}
            title="Скачайте сборку"
            description="Загрузите нашу уникальную сборку модов с официального сайта"
          />
          <Step
            number="02"
            icon={<Server />}
            title="Подключитесь к серверу"
            description="Добавьте наш сервер в список серверов Minecraft"
          />
          <Step
            number="03"
            icon={<Users />}
            title="Начните играть"
            description="Присоединяйтесь к сообществу и создавайте удивительные механизмы"
          />
        </div>
      </div>
    </section>
  );
}

function Step({ number, icon, title, description }: { number: string; icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="relative">
      <div className="absolute -top-4 -left-4 text-4xl font-bold text-amber-800/20">{number}</div>
      <div className="bg-gradient-to-br from-amber-800/30 to-amber-900/30 p-6 rounded-lg backdrop-blur-sm border border-amber-700/20">
        <div className="text-amber-200 mb-4">{icon}</div>
        <h3 className="text-xl font-serif font-bold text-amber-100 mb-2">{title}</h3>
        <p className="text-amber-300">{description}</p>
      </div>
    </div>
  );
}