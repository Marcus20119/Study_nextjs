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
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Method is not supported' });
  }

  const cookies = new Cookies(req, res);
  cookies.set('access_token');
  return res.status(200).json({ message: 'Logout successfully' });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
