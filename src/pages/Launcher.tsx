import React from 'react';
import { Download, Monitor, Cpu, HardDrive, CheckCircle2, AlertCircle } from 'lucide-react';

export function Launcher() {
  const systemRequirements = {
    minimum: {
      os: 'Windows 10 64-bit',
      cpu: 'Intel Core i3-6100 / AMD Ryzen 3 1200',
      ram: '8 GB RAM',
      gpu: 'NVIDIA GeForce GTX 750 Ti / AMD Radeon RX 550',
      storage: '4 GB свободного места',
    },
    recommended: {
      os: 'Windows 10/11 64-bit',
      cpu: 'Intel Core i5-8400 / AMD Ryzen 5 2600',
      ram: '16 GB RAM',
      gpu: 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580',
      storage: '8 GB свободного места',
    },
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-950 to-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-violet-100 mb-6">
              Скачать лаунчер Allastilia
            </h1>
            <p className="text-violet-300 mb-8 max-w-2xl mx-auto">
              Наш лаунчер автоматически установит все необходимые моды и настройки для комфортной игры
            </p>
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg flex items-center gap-2 mx-auto transition-colors">
              <Download className="w-5 h-5" />
              Скачать лаунчер (v1.0.0)
            </button>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-16 bg-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-violet-100 mb-12 text-center">
            Установка в 3 простых шага
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <InstallationStep
              number="01"
              title="Скачайте лаунчер"
              description="Загрузите последнюю версию лаунчера с нашего сайта"
            />
            <InstallationStep
              number="02"
              title="Запустите установщик"
              description="Следуйте инструкциям установщика для настройки игры"
            />
            <InstallationStep
              number="03"
              title="Начните играть"
              description="Войдите в игру через лаунчер и присоединяйтесь к серверу"
            />
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 bg-indigo-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-violet-100 mb-12 text-center">
            Системные требования
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <RequirementsCard
              title="Минимальные"
              requirements={systemRequirements.minimum}
              icon={AlertCircle}
            />
            <RequirementsCard
              title="Рекомендуемые"
              requirements={systemRequirements.recommended}
              icon={CheckCircle2}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function InstallationStep({ number, title, description }: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative p-6 bg-indigo-900/30 rounded-lg border border-violet-800/20">
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-violet-100 font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-violet-100 mb-3 mt-2">{title}</h3>
      <p className="text-violet-300">{description}</p>
    </div>
  );
}

function RequirementsCard({ title, requirements, icon: Icon }: {
  title: string;
  requirements: {
    os: string;
    cpu: string;
    ram: string;
    gpu: string;
    storage: string;
  };
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="bg-indigo-900/30 rounded-lg border border-violet-800/20 p-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-violet-400" />
        <h3 className="text-xl font-semibold text-violet-100">{title}</h3>
      </div>
      <ul className="space-y-4">
        <RequirementItem icon={Monitor} label="Операционная система" value={requirements.os} />
        <RequirementItem icon={Cpu} label="Процессор" value={requirements.cpu} />
        <RequirementItem icon={HardDrive} label="Оперативная память" value={requirements.ram} />
        <RequirementItem icon={Monitor} label="Видеокарта" value={requirements.gpu} />
        <RequirementItem icon={HardDrive} label="Место на диске" value={requirements.storage} />
      </ul>
    </div>
  );
}

function RequirementItem({ icon: Icon, label, value }: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <Icon className="w-5 h-5 text-violet-400 mt-1" />
      <div>
        <span className="block text-violet-300 text-sm">{label}</span>
        <span className="text-violet-100">{value}</span>
      </div>
    </li>
  );
}