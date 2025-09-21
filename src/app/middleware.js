import { NextResponse } from 'next/server';

// URL Redirects for SEO Structure Optimization
const redirects = {
  // Old structure to new structure redirects
  '/about-doctor': '/about/doctor',
  '/infertility': '/services/male-infertility',
  '/sexual-health': '/services/sexual-health',
  '/puberty-issues': '/services/puberty-disorders',
  '/emergency-surgeries': '/services/emergency-care',
  '/erectile-dysfunction': '/conditions/erectile-dysfunction',
  
  // Surgery redirects
  '/surgeries': '/treatments/surgical',
  '/surgeries/varicocele': '/treatments/surgical/varicocele',
  '/surgeries/penile-implants': '/treatments/surgical/penile-implants',
  '/surgeries/penile-curvature': '/treatments/surgical/penile-curvature',
  '/surgeries/microscopic-inspection': '/treatments/surgical/microscopic-extraction',
  '/surgeries/hydrocele': '/treatments/surgical/hydrocele',
  
  // Articles structure
  '/articles': '/resources/articles',
  '/videos': '/resources/videos',
  
  // Contact redirects
  '/doctors': '/about/doctor',
  '/appointment': '/contact/appointment',
  
  // Conditions redirects
  '/sexual-health/premature-ejaculation': '/conditions/premature-ejaculation',
  '/sexual-health/erectile-dysfunction': '/conditions/erectile-dysfunction',
  '/puberty': '/services/puberty-disorders',
  '/consultation/pre-marriage': '/services/sexual-health',
  '/health-habits': '/resources/guides',
  
  // Legacy URLs
  '/infertility/azoospermia': '/conditions/male-infertility',
  '/infertility/testicular-problems': '/conditions/varicocele',
  '/infertility/vas-deferens-blockage': '/conditions/male-infertility',
  '/infertility/poor-sperm-motility': '/conditions/male-infertility',
  '/infertility/sperm-abnormalities': '/conditions/male-infertility',
};

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
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
