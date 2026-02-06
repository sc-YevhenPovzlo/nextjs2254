import { NextRequest, NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';
//import { CloudSDK } from '@sitecore-cloudsdk/core/server';
// import '@sitecore-cloudsdk/events/server';
// import '@sitecore-cloudsdk/search/server';
//import config from 'temp/config';
class TestPlugin implements MiddlewarePlugin {
  order = 2;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
    console.log('Run search middleware:' + req.url + ' ' + res?.url);

    const response = res || NextResponse.next();
    // const language = req.nextUrl.locale;
    // await CloudSDK(req, response, {
    //   sitecoreEdgeContextId: config.sitecoreEdgeContextId,
    //   siteName: config.sitecoreSiteName,
    //   enableServerCookie: false,
    //   sitecoreEdgeUrl: config.sitecoreEdgeUrl,
    // });
    //.addEvents() // Initialize the search package
    //.addSearch()
    //   .initialize(); // Run the initialization logic and set cookies
    // if (language != 'default') {
    //   response.headers.set('rssfeed_language', language);
    // } else {
    //   response.headers.set('rssfeed_language', '');
    // }
    return response;
  }
}

export const testPlugin = new TestPlugin();
