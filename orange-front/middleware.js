// middleware.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(req) {
  const cookieStore = cookies();
  const session = cookieStore.get('appSession'); // Default cookie set by Auth0

  if (!session) {
    const loginUrl = new URL('/api/auth/login', req.url);
    loginUrl.searchParams.set('returnTo', req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Apply middleware only to /platform/* routes
export const config = {
  matcher: ['/platform/:path*'],
};
