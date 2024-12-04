import React from 'react';
import { Shield, Users, Server, MessageSquare } from 'lucide-react';

export function Rules() {
  const rules = {
    general: [
      'Уважайте других игроков',
      'Запрещено использование читов и эксплойтов',
      'Запрещено использование багов игры',
    ],
    building: [
      'Не стройте слишком близко к другим игрокам без их разрешения',
      'Не портите ландшафт',
      'Старайтесь вписывать постройки в окружающий мир',
    ],
    chat: [
      'Запрещен спам в чате',
      'Запрещены оскорбления и токсичное поведение',
      'Общайтесь на русском или английском языках',
    ],
  };

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-b from-indigo-950 to-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-violet-100 mb-12 text-center">
            Правила сервера
          </h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <RuleSection
              icon={<Shield />}
              title="Общие правила"
              rules={rules.general}
            />
            <RuleSection
              icon={<Users />}
              title="Правила строительства"
              rules={rules.building}
            />
            <RuleSection
              icon={<MessageSquare />}
              title="Правила чата"
              rules={rules.chat}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function RuleSection({ icon, title, rules }: {
  icon: React.ReactNode;
  title: string;
  rules: string[];
}) {
  return (
    <div className="bg-indigo-900/30 rounded-lg p-6 border border-violet-800/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-violet-900/30 rounded-lg text-violet-400">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-violet-100">{title}</h2>
      </div>
      <ul className="space-y-4">
        {rules.map((rule, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-violet-400 font-semibold">{index + 1}.</span>
            <span className="text-violet-300">{rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}