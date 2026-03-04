import React, { useState } from 'react';
import { PRODUCT_GROUPS, NAV_EXPLORE } from '../constants';

interface HeaderProps {
  onLoginClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-[#E6E7E9] border-b border-[#002534]/5"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-[1450px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-[#002534] flex items-center">
            <span className="text-[#00B6A0]">embrace</span>
            <span className="text-[#F26422]">health</span>
            <span className="opacity-30 font-light text-xl">.ai</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {PRODUCT_GROUPS.map((group) => (
            <div
              key={group.id}
              className="relative h-20 flex items-center"
              onMouseEnter={() => setActiveMenu(group.id)}
            >
              <button className="text-sm font-bold text-[#002534] hover:text-[#00B6A0] transition-colors uppercase tracking-wider">
                {group.title}
              </button>
            </div>
          ))}
          <a href="/labs" className="text-sm font-bold text-[#002534] uppercase tracking-wider">Labs & DNA</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={onLoginClick}
            className="px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#002534] bg-white border border-[#002534]/10 rounded-full hover:bg-gray-50 transition-all shadow-sm"
          >
            Log in
          </button>
        </div>
      </div>

      {/* FULL WIDTH MEGA MENU DROPDOWN */}
      <div 
        className={`absolute top-20 left-0 w-full bg-white border-b border-[#002534]/10 transition-all duration-300 ease-in-out overflow-hidden shadow-2xl ${
          activeMenu ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-[1450px] mx-auto px-12 py-12 grid grid-cols-4 gap-12">
          {/* Column 1: Main Category Links */}
          <div className="space-y-6">
            <p className="text-[10px] font-black text-[#002534]/30 uppercase tracking-[0.2em]">Treatments</p>
            <ul className="space-y-4">
              {PRODUCT_GROUPS.map(item => (
                <li key={item.id}>
                  <a href={item.path} className="text-xl font-bold serif text-[#002534] hover:text-[#F26422] transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Featured Content (Dynamic based on hover if desired) */}
          <div className="col-span-2 grid grid-cols-2 gap-6">
             <div className="bg-[#F9F7F2] rounded-3xl p-6 group cursor-pointer">
                <div className="aspect-video bg-gray-200 rounded-xl mb-4 overflow-hidden">
                   <img src="https://picsum.photos/seed/health1/400/250" className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Featured" />
                </div>
                <h4 className="font-bold text-[#002534]">The Science of GLP-1</h4>
                <p className="text-sm text-[#002534]/60">How modern medicine is changing weight loss.</p>
             </div>
             <div className="bg-[#F9F7F2] rounded-3xl p-6 group cursor-pointer">
                <div className="aspect-video bg-gray-200 rounded-xl mb-4 overflow-hidden">
                   <img src="https://picsum.photos/seed/health2/400/250" className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Featured" />
                </div>
                <h4 className="font-bold text-[#002534]">DNA-Driven Wellness</h4>
                <p className="text-sm text-[#002534]/60">Unlock your genetic potential.</p>
             </div>
          </div>

          {/* Column 4: Quick Links */}
          <div className="bg-[#002534] rounded-[2rem] p-8 text-white">
            <h3 className="text-2xl font-bold serif mb-4">Ready to start?</h3>
            <p className="text-white/60 text-sm mb-8">Get a personalized treatment plan in minutes.</p>
            <button className="w-full py-4 bg-[#00B6A0] rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-[#002534] transition-all">
              Start Visit
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;