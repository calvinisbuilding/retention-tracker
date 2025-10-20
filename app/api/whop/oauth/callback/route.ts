import { NextRequest, NextResponse } from 'next/server';

// Placeholder for Whop OAuth callback handler
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  console.log('whop-oauth-callback', { code });
  // TODO: exchange code for token with Whop
  return NextResponse.redirect(new URL('/', req.url));
}
