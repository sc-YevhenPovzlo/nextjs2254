import { NextRequest, NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';

class TestPlugin implements MiddlewarePlugin {
  order = 2;

  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
    console.log('Run custom middleware:' + req.url + ' ' + res?.url);
    return NextResponse.next();
  }
}

export const testPlugin = new TestPlugin();
