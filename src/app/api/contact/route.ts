import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, phone, email, message } = body;

    if (!name || !company || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await db.contactSubmission.create({
      data: {
        name,
        company,
        phone,
        email,
        message: message || null,
      },
    });

    return NextResponse.json(
      { success: true, message: 'Submission received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
