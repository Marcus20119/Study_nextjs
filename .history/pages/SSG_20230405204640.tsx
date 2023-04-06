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
  // server-side - build-time
  console.log('static props');
  const response = await fetch(
    'https://js-post-api.herokuapp.com/api/posts?_page=1'
  );
  const data = await response.json();
  console.log('data:', data);
  return {
    props: {
      posts: [],
    },
  };
};
