// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';

// type Data = {
//   name: string;
// };

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // Vì đã để token bên trong header nên không cần gửi cookie lên server nữa
  req.headers.cookie = '';

  proxy.web(req, res, {
    target: 'https://js-post-api.herokuapp.com',
    changeOrigin: true, // Đổi localhost:3000 thành target phía trên
    selfHandleResponse: false, // Nếu set = true thì proxy sẽ xử lý response trước khi trả về cho client, còn set = false thì trả về thẳng
  });

  // res.status(200).json({ name: 'John Doe' });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
