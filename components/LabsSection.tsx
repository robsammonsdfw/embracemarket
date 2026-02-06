
import React from 'react';

const LabsSection: React.FC = () => {
  return (
    <section id="labs" className="relative min-h-screen flex items-center py-40 overflow-hidden bg-[#E6E7E9]">
      {/* Background with user hero image */}
      <div className="absolute inset-0 opacity-40">
        <img src="/hero.png" className="w-full h-full object-cover grayscale-[0.3]" alt="Clinical Room" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E6E7E9] via-[#E6E7E9]/80 to-[#E6E7E9]"></div>
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="charts-stream absolute top-0 left-0 w-full flex flex-col space-y-12 p-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`flex space-x-12 ${i % 2 === 0 ? 'translate-x-20' : '-translate-x-20'}`}>
              <div className="w-72 h-40 bg-white/60 backdrop-blur-md rounded-[2.5rem] shadow-lg border border-white/20"></div>
              <div className="w-[500px] h-40 bg-[#00B6A0]/10 rounded-[2.5rem] shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <h2 className="text-7xl md:text-[8rem] font-bold text-[#002534] serif mb-10 tracking-tighter leading-[0.9]">find your baseline</h2>
          <p className="text-2xl text-[#002534]/60 font-medium leading-tight max-w-2xl mx-auto italic">
            "Better data leads to better decisions." <br /> Clinical testing reimagined for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-white/80 backdrop-blur-2xl p-16 rounded-[4rem] shadow-xl border border-white/50 flex flex-col items-center text-center transition-all duration-700 hover:-translate-y-4">
             <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#00B6A0] mb-6">Biological Mastery</span>
             <h3 className="text-4xl font-bold text-[#002534] serif mb-6">Testosterone Rx</h3>
             <div className="relative mb-16 h-72 flex items-center justify-center">
               <img src="/testosterone.png" className="w-64 h-64 object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl" />
             </div>
             <button className="w-full py-5 bg-[#002534] text-white font-bold rounded-full hover:bg-black transition-all">Learn more</button>
          </div>

          <div className="group bg-[#002534] p-16 rounded-[4rem] shadow-2xl flex flex-col items-center text-center transition-all duration-700 hover:-translate-y-4">
             <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#F26422] mb-6">Wellness Foundation</span>
             <h3 className="text-4xl font-bold text-white serif mb-6">At-home labs</h3>
             <div className="relative mb-16 h-72 flex items-center justify-center">
               <img src="/weight.png" className="w-56 h-56 object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-110" />
             </div>
             <button className="w-full py-5 bg-white text-[#002534] font-bold rounded-full transition-all">Start testing</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsSection;
