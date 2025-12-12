export type MenuCategory = 'Antipasti' | 'Primi' | 'Secondi' | 'Dolci';

export interface MenuItem {
  id: number;
  category: MenuCategory;
  name: string;
  price: string;
  description: string;
  image?: string;
}

export interface NavLink {
  label: string;
  path: string;
}
// ...
export interface Wine {
  id: number;
  name: string;
  year: string;
  origin: string;
  price: string;
  type: 'Red' | 'White' | 'Sparkling';
  image?: string;
}

export interface LocationInfo {
  id: number;
  city: string;
  address: string;
  phone: string;
  coordinates: { lat: number, lng: number };
  image?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  copyright: string;
  socials?: {
    instagram?: string;
    facebook?: string;
  };
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}


