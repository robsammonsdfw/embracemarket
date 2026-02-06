
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
        {/* The 'Personalized to You' Grid Dashboard */}
        <HeroGrid />

        {/* Access Range / GLP-1 Full Banner Area */}
        <section className="bg-[#B87333] py-24 text-white">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-bold serif mb-10 leading-none">
              Access a range of <br /> GLP-1 treatment plans
            </h2>
            <button className="px-12 py-5 bg-white text-[#B87333] font-bold rounded-full shadow-2xl hover:bg-gray-50 transition-all">
              See plans
            </button>
          </div>
        </section>

        {/* Dynamic Labs / Baseline Section */}
        <LabsSection />

        {/* It's Personal Section */}
        <section className="py-32 bg-[#2d1b10] text-white">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
             <h2 className="text-5xl md:text-8xl font-bold serif mb-12 tracking-tighter">it's more than a plan, <br /> it's personal</h2>
             <div className="relative max-w-4xl mx-auto mb-16 rounded-[4rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1516534775068-ba3e84529519?auto=format&fit=crop&q=80&w=1200" className="w-full" />
                <div className="absolute top-10 right-10 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                   <p className="text-xs uppercase font-bold tracking-widest text-white/70">Bio-Insights Ready</p>
                </div>
             </div>
             <p className="max-w-2xl mx-auto text-xl text-white/60 mb-12">
               A provider licensed in your state will review your information, so that they can combine guidance on nutrition, activity, sleep, and more into a plan designed around your body's needs.
             </p>
             <button className="px-12 py-5 bg-white text-[#2d1b10] font-bold rounded-full">Get started</button>
          </div>
        </section>

        {/* Editorial Testosterone Feature */}
        <TestosteroneFeature />

        {/* Prompts Guide for Final Asset Generation */}
        <PromptsList />
      </main>

      <Footer />
    </div>
  );
};

export default App;
