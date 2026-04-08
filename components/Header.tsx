import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const TOP_NAV = [
    { name: 'Web App', path: 'https://app.embracehealth.ai' },
    { name: 'Telehealth Shop', path: 'https://shop.embracehealth.ai' },
  ];

  const EXPLORE_FEATURES = [
    { name: 'Physical Intelligence', path: "/app/physical-intelligence" },
    { name: 'Nutrition & Kitchen Intelligence', path: "/app/nutrition-kitchen" },
    { name: 'Mental Health', path: "/app/mental-health" },
    { name: 'Progress Tracking', path: "/app/progress-tracking" },
    { name: 'Browse All App Features', path: "/app/features" },
  ];

  return (
    <>
      {/* 1. ANNOUNCEMENT BAR */}
      <div className="fixed top-0 left-0 right-0 z-[110] bg-[#002534] text-white py-2 px-6 flex justify-center items-center h-14">
        <div className="text-[14px] md:text-xs font-bold text-center tracking-tight md:tracking-wider uppercase">
          <a href="https://app.embracehealth.ai" className="hover:text-[#00B6A0] transition-colors">
            One App.      One Login.      One Dashboard.         The Full Picture
          </a>
          <span className="mx-2 text-[#00B6A0]">+</span>
          <a href="https://shop.embracehealth.ai" className="hover:text-[#00B6A0] transition-colors">
            Tele-Medicine.       Tele-Dentistry.        Tele-Sleep
          </a>
        </div>
      </div>

      <header 
        className="fixed top-10 left-0 right-0 z-[100] bg-[#E6E7E9]/90 backdrop-blur-xl border-b border-[#002534]/5 h-20"
      >
        <div className="max-w-[1450px] mx-auto px-6 md:px-12 flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-[#002534] flex items-center">
              <span className="text-[#00B6A0]">embrace</span>
              <span className="text-[#F26422]">health</span>
              <span className="opacity-30 font-light ">.ai</span>
            </a>
          </div>

          {/* DESKTOP NAV (xl only) */}
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
            <div className="flex items-center space-x-3 ml-8 pl-8 border-l border-[#002534]/10">
              <a href="https://coach.embracehealth.ai" className="px-5 py-2.5 bg-[#00B6A0] text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:opacity-90 transition-all">Coaches/Providers</a>
              <a href="https://employer.embracehealth.ai" className="px-5 py-2.5 bg-[#F26422] text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:opacity-90 transition-all">Employers/Brokers</a>
            </div>
          </nav>

{/* ACTIONS */}
<div className="flex items-center space-x-4 ml-auto xl:ml-0">
            {/* UPDATED: Changed from button to anchor tag pointing to the app subdomain */}
            <a 
              href="https://app.embracehealth.ai/login" 
              className="hidden md:block px-8 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#002534] bg-white border border-[#002534]/10 rounded-full hover:bg-gray-50 transition-all shadow-sm"
            >
              Login
            </a>

            {/* Hamburger Button */}
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden z-[110] relative p-3 text-[#002534] bg-white rounded-xl border border-[#002534]/10 shadow-sm transition-all"
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* --- FULLY RESTORED MEGA MENU --- */}
        <div 
          className={`hidden xl:block absolute top-20 left-0 w-full bg-white border-b border-[#002534]/10 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden shadow-2xl ${
            isMenuOpen ? 'max-h-[550px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <div className="max-w-[1450px] mx-auto px-12 py-12 flex">
            
            {/* Column 1: Explore Features */}
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

            {/* Column 2: Visual Article Cards */}
            <div className="flex-1 px-12 flex space-x-8">
              <a href="/article/science-of-glp1" className="flex-1 group cursor-pointer block">
                <div className="rounded-3xl overflow-hidden aspect-[16/10] mb-4 bg-gray-100">
                  <img src="https://picsum.photos/seed/glp1/800/500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="GLP-1 Science" />
                </div>
                <h4 className="text-xl font-bold serif text-[#002534]">The Science of GLP-1</h4>
                <p className="text-sm text-[#002534]/50">How modern medicine is changing weight loss.</p>
              </a>

              <div className="flex-1 group cursor-pointer">
                <div className="rounded-3xl overflow-hidden aspect-[16/10] mb-4 bg-gray-100">
                  <img src="https://picsum.photos/seed/dna/800/500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="DNA Wellness" />
                </div>
                <h4 className="text-xl font-bold serif text-[#002534]">DNA-Driven Wellness</h4>
                <p className="text-sm text-[#002534]/50">Unlock your genetic potential.</p>
              </div>
            </div>

            {/* Column 3: Direct CTA */}
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

      {/* --- FULLY RESTORED MOBILE OVERLAY --- */}
      <div 
        className={`fixed inset-0 bg-white z-[90] transition-transform duration-500 ease-in-out xl:hidden overflow-y-auto pt-32 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="p-8 space-y-12 pb-24">
          <div className="space-y-6">
            <p className="text-[10px] font-black text-[#002534]/30 uppercase tracking-[0.3em]">Navigation</p>
            {TOP_NAV.map((item) => (
              <a key={item.name} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className="block text-4xl font-bold text-[#002534] serif tracking-tight">
                {item.name}
              </a>
            ))}
          </div>

          <div className="space-y-6">
            <p className="text-[10px] font-black text-[#002534]/30 uppercase tracking-[0.3em]">Partners</p>
            <div className="grid grid-cols-1 gap-4">
              <a href="#coaches" className="w-full py-5 bg-[#00B6A0] text-white rounded-2xl font-bold text-center text-lg">Coaches/Providers</a>
              <a href="#brokers" className="w-full py-5 bg-[#F26422] text-white rounded-2xl font-bold text-center text-lg">Employers/Brokers</a>
            </div>
          </div>

          <div className="space-y-6">
             <p className="text-[10px] font-black text-[#002534]/30 uppercase tracking-[0.3em]">Follow Us</p>
             <div className="flex space-x-8 text-[#002534]">
                <a href="#" className="font-bold text-sm">Facebook</a>
                <a href="#" className="font-bold text-sm">TikTok</a>
                <a href="#" className="font-bold text-sm">Snapchat</a>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;