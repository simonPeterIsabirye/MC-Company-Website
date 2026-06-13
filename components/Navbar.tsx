'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 px-4 lg:px-12">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0">
            <span className="text-blue-900 font-bold text-xl">MC</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg lg:text-xl font-semibold tracking-tight text-white">MedCreative Labs</span>
          <span className="text-[9px] lg:text-[10px] tracking-[0.2em] text-gray-300 uppercase">Solutions</span>
        </div>
      </div>
      
      <div className="hidden lg:flex gap-8 text-sm text-gray-300">
        <a href="/" className="hover:text-white">Home</a>
        <a href="/about" className="hover:text-white">About</a>
        <a href="/projects" className="hover:text-white">Projects</a>
        <a href="https://medium.com/@medcreativelabs" target="_blank" rel="noopener noreferrer" className="hover:text-white">Blog</a>
        <a href="/contact" className="hover:text-white">Contact</a>
      </div>
      

      <button className="lg:hidden text-white transition-transform duration-200 hover:scale-110 active:scale-90" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="absolute top-20 right-4 w-60 bg-blue-950 p-6 flex flex-col gap-4 lg:hidden z-20 text-center rounded-xl shadow-lg">
            <a href="/" className="text-white">Home</a>
            <a href="/about" className="text-white">About</a>
            <a href="/projects" className="text-white">Projects</a>
            <a href="https://medium.com/@medcreativelabs" target="_blank" rel="noopener noreferrer" className="text-white">Blog</a>
            <a href="/contact" className="text-white">Contact</a>
        </div>
      )}
    </nav>
  );
}
