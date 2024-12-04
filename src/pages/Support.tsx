import React from 'react';
import { getFAQItems } from '../services/api';
import { useEffect, useState } from 'react';
import type { FAQItem } from '../types';
import { HelpCircle, MessageCircle, Mail } from 'lucide-react';

export function Support() {
  const [faqItems, setFAQItems] = useState<FAQItem[]>([]);

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        const data = await getFAQItems();
        setFAQItems(data);
      } catch (error) {
        console.error('Failed to fetch FAQ items:', error);
      }
    };

    fetchFAQ();
  }, []);

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-b from-indigo-950 to-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-violet-100 mb-4">
              Поддержка
            </h1>
            <p className="text-violet-300 max-w-2xl mx-auto">
              Ответы на частые вопросы и способы связи с нами
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-violet-100 mb-8">
              Частые вопросы
            </h2>
            <div className="grid gap-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-indigo-900/30 rounded-lg p-6 border border-violet-800/20"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 text-violet-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-violet-100 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-violet-300">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-semibold text-violet-100 mb-8">
              Связаться с нами
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://discord.gg/allastilia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-900/30 rounded-lg p-6 border border-violet-800/20 hover:border-violet-700/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-violet-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-violet-100">Discord</h3>
                    <p className="text-violet-300">Присоединяйтесь к нашему серверу</p>
                  </div>
                </div>
              </a>
              <a
                href="mailto:support@allastilia.com"
                className="bg-indigo-900/30 rounded-lg p-6 border border-violet-800/20 hover:border-violet-700/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-violet-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-violet-100">Email</h3>
                    <p className="text-violet-300">support@allastilia.com</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}