import React from 'react';
import { PRODUCT_GROUPS } from '../constants';

const HeroGrid: React.FC = () => {
  return (
    <section className="pt-32 pb-32 px-6 md:px-12 bg-[#F9F7F2]">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-16 opacity-0 animate-reveal" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-6xl md:text-9xl font-bold text-[#0A2621] serif mb-6 tracking-tighter leading-[0.9]">
            personalized to you
          </h1>
          <p className="text-gray-400 text-2xl font-medium tracking-tight">Customized care starts here</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_GROUPS.map((group, idx) => (
            <a 
              key={group.id} 
              href={`#${group.path}`}
              className={`group relative overflow-visible p-10 rounded-[3rem] min-h-[420px] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] card-shadow-hover opacity-0 animate-reveal bg-white ${group.hoverBg}`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="relative z-20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold leading-[1.1] serif text-[#0A2621]">
                    {group.title.split(' ')[0]} <br />
                    <span className="text-[#B87333]">
                      {group.title.split(' ').slice(1).join(' ')}
                    </span>
                  </h3>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 transition-transform group-hover:rotate-45 group-hover:border-[#0A2621]/20">
                    <ArrowIcon />
                  </div>
                </div>
                <p className="text-sm max-w-[160px] leading-relaxed text-gray-400 transition-opacity group-hover:text-[#0A2621]/70 group-hover:opacity-100">
                  {group.description}
                </p>
              </div>
              
              <div className="absolute right-[-20px] bottom-[-20px] w-64 h-64 pointer-events-none transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-24 group-hover:scale-125 group-hover:-rotate-6">
                <img 
                  src={group.imageUrl} 
                  alt={group.title}
                  className="w-full h-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.12)] group-hover:drop-shadow-[0_80px_60px_rgba(0,0,0,0.2)] transition-all duration-700"
                />
              </div>

              <div className="absolute bottom-10 left-10">
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-gray-100 text-gray-300 group-hover:border-[#0A2621]/10 group-hover:text-[#0A2621]/30 transition-colors">
                  available now
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l10-10M17 17V7H7"/></svg>
);

export default HeroGrid;