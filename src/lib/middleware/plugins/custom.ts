import { NextRequest, NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';

class CustomPlugin implements MiddlewarePlugin {
  order = -4;

  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
    console.log('Run custom middleware:' + req.url + ' ' + res.url);
    return NextResponse.next();
  }
}

export const customPlugin = new CustomPlugin();
