import { ProductGroup } from './types';

export const COLORS = {
  primary: '#002534', 
  secondary: '#E6E7E9', 
  brandTeal: '#00B6A0',
  brandOrange: '#F26422',
  accent: '#B87333', 
  greenButton: '#0A2621', 
  bg: '#E6E7E9',
  text: '#002534',
};

// THESE ARE THE MAIN 5 WIDGETS
export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    id: 'weight',
    title: 'Lose Weight', // Updated
    description: 'Access a range of GLP-1 treatment plans.',
    imageUrl: '/weight.png', 
    shadowUrl: '/weight-shadow.png',
    path: 'https://shop.embracehealth.ai/collections/weight-loss', // Shopify Link
    hoverBg: 'hover:bg-[#FFF4ED]', 
    prompt: "High-end product shot of GLP-1 vial, blue cap, clean pharmaceutical style.",
  },
  {
    id: 'sex',
    title: 'Have Better Sex', // Updated
    description: 'Proven solutions for improved libido.',
    imageUrl: '/sex.png',
    shadowUrl: '/sex-shadow.png',
    path: 'https://shop.embracehealth.ai/collections/erectile-dysfunction', // Shopify Link
    hoverBg: 'hover:bg-[#F2F8FF]', 
    prompt: "Blue and tan pills on a minimalist white linen bed, editorial lighting.",
  },
  {
    id: 'hair',
    title: 'Regrow Hair', // Updated
    description: 'Stop hair loss and start regrowing.',
    imageUrl: '/hair.png',
    shadowUrl: '/hair-shadow.png',
    path: 'https://shop.embracehealth.ai/collections/hair-loss', // Shopify Link
    hoverBg: 'hover:bg-[#FFF2F2]', 
    prompt: "White and blue minoxidil pills, top-down clean studio shot.",
  },
  {
    id: 'sleep',
    title: 'Sleep Health', // Updated from Testosterone
    description: 'Convenient Home Sleep Testing.',
    imageUrl: '/sleep.png', // Keep asset for now or swap to sleep asset
    shadowUrl: '/sleep-shadow.png',
    path: '/app/sleep-health', // Shopify Link
    hoverBg: 'hover:bg-[#FAF6EE]', 
    prompt: "Sleep support solutions floating, professional branding.",
  },
  {
    id: 'labs',
    title: 'DNA Tests', // Updated from Clear Skin
    description: 'Insights for Obesity Phenotyping.',
    imageUrl: '/body.png', // Swap to DNA kit image if available
    shadowUrl: '/body-shadow.png',
    path: 'https://shop.embracehealth.ai/pages/dna-test-kits', // Shopify Link
    hoverBg: 'hover:bg-[#F2FAF6]', 
    prompt: "DNA Kit professional labeling, soft natural lighting.",
  },
];

// THESE ARE THE "WAIT, THERE'S MORE" LOWER 5 WIDGETS
export const MINOR_TREATMENTS = [
  { id: 'physical', title: 'Physical Intelligence', description: '3D Body Mapping, Training & Performance Tools.', path: '/app/physical-intelligence', imageUrl: '/physnew.png' },
  { id: 'nutrition', title: 'Nutrition & Kitchen Intelligence', path: '/app/nutrition-kitchen', imageUrl: '/kitchen.png' },
  { id: 'mental', title: 'Mental Health', path: '/app/mental-health', imageUrl: '/mental.png' },
  { id: 'tracking', title: 'Progress Tracking', path: '/app/progress-tracking', imageUrl: '/progtrk.png' },
  { id: 'features', title: 'Browse All App Features', path: '/app/features', imageUrl: '/alapps.png' },
];
export const NAV_EXPLORE = PRODUCT_GROUPS.map(g => ({ label: g.title, path: g.path }));