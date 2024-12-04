import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServerStats } from '../components/home/ServerStats';
import { NewsFeed } from '../components/home/NewsFeed';
import { ModList } from '../components/features/ModList';

export function Home() {
  return (
    <div>
      <HeroSection />
      <ServerStats />
      <NewsFeed />
      <ModList />
    </div>
  );
}