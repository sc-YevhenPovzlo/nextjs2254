import { NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';

class CustomPlugin implements MiddlewarePlugin {
  order = 4;

  async exec(): Promise<NextResponse> {
    return NextResponse.next();
  }
}

export const customPlugin = new CustomPlugin();
