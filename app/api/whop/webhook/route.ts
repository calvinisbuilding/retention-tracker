import { NextRequest, NextResponse } from 'next/server';

// Placeholder for Whop webhook endpoint (e.g., subscription created/cancelled)
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  console.log('whop-webhook', body);
  // TODO: verify signature from Whop via header if required
  return NextResponse.json({ received: true });
}
