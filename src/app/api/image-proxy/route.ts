import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url');
  
  if (!url) {
    return new NextResponse('Missing URL parameter', { status: 400 });
  }

  // 基础请求头
  const baseHeaders = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
  };

  let headers: HeadersInit = { ...baseHeaders };

  // 为不同的域名设置特定的请求头
  if (url.includes('doubanio.com')) {
    headers = {
      ...headers,
      'Referer': 'https://movie.douban.com',
      'Origin': 'https://movie.douban.com'
    };
  } else if (url.includes('duoduocdn.com')) {
    headers = {
      ...headers,
      'Referer': 'https://www.duoduo.com',
      'Origin': 'https://www.duoduo.com',
      'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'Sec-Fetch-Dest': 'image',
      'Sec-Fetch-Mode': 'no-cors',
      'Sec-Fetch-Site': 'cross-site'
    };
  }

  try {
    const response = await fetch(url, { 
      headers,
      cache: 'no-store' // 禁用缓存尝试解决 403
    });

    if (!response.ok) {
      console.error(`Failed to fetch image: ${url}, status: ${response.status}`);
      return new NextResponse(`Failed to fetch image: ${response.statusText}`, { 
        status: response.status 
      });
    }

    const blob = await response.blob();
    return new NextResponse(blob, {
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('Error fetching image:', error);
    return new NextResponse('Failed to fetch image', { status: 500 });
  }
}