import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Tracks the separate mobile state
  const SHOPIFY_BASE = "https://shop.embracehealth.ai";

  const TOP_NAV = [
    { name: 'The Embrace Ecosystem', path: 'https://app.embracehealth.ai' },
    { name: 'Telemedicine Shop', path: 'https://shop.embracehealth.ai' },
    { name: 'About Us', path: '/about' },
  ];

  const EXPLORE_FEATURES = [
    { name: 'Physical Intelligence', path: "/app/physical-intelligence" },
    { name: 'Nutrition & Kitchen Intelligence', path: "/app/nutrition-kitchen" },
    { name: 'Mental Health', path: "/app/mental-health" },
    { name: 'Progress Tracking', path: "/app/progress-tracking" },
    { name: 'Browse All App Features', path: "/app/features" },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-[#E6E7E9]/90 backdrop-blur-xl border-b border-[#002534]/5"
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

        {/* --- 1. DESKTOP NAVIGATION (xl screens only) --- */}
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
          
          {/* Desktop Partner Buttons */}
          <div className="flex items-center space-x-3 ml-8 pl-8 border-l border-[#002534]/10">
            <a href="#coaches" className="px-5 py-2.5 bg-[#00B6A0] text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:opacity-90 transition-all">Coaches</a>
            <a href="#brokers" className="px-5 py-2.5 bg-[#F26422] text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:opacity-90 transition-all">Employers</a>
          </div>
        </nav>

        {/* --- 2. MOBILE ACTIONS (Log In & Hamburger) --- */}
        <div className="flex items-center ml-auto space-x-4">
          <button className="hidden md:block px-8 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#002534] bg-white border border-[#002534]/10 rounded-full hover:bg-gray-50 transition-all shadow-sm">
            Log in
          </button>

          {/* Hamburger Icon - Hidden on xl */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-3 text-[#002534] bg-white rounded-xl border border-[#002534]/10 shadow-sm transition-all active:scale-95"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* --- 3. SEPARATE MOBILE MENU OVERLAY --- */}
      <div 
        className={`xl:hidden fixed inset-0 top-24 bg-white z-40 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-y-auto ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="p-8 space-y-12">
          {/* Main Navigation List */}
          <div className="space-y-8">
            <p className="text-[10px] font-black text-[#002534]/30 uppercase tracking-[0.3em]">Navigation</p>
            {TOP_NAV.map((item) => (
              <a 
                key={item.name} 
                href={item.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-4xl font-bold text-[#002534] serif tracking-tight"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Partner Buttons (Stacked for thumb-reach) */}
          <div className="space-y-6">
            <p className="text-[10px] font-black text-[#002534]/30 uppercase tracking-[0.3em]">Partner Portals</p>
            <div className="grid grid-cols-1 gap-4">
              <a href="#coaches" className="w-full py-5 bg-[#00B6A0] text-white rounded-2xl font-bold text-center text-lg shadow-lg">Coaches Portal</a>
              <a href="#brokers" className="w-full py-5 bg-[#F26422] text-white rounded-2xl font-bold text-center text-lg shadow-lg">Employers Portal</a>
            </div>
          </div>

          {/* Bottom App Feature Quick-Links */}
          <div className="space-y-6 pb-12">
            <p className="text-[10px] font-black text-[#002534]/30 uppercase tracking-[0.3em]">Explore Features</p>
            <div className="grid grid-cols-1 gap-3">
              {EXPLORE_FEATURES.map((feature) => (
                <a key={feature.name} href={feature.path} className="text-[#002534] font-bold text-lg border-b border-[#002534]/5 pb-4 flex justify-between items-center">
                  {feature.name}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- 4. DESKTOP MEGA MENU (xl screens only) --- */}
      <div 
        className={`hidden xl:block absolute top-24 left-0 w-full bg-white border-b border-[#002534]/10 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden shadow-2xl ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <div className="max-w-[1450px] mx-auto px-12 py-12 flex">
          {/* ... (Keep your existing Mega Menu columns/cards here) ... */}
        </div>
      </div>
    </header>
  );
};

export default Header;