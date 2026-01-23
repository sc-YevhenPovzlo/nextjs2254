import { NextRequest, NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';

class CustomRedirectPlugin implements MiddlewarePlugin {
  order = -4;

  async exec(req: NextRequest): Promise<NextResponse> {
    const url = new URL(req.url);
    const pathname = url.pathname;

    const segments = pathname.split('/');
    const locale = segments[1];

    if (locale && locale !== locale.toLowerCase()) {
      segments[1] = locale.toLowerCase();
      url.pathname = segments.join('/');
      return NextResponse.redirect(url, 308);
    }

    return NextResponse.next();
  }
}
export const customRedirectPlugin = new CustomRedirectPlugin();
