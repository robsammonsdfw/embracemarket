
import React from 'react';
import { COLORS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#E8EFE8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0A2621] leading-tight mb-8 serif">
            Healthcare, designed <br className="hidden md:block" /> for you.
          </h1>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-xl">
            Personalized treatments, genetic insights, and prescription-strength products delivered discreetly to your door.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-10 py-4 bg-[#0A2621] text-white font-bold rounded-full hover:bg-black transition-all shadow-lg hover:shadow-xl">
              Start Visit
            </button>
            <button className="px-10 py-4 bg-white border border-gray-200 text-[#0A2621] font-bold rounded-full hover:bg-gray-50 transition-all">
              View All Treatments
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image Element */}
      <div className="absolute top-20 right-[-10%] md:right-[-5%] w-[60%] h-full hidden lg:block opacity-80 pointer-events-none">
        <img 
          src="https://picsum.photos/seed/wellness-hero/1200/1000" 
          alt="Modern Wellness" 
          className="w-full h-full object-cover rounded-l-[100px] shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
