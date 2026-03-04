import React from 'react';

const Hero: React.FC = () => {
  // Top 5 Row
  const TOP_TREATMENTS = [
    { name: 'Lose Weight', path: '/weight' },
    { name: 'Have Better Sex', path: '/sex' },
    { name: 'Regrow Hair', path: '/hair' },
    { name: 'Sleep Health', path: '/sleep' },
    { name: 'Labs & DNA Tests', path: '/labs' },
  ];

  // Lower 5 Row
  const APP_FEATURES = [
    { name: 'Physical Intelligence', path: '/physical' },
    { name: 'Nutrition & Kitchen Intelligence', path: '/nutrition' },
    { name: 'Mental Health', path: '/mental' },
    { name: 'Progress Tracking', path: '/tracking' },
    { name: 'Browse All App Features', path: '/features' },
  ];

  return (
    <section className="relative pt-40 pb-32 bg-[#E6E7E9] overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Hero Text */}
        <div className="mb-24 animate-reveal">
          <h1 className="text-6xl md:text-[8rem] font-bold text-[#002534] serif mb-8 tracking-tighter leading-[0.85]">
            personalized <br /> to you.
          </h1>
          <p className="text-[#002534]/40 text-2xl font-medium tracking-tight max-w-xl">
            Customized care starts here with clinical precision and AI-driven insights.
          </p>
        </div>

        {/* --- ROW 1: TOP 5 TREATMENTS --- */}
        <div className="mb-12">
          <p className="text-[10px] font-black text-[#002534]/30 uppercase tracking-[0.3em] mb-6">Treatments</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TOP_TREATMENTS.map((item, idx) => (
              <a 
                key={item.name} 
                href={item.path}
                className="group p-8 bg-white rounded-[2rem] card-shadow-hover transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between min-h-[160px]"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <span className="text-2xl font-bold serif text-[#002534] group-hover:text-[#F26422] transition-colors">
                  {item.name}
                </span>
                <div className="flex justify-end">
                   <div className="w-8 h-8 rounded-full bg-[#E6E7E9] flex items-center justify-center group-hover:bg-[#F26422] group-hover:text-white transition-all">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                   </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* --- ROW 2: APP FEATURES --- */}
        <div>
          <p className="text-[10px] font-black text-[#002534]/30 uppercase tracking-[0.3em] mb-6">App Features</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {APP_FEATURES.map((item, idx) => (
              <a 
                key={item.name}
                href={item.path}
                className="group flex items-center justify-between p-6 bg-white/50 border border-[#002534]/5 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${0.5 + (0.1 * idx)}s` }}
              >
                <span className="font-bold text-[#002534] text-xs uppercase tracking-widest">{item.name}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-[#002534]/20 group-hover:text-[#00B6A0] transition-colors">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;