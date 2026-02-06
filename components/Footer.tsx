
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002534] text-white pt-32 pb-12 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div>
            <div className="flex items-center text-3xl font-bold serif mb-8">
              <span className="text-[#00B6A0]">embrace</span>
              <span className="text-[#F26422]">health</span>
            </div>
            <p className="text-white/40 max-w-xs leading-relaxed text-sm">
              Modern healthcare, DNA-driven results, and personalized prescriptions delivered with clinical precision.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-white/20 mb-8 uppercase">SOLUTIONS</p>
            <ul className="space-y-4 text-white/50 font-medium text-sm">
              <li><a href="#" className="hover:text-[#00B6A0] transition-colors">Weight Loss</a></li>
              <li><a href="#" className="hover:text-[#00B6A0] transition-colors">Hair Regrowth</a></li>
              <li><a href="#" className="hover:text-[#00B6A0] transition-colors">Sexual Health</a></li>
              <li><a href="#" className="hover:text-[#00B6A0] transition-colors">Testosterone</a></li>
            </ul>
          </div>
          <div>
             <p className="text-[10px] font-bold tracking-widest text-white/20 mb-8 uppercase">RESOURCES</p>
             <ul className="space-y-4 text-white/50 font-medium text-sm">
              <li><a href="#" className="hover:text-[#F26422] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#F26422] transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-[#F26422] transition-colors">Clinical Standards</a></li>
            </ul>
          </div>
          <div>
             <p className="text-[10px] font-bold tracking-widest text-white/20 mb-8 uppercase">LEGAL</p>
             <ul className="space-y-4 text-white/50 font-medium text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Telehealth Consent</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-[10px] text-white/20 uppercase tracking-widest flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>© 2025 Embrace Health AI. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-all">Instagram</a>
            <a href="#" className="hover:text-white transition-all">X</a>
            <a href="#" className="hover:text-white transition-all">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Massive Background Logo */}
      <div className="absolute bottom-[-100px] left-[-50px] md:left-1/2 md:-translate-x-1/2 opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[25rem] md:text-[50rem] font-bold serif leading-none">embrace</h2>
      </div>
    </footer>
  );
};

export default Footer;
