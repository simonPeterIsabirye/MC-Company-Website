'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    description: '',
    helpType: 'Book a consultation',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-[#03091B] min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-8">
              Get in <span className="text-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let's discuss how we can build the future together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section - Emulating About's "What We Do" Section Style */}
      <section className="bg-white py-24 px-4 md:px-12 text-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Left Side */}
          <div className="flex-1 space-y-8">
            <h2 className="text-5xl font-serif font-bold text-gray-950 tracking-tight leading-tight inline-block border-b-2 border-[#F5A623] pb-1">
              Tell us about your project
            </h2>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Three short steps. We will come back with the right team within one business day.
            </p>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3"><Mail className="text-[#F5A623]" size={20} /> hello@medcreativelabs.com</div>
              <div className="flex items-center gap-3"><Phone className="text-[#F5A623]" size={20} /> +256 772334479</div>
              <div className="flex items-center gap-3"><MapPin className="text-[#F5A623]" size={20} /> Kampala, Uganda</div>
            </div>

            <div className="space-y-4 pt-8">
              {['Response within 24 hours', 'NDA available on request', 'Actionable solutions'].map((item) => (
                  <div key={item} className="bg-white p-4 rounded-xl border border-black/10 flex items-center gap-3">
                    <Check className="text-[#F5A623]" size={20} />
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-black/10 shadow-sm min-h-[500px]">
              {/* Progress */}
              <div className="flex items-center gap-4 mb-10 text-sm font-semibold text-gray-400">
                <div className={`flex items-center gap-2 ${step === 1 ? 'text-gray-900' : ''}`}>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-amber-200' : 'bg-gray-100'}`}>1</span> ABOUT YOU
                </div>
                <div className="h-px bg-gray-200 flex-1"></div>
                <div className={`flex items-center gap-2 ${step === 2 ? 'text-gray-900' : ''}`}>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-amber-200' : 'bg-gray-100'}`}>2</span> YOUR PROJECT
                </div>
                <div className="h-px bg-gray-200 flex-1"></div>
                <div className={`flex items-center gap-2 ${step === 3 ? 'text-gray-900' : ''}`}>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 3 ? 'bg-amber-200' : 'bg-gray-100'}`}>3</span> SEND
                </div>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <input name="fullName" placeholder="Full name *" className="p-4 rounded-lg border border-gray-200 w-full" onChange={handleInputChange} />
                      <input name="email" placeholder="Work email *" className="p-4 rounded-lg border border-gray-200 w-full" onChange={handleInputChange} />
                      <input name="company" placeholder="Company" className="p-4 rounded-lg border border-gray-200 w-full" onChange={handleInputChange} />
                      <input name="role" placeholder="Role" className="p-4 rounded-lg border border-gray-200 w-full" onChange={handleInputChange} />
                    </div>
                    <button onClick={() => setStep(2)} className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition">Continue →</button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                    <label className="block text-sm font-semibold mb-2">HOW CAN WE HELP?</label>
                    <select name="helpType" value={formData.helpType} onChange={handleInputChange} className="p-4 rounded-lg border border-gray-200 w-full mb-6">
                        <option>Book a consultation</option>
                        <option>Request a proposal</option>
                        <option>Partnership inquiry</option>
                        <option>Support</option>
                    </select>
                    <textarea name="description" placeholder="Describe your project *" className="p-4 rounded-lg border border-gray-200 w-full min-h-[200px]" onChange={handleInputChange} />
                    <div className="flex justify-between items-center">
                        <button onClick={() => setStep(1)} className="px-6 py-3 rounded-lg font-medium bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition">← Back</button>
                        <button onClick={() => setStep(3)} className="px-8 py-3 rounded-lg font-medium bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition">Continue →</button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-10">
                    <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">We'll be in touch soon.</h3>
                    <p className="text-gray-600 mb-8">A senior team member is reviewing your note and will reply to <strong>{formData.email}</strong> shortly.</p>
                    <button onClick={() => setStep(2)} className="px-6 py-3 rounded-lg font-medium bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition">← Back</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices Section */}
      <section className="bg-[#03091B] py-24 px-4 md:px-12 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif font-bold tracking-tight text-center mb-16">
            Our Offices
          </h2>
          <div className="rounded-2xl overflow-hidden h-[500px] shadow-2xl">
             <iframe
               src="https://maps.google.com/maps?q=Kawempe,Kampala,Uganda&t=&z=15&ie=UTF8&iwloc=&output=embed"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
