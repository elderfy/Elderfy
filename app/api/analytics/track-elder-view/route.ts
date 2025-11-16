import { NextRequest, NextResponse } from 'next/server';
import { incrementElderViews } from '@/lib/analytics';

export async function POST(request: NextRequest) {
  try {
    const { elderId } = await request.json();

    if (!elderId) {
      return NextResponse.json(
        { error: 'Elder ID is required' },
        { status: 400 }
      );
    }

    const newViewCount = incrementElderViews(elderId);

    return NextResponse.json({
      success: true,
      elderId,
      views: newViewCount,
    });
  } catch (error) {
    console.error('Error tracking elder view:', error);
    return NextResponse.json(
      { error: 'Failed to track view' },
      { status: 500 }
    );
  }
}
