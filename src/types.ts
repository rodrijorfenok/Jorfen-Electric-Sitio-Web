export interface Service {
  id: string;
  title: string;
  benefit: string;
  description: string;
  category: 'EDENOR' | 'INSTALACIONES' | 'REPARACIONES' | 'OTROS';
  featured?: boolean;
}

export interface Problem {
  id: string;
  title: string;
  icon: string;
  solution: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  tag: string; // e.g., 'Alta Medidor', 'Pilar Edenor', 'Certificado'
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface WorkingZone {
  name: string;
  isPopular?: boolean;
}
