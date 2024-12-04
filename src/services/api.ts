import {
  mockServerStats,
  mockPlayers,
  mockShopItems,
  mockFAQItems
} from '../data/mockData';

export async function getServerStats() {
  // TODO: Implement real API call
  // const response = await fetch('/api/stats');
  // return await response.json();
  
  return mockServerStats;
}

export async function getOnlinePlayers() {
  // TODO: Implement real API call
  // const response = await fetch('/api/players/online');
  // return await response.json();
  
  return mockPlayers;
}

export async function getShopItems() {
  // TODO: Implement real API call
  // const response = await fetch('/api/shop/items');
  // return await response.json();
  
  return mockShopItems;
}

export async function getFAQItems() {
  // TODO: Implement real API call
  // const response = await fetch('/api/faq');
  // return await response.json();
  
  return mockFAQItems;
}