import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';

interface IISR {
  data: any;
}

const ISR: React.FC<IISR> = ({}) => {
  const router = useRouter();
  const isFallback = router.isFallback;
  return <></>;
};

export default ISR;

/**
 * ISR được sử dụng dựa vào các cách sau:
 * - thêm thuộc tính 'revalidate' trong hàm 'getStaticProps' để sử dụng cache của CDN như SSR
 *   Cụ thể thì như ví dụ dưới,
 *   Trong lúc build-time, server sẽ render ra 1 file html tĩnh có vòng đời trong 60s được lưu trong cache của CDN
 *   Sau 60s này, request đầu tiên gửi lên sẽ được server trả về file html cũ và âm thầm chạy hàm 'getStaticProps' để render ra file HTML mới để thay thế cho file cũ trong cache của CDN
 *   Những request tiếp theo sẽ được server trả về file HTML mới này và tiếp tục bắt đầu chu trình 60 mới
 * - Tùy biến giá trị của thuộc tính 'fallback' của hàm 'getStaticPaths'. Vì khi sử dụng ISR, ta không render sẵn tất cả các file HTML và lưu vào cache của CDn mà chỉ render ra những file thực sự cần thiết. Nên khi có request gửi lên để lấy những file chưa được render, server sẽ phải chạy hàm 'getStaticPaths' để render ra file mà người dùng cần. Lúc đó thuộc tính 'fallback' sẽ giúp ta có những hướng giải quyết khác nhau:
 *    + false: Trả về trang Not Found, khi server render xong trang cần thiết thì phía client reload lại web thì mới hiển thị nội dung
 *    + 'blocking': Client sẽ bị đứng lại (Hiện loading xoay xoay trên tab). Khi server render xong sẽ hiển thị nội dung
 *    + true: bắt được loading thông qua thuộc tính router.isFallback, ta có thể lấy thuộc tính này để custom loading riêng cho trang web
 */
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { postId: '1' } }],
    //
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IISR> = async (
  context: GetStaticPropsContext
) => {
  const postId = context.params?.postId;
  console.log('\nGET STATIC PROPS', postId);
  if (!postId) return { notFound: true };
  return {
    props: {
      data: '',
    },
    revalidate: 60,
  };
};
