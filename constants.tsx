import { ProductGroup } from './types';

export const COLORS = {
  primary: '#0A2621',
  secondary: '#E8EFE8',
  accent: '#B87333',
  bg: '#F9F7F2',
  text: '#1A1A1A',
};

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    id: 'weight',
    title: 'Lose weight',
    description: 'Access a range of GLP-1 treatment plans.',
    imageUrl: '/weight.png', 
    path: '/weight',
    hoverBg: 'group-hover:bg-[#FFF1E7]', // Muted Orange
    prompt: "High-end product shot of GLP-1 vial, blue cap, clean pharmaceutical style.",
  },
  {
    id: 'sex',
    title: 'Have better sex',
    description: 'Clinically proven solutions for performance and libido.',
    imageUrl: '/sex.png',
    path: '/sex',
    hoverBg: 'group-hover:bg-[#E9F5FF]', // Muted Light Blue
    prompt: "Blue and tan pills on a minimalist white linen bed, editorial lighting.",
  },
  {
    id: 'hair',
    title: 'Regrow hair',
    description: 'Stop hair loss and start growing with prescription power.',
    imageUrl: '/hair.png',
    path: '/hair',
    hoverBg: 'group-hover:bg-[#FFF0F0]', // Muted Red
    prompt: "White and blue minoxidil pills, top-down clean studio shot.",
  },
  {
    id: 'testosterone',
    title: 'Boost testosterone',
    description: 'Personalized plans to help you get your edge back.',
    imageUrl: '/testosterone.png',
    path: '/testosterone',
    hoverBg: 'group-hover:bg-[#F9F3E7]', // Muted Tan
    prompt: "Yellow and black enclomiphene capsules floating, professional branding.",
  },
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

export const IMAGE_PROMPTS = {
  hero: "A high-end, minimalist lifestyle shot of a sun-drenched modern wellness space, clean lines, professional clinical but warm vibe.",
  labs: "Medical health charts and data visualizations with a soft green and amber glow, modern UI style.",
};