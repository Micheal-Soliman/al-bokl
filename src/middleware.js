import { NextResponse } from 'next/server';

// URL Redirects for SEO Structure Optimization
const redirects = {
  // Static, exact path redirects to existing routes
  '/about-doctor': '/about/doctor',
  '/doctors': '/about/doctor',
  '/appointment': '/contact/appointment',
  '/contact-us': '/contact',
  '/contact-us-dr-osama-albokl': '/contact',
  '/videos-dr-osama-albokl': '/videos',
  '/puberty': '/puberty-issues',
  '/search': '/articles',
  // Common legacy single slugs to known routes
  '/penile-implants': '/surgeries/penile-implants',
  '/penile-curvature': '/surgeries/penile-curvature',
  '/hydrocele-men': '/surgeries/hydrocele',
  '/varicocele': '/surgeries/varicocele',
  '/microscopic-inspection': '/surgeries/microscopic-inspection',
  '/testicular-aspiration': '/surgeries/testicular-biopsy/tesa',
  '/microscopic-tese': '/surgeries/testicular-biopsy/microscopic-tese',
  '/conventional-tese': '/surgeries/testicular-biopsy/conventional-tese',
  '/broken-penis': '/emergency-surgeries/penile-fracture',
  '/testicular-torsion': '/emergency-surgeries/testicular-torsion',
  '/testicular-rupture': '/emergency-surgeries/testicular-rupture',
  '/erectile-dysfunction-2': '/erectile-dysfunction',
  // Services legacy
  '/services/sexual-health': '/sexual-health',
  '/services/premature-ejaculation': '/sexual-problems/premature-ejaculation',
  '/services/testosterone-deficiency': '/sexual-health',
  '/services/premarital-counseling': '/contact/appointment',
  '/services/healthy-habits': '/videos',
  // Policy pages (consider creating real pages later)
  '/privacy': '/',
  '/terms': '/',
  '/disclaimer': '/',
};

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Normalize multiple consecutive slashes in path
  const normalizedPath = pathname.replace(/\/{2,}/g, '/');
  if (normalizedPath !== pathname) {
    const url = new URL(normalizedPath, request.url);
    return NextResponse.redirect(url, 301);
  }
  
  // Check if the current path needs to be redirected
  if (redirects[pathname]) {
    const redirectUrl = new URL(redirects[pathname], request.url);
    return NextResponse.redirect(redirectUrl, 301); // Permanent redirect for SEO
  }
  
  // Handle trailing slashes for consistency
  if (pathname.endsWith('/') && pathname !== '/') {
    const redirectUrl = new URL(pathname.slice(0, -1), request.url);
    return NextResponse.redirect(redirectUrl, 301);
  }
  
  // Handle legacy WordPress feeds -> return 410 Gone
  if (/\/feed\/?$/.test(pathname)) {
    return new NextResponse(null, { status: 410 });
  }
  
  // Obvious draft URLs -> 410 Gone
  if (/مسودة-تلقائية/.test(pathname) || /\b(draft|auto-draft)\b/i.test(pathname)) {
    return new NextResponse(null, { status: 410 });
  }
  
  // Redirect common WordPress structures to articles listing
  if (/^\/(category|tag|author|blogs-dr-osama-albokl|portfolio-category)(\/|$)/.test(pathname)
      || /^\/articles\/(category|tag)(\/|$)/.test(pathname)) {
    const redirectUrl = new URL('/articles', request.url);
    return NextResponse.redirect(redirectUrl, 301);
  }
  
  // Legacy team-member profiles -> About Doctor
  if (/^\/team-member\//.test(pathname)) {
    const redirectUrl = new URL('/about/doctor', request.url);
    return NextResponse.redirect(redirectUrl, 301);
  }
  
  // Map unknown single-segment slugs to articles by default (legacy root posts)
  const segments = pathname.split('/').filter(Boolean);
  const topLevel = new Set([
    '', 'about', 'about-doctor', 'articles', 'services', 'surgeries', 'conditions',
    'contact', 'videos', 'doctors', 'fertility', 'sexual-health', 'sexual-problems',
    'erectile-dysfunction', 'puberty-problems', 'puberty-issues', 'emergency-surgeries',
    '_next', 'api', 'sitemap.xml', 'rss.xml', 'favicon.ico'
  ]);
  
  if (segments.length === 1) {
    const seg = segments[0];
    const isFile = /\.[a-z0-9]+$/i.test(seg);
    if (!isFile && !topLevel.has(seg)) {
      const normalizedSeg = seg.toLowerCase();
      const redirectUrl = new URL(`/articles/${normalizedSeg}`, request.url);
      return NextResponse.redirect(redirectUrl, 301);
    }
  }
  
  // Add security headers
  const response = NextResponse.next();
  
  // SEO and Security Headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Cache control for static assets
  if (pathname.startsWith('/images/') || pathname.startsWith('/icons/') || pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|rss.xml).*)',
  ],
};
