import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  productId: z.string().optional(),
  productName: z.string().optional(),
  action: z.string(),
  ts: z.string().optional(),
  extra: z.record(z.string(), z.any()).optional(),
  origin: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const data = await request.json().catch(() => ({}));
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const event = {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
    ip: request.headers.get('x-forwarded-for') || 'unknown',
    ua: request.headers.get('user-agent') || 'unknown',
  };

  // TODO: persist to a database (Whop integration or external store)
  console.log('track-event', event);

  return NextResponse.json({ success: true });
}
