
import React from 'react';
import { PRODUCT_GROUPS, IMAGE_PROMPTS } from '../constants';

const PromptsList: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#E8EFE8] rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#0A2621] mb-4 serif">Asset Generation Guide</h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            To achieve the high-end Hims aesthetic for your store, use these specifically crafted prompts with Gemini (Nano Banana) or similar high-quality image generators.
          </p>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#0A2621] mb-2">Main Hero Background</h4>
              <code className="text-sm text-gray-600 italic leading-relaxed block bg-gray-50 p-3 rounded">{IMAGE_PROMPTS.hero}</code>
            </div>

            {PRODUCT_GROUPS.map((group) => (
              <div key={group.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#0A2621] mb-2">{group.title} Category Image</h4>
                <code className="text-sm text-gray-600 italic leading-relaxed block bg-gray-50 p-3 rounded">{group.prompt}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptsList;
