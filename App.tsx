
import React from 'react';
import Header from './components/Header';
import HeroGrid from './components/HeroGrid';
import LabsSection from './components/LabsSection';
import TestosteroneFeature from './components/TestosteroneFeature';
import PromptsList from './components/PromptsList';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F2]">
      <Header />
      
      <main className="flex-grow">
        <HeroGrid />

        <section className="bg-[#B87333] py-40 text-white relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
            <h2 className="text-7xl md:text-9xl font-bold serif mb-12 leading-[0.85] tracking-tighter animate-reveal">
              Access a range of <br /> GLP-1 treatments
            </h2>
            <button className="px-16 py-6 bg-white text-[#B87333] font-bold rounded-full shadow-2xl hover:scale-105 transition-all text-xl">
              See treatment plans
            </button>
          </div>
        </section>

        <LabsSection />

        <section className="py-40 bg-[#2d1b10] text-white">
          <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
             <div className="order-2 lg:order-1 animate-reveal">
                <h2 className="text-7xl md:text-8xl font-bold serif mb-10 tracking-tighter leading-none">it's personal.</h2>
                <p className="max-w-xl text-2xl text-white/50 mb-14 leading-relaxed font-light italic">
                  "Personalized wellness isn't just a buzzword. It's about seeing your own data and acting on it."
                </p>
                <button className="px-14 py-6 bg-[#B87333] text-white font-bold rounded-full shadow-2xl transition-all text-xl">
                  Get your plan
                </button>
             </div>
             <div className="order-1 lg:order-2 relative animate-reveal">
                <div className="rounded-[4rem] overflow-hidden shadow-2xl border border-white/10 group">
                   <img src="/hero.png" className="w-full aspect-[4/5] object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000" />
                </div>
             </div>
          </div>
        </section>

        <TestosteroneFeature />
        <PromptsList />
      </main>

      <Footer />
    </div>
  );
};

export default App;
