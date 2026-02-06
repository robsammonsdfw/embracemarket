
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-12 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div>
            <h3 className="text-3xl font-bold serif mb-8">embrace</h3>
            <p className="text-gray-500 max-w-xs leading-relaxed">
              Modern healthcare, DNA-driven results, and personalized prescriptions delivered discreetly.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-gray-600 mb-8">SHOP</p>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Weight Loss</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hair Regrowth</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sexual Health</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testosterone</a></li>
            </ul>
          </div>
          <div>
             <p className="text-[10px] font-bold tracking-widest text-gray-600 mb-8">SUPPORT</p>
             <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Clinical Excellence</a></li>
            </ul>
          </div>
          <div>
             <p className="text-[10px] font-bold tracking-widest text-gray-600 mb-8">LEGAL</p>
             <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Telehealth Consent</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-[10px] text-gray-600 uppercase tracking-widest flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>© 2025 Embrace Health. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#">Instagram</a>
            <a href="#">X / Twitter</a>
            <a href="#">TikTok</a>
          </div>
        </div>
      </div>

      {/* Massive Background Logo */}
      <div className="absolute bottom-[-100px] left-[-50px] md:left-1/2 md:-translate-x-1/2 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[25rem] md:text-[50rem] font-bold serif leading-none">embrace</h2>
      </div>
    </footer>
  );
};

export default Footer;
