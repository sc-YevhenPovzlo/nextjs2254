import { NextRequest, NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';

class CustomPlugin implements MiddlewarePlugin {
  order = 2;

  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
    console.log('Run custom middleware:' + req.url);
    return res || NextResponse.next();
  }
}

export const customPlugin = new CustomPlugin();
