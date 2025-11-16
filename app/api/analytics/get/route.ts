import { NextRequest, NextResponse } from 'next/server';
import { getAllAnalytics, getElderViews, getContentViews } from '@/lib/analytics';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const elderId = searchParams.get('elderId');
    const contentId = searchParams.get('contentId');

    // Return specific elder views
    if (elderId) {
      const views = getElderViews(elderId);
      return NextResponse.json({ elderId, views });
    }

    // Return specific content views
    if (contentId) {
      const views = getContentViews(contentId);
      return NextResponse.json({ contentId, views });
    }

    // Return all analytics data
    const allData = getAllAnalytics();
    return NextResponse.json(allData);
  } catch (error) {
    console.error('Error getting analytics:', error);
    return NextResponse.json(
      { error: 'Failed to get analytics' },
      { status: 500 }
    );
  }
}
