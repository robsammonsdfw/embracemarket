import React from 'react';

const TestosteroneFeature: React.FC = () => {
  return (
    <section className="py-24 bg-[#E6E7E9]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* The Main Hims-Style Card Container */}
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl min-h-[600px] md:min-h-[700px] flex items-center bg-[#002534]">
          
          {/* 1. Background Layer: Looping Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
          >
            <source src="/lowt_scale.mp4" type="video/mp4" />
          </video>

          {/* 2. Foreground Image Layer: The Stationary Guy */}
          {/* Anchored to the bottom right, popping up from the bottom edge */}
          <img
            src="/lowtman.png"
            alt="Hormone Optimization"
            className="absolute bottom-0 right-0 md:right-10 h-[75%] md:h-[95%] w-auto object-contain z-10 pointer-events-none"
          />

          {/* 3. Foreground Text Layer */}
          {/* Positioned on the left side, sitting on top of the scrolling video */}
          <div className="relative z-20 w-full md:w-3/5 p-10 md:p-20">
            
            <p className="text-sm font-black text-[#00B6A0] uppercase tracking-[0.2em] mb-4 drop-shadow-md">
              Hormone Health
            </p>
            
            {/* White text with a thin black outline so it stays readable over the moving video */}
            <h2 className="text-5xl md:text-7xl font-bold serif mb-6 tracking-tighter leading-[1.05] text-white [-webkit-text-stroke:1px_#000]">
              Optimize your hormones with clinical precision.
            </h2>
            
            <p className="text-xl md:text-2xl text-white mb-10 max-w-lg font-light leading-relaxed [-webkit-text-stroke:0.5px_#000]">
              Stop guessing about your energy and drive. Get a comprehensive diagnostic panel and a personalized treatment plan based on your unique data.
            </p>
            
            <button className="px-12 py-5 bg-white text-[#002534] font-bold rounded-full shadow-2xl hover:scale-105 transition-all text-lg">
              Get tested for low T
            </button>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestosteroneFeature;