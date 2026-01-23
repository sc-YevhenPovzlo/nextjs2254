import { NextRequest, NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';

class CustomPlugin implements MiddlewarePlugin {
  order = 2;

  async exec(req: NextRequest): Promise<NextResponse> {
    console.log('helloWorld');
    return NextResponse.next();
  }
}

export const customPlugin = new CustomPlugin();
