import { Elder, Content } from '@/types';
import { mockElders, mockContent } from '@/data/mockData';

// In a real app, these would be database queries
export function getAllElders(): Elder[] {
  return mockElders;
}

export function getElderById(id: string): Elder | undefined {
  return mockElders.find(elder => elder.id === id);
}

export function getContentByElderId(elderId: string): Content[] {
  return mockContent.filter(content => content.elderId === elderId);
}

export function getContentById(id: string): Content | undefined {
  return mockContent.find(content => content.id === id);
}

export function getAllContent(): Content[] {
  return mockContent;
}
