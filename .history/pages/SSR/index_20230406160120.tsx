import { GetServerSideProps, GetServerSidePropsContext } from 'next';

interface ISSR {
  data: any;
}

const SSR: React.FC<ISSR> = ({ data }) => {
  return <></>;
};

export default SSR;

// Chỉ có Mode Production trên server thật mới thấy sự khác biệt
export const getServerSideProps: GetServerSideProps<ISSR> = async (
  context: GetServerSidePropsContext
) => {
  /**
   * Lưu dữ liệu vào cache của CDN trong vòng 5s,
   * Chỉ người đầu tiên gửi request lên server là phải đợi hàm "getServerSideProps" chạy,
   * Trong 5s sau đó, nếu như có request khác gửi lên thì chỉ cần lấy trong cache
   * Dữ liệu trả về trong 5s này gần như là ngay lập tức, hạn chế duy nhất là dữ liệu này là dữ liệu cũ
   * Sau khi hết 5s, khi có request gửi lên thì sẽ bắt người dùng đợi hàm "getServerSideProps" chạy và lặp lại chu trình 5s mới
   */
  context.res.setHeader('Cache-Control', 's-maxage=5');
  /**
   * Lưu dữ liệu vào cache của CDN trong vòng 5s,
   * Trong 5s này vẫn tương tự như trường hợp trên,
   * Tuy nhiên sau 5s, request đầu tiền gửi lên vẫn sẽ lấy dữ liệu cũ trong cache của CDN
   * Nhưng server sẽ âm thầm chạy hàm "getServerSideProps" để cập nhật dữ liệu mới vào cache của CDN
   * Khi đó sẽ hình thành chu trình 5 giây mới nhưng vẫn tối ưu được phần nào hiệu năng của web
   *
   * Hạn chế duy nhất là sau 5s của chu trình bất kỳ mà không có ai gửi request lên để báo cho server cập nhật dữ liệu
   * Ví dụ website không có ai sử dụng trong vòng 1 ngày
   * Sau 1 ngày đó, người đầu tiên gửi request lên server vẫn sẽ nhận được dữ liệu cũ từ cache của CDN
   * Từ request thứ 2 trở đi mới có dữ liệu mới
   */
  context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate');
  /**
   * Trường hợp này tương tự trường hợp thứ 2
   * Tuy nhiên quá trình revalidate sẽ được set thời gian là 5s
   * Tức là trong 5s đầu tiên sẽ giống trường hợp 1, 5 tiếp theo giống trường hợp 2
   * Tổng cộng sau 10 giây sẽ reset chu trình và khi có request gửi lên sẽ bắt người dùng đợi hàm "getServerSideProps" chạy
   */
  context.res.setHeader(
    'Cache-Control',
    's-maxage=5, stale-while-revalidate=5'
  );

  return {
    props: {
      data: '',
    },
  };
};
