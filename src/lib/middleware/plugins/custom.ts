import { NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';

class CustomPlugin implements MiddlewarePlugin {
  order = 2;

  async exec(): Promise<NextResponse> {
    return NextResponse.next();
  }
}

export const customPlugin = new CustomPlugin();
