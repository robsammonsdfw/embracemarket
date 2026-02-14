import React from 'react';
import { PRODUCT_GROUPS, MINOR_TREATMENTS } from '../constants';
import { ArrowUpRight } from 'lucide-react'; // Assuming you are using lucide-react based on standard icon usage, if not, I've provided an SVG fallback below.

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

        {/* --- LARGE WIDGETS (5 Columns) --- */}
        {/* Changed grid-cols-4 to grid-cols-5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {PRODUCT_GROUPS.map((group, idx) => (
            <a 
              key={group.id} 
              href={`#${group.path}`}
              // RESTORED: bg-white base, specific hoverBg color, explicit transitions
              className={`group relative overflow-hidden p-8 rounded-[2.5rem] min-h-[420px] bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] card-shadow-hover opacity-0 animate-reveal ${group.hoverBg}`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
               {/* RESTORED: Top Arrow Section with Rotation Animation */}
              <div className="flex justify-between items-start mb-4 relative z-20">
                <h3 className="text-2xl font-bold leading-[1.1] serif text-[#002534]">
                  {group.title.split(' ')[0]} <br />
                  <span className="text-[#F26422]">
                    {group.title.split(' ').slice(1).join(' ')}
                  </span>
                </h3>
                {/* The Arrow: Starts diagonal, rotates to sideways on group hover */}
                <div className="text-[#002534] transition-transform duration-700 group-hover:rotate-45">
                    {/* Using a standard SVG if lucide-react isn't imported */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </div>
              </div>

              <p className="text-xs max-w-[150px] leading-relaxed text-[#002534]/40 transition-all group-hover:text-[#002534] relative z-20 mb-8">
                {group.description}
              </p>
              
              {/* RESTORED: Image and Shadow Animations */}
              <div className="absolute right-0 bottom-0 w-full h-64 pointer-events-none flex items-end justify-center mb-[-5%]" >
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
                   {/* Shadow: Grows on hover */}
                  <img 
                    src={group.shadowUrl} 
                    alt="" 
                    className="w-[80%] h-auto object-contain opacity-30 transition-transform duration-700 ease-out group-hover:scale-125 mix-blend-multiply"
                  />
                </div>
                 {/* Product Image: Moves up and scales slightly on hover */}
                <img 
                  src={group.imageUrl} 
                  alt={group.title}
                  className="w-[85%] h-auto object-contain relative z-10 transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-12 group-hover:scale-105"
                />
              </div>
            </a>
          ))}
        </div>

        {/* --- NEW MINOR WIDGETS SECTION (5 Columns) --- */}
        <div>
            <h4 className="text-[#002534] font-bold mb-6 text-xl serif opacity-0 animate-reveal" style={{ animationDelay: '0.6s' }}>Wait, there's more.</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {MINOR_TREATMENTS.map((item, idx) => (
                <a 
                key={item.id}
                href={`#${item.path}`}
                // Similar clean white styling for minor items
                className="group flex items-center justify-between p-5 bg-white rounded-3xl card-shadow-hover transition-all duration-500 hover:scale-[1.02] opacity-0 animate-reveal"
                style={{ animationDelay: `${0.7 + idx * 0.1}s` }}
                >
                <div className="flex items-center space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-bold text-[#002534] text-xs uppercase tracking-widest">{item.title}</span>
                </div>
                {/* Simple sideways arrow for minor items */}
                <div className="text-[#002534]/30 transition-all duration-500 group-hover:text-[#F26422] group-hover:translate-x-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
                </a>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroGrid;