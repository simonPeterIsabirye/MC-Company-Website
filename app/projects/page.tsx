'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'motion/react';
import AboutWaveBackground from '@/components/AboutWaveBackground';
import healthcareImg from '../../src/assets/images/healthcare_project_1781354759436.jpg';
import financeImg from '../../src/assets/images/finance_project_1781354773244.jpg';
import retailImg from '../../src/assets/images/retail_project_1781354788617.jpg';
import logisticsImg from '../../src/assets/images/logistics_project_1781354800536.jpg';
import patientPortalImg from '../../src/assets/images/patient_portal_project_1781355074041.jpg';
import budgetTrackerImg from '../../src/assets/images/budget_tracker_project_1781355090197.jpg';
import inventoryPredictorImg from '../../src/assets/images/inventory_predictor_project_1781355105715.jpg';

const projects = [
  { category: "Healthcare", title: "Clinic Management System", description: "An end-to-end platform for clinic operations including scheduling and patient records...", image: healthcareImg },
  { category: "Finance", title: "AI Lead Analytics", description: "Predictive analytics engine for optimizing sales funnels and lead conversion...", image: financeImg },
  { category: "Retail", title: "E-commerce Automation", description: "Automated warehouse inventory tracking and intelligent ordering system...", image: retailImg },
  { category: "Logistics", title: "Smart Route Optimizer", description: "Dynamic routing algorithm to reduce delivery times and carbon footprint...", image: logisticsImg },
  { category: "Healthcare", title: "Patient Data portal", description: "Secure portal for patient data management and communication….", image: patientPortalImg },
  { category: "Finance", title: "Budget Tracker AI", description: "Personalized AI driven budget tracking and savings recommendations….", image: budgetTrackerImg },
  { category: "Retail", title: "Inventory Predictor", description: "AI powered inventory prediction to reduce stockouts and waste….", image: inventoryPredictorImg },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#03091B] min-h-screen text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <AboutWaveBackground />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-8">
              Architecting Digital <span className="text-blue-400">Transformation at Scale</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Showcasing the transformative digital solutions we've crafted for our partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="bg-white py-24 px-4 md:px-12 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif inline-block mb-16 pb-1 border-b-2 border-amber-500" style={{borderColor: '#F5A623'}}>Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
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
                  <a href="#" className="inline-block px-6 py-3 rounded-lg font-medium bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition">
                    Read {'->'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
