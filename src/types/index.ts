export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  category: 'bridal' | 'party' | 'engagement' | 'personal';
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Engagement' | 'Party' | 'Editorial';
  image: string;
  clientName?: string;
  location?: string;
  details: string;
  productsUsed: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  avatar: string;
  rating: number;
  occasion: string;
  date: string;
}

export interface BookingSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  timeSlot: string;
  venueCity?: string;
  message?: string;
  createdAt: string;
}
