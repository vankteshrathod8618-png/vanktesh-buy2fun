import { NextResponse } from 'next/server';
import { validateEmail, validateMessage, validateName } from '@/lib/validation';

export async function POST(request: Request) {
    const body = await request.json();
    const { name, email, message } = body || {};

    if (!validateName(name) || !validateEmail(email) || !validateMessage(message)) {
        return NextResponse.json({ error: 'Please provide a valid name, email, and message.' }, { status: 400 });
    }

    // In production, connect this endpoint to an email provider, CRM, or ticket workflow.
    return NextResponse.json({ success: true });
}
