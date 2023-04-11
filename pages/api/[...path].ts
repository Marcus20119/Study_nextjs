// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';

// type Data = {
//   name: string;
// };

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return new Promise(async resolve => {
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get('access_token');
    console.log('accessToken:', accessToken);
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }
    // Không gửi cookie lên server
    req.headers.cookie = '';

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true, // Đổi localhost => target
      selfHandleResponse: false, // Ko Xử lý response mà trả về thẳng client
    });

    proxy.once('proxyRes', () => {
      resolve(true);
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
