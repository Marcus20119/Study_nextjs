import { GetStaticProps, GetStaticPropsContext } from 'next';

export interface ISSG {
  posts: any[];
}

export default function SSG(props: ISSG) {
  return (
    <div>
      <h1>SSG Page</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ISSG> = async (
  context: GetStaticPropsContext
) => {
  return {
    props: {
      posts: [],
    },
  };
};
