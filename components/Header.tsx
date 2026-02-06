
import React, { useState } from 'react';
import MenuDrawer from './MenuDrawer';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-3xl font-bold text-[#0A2621] serif tracking-tighter">
              embrace
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://embracehealth.ai/account/login"
              className="px-6 py-2.5 text-sm font-semibold text-gray-800 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all"
            >
              Log in
            </a>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A2621" strokeWidth="2.5" strokeLinecap="round">
    <line x1="4" y1="8" x2="20" y2="8" />
    <line x1="4" y1="16" x2="20" y2="16" />
  </svg>
);

export default Header;
