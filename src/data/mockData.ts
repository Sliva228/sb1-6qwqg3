// Types
import type { ServerStats, Player, ShopItem, FAQItem } from '../types';

// MOCK DATA
export const mockServerStats: ServerStats = {
  onlinePlayers: 42,
  maxPlayers: 100,
  uptime: "99.9%",
  tps: 20
};

export const mockPlayers: Player[] = [
  {
    nickname: "TechMaster2024",
    playTime: 156,
    lastSeen: "2024-03-20T15:30:00Z",
    achievements: ["create_master", "automation_expert"]
  },
  {
    nickname: "RedstoneWizard",
    playTime: 89,
    lastSeen: "2024-03-20T14:45:00Z",
    achievements: ["create_apprentice"]
  }
];

export const mockShopItems: ShopItem[] = [
  {
    id: "vip_status",
    name: "VIP Статус",
    duration: "30 дней",
    price: 299,
    available: 100
  },
  {
    id: "premium_status",
    name: "Premium Статус",
    duration: "30 дней",
    price: 599,
    available: 50
  }
];

export const mockFAQItems: FAQItem[] = [
  {
    question: "Как установить моды?",
    answer: "Скачайте наш лаунчер, он автоматически установит все необходимые моды.",
    category: "technical"
  },
  {
    question: "Какой версии Minecraft требуется?",
    answer: "Сервер работает на версии 1.20.1",
    category: "general"
  }
];