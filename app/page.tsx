import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhiteSection from '@/components/WhiteSection';
import WhatWeBuild from '@/components/WhatWeBuild';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative bg-[#03091B]">
        {/* Hero Background Effect */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#03091B] to-[#03091B]" />
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>
      
      <WhiteSection />
      <WhatWeBuild />
      <Projects />
      <Footer />
    </main>
  );
}
