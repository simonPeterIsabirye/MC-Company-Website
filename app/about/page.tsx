'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { X } from 'lucide-react';
import { motion } from 'motion/react';
import AboutWaveBackground from '@/components/AboutWaveBackground';

const teamMembers = [
  { 
    name: 'Dr. Sarah Adeyemi', 
    role: 'Chief Technical Officer', 
    image: 'https://picsum.photos/seed/sarah/400/400',
    bio: 'Dr. Sarah Adeyemi leads our technical vision. With over 15 years in software engineering and a PhD in AI, she specializes in building scalable healthcare ecosystems that prioritize both patient privacy and clinical efficiency.',
    contacts: { email: 'sarah.a@medcreativelabs.com', linkedin: 'linkedin.com/in/sarahadeyemi' }
  },
  { 
    name: 'Marcus Okafor', 
    role: 'Lead Product Designer', 
    image: 'https://picsum.photos/seed/marcus/400/400',
    bio: 'Marcus is passionate about crafting human-centered digital experiences. He brings a unique aesthetic and user-empathy approach to complex software dashboards, ensuring that sophisticated AI tools remain intuitive and approachable.',
    contacts: { email: 'marcus.o@medcreativelabs.com', linkedin: 'linkedin.com/in/marcusokafor' }
  },
  { 
    name: 'Elena Rodriguez', 
    role: 'Head of Engineering', 
    image: 'https://picsum.photos/seed/elena/400/400',
    bio: 'Elena oversees our full-stack engineering team. Her focus is on architectural excellence and system reliability, ensuring that every platform built at MedCreative Labs is secure, high-performing, and built for growth.',
    contacts: { email: 'elena.r@medcreativelabs.com', linkedin: 'linkedin.com/in/elenarodriguez' }
  },
  { 
    name: 'David Chen', 
    role: 'AI Systems Architect', 
    image: 'https://picsum.photos/seed/david/400/400',
    bio: 'David constructs the intelligent foundations of our digital solutions. He is a specialist in predictive modeling and machine learning applications that turn raw operational data into actionable clinical insights.',
    contacts: { email: 'david.c@medcreativelabs.com', linkedin: 'linkedin.com/in/davidchen' }
  },
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

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
              Crafting the Digital <br/><span className="text-blue-400">Engine of Tomorrow</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Pioneering intelligent digital ecosystems for healthcare and high-impact industries. We build systems that turn complexity into clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Exhaustive Description */}
      <section className="bg-white py-24 px-4 md:px-12 text-gray-900">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* What We Do */}
          <div>
            <h2 className="text-5xl font-serif inline-block mb-8 pb-1 border-b-2 border-amber-500" style={{borderColor: '#F5A623'}}>What We Do</h2>
            <div className="space-y-6 text-lg leading-[1.85] max-w-[68ch]">
              <p>MedCreative Labs builds superior software platforms. We tackle complex operational challenges. Our systems bring order to fragmented workflows. We champion efficiency everywhere.</p>
              <p>We design intelligent automation for modern teams. Artificial Intelligence powers our predictive tools. We liberate humans from repetitive tasks. Smart workflows are our specialty.</p>
              <p>We create dedicated ecosystems for medical clinics. Patient journeys become seamless and intuitive. Data-driven insights fuel sustainable expansion. Scalability remains our ultimate promise.</p>
              <p>Crafting digital futures is our commitment. Reliability ensures your platform matures quickly. We deliver consistent value for our partners. Your growth defines our own measure.</p>
            </div>
          </div>

          {/* Mission/Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border border-black/10" style={{borderLeft: '3px solid #F5A623'}}>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">To empower organizations with robust digital systems that enhance operational excellence.</p>
            </div>
            <div className="p-8 rounded-xl border border-black/10" style={{borderLeft: '3px solid #F5A623'}}>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">To be the global partner for intelligent software transformation in service industries.</p>
            </div>
          </div>

          {/* Objectives + Photo */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Objectives</h3>
                <div className="space-y-4">
                  {[
                    "Deliver high-performing, reliable digital products.",
                    "Optimize workflows to maximize operational efficiency.",
                    "Cultivate long-term partnerships driven by measurable impact."
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-900 text-white font-bold text-xs">
                        {i + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-sm" style={{border: '2px solid rgba(245,166,35,0.3)'}}>
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Climbing stairs to success" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Company Goal */}
          <div className="border-t border-b border-black/10 py-12 max-w-[80ch] mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Company Goal</h3>
            <p className="text-[17px] text-gray-700 leading-relaxed">
              We aim to set the <span style={{color: '#F5A623'}}>gold standard</span> in digital craftsmanship. We strive to help our clients build sustainable systems that thrive in competitive landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 md:px-12 bg-[#03091B]">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <button 
                      key={index} 
                      onClick={() => setSelectedMember(member)}
                      className="bg-[#0A1128] rounded-2xl p-6 text-center border border-blue-900/30 hover:border-blue-500 transition-all cursor-pointer"
                    >
                        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-500/50">
                            <Image src={member.image} alt={member.name} fill className="object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                        <p className="text-blue-400 text-sm">{member.role}</p>
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* Modal / Preview */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-[#0A1128] border border-blue-900/50 rounded-2xl p-8 max-w-lg w-full relative">
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-500">
              <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-1">{selectedMember.name}</h2>
            <p className="text-blue-400 text-center mb-6">{selectedMember.role}</p>
            <p className="text-gray-300 leading-relaxed mb-6">{selectedMember.bio}</p>
            <div className="text-sm">
              <p className="text-gray-500">Email: {selectedMember.contacts.email}</p>
              <p className="text-gray-500">LinkedIn: {selectedMember.contacts.linkedin}</p>
            </div>
          </div>
        </div>
      )}

      {/* Partnerships/Sponsors */}
      <section className="bg-white py-24 px-4 md:px-12 text-center text-gray-900 overflow-hidden">
        <h2 className="text-4xl font-bold mb-16">Partnerships & Sponsors</h2>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center gap-16 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[
              'Google Cloud', 'AWS', 'Microsoft Azure', 'Stripe', 'OpenAI',
              'Google Cloud', 'AWS', 'Microsoft Azure', 'Stripe', 'OpenAI'
            ].map((partner, index) => (
              <div key={index} className="text-xl font-bold text-gray-400 min-w-max">
                {partner}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
