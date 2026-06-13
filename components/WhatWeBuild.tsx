import React from 'react';
import { Layers, Bot, TrendingUp, Stethoscope } from 'lucide-react';

const cards = [
  {
    icon: Layers,
    title: "Scalable Software Systems",
    description: "Custom platforms, dashboards, and internal tools."
  },
  {
    icon: Bot,
    title: "Automation & AI Systems",
    description: "Smart workflows, AI assistants, and predictive tools."
  },
  {
    icon: TrendingUp,
    title: "Growth Infrastructure",
    description: "Conversion systems, lead funnels, and analytics."
  },
  {
    icon: Stethoscope,
    title: "Healthcare Digital Ecosystems",
    description: "End-to-end clinic systems (patient, booking, follow-up)."
  }
];

export default function WhatWeBuild() {
  return (
    <section className="bg-[#03091B] py-24 px-4 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">What We Build</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-[#0A1128] rounded-2xl overflow-hidden shadow-lg border border-blue-900/30">
              <div className="bg-blue-900/20 p-8 flex items-center justify-center">
                <card.icon className="w-12 h-12 text-blue-400" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
