import { NextRequest, NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';

class CustomRedirectPlugin implements MiddlewarePlugin {
  order = -4;

  async exec(req: NextRequest): Promise<NextResponse> {
    const url = req.nextUrl.clone();
    const locale = url.locale;
    // Check if the pathname is not already in lowercase
    if (locale !== locale.toLowerCase()) {
      // Redirect to the lowercase version of the URL using a 301 permanent redirect
      return NextResponse.redirect(locale.toLowerCase() + '/' + url.pathname);
    }
    return NextResponse.next();
  }
}
export const customRedirectPlugin = new CustomRedirectPlugin();
