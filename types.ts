
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  project: string;
  challenge: string;
  results: string[];
  roi: string;
}

export interface Testimonial {
  id: string;
  author: string;
  position: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
}

export enum ContactType {
  MESSAGE = 'MESSAGE',
  BOOKING = 'BOOKING'
}
