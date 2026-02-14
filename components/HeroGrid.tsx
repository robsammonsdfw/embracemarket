import React from 'react';
import { PRODUCT_GROUPS, MINOR_TREATMENTS } from '../constants';

const HeroGrid: React.FC = () => {
  return (
    <section className="pt-32 pb-32 px-6 md:px-12 bg-[#E6E7E9]">
      <div className="max-w-[1450px] mx-auto">
        <div className="mb-16 opacity-0 animate-reveal" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-6xl md:text-[9rem] font-bold text-[#002534] serif mb-6 tracking-tighter leading-[0.85]">
            personalized to you
          </h1>
          <p className="text-[#002534]/40 text-2xl font-medium tracking-tight">Customized care starts here</p>
        </div>

        {/* Large Widgets - 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {PRODUCT_GROUPS.map((group, idx) => (
            <a 
              key={group.id} 
              href={`#${group.path}`}
              className={`group hero-card-base widget-large card-shadow-hover opacity-0 animate-reveal ${group.hoverBg}`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="relative z-20">
                <h3 className="text-2xl font-bold leading-[1.1] serif text-[#002534] mb-4">
                  {group.title.split(' ')[0]} <br />
                  <span className="text-[#F26422]">
                    {group.title.split(' ').slice(1).join(' ')}
                  </span>
                </h3>
                <p className="text-xs max-w-[150px] leading-relaxed text-[#002534]/40 transition-all group-hover:text-[#002534]">
                  {group.description}
                </p>
              </div>
              
              <div className="absolute right-[-10px] bottom-[-10px] w-48 h-48 pointer-events-none">
                <div className="absolute inset-0 flex items-end justify-center">
                  <img 
                    src={group.shadowUrl} 
                    alt="" 
                    className="w-full h-full object-contain opacity-20 transition-transform duration-700 group-hover:scale-125"
                  />
                </div>
                <img 
                  src={group.imageUrl} 
                  alt={group.title}
                  className="w-full h-full object-contain relative z-10 product-lift"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Minor Widgets - 5 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {MINOR_TREATMENTS.map((item, idx) => (
            <a 
              key={item.id}
              href={`#${item.path}`}
              className="group widget-minor opacity-0 animate-reveal"
              style={{ animationDelay: `${0.7 + idx * 0.1}s` }}
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-bold text-[#002534] text-xs uppercase tracking-widest">{item.title}</span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[#002534]">
                <ArrowIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l10-10M17 17V7H7"/></svg>
);

export default HeroGrid;