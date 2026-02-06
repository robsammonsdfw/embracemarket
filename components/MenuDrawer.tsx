
import React from 'react';
import { NAV_EXPLORE } from '../constants';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white z-[70] transform transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full overflow-y-auto no-scrollbar p-10">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl font-bold serif text-[#0A2621]">Menu</h2>
            <div className="flex items-center space-x-6">
              <button className="p-2 text-gray-400 hover:text-black transition-colors"><UserIcon /></button>
              <button className="p-2 text-gray-400 hover:text-black transition-colors"><CartIcon /></button>
              <button onClick={onClose} className="p-2 text-gray-800"><CloseIcon /></button>
            </div>
          </div>

          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-8">EXPLORE</p>
            <div className="space-y-8">
              {NAV_EXPLORE.map((item) => (
                <a 
                  key={item.label}
                  href={`#${item.path}`}
                  className="flex justify-between items-center text-2xl font-semibold text-gray-800 hover:text-[#0A2621] group transition-colors"
                >
                  {item.label}
                  <ArrowRightIcon />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-[2.5rem] p-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-8">TOP TREATMENTS</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-[2rem] shadow-sm flex flex-col items-center">
                <div className="flex space-x-1 mb-4 self-start">
                  <span className="text-[9px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded font-bold uppercase">Rx</span>
                  <span className="text-[9px] px-2 py-0.5 bg-green-50 text-green-700 rounded font-bold uppercase">Popular</span>
                </div>
                <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=100" className="w-20 h-20 mb-4" />
              </div>
              <div className="bg-white p-6 rounded-[2rem] shadow-sm flex flex-col items-center">
                <div className="flex space-x-1 mb-4 self-start">
                  <span className="text-[9px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded font-bold uppercase">Rx</span>
                  <span className="text-[9px] px-2 py-0.5 bg-green-50 text-green-700 rounded font-bold uppercase">New</span>
                </div>
                <img src="https://images.unsplash.com/photo-1550573104-4776c02de124?auto=format&fit=crop&q=80&w=100" className="w-20 h-20 mb-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CloseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
);
const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/></svg>
);
const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-200 group-hover:text-[#0A2621] transition-colors"><path d="M9 18l6-6-6-6"/></svg>
);

export default MenuDrawer;
