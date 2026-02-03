import { NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';

class CustomPlugin implements MiddlewarePlugin {
  order = 2;

  async exec(): Promise<NextResponse> {
    console.log('helloWorld');
    return NextResponse.next();
  }
}

export const customPlugin = new CustomPlugin();
