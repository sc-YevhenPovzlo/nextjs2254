import { NextRequest, NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';

class CustomPlugin implements MiddlewarePlugin {
  order = 2;

  async exec(req: NextRequest): Promise<NextResponse> {
    console.log(
      'req.nextUrl.locale: ' +
        req.nextUrl.locale +
        ', req.nextUrl.pathname: ' +
        req.nextUrl.pathname +
        ', req.nextUrl.origin: ' +
        req.nextUrl.origin +
        ', req.nextUrl: ' +
        req.nextUrl +
        ', req.url: ' +
        req.url
    );
    return NextResponse.next();
  }
}

export const customPlugin = new CustomPlugin();
