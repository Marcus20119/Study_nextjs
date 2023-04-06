import { GetServerSideProps, GetServerSidePropsContext } from 'next';

interface ISSR {
  data: any;
}

const SSR: React.FC<ISSR> = ({ data }) => {
  return <></>;
};

export default SSR;

export const getServerSideProps: GetServerSideProps<ISSR> = async (
  context: GetServerSidePropsContext
) => {
  /**
   * Lưu dữ liệu vào cache của CDN trong vòng 5s,
   * Chỉ người đầu tiên gửi request lên server là phải đợi hàm "getServerSideProps" chạy,
   * Trong 5s sau đó, nếu như có request khác gửi lên thì chỉ cần lấy trong cache
   * Dữ liệu trả về trong 5s này gần như là ngay lập tức, hạn chế duy nhất là dữ liệu này là dữ liệu cũ
   * Sau khi hết 5s, khi có request gửi lên thì sẽ lại chạy hàm "getServerSideProps" và lặp lại chu trình 5s mới
   */
  context.res.setHeader('Cache-Control', 's-maxage=5');

  context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate');
  return {
    props: {
      data: '',
    },
  };
};
