export interface Elder {
  id: string;
  name: string;
  age: number;
  bio: string;
  photo: string;
  expertise: string[];
  joinedDate: string;
  email: string;
  views?: number;
  totalEngagement?: number; // Total likes + views across all content
}

export interface Content {
  id: string;
  elderId: string;
  type: 'video' | 'text' | 'music' | 'art';
  title: string;
  description: string;
  content: string; // URL for video/music/art, text content for text type
  thumbnail?: string;
  createdAt: string;
  likes: number;
  views?: number;
}

export interface Donation {
  id: string;
  elderId: string;
  amount: number;
  donorName?: string;
  message?: string;
  createdAt: string;
}

export interface Subscription {
  id: string;
  elderId: string;
  subscriberEmail: string;
  amount: number;
  frequency: 'monthly' | 'yearly';
  startDate: string;
  status: 'active' | 'cancelled';
}
