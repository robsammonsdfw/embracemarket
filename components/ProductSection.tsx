
import React from 'react';
import { PRODUCT_GROUPS } from '../constants';

const ProductSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2621] mb-6 serif">Focus on what matters most.</h2>
          <p className="text-gray-600 text-lg">Select a health goal to see our science-backed personalized solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCT_GROUPS.map((group) => (
            <a 
              key={group.id} 
              href={`#${group.path}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-white shadow-md transition-all group-hover:shadow-xl">
                <img 
                  src={group.imageUrl} 
                  alt={group.title}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2621] mb-2 serif">{group.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{group.description}</p>
              <span className="text-sm font-bold text-[#0A2621] underline underline-offset-4 decoration-1 hover:decoration-2">
                Explore Products
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
