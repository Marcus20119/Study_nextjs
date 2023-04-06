import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

export interface IPost {
  posts: any[];
}

export default function Post({ posts }: IPost) {
  return (
    <div>
      <h1>Post Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
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
  console.log('\nGET STATIC PROPS', context.params?.postId);
  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts?_page=${context.params?.postId}`
  );
  const data = await response.json();
  return {
    props: {
      posts: data.data.map((post: any) => ({ id: post.id, title: post.title })),
    },
  };
};
