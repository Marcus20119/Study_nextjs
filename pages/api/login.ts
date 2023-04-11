// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import Cookies from 'cookies';

// type Data = {
//   name: string;
// };

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Method is not supported' });
  }
  return new Promise(async resolve => {
    // Không gửi cookie lên server
    req.headers.cookie = '';

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body: string = '';
      proxyRes.on('data', chunk => {
        body += chunk;
      });
      proxyRes.on('end', () => {
        try {
          const { accessToken, expiredAt } = JSON.parse(body);
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== 'development',
          });

          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          });

          (res as NextApiResponse)
            .status(200)
            .json({ message: 'Login Successfully' });
        } catch (err) {
          (res as NextApiResponse)
            .status(500)
            .json({ message: 'Something went Wrong' });
        }
        resolve(true);
      });
    };

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true, // Đổi localhost => target
      selfHandleResponse: true, // Xử lý response trước khi trả về client
    });

    proxy.once('proxyRes', handleLoginResponse);
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
