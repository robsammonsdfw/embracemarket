
export interface ProductGroup {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  shadowUrl: string; // Separate asset for the "grounded" shadow
  prompt: string;
  path: string;
  hoverBg: string;
}

export interface NavLink {
  label: string;
  path: string;
  children?: NavLink[];
}
