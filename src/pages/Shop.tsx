import React from 'react';
import { getShopItems } from '../services/api';
import { useEffect, useState } from 'react';
import type { ShopItem } from '../types';
import { ShoppingCart, Clock, Package } from 'lucide-react';

export function Shop() {
  const [items, setItems] = useState<ShopItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getShopItems();
        setItems(data);
      } catch (error) {
        console.error('Failed to fetch shop items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-b from-indigo-950 to-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-violet-100 mb-4">
              Магазин привилегий
            </h1>
            <p className="text-violet-300 max-w-2xl mx-auto">
              Поддержите развитие сервера и получите дополнительные возможности
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-indigo-900/30 rounded-lg p-6 border border-violet-800/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-violet-100">{item.name}</h3>
                  <span className="px-3 py-1 bg-violet-600 rounded-full text-sm text-violet-100">
                    {item.price} ₽
                  </span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-violet-300">
                    <Clock className="w-5 h-5" />
                    <span>Длительность: {item.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-violet-300">
                    <Package className="w-5 h-5" />
                    <span>Доступно: {item.available} шт.</span>
                  </div>
                </div>
                <button className="w-full bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  Купить
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}