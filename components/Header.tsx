import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const SHOPIFY_BASE = "https://shop.embracehealth.ai";

  const TOP_NAV = [
    { name: 'The Embrace Ecosystem', path: 'https://app.embracehealth.ai' },
    { name: 'Telemedicine Shop', path: 'https://shop.embracehealth.ai' },
    { name: 'About Us', path: '/about' },
  ];

  const EXPLORE_FEATURES = [
    { name: 'Physical Intelligence',path: "/app/physical-intelligence" },
    { name: 'Nutrition & Kitchen Intelligence', path: "/app/nutrition-kitchen" },
    { name: 'Mental Health', path: "/app/mental-health" },
    { name: 'Progress Tracking', path: "/app/progress-tracking" },
    { name: 'Browse All App Features', path: "/app/features" },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-[#E6E7E9]/90 backdrop-blur-xl border-b border-[#002534]/5"
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <div className="max-w-[1450px] mx-auto px-6 md:px-12 flex items-center justify-between h-24">
        {/* Logo */}
        <div className="flex items-center mr-8">
          <a href="/" className="text-2xl font-bold text-[#002534] flex items-center">
            <span className="text-[#00B6A0]">embrace</span>
            <span className="text-[#F26422]">health</span>
            <span className="opacity-30 font-light ">.ai</span>
          </a>
        </div>

        {/* Top Level Navigation */}
        <nav className="hidden xl:flex items-center space-x-8">
          {TOP_NAV.map((item) => (
            <a 
              key={item.name}
              href={item.path}
              onMouseEnter={() => setIsMenuOpen(true)}
              className="text-[11px] font-black uppercase tracking-[0.15em] text-[#002534] hover:text-[#00B6A0] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* UPDATED: Rectangular Colored Buttons for Partners */}
        <div className="hidden xl:flex items-center space-x-3 ml-8 pl-8 border-l border-[#002534]/10">
          <a 
            href="#coaches" 
            className="px-5 py-2.5 bg-[#00B6A0] text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:opacity-90 transition-all shadow-sm"
          >
            Coaches
          </a>
          <a 
            href="#brokers" 
            className="px-5 py-2.5 bg-[#F26422] text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:opacity-90 transition-all shadow-sm"
          >
            Employers
          </a>
        </div>

        {/* Action Button (Log In) */}
        <div className="flex items-center ml-auto">
          <button className="px-8 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#002534] bg-white border border-[#002534]/10 rounded-full hover:bg-gray-50 transition-all shadow-sm">
            Log in
          </button>
        </div>
      </div>

      {/* MEGA MENU DROPDOWN */}
      <div 
        className={`absolute top-24 left-0 w-full bg-white border-b border-[#002534]/10 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden shadow-2xl ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-[1450px] mx-auto px-12 py-12 flex">
          
          <div className="w-1/4 pr-12 border-r border-[#002534]/5">
            <p className="text-[10px] font-black text-[#002534]/30 uppercase tracking-[0.3em] mb-8">Explore Features</p>
            <ul className="space-y-5">
              {EXPLORE_FEATURES.map((feature) => (
                <li key={feature.name}>
                  <a href={feature.path} className="text-lg font-bold text-[#002534] hover:text-[#F26422] transition-colors">
                    {feature.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 px-12 flex space-x-8">
            <div className="flex-1 group cursor-pointer">
              <a href="/article/science-of-glp1" className="flex-1 group cursor-pointer block">
                <div className="rounded-3xl overflow-hidden aspect-[16/10] mb-4 bg-gray-100">
                  <img src="https://picsum.photos/seed/glp1/800/500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="GLP-1 Science" />
                </div>
                <h4 className="text-xl font-bold serif text-[#002534]">The Science of GLP-1</h4>
                <p className="text-sm text-[#002534]/50">How modern medicine is changing weight loss.</p>
              </a>
            </div>

            <div className="flex-1 group cursor-pointer">
              <div className="rounded-3xl overflow-hidden aspect-[16/10] mb-4 bg-gray-100">
                <img src="https://picsum.photos/seed/dna/800/500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="DNA Wellness" />
              </div>
              <h4 className="text-xl font-bold serif text-[#002534]">DNA-Driven Wellness</h4>
              <p className="text-sm text-[#002534]/50">Unlock your genetic potential.</p>
            </div>
          </div>

          <div className="w-1/4 pl-12">
            <div className="bg-[#002534] rounded-[2.5rem] p-8 text-white h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold serif mb-4 leading-tight">Ready to start?</h3>
                <p className="text-white/40 text-xs">Get a personalized treatment plan in minutes.</p>
              </div>
              <button className="w-full py-4 bg-[#00B6A0] rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#002534] transition-all">
                Start Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;