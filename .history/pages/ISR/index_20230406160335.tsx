import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

interface IISR {
  data: any;
}

const ISR: React.FC<IISR> = ({}) => {
  return <></>;
};

export default ISR;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { postId: '1' } }],
    fallback: false,
  };
};

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
