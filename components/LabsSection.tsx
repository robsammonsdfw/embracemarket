
import React from 'react';

const LabsSection: React.FC = () => {
  return (
    <section id="labs" className="relative min-h-screen flex items-center py-40 overflow-hidden bg-[#E8EFE8]">
      <div className="absolute inset-0 opacity-40">
        <img src="/hero.png" className="w-full h-full object-cover" alt="Clinical Room" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E8EFE8] via-transparent to-[#E8EFE8]"></div>
      </div>

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="charts-stream absolute top-0 left-0 w-full flex flex-col space-y-12 p-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`flex space-x-12 ${i % 2 === 0 ? 'translate-x-20' : '-translate-x-20'}`}>
              <div className="w-72 h-40 bg-white/60 backdrop-blur-md rounded-[2.5rem] shadow-lg border border-white/20"></div>
              <div className="w-[500px] h-40 bg-gradient-to-r from-white/60 to-transparent rounded-[2.5rem] shadow-lg border border-white/20"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-32 max-w-3xl mx-auto">
          <h2 className="text-7xl md:text-9xl font-bold text-[#0A2621] serif mb-10 tracking-tighter">find your baseline</h2>
          <p className="text-2xl text-[#0A2621]/80 font-medium leading-tight">
            Comprehensive testing. <br /> Branded treatments. <br /> Clinical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="group bg-white/95 backdrop-blur-2xl p-16 rounded-[4rem] shadow-xl border border-white/50 flex flex-col items-center text-center transition-all duration-700 hover:-translate-y-4">
             <h3 className="text-4xl font-bold text-[#0A2621] serif mb-6">Testosterone Rx</h3>
             <div className="relative mb-16 h-72 flex items-center justify-center">
               <img src="/testosterone.png" className="w-64 h-64 object-contain transition-transform duration-700 group-hover:scale-125" />
             </div>
             <button className="w-full py-5 bg-gray-50 text-[#0A2621] font-bold rounded-full border border-gray-100 hover:bg-gray-100 transition-all">Learn more</button>
          </div>

          <div className="group bg-[#0A2621] p-16 rounded-[4rem] shadow-xl flex flex-col items-center text-center transition-all duration-700 hover:-translate-y-4">
             <h3 className="text-4xl font-bold text-white serif mb-6">At-home labs</h3>
             <div className="relative mb-16 h-72 flex items-center justify-center">
               <img src="/weight.png" className="w-56 h-56 object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-110" />
             </div>
             <button className="w-full py-5 bg-white text-[#0A2621] font-bold rounded-full transition-all">Start testing</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsSection;
