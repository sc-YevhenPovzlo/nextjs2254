import { NextRequest, NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';

class CustomPlugin implements MiddlewarePlugin {
  order = 2;

  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
    return res || NextResponse.next();
  }
}

export const customPlugin = new CustomPlugin();
