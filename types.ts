
export interface ProductGroup {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  prompt: string;
  path: string;
}

export interface NavLink {
  label: string;
  path: string;
  children?: NavLink[];
}
