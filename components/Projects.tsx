import React from 'react';
import Image from 'next/image';
import healthcareImg from '../src/assets/images/healthcare_project_1781354759436.jpg';
import financeImg from '../src/assets/images/finance_project_1781354773244.jpg';
import retailImg from '../src/assets/images/retail_project_1781354788617.jpg';
import logisticsImg from '../src/assets/images/logistics_project_1781354800536.jpg';

const projects = [
  {
    category: "Healthcare",
    title: "Clinic Management System",
    description: "An end-to-end platform for clinic operations including scheduling and patient records...",
    image: healthcareImg
  },
  {
    category: "Finance",
    title: "AI Lead Analytics",
    description: "Predictive analytics engine for optimizing sales funnels and lead conversion...",
    image: financeImg
  },
  {
    category: "Retail",
    title: "E-commerce Automation",
    description: "Automated warehouse inventory tracking and intelligent ordering system...",
    image: retailImg
  },
  {
    category: "Logistics",
    title: "Smart Route Optimizer",
    description: "Dynamic routing algorithm to reduce delivery times and carbon footprint...",
    image: logisticsImg
  }
];

export default function Projects() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <p className="text-blue-600 font-semibold mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <a href="/projects" className="inline-block px-6 py-3 rounded-lg font-medium bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition">
                  Read {'->'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
