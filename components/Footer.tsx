import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002534] text-white pt-32 pb-12 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center text-3xl font-bold serif mb-8">
              <span className="text-[#00B6A0]">embrace</span>
              <span className="text-[#F26422]">health</span>
            </div>
            <p className="text-white/40 max-w-xs leading-relaxed text-sm mb-8">
              Modern healthcare, DNA-driven results, and personalized prescriptions delivered with clinical precision.
            </p>
            {/* LegitScript Seal */}
            <a 
              href="https://www.legitscript.com/websites/?checker_keywords=embracehealth.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src="/44740977.png" 
                alt="LegitScript Certified" 
                className="w-32 h-auto"
              />
            </a>
          </div>

          {/* Solutions Column */}
          <div>
            <p className="text-[10px] font-bold tracking-widest text-white/20 mb-8 uppercase">SOLUTIONS</p>
            <ul className="space-y-4 text-white/50 font-medium text-sm">
              <li><a href="https://shop.embracehealth.ai/collections/weight-loss" className="hover:text-[#00B6A0] transition-colors">Weight Loss</a></li>
              <li><a href="https://shop.embracehealth.ai/collections/hair-loss" className="hover:text-[#00B6A0] transition-colors">Hair Regrowth</a></li>
              <li><a href="https://shop.embracehealth.ai/collections/erectile-dysfunction" className="hover:text-[#00B6A0] transition-colors">Sexual Health</a></li>
              <li><a href="https://shop.embracehealth.ai/collections/testosterone" className="hover:text-[#00B6A0] transition-colors">Testosterone</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
             <p className="text-[10px] font-bold tracking-widest text-white/20 mb-8 uppercase">RESOURCES</p>
             <ul className="space-y-4 text-white/50 font-medium text-sm">
              <li><a href="/about" className="hover:text-[#F26422] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#F26422] transition-colors">Help Center</a></li>
              <li><a href="/login" className="hover:text-[#F26422] transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-[#F26422] transition-colors">Clinical Standards</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
             <p className="text-[10px] font-bold tracking-widest text-white/20 mb-8 uppercase">LEGAL</p>
             <ul className="space-y-4 text-white/50 font-medium text-sm">
              <li><a href="https://shop.embracehealth.ai/pages/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="https://shop.embracehealth.ai/pages/terms-of-services" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="https://shop.embracehealth.ai/pages/telemedicineconsent" className="hover:text-white transition-colors">Telehealth Consent</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-12">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">© 2025 Embrace Health AI. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold tracking-widest uppercase text-white/40">
            <a href="https://www.facebook.com/embracehealthai/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">Facebook</a>
            <a href="https://www.instagram.com/embracehealthai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">Instagram</a>
            <a href="https://www.tiktok.com/@embracehealthai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">TikTok</a>
            <a href="https://www.snapchat.com/@embracehealthai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">Snapchat</a>
            <a href="https://x.com/embracehealthai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">X</a>
            <a href="https://www.linkedin.com/company/embracehealthai/about/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">LinkedIn</a>
          </div>
        </div>

        {/* Disclaimer Text */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xs text-white/30 leading-relaxed font-medium">
            Disclaimer: EmbraceHealth.ai website is not associated with Embracehealth.com™. This website is not associated with or endorsed by www.embracehealth.com. Individuals interested in products or services from www.embracehealth.com should consult with them directly.
          </p>
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