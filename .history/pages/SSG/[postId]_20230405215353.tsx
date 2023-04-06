import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

export interface IPost {
  post: any;
}

export default function Post({ post }: IPost) {
  return (
    <div>
      <h1>Post Page</h1>
      <p>{post.stringify()}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('GET STATIC PATHS');
  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts?_page=1`
  );
  const data = await response.json();
  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPost> = async (
  context: GetStaticPropsContext
) => {
  // server-side - build-time
  const postId = context.params?.postId;
  console.log('\nGET STATIC PROPS', postId);
  if (!postId) return { notFound: true };

  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
};
