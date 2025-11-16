import { NextRequest, NextResponse } from 'next/server';
import { incrementContentViews } from '@/lib/analytics';

export async function POST(request: NextRequest) {
  try {
    const { contentId } = await request.json();

    if (!contentId) {
      return NextResponse.json(
        { error: 'Content ID is required' },
        { status: 400 }
      );
    }

    const newViewCount = incrementContentViews(contentId);

    return NextResponse.json({
      success: true,
      contentId,
      views: newViewCount,
    });
  } catch (error) {
    console.error('Error tracking content view:', error);
    return NextResponse.json(
      { error: 'Failed to track view' },
      { status: 500 }
    );
  }
}
