
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
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400',
    path: '/weight',
    prompt: "High-end product photography of a sleek amber glass medical vial with a minimalist 'Embrace' label. Sitting on a warm marble surface, soft morning light, 8k resolution, pharmaceutical luxury aesthetic.",
  },
  {
    id: 'sex',
    title: 'Have better sex',
    description: 'Clinically proven solutions for performance and libido.',
    imageUrl: 'https://images.unsplash.com/photo-1550573104-4776c02de124?auto=format&fit=crop&q=80&w=400',
    path: '/sex',
    prompt: "A single minimalist teal hexagon pill with an engraved 'e' logo, resting on high-quality white linen, dramatic clean shadows, soft-focus bedroom background.",
  },
  {
    id: 'hair',
    title: 'Regrow hair',
    description: 'Stop hair loss and start growing with prescription power.',
    imageUrl: 'https://images.unsplash.com/photo-1590159441119-064826b1580f?auto=format&fit=crop&q=80&w=400',
    path: '/hair',
    prompt: "A modern white medical bottle with a forest green cap, sitting on a pale sage background. The lighting is editorial and soft, highlighting the clean design.",
  },
  {
    id: 'testosterone',
    title: 'Boost testosterone',
    description: 'Personalized plans to help you get your edge back.',
    imageUrl: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400',
    path: '/testosterone',
    prompt: "A close-up of a charcoal-grey circular pill with a premium matte finish, studio lighting with sharp highlights, minimalist composition.",
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
  labs: "A plethora of medical health charts and data visualizations with a soft green and amber glow, modern UI style, professional clinical data look.",
};
