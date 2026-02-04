import { NextRequest, NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';

class CustomPlugin implements MiddlewarePlugin {
  order = 2;

  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
    return async (req: NextRequest, res?: NextResponse) => {
      try {
        return res || NextResponse.next();
      } catch (error) {
        console.log('Custom middleware failed:' + req.url);
        console.log(error);
        return res || NextResponse.next();
      }
    };
  }
}

export const customPlugin = new CustomPlugin();
