import React, { useState, useEffect } from 'react';
import { PRODUCT_GROUPS, MINOR_TREATMENTS } from '../constants';

const HeroGrid: React.FC = () => {
  const [isUSUser, setIsUSUser] = useState<boolean | null>(null);

  // Detect user location on mount
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        setIsUSUser(data.country_code === 'US');
      })
      .catch(() => {
        // Fallback to true if API fails to ensure US users see the shop
        setIsUSUser(true);
      });
  }, []);

  // Prevent layout shift during location detection
  if (isUSUser === null) return <div className="pt-32 pb-16 min-h-[600px] bg-[#E6E7E9]" />;

  return (
    <section className="pt-32 pb-16 px-6 md:px-12 bg-[#E6E7E9]">
      <div className="max-w-[1450px] mx-auto">
        
        {/* --- DYNAMIC HERO SECTION --- */}
        <div className={`flex flex-col ${isUSUser ? 'lg:flex-row' : ''} gap-6 mb-12 opacity-0 animate-reveal`} style={{ animationDelay: '0.1s' }}>
          
          {/* LEFT COLUMN: The Worldwide App */}
          <div className={`${isUSUser ? 'lg:w-1/2' : 'w-full'} bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-[#002534]/5 flex flex-col justify-between relative overflow-hidden group`}>
             <div className="relative z-10 mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-[#002534] serif tracking-tighter leading-[1.05] mb-4">
                  Worldwide App.
                </h1>
                <p className="text-lg text-[#002534]/60 mb-8 max-w-md">
                  Re-imagine your body, track food, and take action, all from your smart phone.
                </p>
                
                <ul className="mb-8 space-y-3 mt-6">
                  <li className="flex items-start text-[#002534] text-sm md:text-base font-medium">
                    <svg className="w-5 h-5 text-[#00B6A0] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    <span><strong className="font-bold">3D Body Scans:</strong> AI-enabled visual projections & progress tracking.</span>
                  </li>
                  <li className="flex items-start text-[#002534] text-sm md:text-base font-medium">
                    <svg className="w-5 h-5 text-[#00B6A0] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    <span><strong className="font-bold">AI Nutrition:</strong> Snap a photo or scan a barcode for instant nutrient data.</span>
                  </li>
                  <li className="flex items-start text-[#002534] text-sm md:text-base font-medium">
                    <svg className="w-5 h-5 text-[#00B6A0] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    <span><strong className="font-bold">Activity Hub:</strong> Running + GPS + Workouts + Wearables + Community.</span>
                  </li>
                  <li className="flex items-start text-[#002534] text-sm md:text-base font-medium">
                    <svg className="w-5 h-5 text-[#00B6A0] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    <span><strong className="font-bold">Personalization:</strong> Maximize performance with behavioral testing.</span>
                  </li>
                </ul>

                <a href="https://app.embracehealth.ai" className="inline-block px-8 py-3.5 bg-[#002534] text-white font-bold rounded-full shadow-lg hover:bg-black transition-all text-sm text-center">
                  Get the App
                </a>
             </div>

             <div className="w-full h-[280px] bg-[#E6E7E9] rounded-[2rem] border border-[#002534]/5 flex items-center justify-center overflow-hidden relative mt-8">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                  <source src="/phone_video.mp4" type="video/mp4" />
                </video>
             </div>
          </div>

          {/* RIGHT COLUMN: Telehealth (ONLY SHOWN TO US USERS) */}
          {isUSUser && (
            <div className="lg:w-1/2 bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-[#002534]/5 flex flex-col justify-between relative overflow-hidden group">
               <div className="relative z-10 mb-10">
                  <h1 className="text-4xl md:text-5xl font-bold text-[#B87333] serif tracking-tighter leading-[1.05] mb-4">
                    Telehealth – Made in the USA.
                  </h1>
                  <p className="text-lg text-[#002534]/60 mb-8 max-w-md">
                    Clinical care, prescriptions, and labs at your door all from US sources.
                  </p>
                  
                  <ul className="mb-8 space-y-3 mt-6">
                    <li className="flex items-start text-[#002534] text-sm md:text-base font-medium">
                      <svg className="w-5 h-5 text-[#F26422] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                      <span><strong className="font-bold">Start Your Journey:</strong> Secure online intakes—no waiting rooms.</span>
                    </li>
                    <li className="flex items-start text-[#002534] text-sm md:text-base font-medium">
                      <svg className="w-5 h-5 text-[#F26422] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                      <span><strong className="font-bold">Doctor Review:</strong> Personalized plans from US-licensed physicians.</span>
                    </li>
                    <li className="flex items-start text-[#002534] text-sm md:text-base font-medium">
                      <svg className="w-5 h-5 text-[#F26422] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                      <span><strong className="font-bold">Discreet Delivery:</strong> Fast, free shipping for medication and labs.</span>
                    </li>
                    <li className="flex items-start text-[#002534] text-sm md:text-base font-medium">
                      <svg className="w-5 h-5 text-[#F26422] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                      <span><strong className="font-bold">Sleep Wellness:</strong> At-home sleep testing & therapy for apnea.</span>
                    </li>
                  </ul>

                  <a href="https://shop.embracehealth.ai" className="inline-block px-8 py-3.5 bg-[#B87333] text-white font-bold rounded-full shadow-lg hover:bg-[#8A5626] transition-all text-sm text-center">
                    Explore Treatments
                  </a>
               </div>

               <div className="w-full h-[280px] bg-[#E6E7E9] rounded-[2rem] border border-[#002534]/5 flex items-center justify-center overflow-hidden relative mt-8">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <source src="/telemed_hero.mp4" type="video/mp4" />
                  </video>
               </div>
            </div>
          )}
        </div>

        {/* --- TOP ROW: PRIMARY HEALTH GOALS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {PRODUCT_GROUPS.map((group, idx) => (
            <a 
              key={group.id} 
              href={group.path}
              className={`group relative overflow-hidden p-10 rounded-[2.5rem] min-h-[420px] bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] card-shadow-hover opacity-0 animate-reveal ${group.hoverBg}`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4 relative z-20">
                <h3 className="text-2xl font-bold leading-[1.1] serif text-[#002534]">
                  {group.id === 'sleep' ? 'Snoring &' : group.title.split(' ')[0]} <br />
                  <span className="text-[#F26422]">
                    {group.id === 'sleep' ? 'Sleep Apnea' : group.title.split(' ').slice(1).join(' ')}
                  </span>
                </h3>
                <div className="text-[#002534] transition-transform duration-700 group-hover:rotate-45">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                    </svg>
                </div>
              </div>
              
              <p className="text-xs max-w-[150px] leading-relaxed text-[#002534]/40 transition-all group-hover:text-[#002534] relative z-20 mb-8">
                {group.id === 'sex' ? 'Clinically proven solutions for performance and libido for men.' : 
                 group.id === 'sleep' ? 'Get diagnosed with convenient home sleep testing.' :
                 group.id === 'labs' ? 'Genetic Insights for Obesity Phenotyping' :
                 group.description}
              </p>
              
              <div className="absolute inset-x-0 bottom-0 w-full h-64 pointer-events-none flex items-end justify-center mb-[-5%]">
                <img 
                  src={group.shadowUrl} 
                  alt="" 
                  className="absolute bottom-4 w-[75%] h-auto object-contain opacity-40 transition-transform duration-700 ease-out group-hover:scale-110 mix-blend-multiply"
                />
                <img 
                  src={group.id === 'weight' ? '/glp1_branded.png' : group.imageUrl}
                  alt={group.title}
                  className="w-[85%] h-auto object-contain relative z-10 transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-12 group-hover:scale-105"
                />
              </div>
            </a>
          ))}
        </div>

        {/* --- BOTTOM ROW: APP INTELLIGENCE --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {MINOR_TREATMENTS.map((item, idx) => (
            <a
              key={item.id}
              href={item.path}
              className="group relative overflow-hidden p-10 rounded-[2.5rem] min-h-[420px] bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] card-shadow-hover opacity-0 animate-reveal hover:bg-gray-50/80"
              style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4 relative z-20">
                <h3 className="text-xl md:text-2xl font-bold leading-[1.1] serif text-[#002534] pr-4">
                  {item.id === 'physical' ? 'Full-Body Intelligence' :
                   item.id === 'nutrition' ? 'Food & Nutrient Intelligence' :
                   item.id === 'mental' ? 'Mental Motivation Analysis' :
                   item.id === 'tracking' ? 'Wearable Integrations' :
                   item.title}
                </h3>
                <div className="text-[#002534]/30 transition-transform duration-700 group-hover:rotate-45 group-hover:text-[#F26422] flex-shrink-0">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                    </svg>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 w-full h-64 pointer-events-none flex items-end justify-center mb-[-5%]">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-[85%] h-auto object-contain relative z-10 transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-12 group-hover:scale-105 drop-shadow-2xl"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroGrid;