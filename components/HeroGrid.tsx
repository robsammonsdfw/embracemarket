/* robsammonsdfw/embracemarket/embracemarket-03c72df43bf88efdbcd5bec56b84cde56511c93a/components/HeroGrid.tsx */

import React from 'react';
import { PRODUCT_GROUPS, MINOR_TREATMENTS, COLORS } from '../constants';

const HeroGrid: React.FC = () => {
  return (
    <section className="pt-24 pb-24 px-6 md:px-12 bg-[#E6E7E9]">
      <div className="max-w-[1450px] mx-auto">
        
        {/* Header Section: Original 50/50 Split and Font Size */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-12 opacity-0 animate-reveal" style={{ animationDelay: '0.1s' }}>
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-[5.5rem] font-bold text-[#002534] serif tracking-tighter leading-none">
              personalized to you
            </h1>
            <p className="text-[#002534]/40 text-2xl font-medium tracking-tight mt-4">
              Customized care starts here
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <p className="text-xl md:text-2xl font-bold text-[#002534] serif text-center mb-6">
              Are you here as
            </p>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="#" 
                className="group p-6 rounded-3xl transition-all duration-500 hover:scale-[1.02] shadow-sm flex flex-col justify-center"
                style={{ backgroundColor: COLORS.brandTeal }}
              >
                <span className="text-white text-xl md:text-2xl font-bold serif leading-tight">Coaches</span>
                <span className="text-white/70 text-[10px] font-black uppercase tracking-widest mt-1 group-hover:text-white transition-colors">
                  Click here
                </span>
              </a>

              <a 
                href="#" 
                className="group p-6 rounded-3xl transition-all duration-500 hover:scale-[1.02] shadow-sm flex flex-col justify-center"
                style={{ backgroundColor: COLORS.brandOrange }}
              >
                <span className="text-white text-xl md:text-2xl font-bold serif leading-tight">Employers/Brokers</span>
                <span className="text-white/70 text-[10px] font-black uppercase tracking-widest mt-1 group-hover:text-white transition-colors">
                  Click here
                </span>
              </a>
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
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </div>
              </div>
              
              <p className="text-xs max-w-[150px] leading-relaxed text-[#002534]/40 transition-all group-hover:text-[#002534] relative z-20 mb-8">
                {group.description}
              </p>
              
              {/* Product Image and Dedicated Shadow Layer */}
              <div className="absolute inset-x-0 bottom-0 w-full h-64 pointer-events-none flex items-end justify-center mb-[-5%]">
                {/* Fixed Shadow Image: Expands slightly on hover */}
                <img 
                  src={group.shadowUrl} 
                  alt="" 
                  className="absolute bottom-4 w-[75%] h-auto object-contain opacity-40 transition-transform duration-700 ease-out group-hover:scale-110 mix-blend-multiply"
                />
                {/* Main Floating Product Image: Lifts up on hover */}
                <img 
                  src={group.imageUrl} 
                  alt={group.title}
                  className="w-[85%] h-auto object-contain relative z-10 transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-12 group-hover:scale-105"
                />
              </div>
            </a>
          ))}
        </div>

        {/* --- BOTTOM 5 WIDGETS (Secondary - Compact App Preview) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {MINOR_TREATMENTS.map((item, idx) => (
            <a
              key={item.id}
              href={item.path}
              className="group relative overflow-hidden bg-white rounded-[2rem] min-h-[150px] card-shadow-hover transition-all duration-500 hover:scale-[1.02] opacity-0 animate-reveal flex flex-col"
              style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
            >
              <div className="p-4 relative z-20 bg-white/90 backdrop-blur-sm border-b border-gray-50">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#002534] text-[9px] uppercase tracking-widest leading-tight">
                    {item.title}
                  </span>
                  <div className="text-[#002534]/30 transition-all duration-500 group-hover:text-[#F26422] group-hover:translate-x-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex-grow flex items-center justify-center px-4 pb-4 bg-gray-50/50">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-auto h-auto max-w-[120px] max-h-[88px] object-contain shadow-sm rounded-lg transition-transform duration-700 ease-out group-hover:scale-110"
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