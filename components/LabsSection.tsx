
import React from 'react';

const LabsSection: React.FC = () => {
  return (
    <section className="relative min-h-screen py-32 overflow-hidden bg-[#E8EFE8]">
      {/* Dynamic Animated Charts Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
        <div className="charts-bg absolute top-0 left-0 w-full flex flex-col space-y-8 p-12">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex space-x-8">
              <div className="w-64 h-32 bg-white rounded-2xl shadow-sm"></div>
              <div className="w-96 h-32 bg-gradient-to-r from-white to-transparent rounded-2xl shadow-sm"></div>
              <div className="w-48 h-32 bg-white rounded-2xl shadow-sm"></div>
              <div className="w-80 h-32 bg-white rounded-2xl shadow-sm"></div>
            </div>
          ))}
          {/* Repeat for continuous scroll */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i+10} className="flex space-x-8">
              <div className="w-64 h-32 bg-white rounded-2xl shadow-sm"></div>
              <div className="w-96 h-32 bg-gradient-to-r from-white to-transparent rounded-2xl shadow-sm"></div>
              <div className="w-48 h-32 bg-white rounded-2xl shadow-sm"></div>
              <div className="w-80 h-32 bg-white rounded-2xl shadow-sm"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-bold text-[#0A2621] serif mb-8">find your baseline</h2>
          <p className="text-xl text-gray-700 max-w-xl mx-auto font-medium">
            Get a clear picture of your health with simple at-home lab tests and doctor-reviewed action plans.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-12 py-5 bg-[#0A2621] text-white font-bold rounded-full shadow-2xl hover:bg-black transition-all">Start my labs</button>
            <button className="px-12 py-5 bg-white/50 backdrop-blur-md text-[#0A2621] font-bold rounded-full border border-gray-200">Learn more</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Testosterone Rx */}
          <div className="bg-white/80 backdrop-blur-xl p-12 rounded-[3.5rem] shadow-sm border border-white/50 flex flex-col items-center text-center">
             <h3 className="text-3xl font-bold text-[#0A2621] serif mb-4">Testosterone Rx</h3>
             <p className="text-gray-500 mb-10 text-lg">to elevate your T</p>
             <div className="relative mb-12 h-64 flex items-center justify-center">
               <img src="https://images.unsplash.com/photo-1584017911766-d451b3d0e86f?auto=format&fit=crop&q=80&w=300" 
                    className="w-48 h-48 object-contain pill-float drop-shadow-2xl" />
             </div>
             <button className="px-10 py-4 bg-gray-50 text-gray-800 font-bold rounded-full border border-gray-100 hover:bg-gray-100 transition-all">Learn more</button>
          </div>

          {/* Card 2: At-home labs */}
          <div className="bg-white/80 backdrop-blur-xl p-12 rounded-[3.5rem] shadow-sm border border-white/50 flex flex-col items-center text-center">
             <h3 className="text-3xl font-bold text-[#0A2621] serif mb-4">At-home labs</h3>
             <p className="text-gray-500 mb-10 text-lg">to check your T levels</p>
             <div className="relative mb-12 h-64 flex items-center justify-center">
               <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&q=80&w=300" 
                    className="w-40 rounded-[2rem] shadow-2xl rotate-3" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%]">
                 <div className="bg-[#0A2621] text-white p-4 rounded-2xl shadow-2xl text-sm font-bold animate-pulse">
                   Your lab results are ready
                 </div>
               </div>
             </div>
             <button className="px-10 py-4 bg-[#0A2621] text-white font-bold rounded-full">Start testing</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsSection;
