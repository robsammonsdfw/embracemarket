
import React, { useState } from 'react';
import MenuDrawer from './MenuDrawer';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#E6E7E9]/80 backdrop-blur-xl border-b border-[#002534]/5">
        <div className="max-w-[1450px] mx-auto px-6 md:px-12 flex items-center justify-between h-24">
          <div className="flex items-center">
            <a href="/" onClick={(e) => { e.preventDefault(); window.location.reload(); }} className="text-3xl font-bold text-[#002534] flex items-center">
              <span className="text-[#00B6A0]">embrace</span>
              <span className="text-[#F26422]">health</span>
              <span className="opacity-30 font-light text-2xl">.ai</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onLoginClick}
              className="px-8 py-3 text-xs font-black uppercase tracking-[0.2em] text-[#002534] bg-white border border-[#002534]/10 rounded-full hover:bg-gray-50 transition-all shadow-sm active:scale-95"
            >
              Log in
            </button>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-4 bg-white border border-[#002534]/10 rounded-full hover:bg-gray-50 transition-all shadow-sm active:scale-90"
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
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002534" strokeWidth="2.5" strokeLinecap="round">
    <line x1="4" y1="8" x2="20" y2="8" />
    <line x1="4" y1="16" x2="20" y2="16" />
  </svg>
);

export default Header;
