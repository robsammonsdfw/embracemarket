import React from 'react';
import { PRODUCT_GROUPS, MINOR_TREATMENTS, COLORS } from '../constants';

const HeroGrid: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-6 md:px-12 bg-[#E6E7E9]">
      <div className="max-w-[1450px] mx-auto">
        
        {/* --- REBUILT HERO SECTION: 2/3 and 1/3 Split --- */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 opacity-0 animate-reveal" style={{ animationDelay: '0.1s' }}>
          
          {/* LEFT 2/3 COLUMN: Immediate Comprehension & Conversion */}
          <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-[#002534]/5 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
             
             {/* Text Content */}
             <div className="md:w-3/5 relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-[#002534] serif tracking-tighter leading-[1.05] mb-4">
                  One app to see your body, understand your food, and take action.
                </h1>
                
                {/* 3 Dense Bullets for immediate comprehension */}
                <ul className="mb-8 space-y-3 mt-6">
                  <li className="flex items-start text-[#002534] text-sm md:text-base font-medium">
                    <svg className="w-5 h-5 text-[#00B6A0] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    <span><strong className="font-bold">Know what's working:</strong> 3D body scans you can actually see.</span>
                  </li>
                  <li className="flex items-start text-[#002534] text-sm md:text-base font-medium">
                    <svg className="w-5 h-5 text-[#00B6A0] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    <span><strong className="font-bold">Make food simpler:</strong> Photo-based food logging & meal plans.</span>
                  </li>
                  <li className="flex items-start text-[#002534] text-sm md:text-base font-medium">
                    <svg className="w-5 h-5 text-[#00B6A0] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    <span><strong className="font-bold">Turn insight into action:</strong> Connect to our telemedicine shop.</span>
                  </li>
                </ul>

                <div className="flex items-center gap-4">
                  <a href="https://app.embracehealth.ai" className="px-8 py-3.5 bg-[#002534] text-white font-bold rounded-full shadow-lg hover:bg-black transition-all text-sm">
                    Get the App
                  </a>
                  <p className="text-[9px] text-[#002534]/40 max-w-[180px] leading-tight">
                    *Care is provided by licensed clinicians when telemedicine is applicable.
                  </p>
                </div>
             </div>

             {/* Immediate Comprehension Video inside the 2/3 block */}
             <div className="md:w-2/5 h-full w-full min-h-[250px] bg-[#E6E7E9] rounded-[2rem] border border-[#002534]/5 flex items-center justify-center overflow-hidden relative">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src="/phone_video.mp4" type="video/mp4" />
                </video>
             </div>
          </div>

          {/* RIGHT 1/3 COLUMN: Are you here as (Stacked) */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <div 
              className="bg-white p-8 rounded-[3rem] shadow-sm border border-[#002534]/5 h-full flex flex-col justify-center relative overflow-hidden"
              style={{
                backgroundImage: 'url(/wmimg.png)', 
                backgroundSize: '300px', 
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat', 
              }}
            >
              {/* White overlay completely removed. Watermark will show clearly. */}
              
              <p className="text-5xl font-bold text-[#002534] serif mb-6 text-center tracking-tight relative z-10">
                Are you here as
              </p>
              
              <div className="flex flex-col gap-4 relative z-10">
                <a 
                  href="#coaches" 
                  className="group p-5 rounded-[1.5rem] transition-all duration-500 hover:scale-[1.02] shadow-sm flex flex-col items-center justify-center text-center"
                  style={{ backgroundColor: COLORS.brandTeal }}
                >
                  <span className="text-white text-xl font-bold serif leading-tight">Coaches</span>
                  <span className="text-white/70 text-[10px] font-black uppercase tracking-widest mt-1 group-hover:text-white transition-colors">
                    Click here
                  </span>
                </a>

                <a 
                  href="#brokers" 
                  className="group p-5 rounded-[1.5rem] transition-all duration-500 hover:scale-[1.02] shadow-sm flex flex-col items-center justify-center text-center"
                  style={{ backgroundColor: COLORS.brandOrange }}
                >
                  <span className="text-white text-xl font-bold serif leading-tight">Employers/Brokers</span>
                  <span className="text-white/70 text-[10px] font-black uppercase tracking-widest mt-1 group-hover:text-white transition-colors">
                    Click here
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- TOP 5 WIDGETS (Primary - Restored Shadows) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {PRODUCT_GROUPS.map((group, idx) => (
            <a 
              key={group.id} 
              href={group.path}
              className={`group relative overflow-hidden p-10 rounded-[2.5rem] min-h-[420px] bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] card-shadow-hover opacity-0 animate-reveal ${group.hoverBg}`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4 relative z-20">
                <h3 className="text-2xl font-bold leading-[1.1] serif text-[#002534]">
                  {group.title.split(' ')[0]} <br />
                  <span className="text-[#F26422]">
                    {group.title.split(' ').slice(1).join(' ')}
                  </span>
                </h3>
                <div className="text-[#002534] transition-transform duration-700 group-hover:rotate-45">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                    </svg>
                </div>
              </div>
              
              <p className="text-xs max-w-[150px] leading-relaxed text-[#002534]/40 transition-all group-hover:text-[#002534] relative z-20 mb-8">
                {group.description}
              </p>
              
              {/* Product Image and Dedicated Shadow Layer */}
              <div className="absolute inset-x-0 bottom-0 w-full h-64 pointer-events-none flex items-end justify-center mb-[-5%]">
                <img 
                  src={group.shadowUrl} 
                  alt="" 
                  className="absolute bottom-4 w-[75%] h-auto object-contain opacity-40 transition-transform duration-700 ease-out group-hover:scale-110 mix-blend-multiply"
                />
                <img 
                  src={group.imageUrl} 
                  alt={group.title}
                  className="w-[85%] h-auto object-contain relative z-10 transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-12 group-hover:scale-105"
                />
              </div>
            </a>
          ))}
        </div>

{/* --- BOTTOM 5 WIDGETS (Now upgraded to match the Top 5 size and animation) --- */}
        {/* Updated grid gap and columns to match the top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {MINOR_TREATMENTS.map((item, idx) => (
            <a
              key={item.id}
              href={item.path}
              // Applied the exact same card sizing, padding, and easing transitions as the top 5
              className="group relative overflow-hidden p-10 rounded-[2.5rem] min-h-[420px] bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] card-shadow-hover opacity-0 animate-reveal hover:bg-gray-50/80"
              style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
            >
              {/* Header section matching the top cards */}
              <div className="flex justify-between items-start mb-4 relative z-20">
                <h3 className="text-xl md:text-2xl font-bold leading-[1.1] serif text-[#002534] pr-4">
                  {item.title}
                </h3>
                <div className="text-[#002534]/30 transition-transform duration-700 group-hover:rotate-45 group-hover:text-[#F26422] flex-shrink-0">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                    </svg>
                </div>
              </div>

              {/* Product Image Layer matching the top animations */}
              <div className="absolute inset-x-0 bottom-0 w-full h-64 pointer-events-none flex items-end justify-center mb-[-5%]">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  // Exact same lift-and-scale animation as the top cards. 
                  // Added drop-shadow-2xl to compensate for the lack of a shadowUrl in the data.
                  className="w-[85%] h-auto object-contain relative z-10 transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-12 group-hover:scale-105 drop-shadow-2xl"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroGrid;