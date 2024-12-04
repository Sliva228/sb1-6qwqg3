export interface Mod {
  name: string;
  description: string;
  category: 'tech' | 'magic' | 'utility' | 'performance';
  required: boolean;
}

export interface Player {
  nickname: string;
  playTime: number;
  lastSeen: string;
  achievements: string[];
}

export interface ServerStats {
  onlinePlayers: number;
  maxPlayers: number;
  uptime: string;
  tps: number;
}

export interface ShopItem {
  id: string;
  name: string;
  duration: string;
  price: number;
  available: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}