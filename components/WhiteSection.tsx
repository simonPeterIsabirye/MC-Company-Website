'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import aboutImage from '../assets/about_us.png';
import WaveDividerBottom from './WaveDividerBottom';

export default function WhiteSection() {
  return (
    <section className="relative bg-white py-20 px-4 md:px-12 text-gray-900 pb-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={aboutImage}
            alt="Professional working"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-6">About us</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            MedCreative Labs is a senior product and software team that builds scalable digital systems for ambitious organizations, with a strong focus on healthcare and high-impact service industries.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            We help teams turn complex operational and communication challenges into elegant, reliable, and performance-driven software solutions that directly support business growth and efficiency.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Led by a multidisciplinary team with experience in software engineering, AI systems, and digital product design, MedCreative Labs focuses on building systems that go beyond technology—delivering measurable outcomes such as improved visibility, better customer engagement, and increased conversion performance.
          </p>
        </motion.div>
      </div>
      <WaveDividerBottom />
    </section>
  );
}
