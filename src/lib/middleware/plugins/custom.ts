import { NextRequest, NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';

class CustomPlugin implements MiddlewarePlugin {
  order = 2;

  async exec(req: NextRequest): Promise<NextResponse> {
    console.log('req.nextUrl.locale: ' + req.nextUrl.locale);
    console.log('req.nextUrl.pathname: ' + req.nextUrl.pathname);
    console.log('req.nextUrl.origin: ' + req.nextUrl.origin);
    console.log('req.nextUrl: ' + req.nextUrl);
    console.log('req.url: ' + req.url);
    return NextResponse.next();
  }
}

export const customPlugin = new CustomPlugin();
