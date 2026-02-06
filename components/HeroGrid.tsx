
import React from 'react';
import { PRODUCT_GROUPS } from '../constants';

const HeroGrid: React.FC = () => {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 bg-[#F9F7F2]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-8xl font-bold text-[#0A2621] serif mb-6 tracking-tighter">
            personalized to you
          </h1>
          <p className="text-gray-500 text-xl font-medium">Customized care starts here</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCT_GROUPS.map((group, idx) => (
            <a 
              key={group.id} 
              href={`#${group.path}`}
              className={`group relative overflow-hidden p-8 rounded-[2.5rem] min-h-[300px] transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between ${
                idx === 2 ? 'bg-[#933333] text-white' : 'bg-white'
              }`}
            >
              <div className="flex justify-between items-start z-10">
                <h3 className="text-2xl font-bold leading-tight serif">
                  {group.title.split(' ')[0]} <br />
                  <span className={`${idx === 2 ? 'text-white/80' : 'text-[#B87333]'}`}>
                    {group.title.split(' ').slice(1).join(' ')}
                  </span>
                </h3>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full border ${idx === 2 ? 'border-white/30' : 'border-gray-200'}`}>
                  <ArrowIcon />
                </div>
              </div>
              
              <div className="absolute right-0 bottom-0 w-44 h-44 md:w-52 md:h-52 transform transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-4 group-hover:-translate-x-2">
                <img 
                  src={group.imageUrl} 
                  alt={group.title}
                  className="w-full h-full object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                />
              </div>
            </a>
          ))}
          
          <div className="col-span-full mt-4">
             <div className="flex items-center justify-between p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:shadow-md transition-all cursor-pointer group">
                <span className="text-xl font-bold text-[#0A2621]">Browse all treatments</span>
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-[#0A2621] group-hover:text-white transition-colors">
                  <SearchIcon />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
);
const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
);

export default HeroGrid;
