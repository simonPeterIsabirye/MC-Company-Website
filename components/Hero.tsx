import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import africaGlobe from '../assets/africa_globe.png';
import WaveDivider from './WaveDivider';

export default function Hero() {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 items-center px-4 md:px-12 pt-10 md:pt-20 pb-24 md:pb-32 gap-12 max-w-7xl mx-auto">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-tight mb-8">
          Building Africa’s <span className="text-blue-400">Intelligent Digital Future</span>
        </h1>
        <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed">
          We design and build AI solutions and software platforms that help businesses and organizations across Africa innovate, automate and scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="/contact" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-sm transition-transform duration-200 hover:scale-105 active:scale-95">
            Book a Consultation <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src={africaGlobe}
          alt="Africa Globe"
          fill
          className="object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <WaveDivider />
    </section>
  );
}
