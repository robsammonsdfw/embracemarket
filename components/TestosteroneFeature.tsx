
import React from 'react';

const TestosteroneFeature: React.FC = () => {
  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-bold text-[#0A2621] serif leading-none tracking-tighter">
            Get your edge back <br /> with Testosterone by Embrace
          </h2>
        </div>

        <div className="relative aspect-[16/8] md:aspect-[21/9] overflow-hidden rounded-[4rem] group shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          
          {/* Overlay Buttons */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4">
             <button className="px-10 py-4 bg-white text-[#0A2621] font-bold rounded-full shadow-xl">Get started</button>
             <button className="px-10 py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-full border border-white/30">Do I have low T?</button>
          </div>

          {/* Dotted Line Graphic */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
             <svg className="w-full h-full">
               <path d="M50,400 Q300,300 600,350 T1200,200" stroke="white" strokeWidth="3" strokeDasharray="10,10" fill="transparent" />
               <circle cx="50" cy="400" r="10" fill="white" />
               <circle cx="600" cy="350" r="15" fill="#B87333" className="animate-pulse" />
             </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestosteroneFeature;
