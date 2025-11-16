import fs from 'fs';
import path from 'path';

const analyticsFilePath = path.join(process.cwd(), 'data', 'analytics.json');

export interface AnalyticsData {
  elderViews: Record<string, number>;
  contentViews: Record<string, number>;
}

// Read analytics data from JSON file
export function getAnalyticsData(): AnalyticsData {
  try {
    const fileContents = fs.readFileSync(analyticsFilePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading analytics data:', error);
    // Return default structure if file doesn't exist or is corrupted
    return {
      elderViews: {},
      contentViews: {},
    };
  }
}

// Write analytics data to JSON file
export function saveAnalyticsData(data: AnalyticsData): void {
  try {
    fs.writeFileSync(analyticsFilePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving analytics data:', error);
  }
}

// Increment elder profile view count
export function incrementElderViews(elderId: string): number {
  const data = getAnalyticsData();
  const currentViews = data.elderViews[elderId] || 0;
  data.elderViews[elderId] = currentViews + 1;
  saveAnalyticsData(data);
  return data.elderViews[elderId];
}

// Increment content view count
export function incrementContentViews(contentId: string): number {
  const data = getAnalyticsData();
  const currentViews = data.contentViews[contentId] || 0;
  data.contentViews[contentId] = currentViews + 1;
  saveAnalyticsData(data);
  return data.contentViews[contentId];
}

// Get elder view count
export function getElderViews(elderId: string): number {
  const data = getAnalyticsData();
  return data.elderViews[elderId] || 0;
}

// Get content view count
export function getContentViews(contentId: string): number {
  const data = getAnalyticsData();
  return data.contentViews[contentId] || 0;
}

// Get all analytics data for display
export function getAllAnalytics() {
  return getAnalyticsData();
}
