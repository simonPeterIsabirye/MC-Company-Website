import React from 'react';
import { Github, Youtube, Linkedin, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#03091B] text-white py-16 px-6 border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold tracking-tight">MedCreative Labs</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building intelligent digital futures for ambitious organizations.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="font-semibold text-blue-400">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Projects</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Community</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-semibold text-blue-400">Get in Touch</h4>
          <p className="text-sm text-gray-400">
            contact@medcreativelabs.com
          </p>
        </div>

        {/* Social Icons */}
        <div className="space-y-4">
          <h4 className="font-semibold text-blue-400">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-blue-900/20 rounded-lg hover:bg-gray-100 transition group" aria-label="Github">
              <Github className="w-6 h-6 text-white group-hover:text-gray-900 transition" />
            </a>
            <a href="#" className="p-2 bg-blue-900/20 rounded-lg hover:bg-red-50 transition group" aria-label="Youtube">
              <Youtube className="w-6 h-6 text-white group-hover:text-red-600 transition" />
            </a>
            <a href="#" className="p-2 bg-blue-900/20 rounded-lg hover:bg-blue-50 transition group" aria-label="Linkedin">
              <Linkedin className="w-6 h-6 text-white group-hover:text-blue-700 transition" />
            </a>
            <a href="#" className="p-2 bg-blue-900/20 rounded-lg hover:bg-gray-100 transition group" aria-label="Medium">
              <BookOpen className="w-6 h-6 text-white group-hover:text-gray-900 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-blue-900/30 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} MedCreative Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}
