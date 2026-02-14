
import { ProductGroup } from './types';

export const COLORS = {
  primary: '#002534', // Brand Dark Blue
  secondary: '#E6E7E9', // Brand Cream/Off-white
  brandTeal: '#00B6A0',
  brandOrange: '#F26422',
  accent: '#B87333', // User requested to keep this for buttons
  greenButton: '#0A2621', // User requested to keep this for buttons
  bg: '#E6E7E9',
  text: '#002534',
};

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    id: 'weight',
    title: 'Lose weight',
    description: 'Access a range of GLP-1 treatment plans.',
    imageUrl: '/weight.png', 
    shadowUrl: '/weight-shadow.png',
    path: '/weight',
    hoverBg: 'hover:bg-[#FFF4ED]', // Pleasant Muted Orange
    prompt: "High-end product shot of GLP-1 vial, blue cap, clean pharmaceutical style.",
  },
  {
    id: 'sex',
    title: 'Have better sex',
    description: 'Clinically proven solutions for performance and libido.',
    imageUrl: '/sex.png',
    shadowUrl: '/sex-shadow.png',
    path: '/sex',
    hoverBg: 'hover:bg-[#F2F8FF]', // Pleasant Muted Light Blue
    prompt: "Blue and tan pills on a minimalist white linen bed, editorial lighting.",
  },
  {
    id: 'hair',
    title: 'Regrow hair',
    description: 'Stop hair loss and start growing with prescription power.',
    imageUrl: '/hair.png',
    shadowUrl: '/hair-shadow.png',
    path: '/hair',
    hoverBg: 'hover:bg-[#FFF2F2]', // Pleasant Muted Red
    prompt: "White and blue minoxidil pills, top-down clean studio shot.",
  },
  {
    id: 'testosterone',
    title: 'Boost testosterone',
    description: 'Personalized plans to help you get your edge back.',
    imageUrl: '/testosterone.png',
    shadowUrl: '/testosterone-shadow.png',
    path: '/testosterone',
    hoverBg: 'hover:bg-[#FAF6EE]', // Pleasant Muted Tan/Yellowish
    prompt: "Yellow and black enclomiphene capsules floating, professional branding.",
  },
  {
    id: 'skin',
    title: 'Clear skin',
    description: 'Prescription-grade dermatological care for a clearer complexion.',
    imageUrl: '/skin.png',
    shadowUrl: '/skin-shadow.png',
    path: '/skin',
    hoverBg: 'hover:bg-[#F2FAF6]', // Muted Greenish-Teal
    prompt: "Minimalist apothecary bottle with professional labeling, soft natural lighting.",
  },
];

// Create a new constant for the smaller widgets
export const MINOR_TREATMENTS = [
  { id: 'mental', title: 'Mental Health', path: '/mental', icon: '🧠' },
  { id: 'sleep', title: 'Sleep Support', path: '/sleep', icon: '🌙' },
  { id: 'immunity', title: 'Immunity', path: '/immunity', icon: '🛡️' },
  { id: 'energy', title: 'Energy Boost', path: '/energy', icon: '⚡' },
  { id: 'longevity', title: 'Longevity', path: '/longevity', icon: '⏳' },
];

export const NAV_EXPLORE = [
  { label: 'Weight Loss', path: '/weight' },
  { label: 'Labs & DNA', path: '/labs' },
  { label: 'Sexual Health', path: '/sex' },
  { label: 'Testosterone', path: '/testosterone' },
  { label: 'Hair Regrowth', path: '/hair' },
  { label: 'Mental Health', path: '/mental' },
  { label: 'Skin', path: '/skin' },
];

// export const IMAGE_PROMPTS = {
//   hero: "A high-end, minimalist lifestyle shot of a sun-drenched modern wellness space, clean lines, professional clinical but warm vibe.",
//   labs: "Medical health charts and data visualizations with a soft green and amber glow, modern UI style.",
// };
