import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

interface IISR {
  data: any
}

const ISR: React.FC<IISR> = ({}) => {
  return <></>;
};

export default ISR;

export const getStaticPaths: GetStaticPaths = async () => {
  
  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
  };
};

// Chỉ chạy phía server, với mỗi phần tử của paths phía trên thì sẽ chạy 1 lần tương ứng
export const getStaticProps: GetStaticProps<IISR> = async (
  context: GetStaticPropsContext
) => {
  // server-side - build-time
  
  return {
    props: {
      data: '',
    },
  };
};
