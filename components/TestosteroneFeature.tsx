/* components/TestosteroneFeature.tsx */

import React from 'react';

const TestosteroneFeature: React.FC = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden min-h-[500px] flex items-center">
      {/* 1. Background Video Layer */}
      {/* IMPORTANT: video must have autoPlay, loop, muted, and playsInline */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/lowt_scale.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Static Image Overlay (The cutout man) */}
      {/* Change "/path-to-cutout-man.png" to your actual transparent cut-out file path */}
      <img
        src="/lowtman.png"
        alt="Stationary Person Overlay"
        className="absolute bottom-0 right-0 h-full w-auto object-contain z-10 pointer-events-none"
      />

      {/* 3. Foreground Content Layer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-xl animate-reveal">
          <p className="text-4xl md:text-5xl font-bold serif text-[#002534] tracking-tight leading-none mb-8">
            low T diagnostics scrolling in vanishing point perspective behind him
          </p>
          <button className="px-14 py-6 bg-[#B87333] text-white font-bold rounded-full shadow-2xl transition-all text-xl hover:scale-105">
            get tested for low T
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestosteroneFeature;