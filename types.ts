export enum ServiceType {
  INDIVIDUAL = 'Individual Therapy',
  COUPLES = 'Couples Counseling',
  FAMILY = 'Family Therapy',
  CHILDREN = 'Child & Adolescent',
  PSYCHIATRY = 'Psychiatry & Medication',
}

export interface BioSection {
  title: string;
  content: string;
}

export interface Therapist {
  id: string;
  name: string;
  title: string;
  specialties: ServiceType[];
  bio: string; // Short bio for card
  fullBio?: BioSection[]; // Detailed bio sections for modal
  imageUrl: string;
  personalImageUrl?: string; // Secondary "human side" image
  available: boolean;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  summary: string;
  date: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

// New interfaces for Program/Service Details
export interface ProgramFAQ {
  question: string;
  answer: string;
}

export interface ProgramDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  features: string[];
  benefits: string[];
  faqs: ProgramFAQ[];
}