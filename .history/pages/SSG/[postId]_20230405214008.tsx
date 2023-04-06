import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

export interface IPost {
  posts: any[];
}

export default function Post({ posts }: IPost) {
  console.log('posts:', posts);
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
  return {
    paths: [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '3' } },
      { params: { postId: '4' } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPost> = async (
  context: GetStaticPropsContext
) => {
  // server-side - build-time
  console.log('\nGET STATIC PROPS', context.params?.postId);
  const response = await fetch(
    'https://js-post-api.herokuapp.com/api/posts?_page=1'
  );
  const data = await response.json();
  return {
    props: {
      posts: data.data.map((post: any) => ({ id: post.id, title: post.title })),
    },
  };
};
